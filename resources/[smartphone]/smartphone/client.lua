-- -----------------------------------------------------------------------------------------------------------------------------------------
-- -- VRP
-- -----------------------------------------------------------------------------------------------------------------------------------------
-- local Tunnel = module("vrp","lib/Tunnel")
-- local Proxy = module("vrp","lib/Proxy")
-- vRP = Proxy.getInterface("vRP")
-- tvRP = Tunnel.getInterface("vRP")
-- -----------------------------------------------------------------------------------------------------------------------------------------
-- -- CONNECTION
-- -----------------------------------------------------------------------------------------------------------------------------------------
-- Summerz = true
-- IsNuiOpen = false

-- src = {
-- 	close = function()
-- 		IsNuiOpen = false
-- 		SetNuiFocus(false)
-- 		-- tvRP.removeObjects("one")
--         tvRP.DeletarObjeto("one")
-- 	end,
-- 	open = function()
-- 		local Ped = PlayerPedId()
-- 		if not IsPedArmed(Ped,7) and not LocalPlayer["state"]["Buttons"] and not LocalPlayer["state"]["Prison"] then
-- 			tvRP.DeletarObjeto("one")
-- 			tvRP.CarregarObjeto("cellphone@","cellphone_text_in","prop_amb_phone",50,28422)
-- 			IsNuiOpen = true
-- 			SetNuiFocus(true,true)
-- 			SendNUIMessage({ event = "open", args = {} })
-- 		end
-- 	end,
-- 	eval = function(code)
-- 		return load(code)()
-- 	end,
-- 	__clear = function()
-- 		src["eval"] = nil
-- 	end
-- }

-- RegisterNUICallback("client",function(data,cb)
-- 	local res = src[data.member](table.unpack(data.args))
-- 	if res == nil then res = true end
-- 	cb(res)
-- end)

-- RegisterNUICallback("backend",function(data,cb)
-- 	requestToBackend(data["member"],data["args"],cb)
-- end)

-- local backend_promises = { id = 1 }
-- RegisterNetEvent("backend:res")
-- AddEventHandler("backend:res",function(rid,res)
-- 	if backend_promises[rid] then
-- 		backend_promises[rid](res)
-- 		backend_promises[rid] = nil
-- 	end
-- end)

-- function requestToBackend(member,args,cb)
-- 	local id = backend_promises["id"]
-- 	backend_promises["id"] = id + 1

-- 	backend_promises[id] = cb
-- 	TriggerServerEvent("backend:req",id,member,args or {})
-- end

-- Citizen.CreateThread(function()
-- 	Wait(5000)

-- 	requestToBackend("download",{},function(script)
-- 		while src["eval"] do
-- 			SendNUIMessage(script)
-- 			Wait(10e3)
-- 		end
-- 	end)
-- end)


IsNuiOpen = false
Summerz = false
src = {
  close = function()
    IsNuiOpen = false
    SetNuiFocus(false)
  end,
  open = function()
    IsNuiOpen = true
    SetNuiFocus(true, true)
    SendNUIMessage({event='open',args={}})
  end,
  eval = function(code)
    return load(code)()
  end,
  __clear = function()
    return true
  end
}

RegisterNUICallback('client', function(data, cb)
  if table.unpack(data.args) then
    res =src[data.member](table.unpack(data.args))
    if res == nil then
      res = true
    end
  else
    -- print(table.unpack(data.args))
    res =src[data.member](table.unpack(data.args))
    if res == nil then
      res = true
    end
  end
  cb(res)
end)
RegisterNUICallback('backend', function(data, cb)
  requestToBackend(data.member, data.args, cb)
end)

local backend_promises = { id=1 }
RegisterNetEvent('backend:res')
AddEventHandler('backend:res', function(rid, res)
  if backend_promises[rid] then
    backend_promises[rid](res)
    backend_promises[rid] = nil
  end
end)

function requestToBackend(member, args, cb)
  local id = backend_promises.id
  backend_promises.id=id+1

  backend_promises[id] = cb
  TriggerServerEvent('backend:req', id, member, args or {})
end

Citizen.CreateThread(function()
  Wait(5000)

  requestToBackend('download', {}, function(script)
    SendNUIMessage(script)
  end)
end)