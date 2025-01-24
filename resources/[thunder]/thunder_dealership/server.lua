Tunnel = module("vrp","lib/Tunnel")
local RESOURCE_NAME = GetCurrentResourceName()
local Proxy = module("vrp","lib/Proxy")
local Tools = module("vrp","lib/Tools")
vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")

RegisterTunnel = {}
Tunnel.bindInterface(RESOURCE_NAME, RegisterTunnel)

vCLIENT = Tunnel.getInterface(RESOURCE_NAME)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- QUERYS DEALERSHIP
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
vRP._prepare("thunder_dealership/dealership/createTable", "CREATE TABLE IF NOT EXISTS `thunder_dealership` ( `vehicle` varchar(50) NOT NULL, `stock` int(11) DEFAULT 0, PRIMARY KEY (`vehicle`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; ")
vRP._prepare("thunder_dealership/dealership/getVehicles", "SELECT * FROM thunder_dealership")
vRP._prepare("thunder_dealership/dealership/updateStock", "UPDATE thunder_dealership SET stock = @stock WHERE vehicle = @vehicle")
vRP._prepare("thunder_dealership/dealership/removeVehicle", "DELETE FROM thunder_dealership WHERE vehicle = @vehicle")
vRP._prepare("thunder_dealership/dealership/addVehicle", "REPLACE INTO thunder_dealership(vehicle,stock) VALUES(@vehicle,@stock)")

vRP._prepare("thunder_dealership/dealership/getVehicle", "SELECT veiculo FROM vrp_user_veiculos WHERE user_id = @user_id AND veiculo = @vehicle")
vRP._prepare("thunder_dealership/dealership/totalVehicles", "SELECT COUNT(veiculo) as qtd FROM vrp_user_veiculos WHERE user_id = @user_id")
vRP._prepare("thunder_dealership/dealership/addUserVehicle", "INSERT INTO vrp_user_veiculos(user_id,veiculo,ipva) VALUES(@user_id,@vehicle,@ipva)")
vRP._prepare("thunder_dealership/dealership/removeUserVehicle", "DELETE FROM vrp_user_veiculos WHERE veiculo = @vehicle AND user_id = @user_id")

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- FUNCTIONS DEALERSHIP
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

local dealership = {
    list = {}
}

function dealership:addCar(index, value, insert)
    self.list[index] = value

    if insert then
        vRP._execute("thunder_dealership/dealership/addVehicle", { vehicle = index, stock = self.list[index].estoque })
    end
end

function dealership:remCar(index)
    if not self.list[index] then return end

    self.list[index] = nil
    vRP._execute("thunder_dealership/dealership/removeVehicle", { vehicle = index })
end

function dealership:getCar(index)
    if not index then return end
    if not self.list[index] then print("Cadastrar o veiculo: "..index) return false end

    return self.list[index]
end

function dealership:updateStock(index, amount)
    if not self.list[index] then return end

    self.list[index].estoque = amount
    vRP._execute("thunder_dealership/dealership/updateStock", { vehicle = index, stock = self.list[index].estoque })
end

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- TUNNELS
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function RegisterTunnel.dealershipRequest(type, value)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        if type == "addCar" then
            dealership:addCar(value.vehicle, {
                name = exports.thunder_garages:getVehicleName(value.vehicle),
                model = exports.thunder_garages:getVehicleModel(GetHashKey(value.vehicle)),
                estoque = value.estoque,
                preco = exports.thunder_garages:getVehiclePrice(value.vehicle),
                class = exports.thunder_garages:getVehicleType(value.vehicle),
                portamalas = exports.thunder_garages:getVehicleTrunk(value.vehicle)
            }, true)

            return
        end

        if type == "remCar" then
            dealership:remCar(value)
            return
        end

        if type == "updateCar" then
            dealership:updateStock(value.vehicle, value.amount)
            return
        end

        if type == "requestList" then
            local vips = cfgconce.main['discountCars']
            local discount = 0
            for i = 1, #cfgconce.main['discountCars'] do
                if vRP.hasPermission(user_id, vips[i].permission) then
                    discount = vips[i].discount
                end
            end
            return dealership.list
        end

        if type == "requestMyVehicles" then
            local query = vRP.query("bm_module/thunder_garages/getAllUserVehicles", { user_id = user_id })
            local t = {}
            for i = 1, #query do
                local value = dealership:getCar(query[i].veiculo)
                local vehPrice = exports.thunder_garages:getVehiclePrice(query[i].veiculo)
                t[#t + 1] = {
                    spawn =  query[i].veiculo,
                    name = exports.thunder_garages:getVehicleName(query[i].veiculo),
                    model = exports.thunder_garages:getVehicleModel(GetHashKey(query[i].veiculo)),
                    preco = parseInt(vehPrice - (vehPrice/cfgconce.main['vehPrice'])),
                    class = exports.thunder_garages:getVehicleType(query[i].veiculo) or "nenhum",
                    estoque = (value and value.estoque or 0),
                    portamalas = (value and value.portamalas or 0),
                }
            end

            return t
        end
    end
