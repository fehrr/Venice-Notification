local Tunnel = module("vrp", "lib/Tunnel")
local Proxy = module("vrp", "lib/Proxy")
vRP = Proxy.getInterface("vRP")
sRP = {}
Tunnel.bindInterface(GetCurrentResourceName(), sRP)
vSERVER = Tunnel.getInterface(GetCurrentResourceName())

local isDeath = false
local andamento = false
local segundos = 0
local maxdistance = 3

local tempRobbery = { x = 0, y = 0, z = 0 }
local tempDistance = 0

Citizen.CreateThread(function()
    while true do
        local oInfinity = 3000
        local ped = PlayerPedId()
        local coords = GetEntityCoords(ped)
        for k, rouboData in pairs(config.type) do
			for _, v in pairs(rouboData.cds) do
				local distance = #(coords - vector3(v.x, v.y, v.z))
				if distance <= 6 and not andamento then
					oInfinity = 0
					DrawMarker(29, v.x, v.y, v.z - 0.30, 0, 0, 0, 0, 180.0, 180.0, 1.0, 1.0, 1.0, 255, 50, 50, 90, 1, 0, 0, 1)
					if distance <= 1.2 and not IsPedInAnyVehicle(ped) then
						drawTxt("~r~(G) ~w~INICIAR O ROUBO", 4, 0.5, 0.93, 0.50, 255, 255, 255, 180)
						if IsControlJustPressed(0, 47) then
							if GetEntityModel(ped) == GetHashKey("mp_m_freemode_01") or GetEntityModel(ped) == GetHashKey("mp_f_freemode_01") then
								rouboData.type = k
								vSERVER.startRobbery(k, rouboData, v)
							end
						end
					end
				end
			end
        end

		if andamento then
			if not isDeath and GetEntityHealth(ped) <= 101 then
				isDeath = true
			elseif isDeath and GetEntityHealth(ped) > 101 then
				isDeath = false
				andamento = false
				vSERVER.cancelRobbery(true, true)
			end	
		end
        Citizen.Wait(oInfinity)
    end
end)

function sRP.showTime()
	Citizen.CreateThread(function()
		while andamento do
			drawTxt("RESTAM ~g~" .. segundos .. " SEGUNDOS ~w~PARA TERMINAR"			, 4, 0.5, 0.93, 0.50, 255, 255, 255, 180)
			drawTxt("APERTE ~r~M~w~ PARA CANCELAR O ROUBO EM ANDAMENTO"					, 4, 0.5, 0.91, 0.36, 255, 255, 255, 80)
			if maxdistance and maxdistance > 0 then 
				drawTxt("DISTÂNCIA: ~g~" .. tempDistance .. "/" .. maxdistance .. " METROS" , 4, 0.5, 0.89, 0.36, 255, 255, 255, 120) 
			end
			Citizen.Wait(0)
		end
	end)
end

RegisterKeyMapping("csp:cancelRobbery", "[Ações] Cancelar Roubo", "keyboard", "m")
RegisterCommand("csp:cancelRobbery", function(source, args, rawCommand)
	if andamento then
        andamento = false
        isDeath = false
		
		ClearPedTasks(PlayerPedId())
        vSERVER.cancelRobbery()
	end
end)

function sRP.iniciandoRoubo(x, y, z, head, secs, mdistance, message)
	maxdistance = mdistance
    segundos = secs
    andamento = true
	isDeath = false

	local ped = PlayerPedId()
    SetEntityHeading(ped, head)
    SetEntityCoords(ped, x, y, z - 1, false, false, false, false)
    --SetPedComponentVariation(ped, 5, 45, 0, 2)
    SetCurrentPedWeapon(ped, GetHashKey("WEAPON_UNARMED"), true)

	tempRobbery = {
		x = x,
		y = y,
		z = z,
		message = message
	}

	TriggerEvent("Notify", "importante", "Você deve-se manter dentro da área do roubo, caso contrário, ele será cancelado!")

	Citizen.CreateThread(function()
		while andamento do
			Citizen.Wait(100)

			local ped = PlayerPedId()
			local x, y, z = table.unpack(GetEntityCoords(ped))
			local distance = GetDistanceBetweenCoords(x, y, z, tempRobbery.x, tempRobbery.y, tempRobbery.z, false)
	
			tempDistance = tonumber(string.format("%.2f", distance))
	
			segundos = tonumber(string.format("%.1f", segundos - 0.1))
			if segundos <= 0 then
				andamento = false
				vSERVER.givePayment()
			elseif (maxdistance ~= 0 and distance > maxdistance) then
				andamento = false
				isDeath = false
				vSERVER.cancelRobbery(true)
				TriggerEvent("Notify", "aviso", tempRobbery.message, 60000)
			end
		end
	end)
end

function drawTxt(text, font, x, y, scale, r, g, b, a)
    SetTextFont(font)
    SetTextScale(scale, scale)
    SetTextColour(r, g, b, a)
    SetTextOutline()
    SetTextCentre(1)
    SetTextEntry("STRING")
    AddTextComponentString(text)
    DrawText(x, y)
end