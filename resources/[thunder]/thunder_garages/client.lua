---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- VARIAVEIS  GERAIS
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
garages = garagesConfig.garageList
local debug = false
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- VARIAVEIS  GARAGEM
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
nearestGarages = {}
blockDuplicate = {}
opennedGarageId = 0
segundos = 0
lock = false
vehicleClasses = { [0] = "vehicle", [1] = "vehicle", [2] = "vehicle", [3] = "vehicle", [4] = "vehicle", [5] = "vehicle", [6] = "vehicle", [7] = "vehicle", [8] = "vehicle", [9] = "vehicle", [10] = "vehicle", [11] = "vehicle", [12] = "vehicle", [13] = "vehicle", [14] = "boat", [15] = "heli", [16] = "heli", [17] = "vehicle", [18] = "vehicle", [19] = "vehicle", [20] = "vehicle", }
local jacon = false
local liverys
vTunnelGarages = {}
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- THREAD
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
local cooldown = 0 -- Inicializa a variável cooldown

CreateThread(function()
    while true do  
        local time = 1000
        local plyCoords = GetEntityCoords(PlayerPedId())

        for i in pairs(nearestGarages) do
            if nearestGarages[i] then
                time = 5

                local coords = nearestGarages[i].coords
                local distance = #(plyCoords - coords)

                DrawMarker(36, coords.x, coords.y, coords.z, 0, 0, 0, 0, 0, 0, 1.0, 1.0, 1.0, 245, 0, 65, 155, 1, 1, 1, 1)
                DrawMarker(1, coords.x, coords.y, coords.z - 0.97, 0, 0, 0, 0, 0, 0, 1.0, 1.0, 0.5, 245, 0, 65, 155, 0, 0, 0, 1)

                if debug and nearestGarages[i].id then 
                    DrawText3D(coords.x + 0.0, coords.y + 0.0, coords.z + 0.0, "GARAGEM: " .. nearestGarages[i].id)
                end

                if IsControlJustPressed(0, 38) and distance < 2 then
                    if nearestGarages[i].perm == nil or vTunnel.garageCheckPermission(nearestGarages[i].perm) then
                        if nearestGarages[i].type == "Homes" then
                            jacon = true
                            if vTunnel.garageCheckHouseOwner(nearestGarages[i].houseID) then
                                openNui(i)
                            end
                        else
                            openNui(i)
                        end
                    end
                end
            end
        end

        Wait(time)
    end
end)

function closeNuiGarages()
    nearestGarages = {}
    opennedGarageId = 0
    SetNuiFocus(false, false)	
    SendNUIMessage({ action = "setVisible", data = false })
end

CreateThread(function()
    CreateBlips()

    while true do
        local time = 1000
        local pedCoords = GetEntityCoords(PlayerPedId())

        for i in pairs(garages) do
            if #(garages[i].coords - pedCoords) <= 5.0 then
                nearestGarages[i] = garages[i]
            elseif nearestGarages[i] then
                nearestGarages[i] = nil
            end
        end

        Wait(time)
    end
end)

-- Cliente: Script do cliente
RegisterNUICallback("vehicles:sellVehicle", function(data, cb)
    -- Adicione um print para depuração
    print("Dados recebidos para venda:", json.encode(data))

    -- Verifica se todos os dados necessários estão presentes
    if not data or not data.id or not data.name or not data.valor then
        print("Dados inválidos para venda.")
        if cb then cb(false) end
        return
    end

    print("Enviando pedido de venda para o servidor...")

    -- Envia o pedido de venda para o servidor
    TriggerServerEvent('vehicles:sellVehicle', data.id, data.name, data.valor)

    -- Aguarda a resposta do servidor
    RegisterNetEvent('vehicles:sellVehicleResponse')
    AddEventHandler('vehicles:sellVehicleResponse', function(success)
        if success then
            print("Veículo vendido com sucesso!")
            if cb then cb(true) end
        else
            print("Erro ao vender veículo.")
            if cb then cb(false) end
        end
    end)

    -- Remove o evento após a primeira chamada para evitar múltiplas chamadas
    RemoveEventHandler('vehicles:sellVehicleResponse')
end)




CreateThread(function()
    while true do
        if segundos > 0 then
            segundos = segundos - 1
        end

        Wait(1000)
    end
end)

function getVehicleType(name)
    return (garagesConfig.listCars[GetHashKey(name)] == nil) and "Carros" or garagesConfig.listCars[GetHashKey(name)].type
