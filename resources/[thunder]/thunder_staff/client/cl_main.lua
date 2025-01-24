-----------------------------------------------------------------------------------------------------------------------------------------
-- VRP
-----------------------------------------------------------------------------------------------------------------------------------------
local Tunnel = module("vrp","lib/Tunnel")
local Proxy  = module("vrp","lib/Proxy")
local config = module("thunder_staff","config")
vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")
-----------------------------------------------------------------------------------------------------------------------------------------
-- CONEXÃO
-----------------------------------------------------------------------------------------------------------------------------------------
psRP = {}
Tunnel.bindInterface("thunder_staff",psRP)
vSERVER = Tunnel.getInterface("thunder_staff")
-----------------------------------------------------------------------------------------------------------------------------------------
-- VARIABLES
-----------------------------------------------------------------------------------------------------------------------------------------
local menuEnabled = false
local chatEnabled = false
-----------------------------------------------------------------------------------------------------------------------------------------
-- ToggleActionMenu
-----------------------------------------------------------------------------------------------------------------------------------------
function ToggleActionMenu()
	menuEnabled = not menuEnabled
	if menuEnabled then
		SetNuiFocus(true,true)

        local staff    = vSERVER.getStaffData()
        local users    = vSERVER.getAllUsers()
        local groups   = vSERVER.getAllGroups()
        local vehicles = vSERVER.getAllVehicles()
        local items    = vSERVER.getAllItems()

        SendNUIMessage({ action = "loadstaff", staff = staff })
        SendNUIMessage({ action = "loadusers", users = users })
        SendNUIMessage({ action = "loadgroups", groups = groups })
        SendNUIMessage({ action = "loadvehicles", vehicles = vehicles })
        SendNUIMessage({ action = "loaditems", items = items })
        SendNUIMessage({ action = "showmenu" })

		config.starttablet()
	else
		SetNuiFocus(false,false)
		SendNUIMessage({ action = "hidemenu" })
		config.stoptablet()
	end
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- ToggleActionChat
-----------------------------------------------------------------------------------------------------------------------------------------
function ToggleActionChat()
	chatEnabled = not chatEnabled
	if chatEnabled then
		SetNuiFocus(true,true)

        local messages = vSERVER.getChatMessages()

        SendNUIMessage({ action = "loadmessages", messages = messages })
        SendNUIMessage({ action = "showchat" })

		config.starttablet()
	else
		SetNuiFocus(false,false)
		SendNUIMessage({ action = "hidechat" })
		config.stoptablet()
	end
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- RegisterCommand opentablet
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterCommand(config.commands.opentablet, function(source, args, rawCommand)
    if vSERVER.checkPermission() then
        ToggleActionMenu()
    end
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- RegisterCommand openchat
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterCommand(config.commands.openchat, function(source, args, rawCommand)
    if vSERVER.checkChatOpen() then
        ToggleActionChat()
    end
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- close
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("close", function(data, cb)
    if chatEnabled then
        ToggleActionChat()
    else
        ToggleActionMenu()
    end
    cb(true)
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- getuser
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("getuser", function(data, cb)
    local data = vSERVER.getUser(tonumber(data.id))
    cb(data)
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- addgroup
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("addgroup", function(data, cb)
    local data = vSERVER.addGroup(tonumber(data.id), data.group)
    cb(data)
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- remgroup
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("remgroup", function(data, cb)
    local data = vSERVER.remGroup(tonumber(data.id), data.group)
    cb(data)
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- addban
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("addban", function(data, cb)
    local data = vSERVER.addBan(tonumber(data.id), tonumber(data.time))
    cb(data)
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- addwarning
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("addwarning", function(data, cb)
    local data = vSERVER.addWarning(tonumber(data.id), data.reason)
    cb(data)
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- editban
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("editban", function(data, cb)
    local data = vSERVER.editBan(tonumber(data.id), tonumber(data.time))
    cb(data)
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- deletewarning
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("deletewarning", function(data, cb)
    local data = vSERVER.deleteWarning(tonumber(data.id))
    cb(data)
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- getmessages
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("getmessages", function(data, cb)
    local data = vSERVER.getMessages(tonumber(data.id))
    cb(data)
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- sendmessage
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("sendmessage", function(data, cb)
    local data = vSERVER.sendMessage(tonumber(data.id), data.message)
    cb(data)
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- sendmessageplayer
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("sendmessageplayer", function(data, cb)
    local data = vSERVER.sendMessagePlayer(data.message)
    if data == true then
        local messages = vSERVER.getChatMessages()
        cb(messages)
    else
        cb(data)
    end
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- spawnitem
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("spawnitem", function(data, cb)
    local data = vSERVER.spawnItem(data.item, data.amount, data.id)
    cb(data)
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- spawnvehicle
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("spawnvehicle", function(data, cb)
    local data = vSERVER.spawnVehicle(data.id, data.vehicle)
    cb(data)
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- addvehicle
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("addvehicle", function(data, cb)
    local data = vSERVER.addVehicle(data.id, data.vehicle)
    cb(data)
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- updatechatplayer
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNetEvent("thunder_staff:updatechatplayer")
AddEventHandler("thunder_staff:updatechatplayer",function()
    local messages = vSERVER.getChatMessages()

    SendNUIMessage({ action = "loadmessages", messages = messages })
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- updatechat
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNetEvent("thunder_staff:updatechat")
AddEventHandler("thunder_staff:updatechat",function(user_id)
    SendNUIMessage({ action = "loadchat", user_id = user_id })
end)