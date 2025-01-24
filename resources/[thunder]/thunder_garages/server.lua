------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- QUERYS
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
vRP._prepare("bm_module/thunder_garages/getAllUserVehicles", "SELECT user_id,veiculo,status,motor,lataria,gasolina,ipva,tunagem,favorite FROM vrp_user_veiculos WHERE user_id = @user_id")
vRP._prepare("bm_module/thunder_garages/getSpawnVehInfo", "SELECT veiculo,motor,lataria,gasolina,tunagem,tyres,windows,doors FROM vrp_user_veiculos WHERE veiculo = @veiculo AND user_id = @user_id")
vRP._prepare("bm_module/thunder_garages/getStatus", "SELECT status,ipva FROM vrp_user_veiculos WHERE veiculo = @veiculo AND user_id = @user_id")
vRP._prepare("bm_module/thunder_garages/updateFavorite", "UPDATE vrp_user_veiculos SET favorite = @favorite WHERE user_id = @user_id AND veiculo = @veiculo")
vRP._prepare("bm_module/thunder_garages/updateStatus", "UPDATE vrp_user_veiculos SET status = @status WHERE user_id = @user_id AND veiculo = @veiculo")
vRP._prepare("bm_module/thunder_garages/updateIpva", "UPDATE vrp_user_veiculos SET ipva = @ipva WHERE user_id = @user_id AND veiculo = @veiculo")
vRP._prepare("bm_module/thunder_garages/updateVehicleInfos", "UPDATE vrp_user_veiculos SET motor = @motor, lataria = @lataria, gasolina = @gasolina, tyres = @tyres, windows = @windows, doors = @doors WHERE user_id = @user_id AND veiculo = @veiculo")
vRP._prepare("bm_module/thunder_garages/updateOwnerVehicle", "UPDATE vrp_user_veiculos SET user_id = @new_owner, portamalas = @portamalas WHERE user_id = @user_id AND veiculo = @veiculo")
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- VARIAVEIS
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
local userPersonalCar = {}
local userJobCar = {}
local housesGarages = {}
local allSpawnedCars = {}
local lastEntitys = {}
local vehKeys = {}
GlobalState["vehPlates"] = {}
vKEYBOARD = Tunnel.getInterface("keyboard")
-----------------------------------------------------------------------------------------------------------------------------------------
-- setPlateEveryone
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterServerEvent("setPlateEveryone")
AddEventHandler("setPlateEveryone",function(plate)
    local vehPlates = GlobalState["vehPlates"]
    vehPlates[plate] = true
    GlobalState["vehPlates"] = vehPlates
end)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- GET USERS VEHICLES
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function RegisterTunnel.garageGetUserVehicles()
    local source = source
    local user_id = vRP.getUserId(source)
    local identity = vRP.getUserIdentity(user_id)
    if user_id then
        local query = vRP.query("bm_module/thunder_garages/getAllUserVehicles", { user_id = user_id })
        local t = {}

        for i = 1, #query do
            t[i] = {
                ['vehicle'] = query[i].veiculo,
                ['modelo'] = getVehicleName(query[i].veiculo),
                ['plate'] = identity.registro,
                ['engine'] = query[i].motor,
                ['body'] = query[i].lataria,
                ['fuel'] = query[i].gasolina,
                ['custom'] = json.decode(query[i].tunagem),
                ['favorite'] = query[i].favorite,
                ['category'] = getVehicleType(query[i].veiculo),
                ['status'] = (query[i].status > 0),
                ['ipva'] = (query[i].ipva+garagesConfig.main['ipvaVencimento']*24*60*60 <= os.time())
            }
        end
        return t or {}
    end
end

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- TRY SPAWN VEHICLE
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
local debug_while = false

RegisterCommand('debug_while', function(source)
    if source > 0 then return end
    if debug_while then
        print("Debug While Desativado")
        debug_while = false
    else
        print("Debug While Ativado")
        debug_while = true
    end
end)

