local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
local Tools = module("vrp","lib/Tools")
vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")

GlobalState["Hours"] = 12
GlobalState["Minutes"] = 0
GlobalState["Weather"] = "EXTRASUNNY"
GlobalState["Blackout"] = false

-------REBOQUE
RegisterCommand('time',function(source,args,rawCommand)
    local user_id = vRP.getUserId(source)
    if user_id then
        if vRP.hasPermission(user_id,'developer.permissao') then
			GlobalState["Hours"] = parseInt(args[1])
			GlobalState["Minutes"] = parseInt(args[2])

			if args[3] then
				GlobalState["Weather"] = args[3]
			end
        end
    end
end)

RegisterCommand('blackout',function(source,args,rawCommand)
    local user_id = vRP.getUserId(source)
    if user_id then
        if vRP.hasPermission(user_id,'developer.permissao') then
			GlobalState["Blackout"] = not GlobalState["Blackout"]
        end
    end
end)