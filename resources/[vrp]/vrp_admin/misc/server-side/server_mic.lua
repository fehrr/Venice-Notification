local Tunnel = module("vrp", "lib/Tunnel")
local Proxy = module("vrp", "lib/Proxy")
vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")

src = {}
Tunnel.bindInterface("mirtin_bans", src)
Proxy.addInterface("mirtin_bans", src)

vCLIENT = Tunnel.getInterface("mirtin_bans")

local totalBanidos = 0
local autenticado = true

local function sendToDiscord(weebhook, message)
    PerformHttpRequest(weebhook, function(err, text, headers) end, 'POST', json.encode({embeds = message}), { ['Content-Type'] = 'application/json' })
end

local function getDiscordId(source)
    local ids = GetPlayerIdentifiers(source)
    for _, v in pairs(ids) do
        if string.find(v, "discord:") then
            return string.gsub(v, "discord:", "")
        end
    end
    return nil
end

local function createBanMessage(target_id, user_id, motivo, dataBan, dataUnban, formatHWID, discord)
    return {
        {
            ["color"] = config.geral['color'],
            ["title"] = "**:no_entry_sign: | Novo Banimento Registrado**\n",
            ["thumbnail"] = { ["url"] = config.geral['logo'] },
            ["description"] = "**Banido:**\n```cs\nID: "..target_id.."```\n**Banido por:**\n```cs\nID: "..user_id.."```\n" ..
                (discord and "``Discord:`` <@"..discord..">\n\n" or "") ..
                "**MOTIVO:** ```css\n - "..motivo.."```\n**Data do Banimento:**\n ```cs\n "..dataBan.."```\n**Data do Desbanimento:**\n ```cs\n "..dataUnban.."``` **HWID:** ```cs\n "..formatHWID.."``` ",
            ["footer"] = { ["text"] = config.geral['footer'] }
        }
    }
end

src.setBanned = function(source, target_id, motivo, tempo, hwid)
    if not autenticado then return end

    local user_id = vRP.getUserId(source)
    if user_id then
        local rows = vRP.query("mirtin/getUserBanned", { user_id = target_id })
        if #rows > 0 then
            config.serverLang['isBanned'](source)
            return
        end

        local formatHWID = (hwid == nil or hwid <= 0) and "Não" or "Sim"
        local hwidValue = (hwid == nil or hwid <= 0) and 0 or 1

        local dataBan = os.date("%d/%m/%Y as %H:%M")
        local dataUnban = (tempo == 0) and "Nunca" or os.date("%d/%m/%Y as %H:%M", tempo)
        local timeBan = tempo

        totalBanidos = totalBanidos + 1
        vRP.execute("mirtin/insertBanned", { user_id = target_id, motivo = motivo, banimento = dataBan, desbanimento = dataUnban, time = timeBan, hwid = hwidValue })
        config.serverLang['banned'](source, target_id, motivo, tempo)

        local nsource = vRP.getUserSource(target_id)
        if nsource then
            config.serverLang['kickBan'](nsource, motivo, dataBan, dataUnban)
        end

        local discord = getDiscordId(source)
        local corpoBan = createBanMessage(target_id, user_id, motivo, dataBan, dataUnban, formatHWID, discord)
        sendToDiscord(config.geral['whookBan'], corpoBan)
    end
end

src.setUnBanned = function(source, target_id, motivo)
    if not autenticado then return end

    local user_id = vRP.getUserId(source)
    if user_id then
        local rows = vRP.query("mirtin/getUserBanned", { user_id = target_id })
        if #rows == 0 then
            config.serverLang['isNotBanned'](source)
            return
        end

        totalBanidos = totalBanidos - 1
        vRP.execute("mirtin/removeBanned", { user_id = target_id })
        config.serverLang['unbanned'](source, target_id)

        local discord = getDiscordId(source)
        local corpoBan = {
            {
                ["color"] = config.geral['color'],
                ["title"] = "**:no_entry:  | Novo Desbanimento Registrado**\n",
                ["thumbnail"] = { ["url"] = config.geral['logo'] },
                ["description"] = "**Desbanido:**\n```cs\nID: "..target_id.."```\n**Desbanido por:**\n```cs\nID: "..user_id.."```" ..
                    (discord and "``Discord:`` <@"..discord..">\n\n" or "") ..
                    "**Data do Desbanimento:** ```cs\n "..os.date("%d/%m/%Y as %H:%M").."```\n**Motivo do Desbanimento:** ```cs\n "..motivo.."``` ",
                ["footer"] = { ["text"] = config.geral['footer'] }
            }
        }
        sendToDiscord(config.geral['whookUnban'], corpoBan)
    end
end

src.getHcheck = function(source, target_id)
    local user_id = vRP.getUserId(source)
    if user_id then
        local rows = vRP.query("mirtin/getUserBanned", { user_id = target_id })
        if #rows == 0 then
            config.serverLang['isNotBanned'](source)
            return
        end

        TriggerClientEvent('chatMessage', source, "^9 ID: "..target_id.."\nData do Banimento: "..rows[1].banimento.."\nData do Desbanimento: "..rows[1].desbanimento.."\nMotivo do Banimento: "..rows[1].motivo.."  . ")
    end
end

local function checkUnbans()
    if not autenticado then return end

    local rows = vRP.query("mirtin/getAllBans", {})
    if #rows > 0 then
        for _, v in pairs(rows) do
            if v.time > 0 and os.time() > v.time then
                vRP.execute("mirtin/removeBanned", { user_id = v.user_id })

                local corpoBan = {
                    {
                        ["color"] = config.geral['color'],
                        ["title"] = "**:no_entry:  | Novo Desbanimento Registrado**\n",
                        ["thumbnail"] = { ["url"] = config.geral['logo'] },
                        ["description"] = "**Desbanido:**\n```cs\nID: "..v.user_id.."```\n**Desbanido por:**\n```cs\nAUTOMATICO```\n**Data do Desbanimento:** ```cs\n "..os.date("%d/%m/%Y as %H:%M").."```",
                        ["footer"] = { ["text"] = config.geral['footer'] }
                    }
                }
                sendToDiscord(config.geral['whookUnbanTime'], corpoBan)
            end
        end
    end

    totalBanidos = #rows
end

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(config.timeUnbans * 60 * 1000)  -- Espera pelo tempo definido
        checkUnbans()
    end
end)

local TimeUnit = {
    ['m'] = 60,  -- 1 minuto tem 60 segundos
    ['h'] = 3600, -- 1 hora tem 3600 segundos
    ['d'] = 86400 -- 1 dia tem 86400 segundos
}

convertTime = function(value)
    if value ~= 0 then
        local unit = value:match('[mhdMHD]'):lower()
        local time = tonumber(value:match('%d+'))
        return os.time() + (TimeUnit[unit] * time), os.time() + (TimeUnit[unit] * time)
    end
    return 0
end
