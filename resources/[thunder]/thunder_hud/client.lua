----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- thunder_hud
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")
src = {}
Tunnel.bindInterface("vrp_hud",src)
vSERVER = Tunnel.getInterface("vrp_hud")
---------------------------------------------------------------------------------------------------------------------------------------------------------
-- VARIAVEIS
---------------------------------------------------------------------------------------------------------------------------------------------------------
local hour
local minute
local talking = false
local voice = 2
local channel = "Desligado"
local sBuffer = {}
local vBuffer = {}
local cacheStreet = {}
local cinto_seguranca = false
local ExNoCarro = false
local lamp = false
local crime = false
local kidnapping = false
local sequestro = false
local hudStatus = false
local hideHud = false
local in_pvp = false
local lastTimer = GetGameTimer()
local streetName = ""

---------------------------------------------------------------------------------------------------------------------------------------------------------
-- CUPOM
---------------------------------------------------------------------------------------------------------------------------------------------------------
local cupom = true
local codigocupom = "comando50"
---------------------------------------------------------------------------------------------------------------------------------------------------------
-- MAIN THREAD
---------------------------------------------------------------------------------------------------------------------------------------------------------

Citizen.CreateThread(function()
	Wait(1000)
    while true do
        local time = 500
		local ped = PlayerPedId()

		if hideHud then
		    SendNUIMessage({ action = "hide" })
		end

		-- if (LocalPlayer.state.in_arena_event == true) then
		--     if not in_pvp then
		-- 	in_pvp = true
		-- 	hideHud = true
		--     end
		-- else
		--     if in_pvp then
		-- 	in_pvp = false
		-- 	hideHud = false
		--     end
		-- end

		if not IsPauseMenuActive() and not hideHud then
			if not hudStatus then
				hudStatus = true
				SendNUIMessage({ action = "show" })
			end
			local x,y,z = table.unpack(GetEntityCoords(ped))
			local vida = math.ceil((100 * ((GetEntityHealth(ped) - 100) / (400 - 100))))
			local armour = GetPedArmour(ped)

			
            local armour = GetPedArmour(ped)
            local weapon = GetSelectedPedWeapon(ped)
            local _, ammo = GetAmmoInClip(ped, weapon) 
            local amoutAmmo = GetAmmoInPedWeapon(ped, weapon)


            local ammoInClip = amoutAmmo - ammo

			local city = GetLabelText(GetNameOfZone(x,y,z))
			if (GetGameTimer() - lastTimer) > 0 then
                local coords = GetEntityCoords(ped)
    
                local streetHash = GetStreetNameAtCoord(coords.x,coords.y,coords.z)
                if not cacheStreet[streetHash] then
                    cacheStreet[streetHash] = GetStreetNameFromHashKey(streetHash)
                end
                streetName = cacheStreet[streetHash] 
    
                lastTimer = (GetGameTimer() + 10000)
            end

			CalculateTimeToDisplay()
			local inCar = IsPedInAnyVehicle(ped, false)
			if inCar then 
				time = 100
				local vehicle = GetVehiclePedIsIn(ped, false)
				local speed = math.ceil(GetEntitySpeed(vehicle) * 3.605936)
				local fuel = GetVehicleFuelLevel(vehicle)
				local _,lights,highlights = GetVehicleLightsState(vehicle)
				local motor = GetVehicleEngineHealth(vehicle)/10
				local rpm = GetVehicleCurrentRpm(vehicle)*100
				local ligado = GetIsVehicleEngineRunning(vehicle)
				local lock = GetVehicleDoorLockStatus(vehicle)

				if not ligado then
					rpm = 0
				end

				if lights == 1 and highlights == 0 then
					farol = 1
				elseif highlights == 1 then
					farol = 2
				else
					farol = 0
				end
				
				
				SendNUIMessage({ vehicle = true, crime = crime, kidnapping = kidnapping, cinto = (GetVehicleClass(vehicle) == 8) or cinto_seguranca, locked = lock, speed = speed, motor = parseInt(motor), rpm = parseInt(rpm), lamp = farol, fuel = parseInt(fuel), health = vida, armour = armour,  talking = talking, voice = voice, channel = channel, localizacao = streetName, bairro = city, time = hour .. ':' .. minute, cupom = cupom, codigocupom = codigocupom, weapon = weapon, ammo = ammo, ammoInClip = ammoInClip})
			else
				SendNUIMessage({ vehicle = false, crime = crime, kidnapping = kidnapping, health = vida, armour = armour, talking = talking, voice = voice, channel = channel, localizacao = streetName, bairro = city, time = hour .. ':' .. minute, cupom = cupom, codigocupom = codigocupom, weapon = weapon, ammo = ammo, ammoInClip = ammoInClip })	
			end
		else
			if hudStatus then
				SendNUIMessage({ action = "hide" })
				hudStatus = false
			end
		end

		DisplayRadar(true)
		
        Citizen.Wait(time)
    end
end)