RegisterNetEvent("garage:garageTrySpawnVehicle")
AddEventHandler("garage:garageTrySpawnVehicle", function(isPersonal, name, spawnLoc)
    if not name then return end
    local source = source
    local user_id = vRP.getUserId(source)
    local identity = vRP.getUserIdentity(user_id)
    local multas = vRP.getMultas(user_id) or 0
    
    if multas > 0 then
        TriggerClientEvent("Notify", source, "negado", "Você possui multas pendentes", 7000)
        return
    end

    if user_id then
        if isPersonal then
            local query = vRP.query("bm_module/thunder_garages/getSpawnVehInfo", { user_id = user_id, veiculo = name })
            if #query > 0 then
                local check = vRP.query("bm_module/thunder_garages/getStatus", { veiculo = name, user_id = user_id })
                if #check > 0 then
                    local vehPrice = getVehiclePrice(name)
                    if check[1].status == 1 then
                        local payment = parseInt(vehPrice * garagesConfig.main['detidoValue'])
                        if vRP.request(source, "Você deseja pagar <b>$ "..vRP.format(payment).."</b> para tirar seu veiculo da apreensão ?") then
                            if vRP.tryFullPayment(user_id, payment) then
                                vRP._execute("bm_module/thunder_garages/updateStatus", { status = 0, user_id = user_id, veiculo = name })
                                TriggerClientEvent("Notify",source,"sucesso","Você Pagou $ "..vRP.format(payment).." para tirar o veiculo da apreensão.", 5000)
                            else
                                TriggerClientEvent("Notify",source,"negado","Você não possui dinheiro.", 5000)
                                return
                            end
                        else
                            return
                        end
                    end
                    
                    if check[1].status == 2 then
                        local payment = parseInt(vehPrice * garagesConfig.main['retidoValue']) 
        
                        if vRP.request(source, "Você deseja pagar <b>$ "..vRP.format(payment).."</b> para tirar seu veiculo da retenção ?") then
                            if vRP.tryFullPayment(user_id, payment) then
                                vRP._execute("bm_module/thunder_garages/updateStatus", { status = 0, user_id = user_id, veiculo = name })
                                TriggerClientEvent("Notify",source,"sucesso","Você Pagou $ "..vRP.format(payment).." para tirar o veiculo da retenção.", 5)
                            else
                                TriggerClientEvent("Notify",source,"negado","Você não possui dinheiro.", 5)
                                return
                            end
                        else
                            return
                        end
                    end
        
                    if (check[1].ipva+garagesConfig.main['ipvaVencimento']*24*60*60 <= os.time()) then
                        local payment = parseInt(vehPrice * garagesConfig.main['ipvaValue'])
        
                        if vRP.request(source, "Você deseja pagar <b>$ "..vRP.format(payment).."</b> para deixar o ipva de seu veiculo em dia ?") then
                            if vRP.tryFullPayment(user_id, payment) then
                                vRP._execute("bm_module/thunder_garages/updateIpva", { ipva = os.time(), user_id = user_id, veiculo = name })
                                TriggerClientEvent("Notify",source,"sucesso","Você Pagou $ "..vRP.format(payment).." para deixar o ipva de seu veiculo em dia.", 5)
                            else
                                TriggerClientEvent("Notify",source,"negado","Você não possui dinheiro.", 5)
                                return
                            end
                        else
                            return
                        end
                    end
                else
                    return
                end

                if userPersonalCar[name..":"..user_id] then
                    if (DoesEntityExist(NetworkGetEntityFromNetworkId(userPersonalCar[name..":"..user_id])) == 1) then
                        TriggerClientEvent("Notify",source,"negado","Você já possui um veiculo desse fora da garagem.", 5)
                        return false
                    end

                    allSpawnedCars[userPersonalCar[name..":"..user_id] ] = nil
                    userPersonalCar[name..":"..user_id] = nil
                end

                if garagesConfig.main['spawnClientVehicle'] then
                    if spawnLoc then
                        TriggerClientEvent("garage:clientSpawnVehicle", source, name, {
                            plate = identity.registro,
                            engine = query[1].motor or 1000,
                            name = query[1].veiculo,
                            body = query[1].lataria or 1000,
                            fuel = query[1].gasolina or 100,
                            doors = query[1].doors or nil,
                            windows = query[1].windows or nil,
                            tyres = query[1].tyres or nil,
                            custom = json.decode(query[1].tunagem) or {}
                        }, true, spawnLoc)
                        TriggerEvent("setPlateEveryone",identity.registro)
                    end
                else
                    if spawnLoc then
                        local vehicleHash = GetHashKey(name)
                        local entity

                        entity = CreateVehicle(vehicleHash,spawnLoc.x,spawnLoc.y,spawnLoc.z,spawnLoc.w,true,true,true)
                        if not entity or entity == 0 then return false end

                        while not DoesEntityExist(entity) do 
                            Wait(250)
                            if debug_while then
                                print("While rodando")
                            end
                        end

                        local netid = NetworkGetNetworkIdFromEntity(entity)

                        userPersonalCar[name..":"..user_id] = netid
                        allSpawnedCars[netid] = { user_id,name,netid }

                        CreateThread(function()
                            local vehOwner = NetworkGetEntityOwner(entity)
                            local plate = identity.registro
                            
                            local timeout = 0
                            while vehOwner == -1 do
                                Wait(1000)
                                timeout = timeout + 1

                                if DoesEntityExist(entity) and NetworkGetEntityOwner(entity) then
                                    vehOwner = source
                                    break;
                                end

                                if timeout > 3 then
                                    vehOwner = source
                                    break;
                                end

                                if debug_while then
                                    print("While rodando 2")
                                end
                            end

                            if not vehOwner then print("Problemas Aqui!!!") return end

                            SetVehicleNumberPlateText(entity, plate)
                            SetVehicleDoorsLocked(entity, 2)

                            TriggerClientEvent("garage:updateVehicle", vehOwner, netid, {
                                engine = query[1].motor or 1000,
                                body = query[1].lataria or 1000,
                                fuel = query[1].gasolina or 100,
                                doors = query[1].doors or nil,
                                windows = query[1].windows or nil,
                                tyres = query[1].tyres or nil,
                                custom = json.decode(query[1].tunagem) or {}
                            }, true)
                        end)
                    end
                end
            end
        else
            if userJobCar[name..":"..user_id] then
                if (DoesEntityExist(NetworkGetEntityFromNetworkId(userJobCar[name..":"..user_id])) == 1) then
                    TriggerClientEvent("Notify",source,"negado","Você já possui um veiculo desse fora da garagem.", 5)
                    return
                end

                userJobCar[name..":"..user_id] = nil
            end

            if garagesConfig.main['spawnClientVehicle'] then
                TriggerClientEvent("garage:clientSpawnVehicle", source, name, {
                    plate = identity.registro,
                    engine = 1000,
                    body = 1000,
                    fuel = 100,
                    doors = nil,
                    windows = nil,
                    tyres = nil,
                    custom = {}
                }, false, spawnLoc)
                TriggerEvent("setPlateEveryone",identity.registro)
            else
                if spawnLoc then
                    local vehicleHash = GetHashKey(name)
                    local entity

                    entity = CreateVehicle(vehicleHash,spawnLoc.x,spawnLoc.y,spawnLoc.z,spawnLoc.w,true,true,true)
                    if not entity or entity == 0 then return false end

                    while not DoesEntityExist(entity) do 
                        Wait(250)
                        if debug_while then
                            print("While rodando")
                        end
                    end

                    local netid = NetworkGetNetworkIdFromEntity(entity)

                    userJobCar[name..":"..user_id] = netid

                    CreateThread(function()
                        local vehOwner = NetworkGetEntityOwner(entity)
                        local plate = identity.registro
                        
                        local timeout = 0
                        while vehOwner == -1 do
                            Wait(1000)
                            timeout = timeout + 1

                            if DoesEntityExist(entity) and NetworkGetEntityOwner(entity) then
                                vehOwner = source
                                break;
                            end

                            if timeout > 3 then
                                vehOwner = source
                                break;
                            end

                            if debug_while then
                                print("While rodando 2")
                            end
                        end

                        if not vehOwner then print("Problemas Aqui!!!") return end

                        SetVehicleNumberPlateText(entity, plate)
                        SetVehicleDoorsLocked(entity, 2)

                        TriggerClientEvent("garage:updateVehicle", vehOwner, netid, {
                            engine = 1000,
                            body = 1000,
                            fuel = 100,
                            custom = {}
                        }, true)
                    end)
                end
            end
        end
    end
end)

RegisterNetEvent("garage:registerVehicle",function(name, netID, isPersonal)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        if isPersonal then
            if netID and name then
                userPersonalCar[name..":"..user_id] = netID
                allSpawnedCars[netID] = { user_id,name,netID }
            end
        else
            if netID and name then
                userJobCar[name..":"..user_id] = netID
            end
        end
    end
end)