end


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- CALLBACKS
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback('myVehicles', function(data, cb)
    local t = {}
    if garages[opennedGarageId].type == "public" or garages[opennedGarageId].type == "Homes" then
        local list = vTunnel.garageGetUserVehicles()
        for i = 1, #list do
            if garages[opennedGarageId].listCars == nil or garages[opennedGarageId].listCars[vehicleClasses[GetVehicleClassFromName(GetHashKey(list[i].vehicle))]] or vehicleClasses[GetVehicleClassFromName(GetHashKey(list[i].vehicle))] == nil then
                t[#t + 1] = {
                    name = list[i].vehicle,
                    name2 = list[i].modelo,
                    category = list[i].category,
                    ipva = false,
                    taxadetido = false,
                    body = list[i].body/10,
                    engine = list[i].engine/10,
                    fuel = list[i].fuel,
                    maxspeed = GetVehicleModelEstimatedMaxSpeed(GetHashKey(list[i].vehicle)) * 4.605936,
                    acceleration = GetVehicleModelAcceleration(GetHashKey(list[i].vehicle)),
                    agility = GetVehicleModelEstimatedAgility(GetHashKey(list[i].vehicle)),
                    braking = GetVehicleModelMaxBraking(GetHashKey(list[i].vehicle)),
                    favorite = list[i].favorite,
                }
            end
        end
    elseif garages[opennedGarageId].type == "service" or garages[opennedGarageId].type ~= "public" then
        for i = 1, #garages[opennedGarageId].vehicles do
            t[#t + 1] = {
                name = garages[opennedGarageId].vehicles[i].vehicle,
                name2 = garages[opennedGarageId].vehicles[i].modelo,
                category = getVehicleType(garages[opennedGarageId].vehicles[i].vehicle),
                ipva = false,
                taxadetido = false,
                body = 100,
                engine = 100,
                fuel = 100,
                maxspeed = GetVehicleModelEstimatedMaxSpeed(GetHashKey(garages[opennedGarageId].vehicles[i].vehicle)) * 4.605936,
                acceleration = GetVehicleModelAcceleration(GetHashKey(garages[opennedGarageId].vehicles[i].vehicle)),
                agility = GetVehicleModelEstimatedAgility(GetHashKey(garages[opennedGarageId].vehicles[i].vehicle)),
                braking = GetVehicleModelMaxBraking(GetHashKey(garages[opennedGarageId].vehicles[i].vehicle)),
                favorite = 0,
            }
        end
    end
    cb({ garageType = garages[opennedGarageId].type, vehicles = t, slots = 50 })
end)

RegisterNUICallback('spawnVehicles', function(data, cb)
    if segundos == 0 then
        segundo = 2

        local spawnCoords = RegisterTunnel.garageCheckSpawnLock(opennedGarageId)
        if spawnCoords then
            if garages[opennedGarageId].type == "public" then
                TriggerServerEvent("garage:garageTrySpawnVehicle", true, data.name, spawnCoords)
            elseif garages[opennedGarageId].type == "Homes" then
                TriggerServerEvent("garage:garageTrySpawnVehicle", true, data.name, spawnCoords)
            else
                TriggerServerEvent("garage:garageTrySpawnVehicle", false, data.name, spawnCoords)
            end
            closeNuiGarages()
        else
            TriggerEvent('Notify', 'negado', 'Todas as vagas dessa garagem estão lotadas.', 5000)
        end  
    end
end)

RegisterNUICallback("vehicles:sellVehicle",function(data,cb)
    if segundos == 0 then
        segundos = 3
        vTunnel.sellVehicle(data.id,data.name,data.value)
    end
end)

-- RegisterNUICallback("vehicles:sellVehicle",function(data,cb) --fusion
--     if not data then return end
--     if (cooldown - GetGameTimer()) > 0 then return end
--     cooldown = (GetGameTimer() + 3000)

--     vTunnelGarages._sellVehicle(data.id,data.name,data.value)
-- end)

RegisterNUICallback('deleteVehicles', function(data, cb)
    if segundos == 0 then
        if garages[opennedGarageId].type == "public" or garages[opennedGarageId].type == "Homes" then
            vTunnel._garageStoreUserVehicle(true, data.name)
        else
            vTunnel._garageStoreUserVehicle(false, data.name)
        end
        closeNuiGarages()
        if blockDuplicate[data.name] then
            blockDuplicate[data.name] = nil
        end
    end
end)

RegisterNUICallback('setFavorite', function(data, cb)
    if segundos == 0 then
        segundos = 3
        local result = vTunnel._garageSetFavorite(data.name, data.action)
        cb(result)
    end
end)

RegisterNUICallback("loanVehicle", function(data, cb)
    vTunnelGarages.loanVehicle('add', data.id, data.vehicle.name2)
end)
RegisterNUICallback("removeLoan", function(data, cb)
    vTunnelGarages.loanVehicle('remove', data.id, data.vehicle.name2)
end)
RegisterNUICallback("showKeyList", function(data, cb)
    SetNuiFocus(false, false)
    if not data.vehicle then return TriggerEvent("Notify","negado","Nenhum veículo selecinoado.",8000) end
    vTunnelGarages.loanVehicle('list', data.id, data.vehicle.vehicle.name2)
end)


RegisterNUICallback("hideUI",function(data,cb)
    closeNuiGarages()
end)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- FUNCTIONS
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function RegisterTunnel.garageAnimLock(index, v)
    -- local status = (v == 2) and 'Destrancado' or 'Trancado'
    -- TriggerEvent("Notify","sucesso","Veiculo <b>".. status .."</b>.")
    local status = (v == 2) and 'Destrancado' or 'Trancado'
    local notifyType = (v == 2) and "sucesso" or "negado"  -- Determinar o tipo de notificação com base no status

    TriggerEvent("Notify", notifyType, "Veículo <b>".. status .."</b>", 3000)
    vRP._playAnim(true, {{"anim@mp_player_intmenu@key_fob@","fob_click"}}, false)

    if NetworkDoesNetworkIdExist(index) then
        TriggerEvent("vrp_sound:source",'lock',0.5)

		local v = NetToVeh(index)
		if DoesEntityExist(v) then
			if IsEntityAVehicle(v) then
				SetVehicleLights(v,2)
				Wait(200)
				SetVehicleLights(v,0)
				Wait(200)
				SetVehicleLights(v,2)
				Wait(200)
				SetVehicleLights(v,0)
			end
		end
	end
