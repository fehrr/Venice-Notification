local Tunnel = module("vrp", "lib/Tunnel")
local Proxy = module("vrp", "lib/Proxy")
vRP = Proxy.getInterface("vRP")
src = Tunnel.getInterface("dt_wall")
Config = {}

local mostrando = false
local players = {}
local staff = false

RegisterCommand("wall", function()
    if src.getPermissao() then
        mostrando = not mostrando
        if mostrando then
            UpdatePlayerList()
            ShowWallInfo()
        end
    end
end)

-- Atualiza a lista de jogadores uma vez quando o comando é ativado
function UpdatePlayerList()
    for _, id in ipairs(GetActivePlayers()) do
        local pid = src.getId(GetPlayerServerId(id))
        if pid and pid ~= -1 then
            players[id] = pid
        end
    end
end

-- Função que desenha as informações na tela e usa um temporizador ao invés de um loop constante
function ShowWallInfo()
    local interval = 1400 -- Intervalo para atualizar as informações
    local lastUpdate = GetGameTimer()

    Citizen.CreateThread(function()
        while mostrando do
            local currentTime = GetGameTimer()

            -- Atualiza a lista de jogadores a cada intervalo definido
            if currentTime - lastUpdate > interval then
                UpdatePlayerList()
                lastUpdate = currentTime
            end

            -- Apenas renderiza quando "mostrando" está ativo
            for _, id in ipairs(GetActivePlayers()) do
                local pos = GetEntityCoords(GetPlayerPed(id))
                local playerPed = PlayerPedId()
                local distance = GetDistanceBetweenCoords(GetEntityCoords(playerPed), pos)
                local name = GetPlayerName(id) or "Steam indisponível"
                local health = math.max(GetEntityHealth(GetPlayerPed(id)) - 100, 0)

                if distance <= Config.DistanciaWall then
                    local px, py, pz = table.unpack(GetEntityCoords(playerPed))
                    local tx, ty, tz = table.unpack(pos)
                    DrawLine(px, py, pz, tx, ty, tz, 255, 255, 255, 255)
                    DrawText3D(tx, ty, tz + 1.20, string.format("~g~%s ~r~Vida: ~w~%d%%\n~r~ID: ~w~%d\n~r~Distância:~w~ %dm", name, health, players[id] or 0, math.floor(distance)))
                end
            end

            Citizen.Wait(5) -- Pausa curta para a renderização
        end
    end)
end

function DrawText3D(x, y, z, text)
    local onScreen, _x, _y = World3dToScreen2d(x, y, z)
    if onScreen then
        local px, py, pz = table.unpack(GetGameplayCamCoords())
        local dist = #(vector3(px, py, pz) - vector3(x, y, z))
        local scale = (1 / dist) * 2 * (1 / GetGameplayCamFov()) * 100

        SetTextFont(0)
        SetTextProportional(1)
        SetTextScale(0.0, 0.25)
        SetTextColour(255, 255, 255, 255)
        SetTextDropshadow(0, 0, 0, 0, 255)
        SetTextEdge(2, 0, 0, 0, 150)
        SetTextDropShadow()
        SetTextOutline()
        SetTextCentre(1)
        SetTextEntry("STRING")
        AddTextComponentString(text)
        DrawText(_x, _y)
    end
end