function RegisterTunnel.sellVehicle(id, name, valor)
    local source = source
    local user_id = vRP.getUserId(source)

    if user_id then
        local status, time = exports['vrp']:getCooldown(user_id, "veh")

        if status then
            exports['vrp']:setCooldown(user_id, "veh", 3)

            -- Obter todos os veículos do usuário
            local query = vRP.query("bm_module/thunder_garages/getAllUserVehicles", { user_id = user_id })

            local t = {}
            local formatVehs = ""

            if #query > 0 then
                for k in pairs(query) do
                    -- Adiciona todos os veículos
                    t[query[k].veiculo:lower()] = query[k].veiculo
                    formatVehs = formatVehs .. query[k].veiculo .. ","
                end
            end

            -- Verifica se o veículo está disponível
            if not t[name:lower()] then
                TriggerClientEvent("Notify", source, "negado", "Veículo não encontrado em sua garagem.", 5000)
                return
            end

            local vehName = getVehicleName(t[name:lower()])
            local nuser_id = parseInt(id)
            local nsource = vRP.getUserSource(nuser_id)

            -- Permitir a venda para si mesmo
            if not nsource and nuser_id ~= user_id then
                TriggerClientEvent("Notify", source, "negado", "Este cidadão não se encontra na cidade no momento.", 5000)
                return
            end

            local price = parseInt(valor)

            -- Notifica o vendedor que a proposta foi enviada
            TriggerClientEvent("Notify", source, "sucesso", "Você enviou a proposta para o jogador... aguarde.", 5000)

            -- Solicitação para o comprador aceitar a compra
            local buyVehicle = vRP.request(nsource, "Você deseja comprar o veículo <b>"..vehName.."</b> por "..vRP.format(price).."?", 30)
            if not buyVehicle then
                TriggerClientEvent("Notify", source, "negado", "O Jogador recusou sua proposta.", 5000)
                TriggerClientEvent("Notify", nsource, "negado", "Você recusou a proposta.", 5000)
                return
            end

            -- Verifica se o comprador tem dinheiro suficiente
            if not vRP.tryFullPayment(nuser_id, price) then
                TriggerClientEvent("Notify", source, "negado", "O Jogador não possui dinheiro suficiente.", 5000)
                TriggerClientEvent("Notify", nsource, "negado", "Você não possui dinheiro suficiente.", 5000)
                return
            end

            -- Notifica ambos os jogadores sobre a conclusão da venda
            TriggerClientEvent("Notify", source, "sucesso", "Você vendeu este veículo.", 5000)
            TriggerClientEvent("Notify", nsource, "sucesso", "Você comprou este veículo.", 5000)
            vRP._giveBankMoney(user_id, price)

            -- Atualiza o proprietário do veículo no banco de dados
            vRP._execute("bm_module/thunder_garages/updateOwnerVehicle", {
                new_owner = nuser_id,
                user_id = user_id,
                veiculo = t[name:lower()],
                portamalas = json.encode({})
            })
            return
        else
            TriggerClientEvent("Notify", source, "negado", "Você está em cooldown para vender veículos.", 5000)
        end
    else
        -- Opcional: Notifique se o usuário não foi encontrado
        TriggerClientEvent("Notify", source, "negado", "Usuário não encontrado.", 5000)
    end
end
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- TRY PAYMENT VEHICLE
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function RegisterTunnel.garageTryPaymentVehicle(name)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        local query = vRP.query("bm_module/thunder_garages/getStatus", { veiculo = name, user_id = user_id })
        if #query > 0 then
            local vehPrice = getVehiclePrice(name) 

            if query[1].status == 1 then
                local payment = parseInt(vehPrice * garagesConfig.main['detidoValue'])
                if vRP.request(source, "Você deseja pagar <b>$ "..vRP.format(payment).."</b> para tirar seu veiculo da apreensão ?") then
                    if vRP.tryFullPayment(user_id, payment) then
                        vRP._execute("bm_module/thunder_garages/updateStatus", { status = 0, user_id = user_id, veiculo = name })
                        TriggerClientEvent("Notify",source,"sucesso","Você Pagou $ "..vRP.format(payment).." para tirar o veiculo da apreensão.", 5)
                    else
                        TriggerClientEvent("Notify",source,"negado","Você não possui dinheiro.", 5)
                    end
                end
            end

            if query[1].status == 2 then
                local payment = parseInt(vehPrice * garagesConfig.main['retidoValue']) 

                if vRP.request(source, "Você deseja pagar <b>$ "..vRP.format(payment).."</b> para tirar seu veiculo da retenção ?") then
                    if vRP.tryFullPayment(user_id, payment) then
                        vRP._execute("bm_module/garages/updateStatus", { status = 0, user_id = user_id, veiculo = name })
                        TriggerClientEvent("Notify",source,"sucesso","Você Pagou $ "..vRP.format(payment).." para tirar o veiculo da retenção.", 5)
                    else
                        TriggerClientEvent("Notify",source,"negado","Você não possui dinheiro.", 5)
                    end
                end
            end

            if (query[1].ipva+garagesConfig.main['ipvaVencimento']*24*60*60 <= os.time()) then
                local payment = parseInt(vehPrice * garagesConfig.main['ipvaValue'])

                if vRP.request(source, "Você deseja pagar <b>$ "..vRP.format(payment).."</b> para deixar o ipva de seu veiculo em dia ?") then
                    if vRP.tryFullPayment(user_id, payment) then
                        vRP._execute("bm_module/thunder_garages/updateIpva", { ipva = os.time(), user_id = user_id, veiculo = name })
                        TriggerClientEvent("Notify",source,"sucesso","Você Pagou $ "..vRP.format(payment).." para deixar o ipva de seu veiculo em dia.", 5)
                    else
                        TriggerClientEvent("Notify",source,"negado","Você não possui dinheiro.", 5)
                    end
                end
            end
        end
    end
end

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- STORE USER VEHICLE
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function RegisterTunnel.garageStoreUserVehicle(isPersonal, name, proximity, vehicle)
    
    
    if not name then return end
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        if proximity then
            if vehicle and vehicle > 0 then
                local entity = NetworkGetEntityFromNetworkId(vehicle)

                if isPersonal then
                    if (DoesEntityExist(entity) == 1) then
                        if (GetPedInVehicleSeat(entity, -1) > 0) then
                            TriggerClientEvent("Notify",source,"negado","Você não pode guardar este veiculo, pois ele está em uso.", 5)
                            return
                        end
                    end

                    if allSpawnedCars[vehicle] then
                        SaveVehicleInfos(allSpawnedCars[vehicle][1],allSpawnedCars[vehicle][2],allSpawnedCars[vehicle][3], entity, source)
        
                        if userPersonalCar[allSpawnedCars[vehicle][2]..":"..allSpawnedCars[vehicle][1] ] then
                            userPersonalCar[allSpawnedCars[vehicle][2]..":"..allSpawnedCars[vehicle][1] ] = nil
                        end
        
                        allSpawnedCars[vehicle] = nil
                    end

                    DeleteVehicle(entity)
                    TriggerClientEvent("Notify",source,"negado","Você guardou este veiculo.", 5)
                else
                    if (DoesEntityExist(entity) == 1) then
                        if (GetPedInVehicleSeat(entity, -1) > 0) then
                            TriggerClientEvent("Notify",source,"negado","Você não pode guardar este veiculo, pois ele está em uso.", 5)
                            return
                        end
                    end

                    if userJobCar[name..":"..user_id] then
                        userJobCar[name..":"..user_id] = nil
                    end

                    DeleteVehicle(entity)
                    TriggerClientEvent("Notify",source,"negado","Você guardou este veiculo.", 5)
                end
            end
        else
            if isPersonal then
                if userPersonalCar[name..":"..user_id] then
                    local entity = NetworkGetEntityFromNetworkId(userPersonalCar[name..":"..user_id])
    
                    if (DoesEntityExist(entity) == 1) then
                        if #(GetEntityCoords(entity) - GetEntityCoords(GetPlayerPed(source))) >= 100 then
                            TriggerClientEvent("Notify",source,"negado","Este veiculo que você está tentando guardar, está muito longe de você.", 5)
                            return
                        end
    
                        if (GetPedInVehicleSeat(entity, -1) > 0) then
                            TriggerClientEvent("Notify",source,"negado","Você não pode guardar este veiculo, pois ele está em uso.", 5)
                            return
                        end
                    end
                    
                    if allSpawnedCars[userPersonalCar[name..":"..user_id]] then
                        SaveVehicleInfos(allSpawnedCars[userPersonalCar[name..":"..user_id]][1],allSpawnedCars[userPersonalCar[name..":"..user_id]][2],allSpawnedCars[userPersonalCar[name..":"..user_id]][3], entity, source)
                    end
    
                    DeleteVehicle(entity)
    
                    if userPersonalCar[name..":"..user_id] then
                        allSpawnedCars[userPersonalCar[name..":"..user_id]] = nil
                        userPersonalCar[name..":"..user_id] = nil
                    end
                    
                    TriggerClientEvent("Notify",source,"negado","Você guardou este veiculo.", 5)
                    return
                end
    
                TriggerClientEvent("Notify",source,"negado","Este veiculo não está fora da garagem.", 5)
            else
                if userJobCar[name..":"..user_id] then
                    local entity = NetworkGetEntityFromNetworkId(userJobCar[name..":"..user_id])
    
                    if (DoesEntityExist(entity) == 1) then
                        if (GetPedInVehicleSeat(entity, -1) > 0) then
                            TriggerClientEvent("Notify",source,"negado","Você não pode guardar este veiculo, pois ele está em uso.", 5)
                            return
                        end
                    end
    
                    if userJobCar[name..":"..user_id] then
                        userJobCar[name..":"..user_id] = nil
                    end
    
                    DeleteVehicle(entity)
                    TriggerClientEvent("Notify",source,"negado","Você guardou este veiculo.", 5)
                    return
                end
    
                TriggerClientEvent("Notify",source,"negado","Este veiculo não está fora da garagem.", 5)
            end
        end
    end
