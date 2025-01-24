-----------------------------------------------------------------------------------------------------------------------------------------
-- VRP
-----------------------------------------------------------------------------------------------------------------------------------------
local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")
-----------------------------------------------------------------------------------------------------------------------------------------
-- CONNECTION
-----------------------------------------------------------------------------------------------------------------------------------------
cRP = {}
Tunnel.bindInterface("thunder_hud",cRP)
-----------------------------------------------------------------------------------------------------------------------------------------
-- GLOBALSTATE
-----------------------------------------------------------------------------------------------------------------------------------------
GlobalState["Hours"] = 18
GlobalState["Minutes"] = 00
GlobalState["Weather"] = "CLEAR"
-----------------------------------------------------------------------------------------------------------------------------------------
-- THREADGLOBAL
-----------------------------------------------------------------------------------------------------------------------------------------
CreateThread(function()
	while true do
		GlobalState["Minutes"] = GlobalState["Minutes"] + 1
		
		if GlobalState["Minutes"] >= 60 then
			GlobalState["Hours"] = GlobalState["Hours"] + 1
			GlobalState["Minutes"] = 00
			
			if GlobalState["Hours"] >= 24 then
				GlobalState["Hours"] = 00
			end
		end
		
		Wait(10000)
		
		TriggerClientEvent("thunder_hud:syncTimers",-1,{ GlobalState["Hours"],GlobalState["Minutes"],GlobalState["Weather"] })
	end
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- ITEM
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterCommand("timeset",function(source,args,rawCommand)
	if exports["chat"]:statusChat(source) then
		local user_id = vRP.getUserId(source)
		if user_id then
			if vRP.hasGroup(user_id,"Admin") then
				GlobalState["Hours"] = parseInt(args[1])
				GlobalState["Minutes"] = parseInt(args[2])
				GlobalState["Weather"] = args[3]
				
				TriggerClientEvent("thunder_hud:syncTimers",-1,{ GlobalState["Hours"],GlobalState["Minutes"],GlobalState["Weather"] })
			end
		end
	end
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- PLAYERSPAWN
-----------------------------------------------------------------------------------------------------------------------------------------
AddEventHandler("vRP:playerSpawn",function(user_id,source)
	TriggerClientEvent("thunder_hud:syncTimers",source,{ GlobalState["Hours"],GlobalState["Minutes"],GlobalState["Weather"] })
end)

function cRP.checkhud()
    local source = source
    local user_id = vRP.getUserId(source)
   -- if vRP.hasPermission(user_id,"admin.permissao")  then
        return true
    --end
end



