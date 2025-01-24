local maps = {}
local gametypes = {}

-- Handler para o início do recurso
AddEventHandler('onClientResourceStart', function(res)
    local num = GetNumResourceMetadata(res, 'map')

    for i = 0, num - 1 do
        local file = GetResourceMetadata(res, 'map', i)
        if file then
            addMap(file, res)
        end
    end

    local type = GetResourceMetadata(res, 'resource_type', 0)
    local extraData = GetResourceMetadata(res, 'resource_type_extra', 0) or '{}'

    extraData = json.decode(extraData) or {}

    if type == 'map' then
        maps[res] = extraData
    elseif type == 'gametype' then
        gametypes[res] = extraData
    end

    loadMap(res)

    Citizen.CreateThread(function()
        Citizen.Wait(15)

        if maps[res] then
            TriggerEvent('onClientMapStart', res)
        elseif gametypes[res] then
            TriggerEvent('onClientGameTypeStart', res)
        end
    end)
end)

-- Handler para o fim do recurso
AddEventHandler('onResourceStop', function(res)
    if maps[res] then
        TriggerEvent('onClientMapStop', res)
    elseif gametypes[res] then
        TriggerEvent('onClientGameTypeStop', res)
    end

    unloadMap(res)
end)

-- Adiciona diretivas de mapa
AddEventHandler('getMapDirectives', function(add)
    add('vehicle_generator', function(state, name)
        return function(opts)
            local x, y, z = opts.x or opts[1], opts.y or opts[2], opts.z or opts[3]
            local heading = opts.heading or 1.0
            local color1 = opts.color1 or -1
            local color2 = opts.color2 or -1

            CreateThread(function()
                local hash = GetHashKey(name)
                RequestModel(hash)

                while not HasModelLoaded(hash) do
                    Wait(0)
                end

                local carGen = CreateScriptVehicleGenerator(x, y, z, heading, 5.0, 3.0, hash, color1, color2, -1, -1, true, false, false, true, true, -1)
                SetScriptVehicleGenerator(carGen, true)
                SetAllVehicleGeneratorsActive(true)

                state.add('cargen', carGen)
            end)
        end
    end, function(state, arg)
        Citizen.Trace("Deleting car generator: " .. tostring(state.cargen) .. "\n")
        DeleteScriptVehicleGenerator(state.cargen)
    end)
end)
