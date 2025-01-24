local Tunnel = module("vrp", "lib/Tunnel")
local Proxy = module("vrp", "lib/Proxy")
local Tools = module("vrp", "lib/Tools")
local Resource = GetCurrentResourceName()
vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")

-- Criação da tabela de conexão
RegisterTunnel = {}
Tunnel.bindInterface(Resource, RegisterTunnel)

vTunnel = Tunnel.getInterface(Resource)

-- Preparo da consulta SQL para a tabela vrp_infos
vRP.prepare("characters/getDiscord", [[
    SELECT I.whitelist 
    FROM vrp_infos AS I 
    WHERE I.id = @id 
]])

-- Função para obter os dados do usuário
RegisterTunnel.UserData = function(data)
    local identity = vRP.getUserIdentity(parseInt(data))
    if identity then
        return { name = identity.nome .. " " .. identity.sobrenome }
    end
    return { name = "Usuário Indefinido" }
end


----- aqui puxa se o player tem a wl liberada sim ou não
RegisterServerEvent('player:whitelist')
AddEventHandler('player:whitelist', function()
    local source = source
    local user_id = vRP.getUserId(source)

    exports.oxmysql:execute("SELECT whitelist FROM vrp_infos WHERE id = @id LIMIT 1", {
        ['@id'] = user_id
    }, function(result)
        if result and #result > 0 then
            local whitelistStatus = result[1].whitelist
            if whitelistStatus then
                -- Whitelist aprovada, nenhuma ação necessária
            else
                vTunnel.idclient(source, user_id) -- Tratar cliente sem whitelist
            end
        else
            print("Nenhum resultado encontrado para id: " .. user_id .. ", nenhuma ação será tomada.")
        end
    end)
end)

-- Comando para testar o whitelist
RegisterCommand('testwl', function(source, args)
    local user_id = vRP.getUserId(source)
    if user_id then
        print("Comando testwl chamado por: " .. source .. ", user_id: " .. user_id)
        vTunnel.idclient(source, user_id)
    else
        print("Erro: user_id não encontrado para o source: " .. source)
    end
end)

-- Função para indicar
RegisterTunnel.Indication = function(data)
    local value = vRP.getUData(parseInt(data), "sjr:Indication")
    if value then
        vRP.setUData(parseInt(data), "sjr:Indication", (parseInt(value) + 1))
        return true
    end
    return false
end

RegisterTunnel.redeemCar = function(data)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        exports.oxmysql:execute("SELECT * FROM vrp_user_veiculos WHERE user_id = @user_id AND veiculo = @veiculo", {
            ['@user_id'] = user_id,
            ['@veiculo'] = data
        }, function(query)
            if query then
                if #query > 0 then
                    TriggerClientEvent("Notify", user_id, "negado", "Você Já possui esse veiculo em sua garagem", 6000)
                    return
                end
                exports.oxmysql:execute("INSERT INTO vrp_user_veiculos (user_id, veiculo, ipva) VALUES (@user_id, @veiculo, @ipva)", {
                    ['@user_id'] = user_id, 
                    ['@veiculo'] = data, 
                    ['@ipva'] = os.time() -- Ajuste isso conforme necessário
                }, function(success)
                    if success then
                        TriggerClientEvent("Notify", source, "sucesso", "Veículo adicionado com sucesso!" .. user_id)
                    else
                        print("Erro ao adicionar o veículo para o user_id: " .. user_id)
                    end
                end)
            else
                TriggerClientEvent("Notify", source, "negado", "Erro ao executar a consulta: a tabela vrp_user_veiculos não existe.", 6000)
            end
        end)
    else
        print("Erro: user_id não encontrado.")
    end
end


RegisterTunnel.checkid = function(data)
    local source = source
    local user_id = vRP.getUserId(source)

    if user_id then
        exports.oxmysql:execute("SELECT whitelist FROM vrp_infos WHERE user_id = @id", { ['@id'] = user_id }, function(rows)
            if rows and #rows > 0 then
                if rows[1].whitelist == 1 then
                    return true -- Liberar ID se whitelist estiver aprovada
                else
                    return false -- ID não liberado
                end
            else
                print("Nenhuma linha retornada para user_id: " .. user_id)
                return false
            end
        end)
    else
        print("Erro: user_id não encontrado.")
        return false
    end
end

RegisterTunnel.checkid = function(data)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        local rows = vRP.query("characters/getDiscord",{ id = parseInt(user_id) })
        if rows[1].whitelist then
           return true
        else
            return false
        end
    end
end

RegisterTunnel.sendForm = function(data)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        exports.oxmysql:execute("INSERT INTO foxzin_whitelist (user_id, data) VALUES (@user_id, @data)", {
            ['@user_id'] = user_id,
            ['@data'] = json.encode(data) -- Armazenar dados como JSON
        }, function(success)
            if success then
                return true
            else
                -- Erro ao inserir no banco de dados
                return false
            end
        end)
    else
        print("Erro: user_id não encontrado ao enviar formulário.")
        return false
    end
end


-- Função para verificar a conta do usuário
local accounts = {}
function accounts:getAccount(source)
    local user_id = vRP.getUserId(source)
    if user_id then
        local query = vRP.query("characters/getDiscord", { id = user_id })
        if query and #query > 0 and query[1].whitelist then
            print("Usuário está na whitelist.")
            return
        end
        vTunnel.idclient(source, user_id)
    else
        print("Erro: user_id não encontrado para o source: " .. source)
    end
end

exports('getAccount', function(...)
    accounts:getAccount(...)
end)