end

function RegisterTunnel.dealershipBuyVehicle(name, custom)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        local car = dealership:getCar(name)
        if car then
            if car.estoque <= 0 then
                TriggerClientEvent("Notify", source, "negado", "Veículo sem estoque.", 5000)
                return
            end

            local query = vRP.query("thunder_dealership/dealership/getVehicle", { user_id = user_id, vehicle = name })
            if #query > 0 then
                TriggerClientEvent("Notify", source, "negado", "Você já possui esse veículo em sua garagem.", 5000)
                return
            end

            local maxCars, totalCars, errorMsg = getUserAmountCars(user_id)

            -- Verifique se ocorreu algum erro
            if errorMsg then
                -- Lide com o erro (se necessário), por exemplo, logando a mensagem ou notifique o jogador
                print("Erro ao obter a quantidade de carros: " .. errorMsg)
                return
            end

            -- Verifique se maxCars e totalCars são números
            if type(maxCars) ~= "number" or type(totalCars) ~= "number" then
                print("Valores retornados por getUserAmountCars não são números")
                return
            end

            -- Verifique se a quantidade total de carros é menor que o limite máximo
            if totalCars >= maxCars then
                TriggerClientEvent("Notify", source, "negado", "Você não possui mais vagas na garagem.", 5000)
                return
            end

            local check = exports.thunder_garages:getVehicleType(name)
            if check and check == 'vip' then
                TriggerClientEvent("Notify", source, "negado", "Você não pode comprar veículos VIP aqui, acesse nossa loja.", 5000)
                return
            end

            local vips = cfgconce.main['discountCars'] or {}
            local discount = 0
            for i = 1, #vips do
                if vRP.hasPermission(user_id, vips[i].permission) then
                    discount = vips[i].discount or 0
                end
            end

            local price = parseInt(car.preco - (car.preco * discount / 100))
            if vRP.tryFullPayment(user_id, price) then
                TriggerClientEvent("Notify", source, "sucesso", "Parabéns pela compra!!! Você comprou um <b>"..car.name.."</b> por <b>R$ "..vRP.format(price).."</b>", 5000)
                vCLIENT.resetCache(-1)
                vRP.execute("thunder_dealership/dealership/addUserVehicle", { user_id = user_id, vehicle = name, ipva = os.time() })
                Wait(500)
                vRP.execute("vRP/update_tuning", { user_id = user_id, veiculo = name, tunagem = json.encode(custom) })
                dealership:updateStock(name, (car.estoque - 1))
            else
                TriggerClientEvent("Notify", source, "negado", "Você não possui dinheiro suficiente.", 5000)
            end
        end
    end
end

function RegisterTunnel.dealershipSellVehicle(name, callback)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        local status, time = vRP.query("thunder_dealership/dealership/getVehicle", { user_id = user_id, vehicle = name })
        if status and #status > 0 then
            local car = dealership:getCar(name)
            local price = car.preco
            vRP.execute("thunder_dealership/dealership/removeUserVehicle", { user_id = user_id, vehicle = name })
            dealership:updateStock(name, (car.estoque + 1))
            vRP.giveMoney(user_id, price)
            TriggerClientEvent("Notify", source, "sucesso", "Você vendeu seu veículo por <b>R$ "..vRP.format(price).."</b>.", 5000)
        else
            TriggerClientEvent("Notify", source, "negado", "Você não possui esse veículo em sua garagem.", 5000)
        end
    end
end

-- Função para obter a quantidade de carros do usuário
function getUserAmountCars(user_id)
    if user_id then
        local query = vRP.query("thunder_dealership/dealership/totalVehicles", { user_id = user_id })
        if query then
            local maxCars = cfgconce.main['maxCars'] or 0
            local vips = cfgconce.main['discountCars'] or {}
            local totalCars = query[1] and query[1].qtd or 0

            -- Verifique se vips é uma tabela e adicione os carros VIPs ao maxCars
            for i = 1, #vips do
                local vip = vips[i]
                if vip and vRP.hasPermission(user_id, vip.permission) then
                    maxCars = maxCars + (vip.maxCars or 0)
                end
            end

            return maxCars, totalCars
        else
            -- Retorna valores padrão se a consulta falhar
            return (cfgconce.main['maxCars'] or 0), 0, "Erro na consulta ao banco de dados"
        end
    else
        -- Retorna valores padrão se user_id for nulo
        return (cfgconce.main['maxCars'] or 0), 0, "ID do usuário inválido"
    end