end

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- SET FAVORITE CAR
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function RegisterTunnel.garageSetFavorite(vehicle, status)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        if status == 'setFavorite' then
            vRP._execute("bm_module/thunder_garages/updateFavorite", { user_id = user_id, veiculo = vehicle, favorite = 1 })
            return true
        else
            vRP._execute("bm_module/thunder_garages/updateFavorite", { user_id = user_id, veiculo = vehicle, favorite = 0 })
            return false
        end
    end
end

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- SAVE VEHICLES INFOS / DELETE VEHICLE
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function SaveVehicleInfos(user_id, name, netID, vehicle, source)
    if vehicle then
        local body = GetVehicleBodyHealth(vehicle) or 1000.0
        local engine = GetVehicleEngineHealth(vehicle) or 1000.0
        local fuel = vTunnel.garageGetVehicleFuel(source, netID) or 100.0
        local tyres = vTunnel.garageGetVehicleTyres(source, netID) or {}
        local windows = vTunnel.garageGetVehicleWindows(source, netID) or {}
        local doors = vTunnel.garageGetVehicleDoors(source, netID) or {}

        vRP._execute("bm_module/thunder_garages/updateVehicleInfos", { lataria = body, motor = engine, gasolina = fuel, tyres = json.encode(tyres), windows = json.encode(windows), doors = json.encode(doors), user_id = user_id, veiculo = name })
    end
end

function DeleteVehicle(entityID)
    if DoesEntityExist(entityID) then
        DeleteEntity(entityID)
    end
end

function syncDeleteVehicle(source, netID)
    local entity = NetworkGetEntityFromNetworkId(netID)
    if entity then
        if allSpawnedCars[netID] and allSpawnedCars[netID][1] and allSpawnedCars[netID][2] then
            SaveVehicleInfos(allSpawnedCars[netID][1],allSpawnedCars[netID][2],allSpawnedCars[netID][3], entity, source)

            if userPersonalCar[allSpawnedCars[netID][2]..":"..allSpawnedCars[netID][1]] then
                userPersonalCar[allSpawnedCars[netID][2]..":"..allSpawnedCars[netID][1]] = nil
            end

            allSpawnedCars[netID] = nil
        end
        
        DeleteEntity(entity)
    end
end

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- CHECK PERMISSION
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function RegisterTunnel.garageCheckPermission(permission)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        if vRP.hasPermission(user_id, permission) or permission == 'nil.permissao' then
            return true
        end

        return false
    end
end

function RegisterTunnel.garageCheckHouseOwner(home)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        if housesGarages[home].tipo == "casa" then
            local owner = vRP.query("mirtin/ownerPropriedade", { houseID = home }) or 0
            if owner then
                if #owner > 0 then
                    if user_id == parseInt(owner[1].proprietario) then
                        return true
                    end
    
                    local moradores = json.decode(owner[1].moradores)
                    if moradores[tostring(user_id)] ~= nil then
                        return true
                    end
                end
            end
        end
    
        if housesGarages[home].tipo == "apartamento" then
            local owner = vRP.query("mirtin/ownerPropriedade", { houseID = home }) or 0
            if owner then
                if #owner > 0 then
                    for k,v in pairs(owner) do
                        if parseInt(v.proprietario) == parseInt(user_id) then
                            return true
                        end
                    end
                end
            end
        end
    
        TriggerClientEvent("Notify",source,"negado","Você não tem acesso à essa residência.",3000)
        return false
    end
end


-----------------------------------------------------------------------------------------------------------------------------------------
-- GARAGES:LOCKVEHICLE
-----------------------------------------------------------------------------------------------------------------------------------------
AddEventHandler("garages:LockVehicle", function(source, Network)
	local Network = NetworkGetEntityFromNetworkId(Network)
	local Doors = GetVehicleDoorLockStatus(Network)

	if parseInt(Doors) <= 1 then
		TriggerClientEvent("Notify", source, "locked", "O veículo foi <b>trancado</b>.", "locked", 5000)
		TriggerClientEvent("sounds:source", source, "locked", 0.7)
		SetVehicleDoorsLocked(Network, 2)
	else
		TriggerClientEvent("Notify", source, "unlocked", "O veículo foi <b>destrancado</b>.", "unlocked", 5000)
		TriggerClientEvent("sounds:source", source, "unlocked", 0.7)
		SetVehicleDoorsLocked(Network, 1)
	end

	if not vRP.InsideVehicle(source) then
		vRPC.playAnim(source, true, { "anim@mp_player_intmenu@key_fob@", "fob_click" }, false)
		Wait(350)
		vRPC.stopAnim(source)
	end
end)


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- LOCK VEHICLE
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function RegisterTunnel.garageTryLockVehicle(vnetid, vhash)
    local source = source
    local user_id = vRP.getUserId(source)
    if source then
        local entity = NetworkGetEntityFromNetworkId(vnetid)
        local vname = getVehicleModel(vhash)
        if entity > 0 then
            plate = GetVehicleNumberPlateText(entity)
            if plate then
                plate = plate:gsub(" ","")

                local plateOwnerId = vRP.getUserByRegistration(plate)
                if plateOwnerId and (plateOwnerId == user_id or canAcessVehicle(user_id, vname:lower(), plateOwnerId)) then
                    local status = GetVehicleDoorLockStatus(entity)
                    SetVehicleDoorsLocked(entity, ((status == 2) and 1 or 2))
                    
                    vTunnel._garageAnimLock(source, vnetid, status)
                end
            end
        else
            local plate,name,netid = vRPclient.ModelName(source, 5.0)
            if plate then
                plate = plate:gsub(" ", "")
                entity = NetworkGetEntityFromNetworkId(vnetid)
                
                local plateOwnerId = vRP.getUserByRegistration(plate)
                if plateOwnerId and plateOwnerId == user_id then
                    local status = GetVehicleDoorLockStatus(entity)
                    SetVehicleDoorsLocked(entity, ((status == 2) and 1 or 2))
                    
                    vTunnel._garageAnimLock(source, vnetid, status)
                end
            end
        end
    end
