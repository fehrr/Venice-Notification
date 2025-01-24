local Tunnel = module("vrp", "lib/Tunnel")
local Proxy = module("vrp", "lib/Proxy")
vRP = Proxy.getInterface("vRP")
-----------------------------------------------------------------------------------------------------------------------------------------
-- CONNECTION
-----------------------------------------------------------------------------------------------------------------------------------------
PL = {}
Tunnel.bindInterface("whitelisted", PL)
vSERVER = Tunnel.getInterface("whitelisted")

local user_id = 0
function PL.idclient(user_idt) 
    user_id = tonumber(user_idt) or 0
	FreezeEntityPosition(PlayerPedId(),true)
    SetNuiFocus(true,true)
    SendNUIMessage({
      action = 'setVisible',
      data = true
    })
end


RegisterNuiCallback('closeNUI', function(data, cb)
  SetNuiFocus(false, false)
  --TriggerEvent('RequestNewPlayer') -- Chama o evento do painel de registro/indicações
  SendNUIMessage({
    action = 'setVisible',
    data = false
  })
end)

RegisterNuiCallback('fetchServerData', function(data, cb)
  cb(serverData)
end)

RegisterNuiCallback('fetchUserData', function(data, cb)
  local success = vSERVER.UserData(data)
  cb(success)
end)

RegisterNuiCallback('registerIndication', function(data, cb)
  local success = vSERVER.Indication(data)
  cb(success)
end)

RegisterNuiCallback('sendUserData', function(data, cb)
  vSERVER._sendForm(data)
end)


RegisterNuiCallback('getUserID', function(data, cb)
  cb(user_id)
end)

RegisterNuiCallback('verifyUserWhitelist', function(data, cb)
  local success = vSERVER.checkid()
  cb(success)
end)

RegisterNuiCallback('registerUserVehicle', function(data, cb)
  FreezeEntityPosition(PlayerPedId(),false)
  SetNuiFocus(false, false)
  vSERVER._redeemCar(data)
end)

RegisterNUICallback("fetchServerName",function(data,cb)
  cityName = "NEXUSRP"
  cb(cityName)
end)

RegisterNetEvent("whitelisted:show")
AddEventHandler("whitelisted:show", function()
  vSERVER.checkWl()
end)