end

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- LOAD DEALERSHIP VEHICLES
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CreateThread(function()
    vRP._execute("thunder_dealership/dealership/createTable", {})

    local query = vRP.query("thunder_dealership/dealership/getVehicles", {})
    for i = 1, #query do
        dealership:addCar(query[i].vehicle, {
            name = exports.thunder_garages:getVehicleName(query[i].vehicle),
            estoque = query[i].stock,
            preco = exports.thunder_garages:getVehiclePrice(query[i].vehicle),
            class = exports.thunder_garages:getVehicleType(query[i].vehicle),
            portamalas = exports.thunder_garages:getVehicleTrunk(query[i].vehicle),
            model = exports.thunder_garages:getVehicleModel(GetHashKey(query[i].vehicle)),
        }, false)
    end
end)

-- Servidor
function loadVehicles()
	if next(allVehicles) then
		return true
	end

	for k,v in pairs(vSERVERdealership.dealershipRequest('requestList')) do 
		v.maxspeed =  GetVehicleModelEstimatedMaxSpeed(GetHashKey(k)) or 0
		v.acceleration = GetVehicleModelAcceleration(GetHashKey(k)) or 0
		v.agility = GetVehicleModelEstimatedAgility(GetHashKey(k)) or 0
		v.braking =  GetVehicleModelMaxBraking(GetHashKey(k)) or 0
		v.classType = GetVehicleClassType(GetHashKey(k)) 

		allVehicles[#allVehicles + 1] = v
	end

	-- Enviar informações para todos os jogadores
	TriggerClientEvent('updateVehicleList', -1, allVehicles)
end
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- COMMANDS
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
RegisterCommand('conce', function(source, args)
    local user_id = vRP.getUserId(source)
    if user_id then
        if not vRP.hasPermission(user_id, "developer.permissao") then return end

        -- Consulta todos os veículos já cadastrados
        local query = vRP.query("thunder_dealership/dealership/getVehicles", {})
        local t = ""

        -- Concatena os veículos em uma string para exibir ao usuário
        for i = 1, #query do
            t = t..", "..query[i].vehicle
        end

        -- Prompt para adicionar veículos um por um
        while true do
            -- Solicita o nome do veículo
            local v_value = vRP.prompt(source, "Digite o veiculo (ou deixe vazio para sair): ", t)
            if v_value == "" or not v_value then
                TriggerClientEvent("Notify", source, "aviso", "Operação cancelada.", 5000)
                break
            end

            -- Solicita a quantidade de estoque do veículo
            local s_value = tonumber(vRP.prompt(source, "Digite a quantidade de estoque: ", "100"))
            if not s_value or s_value <= 0 then
                TriggerClientEvent("Notify", source, "erro", "Quantidade de estoque inválida.", 5000)
                goto continue
            end

            -- Adiciona ou atualiza o veículo no banco de dados
            vRP.execute("thunder_dealership/dealership/addVehicle", { vehicle = v_value, stock = s_value })
            TriggerClientEvent("Notify", source, "sucesso", "Você adicionou o veículo: " .. v_value .. " com estoque de " .. s_value .. "x.", 5000)

            ::continue::
        end
    end
end)


function RegisterTunnel.dealershipSellVehicle(name, callback)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        local status, time = exports['vrp']:getCooldown(user_id, "conce")
        print(status, time)
            exports['vrp']:setCooldown(user_id, "conce", 5000)

            local car = dealership:getCar(name)
            if car then
                local query = vRP.query("thunder_dealership/dealership/getVehicle", { user_id = user_id, vehicle = name })
                if #query > 0 then
                    local price = parseInt(car.preco - (car.preco/cfgconce.main['vehPrice']))
                    vRP.giveMoney(user_id, price)
                    TriggerClientEvent("Notify",source,"sucesso","Você vendeu seu veiculo <b>"..car.name.."</b> para concessionaria e recebeu R$ ".. price, 5000)

                    vRP.execute("thunder_dealership/dealership/removeUserVehicle", { user_id = user_id, vehicle = name })
                    vRP.sendLog("https://discord.com/api/webhooks/1232618046237966356/qVKUeUIpnMO6lyncau7b-a987R2S6ZpidXBInt-S0FgeJHT9b-2ry8X5xxIIwyC8Ff82", "```prolog\n[USER_ID]: "..user_id.."\n[VENDEU]: "..car.name.."\n[POR]: "..price.."```")
                    return { status = true }                 
                else
                    TriggerClientEvent("Notify",source,"negado","Você não possui esse veiculo em sua garagem.", 5000)
                    return { status = false } 
                   
                end
            end
    end
    return { status = false } 

end