end

function canAcessVehicle(user_id, vname, owner_id)
    if vehKeys[owner_id..":"..vname] then
        if vehKeys[owner_id..":"..vname][user_id] then
            return true
        end
    end

    return false
end
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- UPDATE VEHICLE JOIN
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function RegisterTunnel.garageUpdateVehicleJoin(netID)
    local entityId = NetworkGetEntityFromNetworkId(netID) 
    if entityId and entityId > 0 then
        lastEntitys[entityId] = os.time()
    end
end

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- HANDLERS
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
RegisterServerEvent("mirtin:getGarages")
AddEventHandler("mirtin:getGarages", function(value, id) 
    housesGarages = value
    if id ~= nil then
        TriggerClientEvent("mirtin:reciveGarages", -1, false, housesGarages[id], id)
    end
end)

AddEventHandler("vRP:playerSpawn",function(user_id,source,first_spawn)
    if user_id then
        Wait(2000)
        local query = vRP.query('sjr/get_garage', {})
        if #query > 0 then
            local t = garagesConfig.garageList

            for i = 1, #query do
                local cds = json.decode(query[i].spawn)
                local vehiclespawn = {}
                for l = 1,#cds do
                    vehiclespawn[#vehiclespawn+1] = {vec3(cds[l].x,cds[l].y,cds[l].z), h = cds[l].h}
                end

                local vehs = splitString(query[i].vehicles,',')
                local vehicles = {}
                for s = 1,#vehs do
                    table.insert(vehicles,{ vehicle = vehs[s], modelo = vehs[s]})
                end



                t[#t+1] = { coords = vec3(query[i].x,query[i].y,query[i].z), id = query[i].id, perm = query[i].permission, vehiclePositions = vehiclespawn, type = query[i].type, vehicles = vehicles }
            end
            
            TriggerClientEvent("garages:atualizarGarages", source, t or {})
        end
        TriggerClientEvent("mirtin:reciveGarages", source, true, housesGarages)
    end
end)

RegisterCommand("reloadgarages", function(source, ...)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        if vRP.hasPermission(user_id, "admin.permissao") then
            Wait(2000)
            local query = vRP.query('sjr/get_garage', {})
            if #query > 0 then
                local t = garagesConfig.garageList

                for i = 1, #query do
                    local cds = json.decode(query[i].spawn)
                    local vehiclespawn = {}
                    for l = 1,#cds do
                        vehiclespawn[#vehiclespawn+1] = {vec3(cds[l].x,cds[l].y,cds[l].z), h = cds[l].h}
                    end

                    local vehs = splitString(query[i].vehicles,',')
                    local vehicles = {}
                    for s = 1,#vehs do
                        table.insert(vehicles,{ vehicle = vehs[s], modelo = vehs[s]})
                    end



                    t[#t+1] = { coords = vec3(query[i].x,query[i].y,query[i].z), id = query[i].id, perm = query[i].permission, vehiclePositions = vehiclespawn, type = query[i].type, vehicles = vehicles }
                end
                
                TriggerClientEvent("garages:atualizarGarages", source, t or {})
            end
            TriggerClientEvent("mirtin:reciveGarages", source, true, housesGarages)
        end
    end
end)

RegisterServerEvent("bm_module:deleteVehicles")
AddEventHandler("bm_module:deleteVehicles", function(vehID) 
    local source = source
    syncDeleteVehicle(source, vehID)
end)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- COMANDOS
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
RegisterCommand('dv',function(source,args,rawCommand)
	local user_id = vRP.getUserId(source)
	if vRP.hasPermission(user_id,"ticket.permissao") or vRP.hasPermission(user_id,"perm.mecanica") or vRP.hasPermission(user_id,"perm.policia") or vRP.hasPermission(user_id,"perm.unizk") then
        local vehicle = vTunnel.garageGetNearestVehicle(source,7)
		if vehicle then
			local plyCoords = GetEntityCoords(GetPlayerPed(source))
            local x,y,z = plyCoords[1],plyCoords[2],plyCoords[3]

            if allSpawnedCars[vehicle] then
                SaveVehicleInfos(allSpawnedCars[vehicle][1],allSpawnedCars[vehicle][2],allSpawnedCars[vehicle][3], NetworkGetEntityFromNetworkId(vehicle), source)

                if userPersonalCar[allSpawnedCars[vehicle][2]..":"..allSpawnedCars[vehicle][1] ] then
                    userPersonalCar[allSpawnedCars[vehicle][2]..":"..allSpawnedCars[vehicle][1] ] = nil
                end

                allSpawnedCars[vehicle] = nil
            end
            
            DeleteVehicle(NetworkGetEntityFromNetworkId(vehicle))
			vRP.sendLog("https://discord.com/api/webhooks/1279009650225844326/_Fs__M3ZPLJE9N5e-vYwdHKvnDTxKLF9w7CFRO_3EXSTTKRPNIBLtkQSc78pwRJumspr", "O " ..user_id.. " usou o comando dv nas cds ( "..x.." "..y.." "..z.." )")
		end
	end
end)

RegisterCommand('dvarea', function(source, args, rawCommand)
    local user_id = vRP.getUserId(source)
    
    if vRP.hasPermission(user_id, "developer.permissao") and args[1] then
        local vehicles = vTunnel.garageGetNearestVehicles(source,parseInt(args[1]))
		if #vehicles > 0 then
			local plyCoords = GetEntityCoords(GetPlayerPed(source))
            local x,y,z = plyCoords[1],plyCoords[2],plyCoords[3]

            for index, vehicle in pairs(vehicles) do
                if allSpawnedCars[vehicle] then
                    SaveVehicleInfos(allSpawnedCars[vehicle][1],allSpawnedCars[vehicle][2],allSpawnedCars[vehicle][3], NetworkGetEntityFromNetworkId(vehicle), source)
    
                    if userPersonalCar[allSpawnedCars[vehicle][2]..":"..allSpawnedCars[vehicle][1] ] then
                        userPersonalCar[allSpawnedCars[vehicle][2]..":"..allSpawnedCars[vehicle][1] ] = nil
                    end
    
                    allSpawnedCars[vehicle] = nil
                end
                
                DeleteVehicle(NetworkGetEntityFromNetworkId(vehicle))
            end

			vRP.sendLog("https://discord.com/api/webhooks/1279009650225844326/_Fs__M3ZPLJE9N5e-vYwdHKvnDTxKLF9w7CFRO_3EXSTTKRPNIBLtkQSc78pwRJumspr", "O " ..user_id.. " usou o comando dvarea nas cds ( "..x.." "..y.." "..z.." )")
		end

        -- for k,v in ipairs(GetAllVehicles()) do 
        --     DeleteEntity(v)
        -- end
        --TriggerClientEvent('chatMessage', source, "^1[Vehicles] ^0Todos os veículos na área foram excluídos!") -- Avisa no chat que os veículos foram excluídos
        TriggerClientEvent('chatMessage:malvadao', source, "Todos os veículos na área foram excluídos!")
    else
       -- TriggerClientEvent('chatMessage', source, "^1[Permissão] ^0Você não tem permissão para usar este comando.") -- Avisa no chat que não tem permissão
        TriggerClientEvent('chatMessage:malvadao', source, "Você não tem permissão para usar este comando.")
    end
end)


RegisterCommand(garagesConfig.main['commands'].prefix, function(source,args)
    local user_id = vRP.getUserId(source)

    if user_id then
        local option = args[1]
  
        if option == "" or option == nil then
            TriggerClientEvent("Notify",source,"negado","Digite o comando corretamente", 5)
            return
        end
        
        option = option:lower()

        local status, time = exports['vrp']:getCooldown(user_id, "veh")

        if status then
            exports['vrp']:setCooldown(user_id, "veh", 3)

            if option == garagesConfig.main['commands'].sellVeh then -- VENDER VEICULO
                local query = vRP.query("bm_module/thunder_garages/getAllUserVehicles", { user_id = user_id })

                local t = {}
                local formatVehs
                if #query > 0 then
                    formatVehs = ""

                    for k in pairs(query) do
                        local class = getVehicleType(query[k].veiculo)
                        if class ~= nil and class ~= "vip" then
                            t[query[k].veiculo:lower()] = query[k].veiculo
                            formatVehs = formatVehs ..query[k].veiculo..","
                        end
                    end
                end

                if formatVehs == nil then
                    TriggerClientEvent("Notify",source,"negado","Você não possui nenhum veiculo", 6000)
                    return
                end

                local selectedVehicle = vRP.prompt(source, "Escolha seu Veiculo para vender:", formatVehs)
                if formatVehs == "" or formatVehs == nil then
                    TriggerClientEvent("Notify",source,"negado","Digite o nome do veiculo corretamente.", 6000)
                    return
                end
                selectedVehicle = selectedVehicle:lower()

                if not t[selectedVehicle] then
                    TriggerClientEvent("Notify",source,"negado","Veiculo não encontrado em sua garagem..", 6000)
                    return
                end
                local vehName = getVehicleName(t[selectedVehicle])

                local nuser_id = vRP.prompt(source, "Digite o ID para quem vc deseja vender: ", "")
                if nuser_id == "" or nuser_id == nil then
                    TriggerClientEvent("Notify",source,"negado","Digite o ID corretamente.", 6000)
                    return
                end
                nuser_id = parseInt(nuser_id)
                local nsource = vRP.getUserSource(nuser_id)

                if not nsource or nuser_id == user_id then
                    TriggerClientEvent("Notify",source,"negado","Este cidadão não se encontra na cidade no momento.", 6000)
                    return
                end

                local price = vRP.prompt(source, "Digite o Preço do veiculo: ", 0)
                if price == "" or price == nil then
                    TriggerClientEvent("Notify",source,"negado","Digite o preço corretamente.", 6000)
                    return
                end
                price = parseInt(price)

                TriggerClientEvent("Notify",source,"sucesso","Você enviou a proposta para o jogador... aguarde.", 6000)

                local buyVehicle = vRP.request(nsource, "Você deseja comprar o veiculo <b>"..vehName.."</b> por "..vRP.format(price).." ?", 30)
                if not buyVehicle then
                    TriggerClientEvent("Notify",source,"negado","O Jogador recusou sua proposta.", 6000)
                    TriggerClientEvent("Notify",nsource,"negado","Você recusou a proposta.", 6000)
                    return
                end

                if not vRP.tryFullPayment(nuser_id, price) then
                    TriggerClientEvent("Notify",source,"negado","O Jogador não possui dinheiro.", 6000)
                    TriggerClientEvent("Notify",nsource,"negado","Você não possui dinheiro.", 6000)
                    return
                end

                TriggerClientEvent("Notify",source,"sucesso","Você vendeu esse veiculo.", 6000)
                TriggerClientEvent("Notify",nsource,"sucesso","Você comprou esse veiculo.", 6000)
                vRP._giveBankMoney(user_id, price)
                
                vRP._execute("bm_module/thunder_garages/updateOwnerVehicle", { new_owner = nuser_id, user_id = user_id, veiculo = t[selectedVehicle], portamalas = json.encode({}) })
                return
            end

            if option == garagesConfig.main['commands'].keyAdd then -- EMPRESTAR CHAVE
                local query = vRP.query("bm_module/thunder_garages/getAllUserVehicles", { user_id = user_id })

                local t = {}
                local formatVehs
                if #query > 0 then
                    formatVehs = ""

                    for k in pairs(query) do
                        local class = getVehicleType(query[k].veiculo)
                        if class ~= nil and class ~= "vip" then
                            t[query[k].veiculo:lower()] = query[k].veiculo
                            formatVehs = formatVehs ..query[k].veiculo..","
                        end
                    end
                end

                if formatVehs == nil then
                    TriggerClientEvent("Notify",source,"negado","Você não possui nenhum veiculo", 6000)
                    return
                end

                local selectedVehicle = vRP.prompt(source, "Escolha seu Veiculo:", formatVehs)
                if formatVehs == "" or formatVehs == nil then
                    TriggerClientEvent("Notify",source,"negado","Digite o nome do veiculo corretamente.", 6000)
                    return
                end
                selectedVehicle = selectedVehicle:lower()

                if not t[selectedVehicle] then
                    TriggerClientEvent("Notify",source,"negado","Esse veiculo não pode ser vendido por conta de ser carro VIP..", 6000)
                    return
                end

                local nuser_id = vRP.prompt(source, "Digite o ID para quem vc deseja emprestar a chave: ", "")
                if nuser_id == "" or nuser_id == nil then
                    TriggerClientEvent("Notify",source,"negado","Digite o ID corretamente.", 6000)
                    return
                end
                nuser_id = parseInt(nuser_id)
                local nsource = vRP.getUserSource(nuser_id)

                if not nsource or nuser_id == user_id then
                    TriggerClientEvent("Notify",source,"negado","Este cidadão não se encontra na cidade no momento.", 6000)
                    return
                end

                local acceptKeys = vRP.request(nsource, "Você deseja aceitar a chave desse veiculo?", 6000)
                if not acceptKeys then
                    TriggerClientEvent("Notify",source,"negado","O Cidadão recusou suas chaves.", 6000)
                    return
                end
                
                if not vehKeys[user_id..":"..selectedVehicle] then
                    vehKeys[user_id..":"..selectedVehicle] = {}
                end

                vehKeys[user_id..":"..selectedVehicle][nuser_id] = selectedVehicle
                TriggerClientEvent("Notify",source,"sucesso","Você adicionou o id: "..nuser_id.." em seu veiculo.", 6000)

                return
            end

            if option == garagesConfig.main['commands'].keyRem then -- REMOVER CHAVE
                local query = vRP.query("bm_module/garages/getAllUserVehicles", { user_id = user_id })

                local t = {}
                local formatVehs
                if #query > 0 then
                    formatVehs = ""

                    for k in pairs(query) do
                        local class = getVehicleType(query[k].veiculo)
                        if class ~= nil and class ~= "vip" then
                            t[query[k].veiculo:lower()] = query[k].veiculo
                            formatVehs = formatVehs ..query[k].veiculo..","
                        end
                    end
                end

                if formatVehs == nil then
                    TriggerClientEvent("Notify",source,"negado","Você não possui nenhum veiculo", 6000)
                    return
                end

                local selectedVehicle = vRP.prompt(source, "Escolha seu Veiculo:", formatVehs)
                if formatVehs == "" or formatVehs == nil then
                    TriggerClientEvent("Notify",source,"negado","Digite o nome do veiculo corretamente.", 6000)
                    return
                end
                selectedVehicle = selectedVehicle:lower()

                if not t[selectedVehicle] then
                    TriggerClientEvent("Notify",source,"negado","Veiculo não encontrado em sua garagem..", 6000)
                    return
                end

                local listIds = ""
                if vehKeys[user_id..":"..selectedVehicle] then
                    for k in pairs(vehKeys[user_id..":"..selectedVehicle]) do
                        listIds = listIds.. k..","
                    end
                end

                if listIds == "" then
                    TriggerClientEvent("Notify",source,"negado","Ninguem possui a chave do seu veiculo..", 6000)
                    return
                end

                local nuser_id = vRP.prompt(source, "Digite o ID de quem vc deseja remover a chave: ", listIds)
                if nuser_id == "" or nuser_id == nil then
                    TriggerClientEvent("Notify",source,"negado","Digite o ID corretamente.", 6000)
                    return
                end
                nuser_id = parseInt(nuser_id)

                if vehKeys[user_id..":"..selectedVehicle] then
                    vehKeys[user_id..":"..selectedVehicle][nuser_id] = nil
                    TriggerClientEvent("Notify",source,"negado","Você removeu a chave do id: "..nuser_id..".", 6000)
                end

                return
            end

        end

    end
end)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- LIMPAR CACHES DE VEICULOS QUE NAO EXISTE / NAO USADOS
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CreateThread(function()
    while true do
        -- Wait( 30 * 60 * 1000 )
        Wait(5 * 60 * 60 * 1000)

        
        local cache_vehicles = 0
        for k in pairs(userPersonalCar) do
            if (not DoesEntityExist(NetworkGetEntityFromNetworkId(userPersonalCar[k]))) then
                allSpawnedCars[userPersonalCar[k] ] = nil
                userPersonalCar[k] = nil
            end
        end
        print("Limpeza de Cache de veiculos: "..cache_vehicles)
       
        if garagesConfig.main['clearVehicle'].enable then
            local unused_vehicles = 0
            for _,entity in ipairs(GetAllVehicles()) do
                if DoesEntityExist(entity) then 
                    if lastEntitys[entity] then
                        local plyInVehicle = (GetPedInVehicleSeat(entity,-1) == 0)

                        if (os.time() - lastEntitys[entity]) >= (garagesConfig.main['clearVehicle'].time * 60) then
                            if plyInVehicle then
                                DeleteEntity(entity)
                                
                                lastEntitys[entity] = nil
                                unused_vehicles = unused_vehicles + 1
                            else
                                lastEntitys[entity] = os.time()
                            end
                        end
                    else
                        if plyInVehicle then
                            DeleteEntity(entity)
                            
                            lastEntitys[entity] = nil
                            unused_vehicles = unused_vehicles + 1
                        else
                            lastEntitys[entity] = os.time()
                        end
                    end
                end
            end

            print("Total de veiculos não usados limpo: "..unused_vehicles)
        end
    end
end)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- EXPORTS
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getVehiclePrice(name)
    return (garagesConfig.listCars[GetHashKey(name)] == nil) and garagesConfig.main['defaultCarPrice'] or garagesConfig.listCars[GetHashKey(name)].price
end

function getVehicleTrunk(name)
    return (garagesConfig.listCars[GetHashKey(name)] == nil) and garagesConfig.main['defaultCarChest'] or garagesConfig.listCars[GetHashKey(name)].trunk
end

function getVehicleName(name)
    return (garagesConfig.listCars[GetHashKey(name)] == nil) and name or garagesConfig.listCars[GetHashKey(name)].name
end

function getVehicleType(name)
    return (garagesConfig.listCars[GetHashKey(name)] == nil) and "Carros" or garagesConfig.listCars[GetHashKey(name)].type
end

function getVehicleModel(hash)
    return (garagesConfig.listCars[hash] == nil) and "Indefinido" or garagesConfig.listCars[hash].model
end

exports('getVehiclePrice', function(name)
    return getVehiclePrice(name)
end)

exports('getVehicleTrunk', function(name)
    return getVehicleTrunk(name)
end)

exports('getVehicleName', function(name)
    return getVehicleName(name)
end)

exports('getVehicleType', function(name)
    return getVehicleType(name)
end)

exports('getListVehicles', function()
    return garagesConfig.listCars
end)

exports('deleteVehicle', function(...)
    syncDeleteVehicle(...)
end)

AddEventHandler('onResourceStart', function(resource)
    if resource ~= GetCurrentResourceName() then return end

    local deleteCount = 0
    for k,v in ipairs(GetAllVehicles()) do 
        DeleteEntity(v)
        deleteCount = deleteCount + 1
    end

    print("Total de Veiculos Deletados: "..deleteCount)
end)

exports('getVehicleModel', function(name)
    return getVehicleModel(name)
end)

-- exports("setInDesmanche", function(status)
--     inDesmanche = status
-- end)

CreateThread(function()
    TriggerEvent('updateVehList', garagesConfig.listCars)
 end)


 function RegisterTunnel.permissao()
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        return vRP.hasPermission(user_id, "admin.permissao")
    end
end

vRP._prepare("sjr/addGarage", "INSERT INTO sjr_garage(x,y,z,spawn,permission,type, vehicles) VALUES(@x,@y,@z,@spawn,@permission,@type, @vehicles)")
vRP._prepare("sjr/delete_garage", "DELETE FROM sjr_garage WHERE id = @id")
vRP._prepare("sjr/get_garage", "SELECT * FROM sjr_garage")

function RegisterTunnel.addGaragem(cds, spawn)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        local request = vRP.prompt(source, 'Digite a permissao da garagem ( deixe como esta se for publica )', 'nil.permissao')
        local request2 = vRP.prompt(source, 'Digite o tipo da garagem (public, service)', 'public,service')
        local request3 = ''
        if request2 ~= '' and request2 ~= "public" then
            request3 = vRP.prompt(source, 'Digite os veiculos separados por , ex: akuma,nissangtr,panto (SEM ESPAÇOS)', '')
        end

        if #spawn > 0 then
            if request ~= '' and request2 == 'public' then
                vRP.execute('sjr/addGarage', { x = cds.x, y = cds.y, z = cds.z, spawn = json.encode(spawn), permission = request, type = request2, vehicles = request3 })
            elseif request ~= '' and request2 ~= '' and request2 ~= 'public' and request3 ~= '' then
                vRP.execute('sjr/addGarage', { x = cds.x, y = cds.y, z = cds.z, spawn = json.encode(spawn), permission = request, type = request2, vehicles = request3 })
            else
                TriggerClientEvent("Notify",source,"negado","Informações solicitadas vazias.", 5000)
            end
        else
            TriggerClientEvent("Notify",source,"negado","Você não selecionou nenhuma localização de spawn.", 5000)
        end
    end
end

RegisterCommand("criargaragem", function(source, ...)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        if vRP.hasPermission(user_id, "admin.permissao") then
            TriggerClientEvent("Notify", source, "aviso", "Selecione o local do blip", 5000)
            local application,coords = vRPclient.objectCoords(source,"prop_offroad_tyres02")
            if application then
                TriggerClientEvent("Notify", source, "aviso", "Blip adicionado agora selecione o local ou locais de spawn do veiculo!", 5000)
                local blip = coords
                local criando = true
                local spawn = {}
                repeat
                    local status,coords,heading = vRPclient.objectCoords(source,"dilettante")
                    if status then
                        TriggerClientEvent("Notify", source, "aviso", "Spawn adicionado para finalizar basta cancelar!", 5000)
                        spawn[#spawn + 1] = {
                            x = coords.x,
                            y = coords.y,
                            z = coords.z + 1,
                            h = heading
                        }
                    else
                        criando = false
                    end
                until criando == false

                if #spawn > 0 then
                    local perm = vRP.prompt(source, 'Digite a permissao da garagem ( deixe como esta se for publica )', 'nil.permissao')
                    local typeg = vRP.prompt(source, 'Digite o tipo da garagem (public, service)', 'public,service')
                    local vehicles = ''
                    if typeg ~= '' and typeg ~= "public" then
                        vehicles = vRP.prompt(source, 'Digite os veiculos separados por , ex: akuma,nissangtr,panto (SEM ESPAÇOS)', '')
                    end

                    if perm ~= '' and typeg == 'public' then
                        vRP.execute('sjr/addGarage', { x = blip.x, y = blip.y, z = blip.z + 1, spawn = json.encode(spawn), permission = perm, type = typeg, vehicles = vehicles })
                    elseif perm ~= '' and typeg ~= '' and typeg ~= 'public' and vehicles ~= '' then
                        vRP.execute('sjr/addGarage', { x = blip.x, y = blip.y, z = blip.z + 1, spawn = json.encode(spawn), permission = perm, type = typeg, vehicles = vehicles })
                    else
                        TriggerClientEvent("Notify",source,"negado","Informações solicitadas vazias.", 5000)
                    end

                    Wait(2000)
                    local query = vRP.query('sjr/get_garage', {})
                    if #query > 0 then
                        local t = garagesConfig.garageList

                        for i = 1, #query do
                            local cds = json.decode(query[i].spawn)
                            local vehiclespawn = {}
                            for l = 1,#cds do
                                vehiclespawn[#vehiclespawn+1] = {vec3(cds[l].x,cds[l].y,cds[l].z), h = cds[l].h}
                            end

                            local vehs = splitString(query[i].vehicles,',')
                            local vehicles = {}
                            for s = 1,#vehs do
                                table.insert(vehicles,{ vehicle = vehs[s], modelo = vehs[s]})
                            end



                            t[#t+1] = { coords = vec3(query[i].x,query[i].y,query[i].z), id = query[i].id, perm = query[i].permission, vehiclePositions = vehiclespawn, type = query[i].type, vehicles = vehicles }
                        end
                        
                        TriggerClientEvent("garages:atualizarGarages", source, t or {})
                    end
                else
                    TriggerClientEvent("Notify",source,"negado","Você não selecionou nenhuma localização de spawn.", 5000)
                end
            else
                TriggerClientEvent("Notify",source,"negado","Você não selecionou a localização do blip!", 5000)
            end
        end
    end
end)

function splitString(Full,Symbol)
	local Table = {}

	if not Symbol then
		Symbol = "-"
	end

	for Full in string.gmatch(Full,"([^"..Symbol.."]+)") do
		Table[#Table + 1] = Full
	end

	return Table
end

function RegisterTunnel.removeGaragem(id)
    vRP.execute('sjr/delete_garage', {id = id})
end

function RegisterTunnel.getGaragem()
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        local query = vRP.query('sjr/get_garage', {})
        if #query > 0 then
            local t = garagesConfig.garageList

            for i = 1, #query do
                local cds = json.decode(query[i].spawn)
                local vehiclespawn = {}
                for l = 1,#cds do
                    vehiclespawn[#vehiclespawn+1] = {vec3(cds[l].x,cds[l].y,cds[l].z), h = cds[l].h}
                end
    
                local vehs = splitString(query[i].vehicles,',')
                local vehicles = {}
                for s = 1,#vehs do
                    table.insert(vehicles,{ vehicle = vehs[s], modelo = vehs[s]})
                end
    
    
    
                t[#t+1] = { coords = vec3(query[i].x,query[i].y,query[i].z), id = query[i].id, perm = query[i].permission, vehiclePositions = vehiclespawn, type = query[i].type, vehicles = vehicles }
            end
            
            return t or {}
        end
    end
end

CreateThread(function()
    Wait(5000)
    local query = vRP.query('sjr/get_garage', {})
    if #query > 0 then
        local t = garagesConfig.garageList

        for i = 1, #query do
            local cds = json.decode(query[i].spawn)
            local vehiclespawn = {}
            for l = 1,#cds do
                vehiclespawn[#vehiclespawn+1] = {vec3(cds[l].x,cds[l].y,cds[l].z), h = cds[l].h}
            end

            local vehs = splitString(query[i].vehicles,',')
            local vehicles = {}
            for s = 1,#vehs do
                table.insert(vehicles,{ vehicle = vehs[s], modelo = vehs[s]})
            end



            t[#t+1] = { coords = vec3(query[i].x,query[i].y,query[i].z), id = query[i].id, perm = query[i].permission, vehiclePositions = vehiclespawn, type = query[i].type, vehicles = vehicles }
        end
        
        TriggerClientEvent("garages:atualizarGarages", -1, t or {})
    end
end)



function RegisterTunnel.Adatapter(Vehicle)
    local source = source
    local user_id = vRP.getUserId(source)
    local Consult = vRP.query("bm_module/thunder_garages/getSpawnVehInfo", { user_id = user_id, veiculo = Vehicle })

    if Consult[1] then
        return Consult[1].tunagem
    end
end