exports('hideHud', function(status)
	hideHud = status
end)

exports('updateShortcurt', function(status)
    local status = exports.thunder_recruitment:getRecruitmentAlert()
    if status then
		SendNUIMessage({ action = "showRecruitment" })
    end
end)

-- RegisterCommand('fechar', function(source,args)
-- 	SendNUIMessage({ action = "hideRecruitment" })
-- end)
---------------------------------------------------------------------------------------------------------------------------------------------------------
-- CINTO DE SEGURANCA
---------------------------------------------------------------------------------------------------------------------------------------------------------
IsCar = function(veh)
	local vc = GetVehicleClass(veh)
	return (vc >= 0 and vc <= 7) or (vc >= 9 and vc <= 12) or (vc >= 17 and vc <= 20)
end

Citizen.CreateThread(function()
	while true do

		if IsVehicleModel(GetVehiclePedIsUsing(PlayerPedId())) then
			SendNUIMessage({ incar = true })
		
		end
		local timeDistance = 500
		local ped = PlayerPedId()
		local car = GetVehiclePedIsIn(ped)

		if car ~= 0 and (ExNoCarro or IsCar(car)) then
			ExNoCarro = true
			if cinto_seguranca then
				DisableControlAction(0,75)
			end

			timeDistance = 4
			sBuffer[2] = sBuffer[1]
			sBuffer[1] = GetEntitySpeed(car)

			if sBuffer[2] ~= nil and not cinto_seguranca and GetEntitySpeedVector(car,true).y > 1.0 and sBuffer[1] > 10.25 and (sBuffer[2] - sBuffer[1]) > (sBuffer[1] * 0.255) then
				SetEntityHealth(ped,GetEntityHealth(ped)-10)
				TaskLeaveVehicle(ped,GetVehiclePedIsIn(ped),4160)
			end

			if IsControlJustReleased(1,47) then
				if cinto_seguranca then
					TriggerEvent("vrp_sound:source","unbelt",0.5)
					cinto_seguranca = false
				else
					TriggerEvent("vrp_sound:source","belt",0.5)
					cinto_seguranca = true
				end
			end
		elseif ExNoCarro then
			ExNoCarro = false
			cinto_seguranca = false
			sBuffer[1],sBuffer[2] = 0.0,0.0
		end
		Citizen.Wait(timeDistance)
	end
end)

---------------------------------------------------------------------------------------------------------------------------------------------------------
-- FUNCTION
--------------------------------------------------------------------------------------------------------------------------------------------------------- 
function CalculateTimeToDisplay()
	hour = GetClockHours()
	minute = GetClockMinutes()
	if hour <= 9 then
		hour = '0' .. hour
	end
	if minute <= 9 then
		minute = '0' .. minute
	end

	if parseInt(hour) == 22 then
		if not crime then
			crime = true
			TriggerEvent('chatMessage',"[22:00]",{255,0,0}," Horário de Assalto Iniciado - As ruas estão perigosas, tome cuidado!","ilegal")
		end
	end
	if (parseInt(hour) == 6) then
		if crime then
			crime = false
			TriggerEvent('chatMessage',"[06:00]",{255,0,0}," Horário de Assalto Encerrado - As ruas estão seguras, tenha um bom dia!","ilegal")
		end
	end
end
---------------------------------------------------------------------------------------------------------------------------------------------------------
-- EVENTOS
---------------------------------------------------------------------------------------------------------------------------------------------------------
RegisterNetEvent("hud:channel")
RegisterNetEvent("pma-voice:setTalkingMode")
RegisterNetEvent("pma-voice:setTalking")
AddEventHandler("thunder_hud:channel", function(_channel) if _channel <= 0 then channel = "Desligado" end channel = _channel end)
AddEventHandler("pma-voice:setTalkingMode", function(_mode) voice = _mode end)
AddEventHandler("pma-voice:setTalking", function(_mode) talking = _mode end)
AddEventHandler('hud', function(status)
	if status then
		SendNUIMessage({
			action = "show"
		})
	else
		SendNUIMessage({
			action = "hide"
		})
	end
end)