end

function RegisterTunnel.syncLock(index)
	if NetworkDoesNetworkIdExist(index) then
		local v = NetToVeh(index)
		if DoesEntityExist(v) then
			if IsEntityAVehicle(v) then
				local locked = GetVehicleDoorLockStatus(v)
				if locked == 1 then
                    TriggerEvent('Notify', 'importante', 'Veiculo Trancado .', 5000)
					SetVehicleDoorsLocked(v,2)
				else
                    TriggerEvent('Notify', 'importante', 'Veiculo Destrancado .', 5000)
					SetVehicleDoorsLocked(v,1)
				end
				SetVehicleLights(v,2)
				Wait(200)
				SetVehicleLights(v,0)
				Wait(200)
				SetVehicleLights(v,2)
				Wait(200)
				SetVehicleLights(v,0)
			end
		end
	end
end

function RegisterTunnel.garageGetNearestVehicle(distance)
    local veh = GetClosestVehiclePlayer(distance)

    if veh then
        return VehToNet(veh)
    end

    return false
end

function RegisterTunnel.garageGetNearestVehicles(distance)
    local nvehicles = GetClosestVehiclesPlayer(distance)
    local vehicles = {}

    for k, v in pairs(nvehicles) do
        vehicles[k] = VehToNet(v)
    end

    return vehicles
end

function RegisterTunnel.garageGetAllVehicles()
    return GetAllVehicles()
end

function RegisterTunnel.garageGetVehicleFuel(veh)
    if IsEntityAVehicle(NetToVeh(veh)) then
        return GetVehicleFuelLevel(NetToVeh(veh))
    end
end

function RegisterTunnel.garageGetVehicleTyres(veh)
    local tyres = {}
    if IsEntityAVehicle(NetToVeh(veh)) then

		for i = 0,7 do
			local status = false

			if GetTyreHealth(NetToVeh(veh),i) ~= 1000.0 then
				status = true
			end

			tyres[i] = status
		end
    end
    
    return tyres
end

function RegisterTunnel.garageGetVehicleWindows(veh)
    local windows = {}
    if IsEntityAVehicle(NetToVeh(veh)) then
		for i = 0,5 do
			windows[i] = IsVehicleWindowIntact(NetToVeh(veh),i)
		end
    end

    return windows
end

function RegisterTunnel.garageGetVehicleDoors(veh)
    local doors = {}
    if IsEntityAVehicle(NetToVeh(veh)) then
		for i = 0,5 do
			doors[i] = IsVehicleDoorDamaged(NetToVeh(veh),i)
		end
    end
    
    return doors
end

function RegisterTunnel.garageCheckSpawnLock(garageID)
    local spawnCoords
    for i = 1, #garages[garageID].vehiclePositions do
        local info = garages[garageID].vehiclePositions[i]
        local x,y,z = table.unpack(info[1])
        if GetClosestVehicle(x,y,z, 4.0, 0 ,71) == 0 then
            spawnCoords = {
                x = x,
                y = y,
                z = z,
                w = info['h']
            }
            break;
        end
    end
    return spawnCoords
end

function openNui(id)
    opennedGarageId = id
    SetNuiFocus(true, true)
    SendNUIMessage({ action = "setVisible", data = true })
