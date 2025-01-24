-----------------------------------------------------------------------------------------------------------------------------------------
-- GET THIRST
-----------------------------------------------------------------------------------------------------------------------------------------
function vRP.getThirst(user_id)
	local data = vRP.getUserDataTable(user_id)
	if data then
	  	return data.thirst
	end
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- GET HUNGER
-----------------------------------------------------------------------------------------------------------------------------------------
function vRP.getHunger(user_id)
	local data = vRP.getUserDataTable(user_id)
	if data then
	  	return data.hunger
	end
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- THREAD THIRST/HUNGER
-----------------------------------------------------------------------------------------------------------------------------------------
Citizen.CreateThread(function()
	while true do
		Citizen.Wait(80000)
		for k,v in pairs(vRP.users) do
			vRP.downgradeThirst(v,0.8)
			vRP.downgradeHunger(v,0.6)
		end
	end
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- UPDAGRADETHIRST
-----------------------------------------------------------------------------------------------------------------------------------------
function vRP.upgradeThirst(user_id,amount)
	local source = vRP.getUserSource(user_id)
	local data = vRP.getUserDataTable(user_id)
	if data then
		if data.thirst == nil then
			data.thirst = 100
		else
			data.thirst = data.thirst + amount
			if data.thirst >= 100 then
				data.thirst = 100
			end
		end

		TriggerClientEvent("statusThirst",source,data.thirst)
	end
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- UPGRADEHUNGER
-----------------------------------------------------------------------------------------------------------------------------------------
function vRP.upgradeHunger(user_id,amount)
	local source = vRP.getUserSource(user_id)
	local data = vRP.getUserDataTable(user_id)
	if data then
		if data.hunger == nil then
			data.hunger = 100
		else
			data.hunger = data.hunger + amount
			if data.hunger >= 100 then
				data.hunger = 100
			end
		end

		TriggerClientEvent("statusHunger",source,data.hunger)
	end
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- DOWNGRADETHIRST
-----------------------------------------------------------------------------------------------------------------------------------------
function vRP.downgradeThirst(user_id,amount)
	local source = vRP.getUserSource(user_id)
	local data = vRP.getUserDataTable(user_id)
	if data then
		if data.thirst == nil then
			data.thirst = 100
		else
			data.thirst = data.thirst - amount
			if data.thirst <= 0 then
				data.thirst = 0
			end
		end

		TriggerClientEvent("statusThirst",source,data.thirst)
	end
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- DOWNGRADEHUNGER
-----------------------------------------------------------------------------------------------------------------------------------------
function vRP.downgradeHunger(user_id,amount)
	local source = vRP.getUserSource(user_id)
	local data = vRP.getUserDataTable(user_id)
	if data then
		if data.hunger == nil then
			data.hunger = 100
		else
			data.hunger = data.hunger - amount
			if data.hunger <= 0 then
				data.hunger = 0
			end
		end

		TriggerClientEvent("statusHunger",source,data.hunger)
	end
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- SETTHIRST
-----------------------------------------------------------------------------------------------------------------------------------------
function vRP.setThirst(user_id,value)
	local data = vRP.getUserDataTable(user_id)
	local source = vRP.getUserSource(user_id)
	if data then
		data.thirst = value
		if data.thirst < 0 then 
			data.thirst = 0
		elseif data.thirst > 100 then 
			data.thirst = 100 
		end

		TriggerClientEvent("statusThirst",source,data.thirst)
	end
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- SETHUNGER
-----------------------------------------------------------------------------------------------------------------------------------------
function vRP.setHunger(user_id,value)
	local data = vRP.getUserDataTable(user_id)
	local source = vRP.getUserSource(user_id)
	if data then
		data.hunger = value
		if data.hunger < 0 then 
			data.hunger = 0
		elseif data.hunger > 100 then 
			data.hunger = 100 
		end

		TriggerClientEvent("statusHunger",source,data.hunger)
	end
end

AddEventHandler("vRP:playerSpawn",function(user_id, source, first_spawn)
    local data = vRP.getUserDataTable(user_id)
	if data then
		TriggerClientEvent("statusHunger",source,data.hunger)
		TriggerClientEvent("statusThirst",source,data.thirst)
	end
end)