RegisterNetEvent("hud:channel")
AddEventHandler("hud:channel",function(freq)
	channel = freq
end)

RegisterNetEvent("pma-voice:setTalkingMode")
AddEventHandler("pma-voice:setTalkingMode",function(status)
	voice = status
end)

RegisterNetEvent("vrp_hud:VoiceTalking")
AddEventHandler("vrp_hud:VoiceTalking",function(status)
	talking = status
end)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- SISTEMA CLIMATICO
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
local currentClimate = nil 
Citizen.CreateThread(function()
	while true do
		local hora = GlobalState.Hours or 12
		local minuto = GlobalState.Minutes or 0

	--	NetworkOverrideClockTime(tonumber(hora), tonumber(minuto), 0)
		--SetWeatherTypeNowPersist(currentClimate or "EXTRASUNNY")
		Citizen.Wait(1000)
	end
end)

local carryingSnow = false

RegisterCommand("takesnowball",function()
	local ped = PlayerPedId()
	local userCoords = GetEntityCoords(ped)

	local climate_ = GetWeatherTypeTransition()

	if not (climate_ == GetHashKey('XMAS'))  then 
		return
	end

	if carryingSnow then 
		return
	end

	if GetAmmoInPedWeapon(ped, GetHashKey('weapon_snowball'))  >= 20 then 
		TriggerEvent('Notify','negado','Você não pode carregar muitas bolinhas de neve.')
		return 
	end

	vRP._playAnim(false,{"anim@mp_snowball","pickup_snowball"},false)

	carryingSnow = true 
	Wait(2700)
	carryingSnow = false

	vRP.giveWeapons({ ['weapon_snowball'] = { ammo = 3 } })
	vRP._stopAnim(false)
end)

RegisterKeyMapping("takesnowball", "Pegar bola de neve", "keyboard", "I")

function src.coordsFireWork()
	return GetOffsetFromEntityInWorldCoords(PlayerPedId(),0.0,0.5,0.0)
end

function src.fireWorkGround(coords)
	local ped = PlayerPedId()

	print(coords)
	
	if not coords then 
		coords = GetEntityCoords(ped)
	end

	local retval,groundZ = GetGroundZFor_3dCoord_2(coords.x,coords.y,coords.z,false)
	return groundZ
end

-- RegisterCommand('testnatal',function()
-- 	local ped = PlayerPedId()

-- 	vRP._playAnim(false,{"amb@prop_human_bum_bin@idle_b","idle_d"},false)

-- 	Wait(5000)
-- 	vRP._stopAnim(false)

-- 	local myOffset = GetEntityCoords(ped)
-- 	local hashman = GetHashKey('prop_prlg_snowpile')
	
-- 	if not HasModelLoaded(hashman) then
--         RequestModel(hashman)
--         while not HasModelLoaded(hashman) do
--             Citizen.Wait(1)
--         end
--     end
	
-- 	local createdSnowman = CreateObject(hashman, myOffset.x, myOffset.y, myOffset.z - 1.2, true, true)
--     FreezeEntityPosition(createdSnowman, true)
--     local snowmanCoords = (GetEntityCoords(createdSnowman))
--     SetEntityHeading(createdSnowman, GetEntityHeading(ped)-180.0)
-- end)

RegisterNetEvent('change:climate')
AddEventHandler('change:climate',function(climate)
	currentClimate = climate
end)

RegisterCommand("hud", function()
	if hideHud then
		hideHud = false
	else
		hideHud = true
	end
end)

RegisterCommand('hud', function()
    local playerPed = PlayerPedId()
    local playerHealth = GetEntityHealth(playerPed)

    if playerHealth <= 101 then
        TriggerEvent('Notify', 'negado', 'Você não pode utilizar esse comando morto.', 5000)
    else
		hideHud = not hudActivated
        hudActivated = not hudActivated
    
        if hudActivated then
            TriggerEvent('Notify', 'negado', 'Hud Desativada.', 5000)
        else
            TriggerEvent('Notify', 'sucesso', 'Hud Ativada.', 5000)
        end
    end
end)

local data = true
RegisterNetEvent('hudCommand')
AddEventHandler('hudCommand',function()
	if data then
		SendNUIMessage({
			action = "hide"
		})
		data = false
	else
		SendNUIMessage({
			action = "show"
		})
		data = true
	end
end)
