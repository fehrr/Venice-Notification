local Tunnel = module("vrp", "lib/Tunnel")
local Proxy = module("vrp", "lib/Proxy")
vRP = Proxy.getInterface("vRP")
yRP = {}
Tunnel.bindInterface("anticl", yRP)
vRPclient = Tunnel.getInterface("vRP")

function yRP.getUserChar(user_id)
    local char
    local data = vRP.getUData(user_id, "nation_char")
    if data and data ~= "" then
        char = json.decode(data)
    end
    return char
end

RegisterServerEvent("playerDroppedEvent")
AddEventHandler("playerDroppedEvent", function(coords, reason, playerName)
    local id = source
    local user_id = vRP.getUserId(id)
    if user_id then
        local identity = vRP.getUserIdentity(user_id)
        local crds = coords
        if not identity then
            identity = {}
            identity.nome = "Individuo"
            identity.sobrenome = "Indigente"
        end
        if Config.LogSystem then
            SendLog(user_id, crds, reason, identity.nome.." "..identity.sobrenome)
        end
    end
end)

AddEventHandler("playerDropped", function(reason)
    local id = source
    local user_id = vRP.getUserId(id)
    if user_id then
        local crds = GetEntityCoords(GetPlayerPed(id))
        local identity = vRP.getUserIdentity(user_id)
        if not identity then
            identity = {}
            identity.nome = "Individuo"
            identity.sobrenome = "Indigente"
        end

        -- Envie eventos ou crie logs apenas para jogadores reais
        if Config.LogSystem then
            SendLog(user_id, crds, reason, identity.nome.." "..identity.sobrenome)
        end
    end
end)

function SendLog(user_id, crds, reason, playerName)
    local date = os.date('*t')

    if not playerName then
        playerName = "Individuo Indigente"
    end

    print("id:"..user_id)
    print("X: "..crds.x..", Y: "..crds.y..", Z: "..crds.z)
    print("reason:"..reason)

    if date.month < 10 then date.month = '0' .. tostring(date.month) end
    if date.day < 10 then date.day = '0' .. tostring(date.day) end
    if date.hour < 10 then date.hour = '0' .. tostring(date.hour) end
    if date.min < 10 then date.min = '0' .. tostring(date.min) end
    if date.sec < 10 then date.sec = '0' .. tostring(date.sec) end

    local dateStr = (''..date.day .. '.' .. date.month .. '.' .. date.year .. ' - ' .. date.hour .. ':' .. date.min .. ':' .. date.sec..'')

    local embeds = {
        {
            ["title"] = "Anti Combat-Log",
            ["type"] = "rich",
            ["color"] = 4777493,
            ["fields"] = {
                {
                    ["name"] = "Nickname",
                    ["value"] = playerName,
                    ["inline"] = true,
                },{
                    ["name"] = "Player ID",
                    ["value"] = user_id,
                    ["inline"] = true,
                },{
                    ["name"] = "Cordenadas",
                    ["value"] = "X: "..crds.x..", Y: "..crds.y..", Z: "..crds.z,
                    ["inline"] = true,
                },{
                    ["name"] = "Motivo",
                    ["value"] = reason,
                    ["inline"] = true,
                },                   
            },
            ["footer"] = {
                ["icon_url"] = "https://forum.fivem.net/uploads/default/original/4X/7/5/e/75ef9fcabc1abea8fce0ebd0236a4132710fcb2e.png",
                ["text"] = "Sent: " ..dateStr.."",
            },
        }
    }

    PerformHttpRequest(Config.webhook, function(err, text, headers) end, 'POST', json.encode({ username = Config.LogBotName,embeds = embeds}), { ['Content-Type'] = 'application/json' })
end








-- Preparação das queries
vRP._prepare("save_health", "UPDATE vrp_users SET health = @health WHERE id = @user_id")
vRP._prepare("get_health", "SELECT health FROM vrp_users WHERE id = @user_id")

-- Comando para salvar a saúde do jogador manualmente
RegisterCommand("saveHealth", function(source, args, rawCommand)
    local user_id = vRP.getUserId(source)
    if user_id then
        local playerPed = GetPlayerPed(source)
        local health = GetEntityHealth(playerPed)

        -- Salva a saúde no banco de dados
        vRP._execute("save_health", { user_id = user_id, health = health })
        TriggerClientEvent("Notify", source, "sucesso", "Sua saúde foi salva!", 5000)
    else
        TriggerClientEvent("Notify", source, "negado", "Você não está logado.", 6000)
    end
end)

-- Evento para salvar a saúde ao desconectar
AddEventHandler("playerDropped", function(reason)
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        local playerPed = GetPlayerPed(source)
        local health = GetEntityHealth(playerPed)

        -- Salva a saúde no banco de dados
        vRP._execute("save_health", { health = health, user_id = user_id })
        --print("Saúde do jogador ID " .. user_id .. " salva ao desconectar: " .. health) -- Log para depuração
    end
end)

-- Evento para definir a saúde do jogador ao spawn
AddEventHandler("vRP:playerSpawn", function(user_id, source, first_spawn)
    local playerPed = GetPlayerPed(source)

    -- Busca a saúde do jogador no banco de dados
    exports.oxmysql:scalar("SELECT health FROM vrp_users WHERE id = ?", {user_id}, function(health)
        if health and health > 0 then
            --print("Saúde recuperada do banco de dados: " .. health) -- Log para depuração
            TriggerClientEvent("setPlayerHealth", source, health)
        else
            --print("Saúde padrão definida para: 200") -- Log para depuração
            TriggerClientEvent("setPlayerHealth", source, 200)  -- Define a vida padrão para 200
        end
    end)
end)

-- Adicione um evento para definir a saúde do jogador do lado do cliente
RegisterNetEvent("setPlayerHealth")
AddEventHandler("setPlayerHealth", function(health)
    local playerPed = PlayerPedId()
    SetEntityHealth(playerPed, health)
end)
