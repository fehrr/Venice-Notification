local preferences = {}


function GetPreferencesData()
    local json_data = LoadResourceFile(GetCurrentResourceName(),  './preferences.json')
    if(json_data == '')then
        json_data = {}
    else
        json_data = json.decode(json_data)
    end
    return json_data
end

function SaveToPreferencesData(data)
    SaveResourceFile(GetCurrentResourceName(),'preferences.json', json.encode(data), -1)
end

Citizen.CreateThread(function()
    Citizen.Wait(1000)
    preferences = GetPreferencesData()
end)

function GetSteamId(playerId)
	local identifier
	for k,v in ipairs(GetPlayerIdentifiers(playerId)) do
		if string.match(v, 'steam:') then
			identifier = v
			break
		end
	end
   
    if identifier == nil then
        for k,v in ipairs(GetPlayerIdentifiers(playerId)) do
            if string.match(v, 'license:') then
                identifier = v
                break
            end
        end
    end
    if identifier == nil then
        for k,v in ipairs(GetPlayerIdentifiers(playerId)) do
            if string.match(v, 'license2:') then
                identifier = v
                break
            end
        end
    end
    return identifier
end

RegisterServerEvent('codem-venice-notification:server:SavePosition')
AddEventHandler('codem-venice-notification:server:SavePosition', function(position)
    local src = source
    local identifier = GetSteamId(src)
    if preferences[identifier] == nil then
        preferences[identifier] = {
            display = true,
            position = position,
            sound = true,
        }
    else
        preferences[identifier].position = position
    end
    SaveToPreferencesData(preferences)
    TriggerClientEvent('codem-venice-notification:client:GetPreferences', src, preferences[identifier])
end)

RegisterServerEvent('codem-venice-notification:RequestPreferences')
AddEventHandler('codem-venice-notification:RequestPreferences', function()
    local src = source
    local identifier = GetSteamId(src)
    if preferences[identifier] == nil then
        preferences[identifier] = {
            display = true,
            position = Config.DefaultNotifyPosition,
            sound = true,
        }
    end
    SaveToPreferencesData(preferences)
    TriggerClientEvent('codem-venice-notification:client:GetPreferences', src, preferences[identifier])
end)

RegisterServerEvent('codem-venice-notification:server:SaveDisplay')
AddEventHandler('codem-venice-notification:server:SaveDisplay', function(display)
    local src = source
    local identifier = GetSteamId(src)
    if preferences[identifier] == nil then
        preferences[identifier] = {
            display = display,
            position = Config.DefaultNotifyPosition,
            sound = true,
        }
    else
        preferences[identifier].display = display
    end
    SaveToPreferencesData(preferences)
    TriggerClientEvent('codem-venice-notification:client:GetPreferences', src, preferences[identifier])
end)

RegisterServerEvent('codem-venice-notification:server:SaveSound')
AddEventHandler('codem-venice-notification:server:SaveSound', function(sound)
    local src = source
    local identifier = GetSteamId(src)
    if preferences[identifier] == nil then
        preferences[identifier] = {
            display = true,
            position = Config.DefaultNotifyPosition,
            sound = sound,
        }
    else
        preferences[identifier].sound = sound
    end
    SaveToPreferencesData(preferences)
    TriggerClientEvent('codem-venice-notification:client:GetPreferences', src, preferences[identifier])
end)