end

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- EVENTS
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
RegisterNetEvent("garage:clientSpawnVehicle",function(name, info, isPersonal, spawnLoc)
    local mhash = GetHashKey(name)
    if not blockDuplicate[name] then
        blockDuplicate[name] = true
        SetTimeout(10 * 1000, function() if blockDuplicate[name] then blockDuplicate[name] = nil end end)

        while not HasModelLoaded(mhash) do
            RequestModel(mhash)

            Wait(200)
        end

        if isPersonal or jacon then
            if jacon then 
                jacon = false
            end
            
            if spawnLoc then
                local veh = CreateVehicle(mhash, spawnLoc.x,spawnLoc.y,spawnLoc.z,spawnLoc.w, true, true)
                    
                while not DoesEntityExist(veh) do
                    print("Entity nao encontrada")
                    Wait(200)
                end

                while not NetworkDoesEntityExistWithNetworkId(VehToNet(veh)) do
                    print("NETID nao encontrado")
                    Wait(200)
                end

                local netid = VehToNet(veh)

                if not IsEntityAVehicle(veh) then
                    print("Nao e um veiculo")
                    return  
                end

                -- SetLocalPlayerAsGhost(true)  INVISIVEL INICIO só descomenta os 3 em todos do control f
                --SetNetworkVehicleAsGhost(veh, true)
                --SetEntityAlpha( veh, 101, true)

                SetVehicleNumberPlateText(veh, info.plate)
                SetEntityAsMissionEntity(veh, true, true)
                SetVehicleOnGroundProperly(veh)
                SetVehRadioStation(veh, "OFF")
                SetVehicleDirtLevel(veh, 0.0)
                SetVehicleDoorsLocked(veh, 2)
                SetPedIntoVehicle(PlayerPedId(),veh,-1) --PERSONAGEM FICAR NO CARRO QUANDO SPAWNA
                SetVehicleEngineHealth(veh, info.engine + 0.0)
                SetVehicleBodyHealth(veh, info.body + 0.0)
                SetVehicleFuelLevel(veh, info.fuel + 0.0)
                SetModelAsNoLongerNeeded(mhash)

                local Tuning = vTunnel.Adatapter(name)
                SetVehicleMods(veh, json.decode(Tuning))
                TriggerServerEvent("tunning:applyTunning", veh, info.name, info.plate)
                TriggerServerEvent("garage:registerVehicle", name, netid, true)

                if info.doors then
                    local doors = json.decode(info.doors)
                    if doors ~= nil then
                        for k,v in pairs(doors) do
                            if v then
                                SetVehicleDoorBroken(veh,tonumber(k),tonumber(v))
                            end
                        end
                    end
                end
    
                if info.windows then
                    local windows = json.decode(info.windows)
                    if windows ~= nil then
                        for k,v in pairs(windows) do
                            if not v then
                                RemoveVehicleWindow(veh,tonumber(k))
                            end
                        end
                    end
                end
    
                if info.tyres then
                    local tyres = json.decode(info.tyres)
                    if tyres ~= nil then
                        for k,burst in pairs(tyres) do
                            if burst then
                                SetVehicleTyreBurst(veh,tonumber(k),true,1000.0)
                            end
                        end
                    end
                end   

                Wait(10000)
                --ResetEntityAlpha(veh)
                -- SetLocalPlayerAsGhost(false)  INVISIVIL FIM
                --SetNetworkVehicleAsGhost(veh, false)
            end
        else
            if spawnLoc then
                local veh = CreateVehicle(mhash, spawnLoc.x,spawnLoc.y,spawnLoc.z,spawnLoc.w, true, true)
                    
                while not DoesEntityExist(veh) do
                    print("Entity nao encontrada")
                    Wait(200)
                end

                while not NetworkDoesEntityExistWithNetworkId(VehToNet(veh)) do
                    print("NETID nao encontrado")
                    Wait(200)
                end

                local netid = VehToNet(veh)

                if not IsEntityAVehicle(veh) then
                    print("Nao e um veiculo")
                    return
                end
                -- SetLocalPlayerAsGhost(true)
                --SetNetworkVehicleAsGhost(veh, true)
                --SetEntityAlpha( veh, 101, true)

                SetVehicleNumberPlateText(veh, info.plate)
                SetEntityAsMissionEntity(veh, true, true)
                SetVehicleOnGroundProperly(veh)
                SetVehRadioStation(veh, "OFF")
                SetVehicleDirtLevel(veh, 0.0)
                SetVehicleDoorsLocked(veh, 2)
                SetPedIntoVehicle(PlayerPedId(),veh,-1) --PERSONAGEM FICAR NO CARRO QUANDO SPAWNA
                SetVehicleEngineHealth(veh, info.engine + 0.0)
                SetVehicleBodyHealth(veh, info.body + 0.0)
                SetVehicleFuelLevel(veh, info.fuel + 0.0)
                SetModelAsNoLongerNeeded(mhash)
                local Tuning = vTunnel.Adatapter(name)
                SetVehicleMods(veh, json.decode(Tuning))
                TriggerServerEvent("tunning:applyTunning", veh, info.name, info.plate)
                TriggerServerEvent("garage:registerVehicle", name, netid, isPersonal)
                print("Info.livery:", info.livery)
                -- SetVehicleLivery(GetVehiclePedIsIn(PlayerPedId()), info.livery)
                SetVehicleLivery(GetVehiclePedIsIn(PlayerPedId()), 3)
                -- SetVehicleLivery(GetVehiclePedIsIn(PlayerPedId()), info.livery)
                Wait(10000)
                --ResetEntityAlpha(veh)
                -- SetLocalPlayerAsGhost(false)
                --SetNetworkVehicleAsGhost(veh, false)
            end
        end
    end
end)

RegisterNetEvent("garage:updateVehicle",function(netid, info, isPersonal)
    print("chegou")
    print(netid, info, isPersonal)
    if isPersonal then
        while not NetworkDoesEntityExistWithNetworkId(netid) do
            print("Nao encontrado netid")
            Wait(200)
        end

        local entity = NetworkGetEntityFromNetworkId(netid)

        while not DoesEntityExist(entity) do
            print("Entity nao encontrada")
            Wait(200)
        end

        if not IsEntityAVehicle(entity) then
            print("Nao eh um veiculo")
            return
        end

        local nveh = NetToVeh(netid)
        if nveh then
            SetVehicleDoorsLocked(nveh, 2)
            SetEntityAsMissionEntity(nveh, true, true)
            SetVehicleOnGroundProperly(nveh)
            SetVehRadioStation(nveh, "OFF")
            SetVehicleDirtLevel(nveh, 0.0)
            SetPedIntoVehicle(PlayerPedId(),veh,-1) --PERSONAGEM FICAR NO CARRO QUANDO SPAWNA
            SetVehicleEngineHealth(nveh, info.engine + 0.0)
            SetVehicleBodyHealth(nveh, info.body + 0.0)
            SetVehicleFuelLevel(nveh, info.fuel + 0.0)
            local Tuning = vTunnel.Adatapter(name)
            SetVehicleMods(veh, json.decode(Tuning))  
            TriggerServerEvent("tunning:applyTunning", veh, info.name, info.plate)
            TriggerServerEvent("garage:registerVehicle", name, netid, isPersonal)  

            if info.doors then
                local doors = json.decode(info.doors)
                if doors ~= nil then
                    for k,v in pairs(doors) do
                        if v then
                            SetVehicleDoorBroken(nveh,tonumber(k),tonumber(v))
                        end
                    end
                end
            end

            if info.windows then
                local windows = json.decode(info.windows)
                if windows ~= nil then
                    for k,v in pairs(windows) do
                        if not v then
                            RemoveVehicleWindow(nveh,tonumber(k))
                        end
                    end
                end
            end

            if info.tyres then
                local tyres = json.decode(info.tyres)
                if tyres ~= nil then
                    for k,burst in pairs(tyres) do
                        if burst then
                            SetVehicleTyreBurst(nveh,tonumber(k),true,1000.0)
                        end
                    end
                end
            end     
        end
    else
        while not NetworkDoesEntityExistWithNetworkId(netid) do
            print("Nao encontrado netid")
            Wait(200)
        end

        local entity = NetworkGetEntityFromNetworkId(netid)

        while not DoesEntityExist(entity) do
            print("Entity nao encontrada")
            Wait(200)
        end

        if not IsEntityAVehicle(entity) then
            print("Nao eh um veiculo")
            return
        end

        local nveh = NetToVeh(netid)
        if nveh then
            SetVehicleDoorsLocked(nveh, 2)
            SetEntityAsMissionEntity(nveh, true, true)
            SetVehicleOnGroundProperly(nveh)
            SetVehRadioStation(nveh, "OFF")
            SetVehicleDirtLevel(nveh, 0.0)
            SetPedIntoVehicle(PlayerPedId(),veh,-1) --PERSONAGEM FICAR NO CARRO QUANDO SPAWNA
            SetVehicleEngineHealth(nveh, info.engine + 0.0)
            SetVehicleBodyHealth(nveh, info.body + 0.0)
            SetVehicleFuelLevel(nveh, info.fuel + 0.0)
            local Tuning = vTunnel.Adatapter(name)
            SetVehicleMods(veh, json.decode(Tuning))          
            TriggerServerEvent("tunning:applyTunning", veh, info.name, info.plate)
            TriggerServerEvent("garage:registerVehicle", name, netid, isPersonal)
        end
    end
end)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- HANDLERS
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
RegisterNetEvent("mirtin:reciveGarages")
AddEventHandler("mirtin:reciveGarages", function(all,houses,id)
    if all then
        for k in pairs(houses) do
            if houses[k] and houses[k].garagem ~= nil and houses[k].garagem['garagem'] ~= nil then
                garages[(1000 + k)] = {
                    type = 'Homes',
                    houseID = k,
                    coords = vec3(houses[k].garagem['garagem'].x,houses[k].garagem['garagem'].y,houses[k].garagem['garagem'].z),
                    perm = nil,
                    vehiclePositions = {
                        [1] = {vec3(houses[k].garagem['spawn'].x,houses[k].garagem['spawn'].y,houses[k].garagem['spawn'].z), h = houses[k].garagem['spawn'].h}
                    }
                }
            end
        end
    else
        v = houses
        garages[(1000 + id)] = {
            type = 'Homes',
            houseID = id,
            coords = vec3(v.garagem['garagem'].x,v.garagem['garagem'].y,v.garagem['garagem'].z),
            perm = nil,
            vehiclePositions = {
                [1] = {vec3(v.garagem['spawn'].x,v.garagem['spawn'].y,v.garagem['spawn'].z), h = v.garagem['spawn'].h}
            }
        }
    end
end)

AddEventHandler("gameEventTriggered",function(eventName, args)
    if eventName == "CEventNetworkPlayerEnteredVehicle" and args[1] == PlayerId() then
        if GetPedInVehicleSeat(args[2], -1) == PlayerPedId() then 
            if segundos == 0 then
                segundos = 2
                vTunnel._garageUpdateVehicleJoin(VehToNet(args[2]))
            end
        end
    end
end)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- COMANDOS
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
RegisterCommand('lockvehicle', function(source,args)
    local plyCoords = GetEntityCoords(PlayerPedId())
    local vehicle,hash = GetClosestVehiclePlayer(5.0)
    if vehicle then
        if segundos == 0 then
            segundos = 2
            vTunnel._garageTryLockVehicle(VehToNet(vehicle),hash)
        end
    end
end)
RegisterKeyMapping('lockvehicle', 'Trancar/Destrancar Veiculo', 'keyboard', 'L')

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- OTHERS FUNCTIONS
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CreateBlips = function()
    for i = 1, #garages do
        if garages[i] and garages[i].coords then
            if garages[i].type == 'public' then
                local x,y,z = table.unpack(garages[i].coords)
                local blip = AddBlipForCoord(x,y,z)
                SetBlipSprite(blip, 357)
                SetBlipAsShortRange(blip,true)
                SetBlipColour(blip, 0)
                SetBlipScale(blip, 0.5)
                BeginTextCommandSetBlipName("STRING")
                AddTextComponentString("Garagem")
                EndTextCommandSetBlipName(blip)
            end
        end
    end
end

length = function(array)
	local len = 0
	for i in pairs(array) do 
		if array[i] then
			len = len+1
		end
	end
	return len
end

GetClosestVehiclesPlayer = function(range)
	local vehicles = {}
	local ped = PlayerPedId()
	local radius = range + 0.0001
	local coords = GetEntityCoords(ped)
	local GamePool = GetGamePool("CVehicle")

	for _,entity in pairs(GamePool) do
		local distance = #(coords - GetEntityCoords(entity))

		if distance < radius then
			vehicles[#vehicles + 1] = entity
		end
	end

	return vehicles
end

GetAllVehicles = function()
	local vehicles = {}
	local nvehicles = GetGamePool("CVehicle")

    for k, v in pairs(nvehicles) do
        vehicles[#vehicles + 1] = VehToNet(v)
    end

	return vehicles
end

GetClosestVehiclePlayer = function(range)
    local ped = PlayerPedId()
    local vehicles = GetGamePool("CVehicle")

    local vehID
    local min = range+0.0001
    local vehHash
    for i = 1, #vehicles do
        local veh = vehicles[i]
        local dist = #(GetEntityCoords(ped) - GetEntityCoords(veh))

        if IsEntityAVehicle(veh) and dist <= range then
            if dist < min then
                min = dist
                vehID = veh
                vehHash = GetEntityModel(veh)
            end
        end
    end

    return vehID,vehHash
end



---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- TUNAGEM
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
local colors = {
	["cromado"] = { 120 },
	["metálico"] = { 0, 147, 1, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 27, 28, 29, 150, 30, 31, 32, 33, 34, 143, 35, 135, 137, 136, 36, 38, 138, 99, 90, 88, 89, 91, 49, 50, 51, 52, 53, 54, 92, 141, 61, 62, 63, 64, 65, 66, 67, 68, 69, 73, 70, 74, 96, 101, 95, 94, 97, 103, 104, 98, 100, 102, 99, 105, 106, 71, 72, 142, 145, 107, 111, 112 },
	["fosco"] = { 12, 13 ,14 ,131 ,83 ,82 ,84 ,149 ,148 ,39 ,40 ,41 ,42 ,55 ,128 ,151 ,155 ,152 ,153 ,154 },
	["metal"] = { 117 ,118 ,119 ,158 ,159 }
}

local mod = {
	["aerofólio"] = 0,
	["parachoque-dianteiro"] = 1,
	["parachoque-traseiro"] = 2,
	["saias"] = 3,
	["escapamento"] = 4,
	["roll-cage"] = 5,
	["grelha"] = 6,
	["capô"] = 7,
	["para-lama"] = 8,
	["teto"] = 10,
	["motor"] = 11,
	["freios"] = 12,
	["transmissão"] = 13,
	["buzina"] = 14,
	["suspensão"] = 15,
	["blindagem"] = 16,
	["turbo"] = 18,
	["smoke"] = 20,
	["farol"] = 22,
	["dianteira"] = 23,
	["traseira"] = 24,
	["ornaments"] = 28,
	["dashboard"] = 29,
	["dials"] = 30,
	["doors"] = 31,
	["seats"] = 32,
	["plaques"] = 35,
	["arch-cover"] = 42,
	["janela"] = 46,
	["decal"] = 48,
}

local wheeltype = {
	["stock"] = -1,
	["sport"] = 0,
	["muscle"] = 1,
	["lowrider"] = 2,
	["suv"] = 3,
	["offroad"] = 4,
	["tuner"] = 5,
	["highend"] = 7,
}

function SetVehicleMods(veh,myveh) 
	SetVehicleModKit(veh,0)
	if not myveh or not myveh.customPcolor then
		return
	end
	local bug = false
	local primary = myveh.color[1]
	local secondary = myveh.color[2]
	local cprimary = myveh.customPcolor
	if cprimary['1'] then
		bug = true
	end
	local csecondary = myveh.customScolor
	local perolado = myveh.extracolor[1]
	local wheelcolor = myveh.extracolor[2]
	local neoncolor = myveh.neoncolor
	local smokecolor = myveh.smokecolor
	ClearVehicleCustomPrimaryColour(veh)
	ClearVehicleCustomSecondaryColour(veh)
	SetVehicleWheelType(veh,myveh.wheeltype)
	SetVehicleColours(veh,primary,secondary)
	if bug then
		SetVehicleCustomPrimaryColour(veh,cprimary['1'],cprimary['2'],cprimary['3'])
		SetVehicleCustomSecondaryColour(veh,csecondary['1'],csecondary['2'],csecondary['3'])
	else
		SetVehicleCustomPrimaryColour(veh,cprimary[1],cprimary[2],cprimary[3])
		SetVehicleCustomSecondaryColour(veh,csecondary[1],csecondary[2],csecondary[3])
	end
	SetVehicleExtraColours(veh,perolado,wheelcolor)
	SetVehicleNeonLightsColour(veh,neoncolor[1],neoncolor[2],neoncolor[3])
	SetVehicleXenonLightsColour(veh,myveh.xenoncolor)
	SetVehicleNumberPlateTextIndex(veh,myveh.plateindex)
	SetVehicleWindowTint(veh,myveh.windowtint)
	for i,t in pairs(myveh.mods) do 
		if tonumber(i) == 22 or tonumber(i) == 18 then
			if t.mod > 0 then
				ToggleVehicleMod(veh,tonumber(i),true)
			else
				ToggleVehicleMod(veh,tonumber(i),false)
			end
		elseif tonumber(i) == 20 then
			smokeColor(veh,smokecolor)
		elseif tonumber(i) == 23 or tonumber(i) == 24 then
			SetVehicleMod(veh,tonumber(i),tonumber(t.mod),tonumber(t.variation))
		else
			SetVehicleMod(veh,tonumber(i),tonumber(t.mod))
		end
	end
	SetVehicleTyresCanBurst(veh,myveh.bulletProofTyres)
	if myveh.neon then
		for i = 0, 3 do
			SetVehicleNeonLightEnabled(veh,i,true)
		end
	else
		for i = 0, 3 do
			SetVehicleNeonLightEnabled(veh,i,false)
		end
	end

end

function setNeon(veh,toggle)
	for i = 0, 3 do
		SetVehicleNeonLightEnabled(veh,i,toggle)
	end
end

function setXenon(veh,toggle)
	ToggleVehicleMod(veh,mod["farol"],toggle)
end

function smokeColor(veh,color)
	local r,g,b = parseInt(color[1]),parseInt(color[2]),parseInt(color[3])
	ToggleVehicleMod(veh,mod["smoke"],true)
	SetVehicleTyreSmokeColor(veh,r,g,b)
end

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- THREADS
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CreateThread(function()
   TriggerEvent('updateVehList', garagesConfig.listCars)
end)

exports('getListVehicles', function()
    return garagesConfig.listCars
end)

function GetCoordsInFrontOfCam(...)   
	local unpack = table.unpack   
	local coords,direction = GetGameplayCamCoord(), RotationToDirection()   
	local inTable  = {...}   
	local retTable = {}    
  
	if (#inTable == 0) or (inTable[1] < 0.000001) then 
	  inTable[1] = 0.000001
	end    
  
	for k,distance in pairs(inTable) do     
	  if (type(distance) == "number") then       
		if (distance == 0) then         
		  retTable[k] = coords       
		else         
		  retTable[k] = vector3(coords.x + (distance*direction.x),coords.y + (distance*direction.y),coords.z + (distance*direction.z))       
		end     
	  end   
	end   
  
	return unpack(retTable) 
end

function RotationToDirection(rot)   
	if (rot == nil) then 
	  rot = GetGameplayCamRot(2);  
	end   
  
	local  rotZ = rot.z  * ( 3.141593 / 180.0 )   
	local  rotX = rot.x  * ( 3.141593 / 180.0 )   
	local  c = math.cos(rotX);   
	local  multXY = math.abs(c)   
	local  res = vector3( ( math.sin(rotZ) * -1 )*multXY, math.cos(rotZ)*multXY, math.sin(rotX) ) 
  
	return res 
  end  
  
  function DrawEntityBoundingBox(entity,r,g,b,a)
	local box = GetEntityBoundingBox(entity)
	DrawBoundingBox(box,r,g,b,a)
  end


RegisterCommand("criargarageantigo", function(source, args, rawCommand)
	if vTunnel.permissao() then 

		local ped = PlayerPedId()
		local coords = GetEntityCoords(ped)

		local pos_spawn  = {}

		local h = GetEntityHeading(GetPlayerPed(-1))

		while true do

		drawTxt("\nAperte Botão direito do mouse para selecionar onde o carro vai ficar, apos aperte o Botão esquerdo do mouse para confirmar e criar a garagem",1,0.5,0.93,0.5,255,255,255,180)

		local ped = GetPlayerPed(-1)
		local start,fin = GetCoordsInFrontOfCam(0,5000)
		local ray = StartShapeTestRay(start.x,start.y,start.z,fin.x,fin.y,fin.z,16,ped,5000)
		local _ray,hit,pos,norm,ent = GetShapeTestResult(ray)
	
		local rayB = StartShapeTestRay(start.x,start.y,start.z,fin.x,fin.y,fin.z,1,ped,5000)
		local _rayB,hitB,posB,normB,entB = GetShapeTestResult(rayB)
		

		local grau_spanw = 0
			
			
				DrawMarker(43,posB,0,0,0,0,0,h,4.75,2.21,1.06,0,255,80,100,0,0,0,0)
				grau_spanw = 90
				drawTxt("\nBotão ~r~E~w~ para escolher a posição onde o carro ira sair ",1,0.5,0.90,0.5,255,255,255,180)
				if IsControlPressed(1,38) then
					h = h + 1
				end
			

			DisableControlAction(0,24,true)
			DisableControlAction(0,25,true)
			DisableControlAction(0,142,true)
	
			if IsDisabledControlJustReleased(0,24) then

				local p = {
					x = posB.x,
					y = posB.y,
					z = posB.z,
					h = h-90.0
				} 

				table.insert(pos_spawn,p)
				TriggerEvent("Notify","sucesso","Ponto de Spawn Adicionado com sucesso.",20000)

			elseif IsDisabledControlJustReleased(0,25) then
				break
			end
		Wait(0)
		end
        
		vTunnel.addGaragem({x = coords[1], y = coords[2], z = coords[3]}, pos_spawn )
        garages = vTunnel.getGaragem()
		
	end

end)

RegisterCommand("debuggarage", function(source, args, rawCommand)
	if vTunnel.permissao() then 
        if debug then
		    debug = false
        else
            debug = true
        end
	end
end)

RegisterCommand("criarspawngarage", function(source, args, rawCommand)
	local id = args[1]
	local ped = PlayerPedId()
	local coords = GetEntityCoords(ped)
	local h = GetEntityHeading(ped)

	vTunnel.addGaragemSpawn({idGaragem = id, x = coords[1], y = coords[2], z = coords[3], h = h})
end)

RegisterCommand("deletegarage", function(source, args, rawCommand)

	if vTunnel.permissao() then 
		local id = args[1]
        vTunnel.removeGaragem(id)
	end

end)


RegisterNetEvent("garages:atualizarGarages")
AddEventHandler("garages:atualizarGarages",function(garages_temp)
	garages = garages_temp
end)

-- Citizen.CreateThread(function()

-- 	garages = vTunnel.getGaragem()

-- 	while true do
-- 		local time = 500

-- 		local ped = PlayerPedId()

-- 		if garages then
-- 			for key, value in pairs(garages) do

-- 				local coords = GetEntityCoords(ped)
-- 				local distance = #(vector3(coords[1], coords[2], coords[3]) - vector3(parseInt(value.x),parseInt(value.y), parseInt(value.z)))

-- 				if distance < 10 then
-- 					time = 1

-- 					if debug then 
-- 						DrawText3D(value.x+0.0, value.y+0.0, value.z+0.0, "GARAGEM: "..value.id)
-- 					end

-- 					--DrawMarker(23,value.x+0.0,value.y+0.0,value.z-0.95,0,0,0,0,0,0,1.00,1.00,1.00,242, 79, 0,100,0,0,0,0)
--                     mBMarker2(value.x+0.0,value.y+0.0,value.z+0.0, 1.0, 1.0, 1.0, "garagem", "garage")

-- 					if distance < 1.7 then
-- 						if IsControlJustPressed(1,38) then
                            
-- 							-- abrir a garage aqui
--                             if vTunnel.permissionGarage(value.permission) then
--                                 openNui(value.id)
-- 							--vTunnel.returnHouses(value)
--                             end

-- 						end
-- 					end

-- 				end

-- 			end

-- 		else 
-- 			time = 5000
-- 			garages = vTunnel.getGaragem()
-- 		end

-- 		Citizen.Wait(time)
-- 	end
-- end)

-----------------------------------------------------------------------------------------------------------------------------------------
-- DRAWTEXT3D
-----------------------------------------------------------------------------------------------------------------------------------------
function DrawText3D(x,y,z,text)
	local onScreen,_x,_y = GetScreenCoordFromWorldCoord(x,y,z)

	if onScreen then
		BeginTextCommandDisplayText("STRING")
		AddTextComponentSubstringKeyboardDisplay(text)
		SetTextColour(255,255,255,150)
		SetTextScale(0.35,0.35)
		SetTextFont(4)
		SetTextCentre(1)
		EndTextCommandDisplayText(_x,_y)

		local width = string.len(text) / 160 * 0.45
		DrawRect(_x,_y + 0.0125,width,0.03,38,42,56,200)
	end
end

function drawTxt(text,font,x,y,scale,r,g,b,a)
	SetTextFont(font)
	SetTextScale(scale,scale)
	SetTextColour(r,g,b,a)
	SetTextOutline()
	SetTextCentre(1)
	SetTextEntry("STRING")
	AddTextComponentString(text)
	DrawText(x,y)
end

exports("setInDesmanche", function(status)
    inDesmanche = status
end)








RegisterCommand("livery",function(source,args)
    local ped = PlayerPedId()
    local veh = GetVehiclePedIsIn(ped)

    --if vtrs[tostring(GetEntityModel(veh))] then
        -- if vTunnelGarages.checkLiveryPerm() then
            if IsPedInAnyVehicle(ped) then
                local veh = GetVehiclePedIsIn(ped)
                if veh then
                    if args[1] then
                        SetVehicleModKit(veh,0)
                        SetVehicleLivery(veh, parseInt(args[1]))
                        SetVehicleMod(veh, 48, parseInt(args[1]), true)
                    end
                -- end
            end
        end
    --end
end)





-----------------------------------------------------------------------------------------------------------------------------------------
-- lock vehicles npc
-----------------------------------------------------------------------------------------------------------------------------------------
-- CreateThread(function()
--     while true do
--         local timeDistance = 999
--         local ped = PlayerPedId()
--         if IsPedInAnyVehicle(ped) then
--             local vehicle = GetVehiclePedIsUsing(ped)
--             local platext = GetVehicleNumberPlateText(vehicle)
--             if GetPedInVehicleSeat(vehicle,-1) == ped and not GlobalState["vehPlates"][platext] then
--                 SetVehicleEngineOn(vehicle,false,true,true)
--                 DisablePlayerFiring(ped,true)
--                 timeDistance = 1
--             end
--         end

--         Wait(timeDistance)
--     end
-- end)