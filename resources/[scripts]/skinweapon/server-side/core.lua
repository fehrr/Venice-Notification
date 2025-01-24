Tunnel = module("vrp", "lib/Tunnel")
Proxy = module("vrp", "lib/Proxy")
Tools = module("vrp","lib/Tools")
Resource = GetCurrentResourceName()
vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")
RegisterTunnel = {}
Tunnel.bindInterface(Resource, RegisterTunnel)


vTunnel = Tunnel.getInterface(Resource)


vRP.prepare('skinweapon/Create', " INSERT IGNORE INTO thunder_skins(component, stock) VALUES (@component, @stock) ")
vRP.prepare('skinweapon/getStock', "SELECT * FROM thunder_skins")
vRP.prepare('skinweapon/getStockSpecific', "SELECT * FROM thunder_skins WHERE component = @component")
vRP.prepare("skinweapon/setSkin","INSERT INTO thunder_skins_users(user_id, skins) VALUES(@user_id, @skins)")
vRP.prepare('skinweapon/updateSkin', "UPDATE thunder_skins_users SET skins = @skins WHERE user_id = @user_id")
vRP.prepare('skinweapon/updateSkinEquip', "UPDATE thunder_skins_users SET equipadas = @equipadas WHERE user_id = @user_id")
vRP.prepare('skinweapon/getPlayerSkins', "SELECT * FROM thunder_skins_users WHERE user_id = @user_id")

vRP.prepare('skinweapon/updateSkinStock', "UPDATE thunder_skins SET stock = @stock WHERE component = @component")

EquipWeapons = {}
GlobalState["Pistol"] = {}
GlobalState["Rifle"] = {}

CreateThread(function()
  if createAuto then
    for k,v in pairs(skinglobal) do
      vRP.execute('skinweapon/Create', { component = k, stock = v[6]})
    end
   -- exports["oxmysql"]:executeSync([[INSERT IGNORE INTO sjr_orgs(org) VALUES(?)]], { orgName })
  end
end)

RegisterCommand('skins', function(source,args)
  local source = source
  local user_id = vRP.getUserId(source)
  if user_id then
    if perm and not vRP.hasPermission(user_id, perm) then return end
	  TriggerClientEvent('skinweapon:OpenClient', source)
  end
end)

AddEventHandler("vRP:playerSpawn",function(user_id,source,first_spawn)
  if user_id then
    local query = vRP.query('skinweapon/getPlayerSkins', { user_id = user_id })
    if #query > 0 then
      local skins = json.decode(query[1].equipadas) or {}
      EquipWeapons[user_id] = {}
      for k,v in pairs(skins) do
        EquipWeapons[user_id][k] = v
      end
    end
  end
end)

RegisterServerEvent("skinweapon:check")
AddEventHandler("skinweapon:check",function()
  local source = source
  local user_id = vRP.getUserId(source)
	if source and user_id then
    Wait(2000)
    local weapons = vRPclient.getWeapons(source)
    for k,v in pairs(weapons) do
      if EquipWeapons[user_id][k] then
        GiveWeaponComponentToPed(GetPlayerPed(source),k,EquipWeapons[user_id][k])
      end
    end
  end
end)


AddEventHandler("vRP:playerLeave",function(user_id,source)
  if user_id then
    if EquipWeapons[user_id] then
      vRP.execute('skinweapon/updateSkinEquip', { user_id = user_id, equipadas = json.encode(EquipWeapons[user_id])})
      EquipWeapons[user_id] = nil
    end
  end
end)


RegisterTunnel.RequestSkins = function()
  local pistol = {}
  local rifle = {}
  local query = vRP.query('skinweapon/getStock')
  if not (#query > 0) then if prints then print("Você não gerou o arquivo de stock das armas") end return end
  for k,v in pairs(query) do
    if skinglobal[v.component][4] == "Rifle" then
      rifle[#rifle+1] = { name = skinglobal[v.component][1], type = skinglobal[v.component][4], price = skinglobal[v.component][2], weapon = skinglobal[v.component][3], component = v.component, equip = v.component, rarity = skinglobal[v.component][5], stock = v.stock}
    else
      pistol[#pistol+1] = { name = skinglobal[v.component][1], type = skinglobal[v.component][4], price = skinglobal[v.component][2], weapon = skinglobal[v.component][3], component = v.component, equip = v.component, rarity = skinglobal[v.component][5], stock = v.stock}
    end
  end
  GlobalState["Rifle"] = rifle
  GlobalState["Pistol"] = pistol
end

RegisterTunnel.RequestEquip = function(data)
  local source = source
  local user_id = vRP.getUserId(source)
  if user_id then
    local weapons = vRPclient.getWeapons(source)
    if weapons[skinglobal[data][3]] then
      if EquipWeapons[user_id][skinglobal[data][3]] then
        RemoveWeaponComponentFromPed(GetPlayerPed(source),skinglobal[data][3],data)
      end
      EquipWeapons[user_id][skinglobal[data][3]] = data
      GiveWeaponComponentToPed(GetPlayerPed(source),skinglobal[data][3],data)
      TriggerClientEvent("Notify",source,"sucesso","Skin aplicada com sucesso.")
      TriggerClientEvent('skinweapon:CloseNUI', source) -- Adiciona esta linha para fechar a NUI
    else
      TriggerClientEvent("Notify",source,"negado","Você não possui essa arma equipada para usar o componente.")
    end
  end
end

RegisterTunnel.RequestBuy = function(data)
  local source = source
  local user_id = vRP.getUserId(source)
  if user_id then
    if skinglobal[data] then
      local query = vRP.query('skinweapon/getStockSpecific', { component = data })
      if #query > 0 then
        if query[1].stock >= 1 then
          local query2 = vRP.query('skinweapon/getPlayerSkins', { user_id = user_id })
          local skins = {}
          if #query2 > 0 then skins = json.decode(query2[1].skins) end
          if not skins[query[1].component] then
            if vRP.tryFullPayment(user_id,skinglobal[query[1].component][2]) then
              if #query2 > 0 then
                skins[query[1].component] = true
                vRP.execute('skinweapon/updateSkinStock', { component = query[1].component, stock = query[1].stock-1 })
                vRP.execute('skinweapon/updateSkin', { user_id = user_id, skins = json.encode(skins)})
                RegisterTunnel.RequestSkins()
                TriggerClientEvent("Notify",source,"sucesso","Você comprou o item com sucesso.")
              else
                skins[query[1].component] = true
                vRP.execute('skinweapon/updateSkinStock', { component = query[1].component, stock = query[1].stock-1 })
                vRP.execute('skinweapon/setSkin', { user_id = user_id, skins = json.encode(skins)})
                RegisterTunnel.RequestSkins()
                TriggerClientEvent("Notify",source,"sucesso","Você comprou o item com sucesso.")
              end
            else
              TriggerClientEvent("Notify",source,"negado","Você não possui dinheiro suficiente para isso.")
            end
          else
            TriggerClientEvent("Notify",source,"negado","Você já possui esta skin.")
          end
        else
          TriggerClientEvent("Notify",source,"negado","Este item está com o estoque esgotado.")
        end
      else
        if prints then print("componente não encontrado no banco de dados ID:"..user_id) end
      end
    else
      if prints then print("componente não encontrado no config ID:"..user_id) end
    end
  end
end

RegisterTunnel.RequestTransf = function(data)
  local source = source
  local user_id = vRP.getUserId(source)
  local identity = vRP.getUserIdentity(user_id)
  if user_id then
    local query = vRP.query('skinweapon/getPlayerSkins', { user_id = user_id })
    local skins = {}
    if #query > 0 then 
      skins = json.decode(query[1].skins)
    end
    if skins[data] then
      local nuser = vRP.prompt(source, 'Digite o id do player que você deseja enviar a skin', '')
      if nuser and nuser ~= '' then
        local nidentity = vRP.getUserIdentity(parseInt(nuser))
        local query2 = vRP.query('skinweapon/getPlayerSkins', { user_id = parseInt(nuser) })
        local skins2 = {}
        if #query2 > 0 then skins2 = json.decode(query2[1].skins) end
        if not skins2[data] then
          skins[data] = nil
          skins2[data] = true
          vRP.execute('skinweapon/updateSkin', { user_id = user_id, skins = json.encode(skins)})
          RemoveWeaponComponentFromPed(GetPlayerPed(source),skinglobal[data][3],data)
          EquipWeapons[user_id][skinglobal[data][3]] = nil
          TriggerClientEvent("Notify",source,"sucesso","Você enviou a skin com sucesso para o cidadao "..nidentity.nome.." "..nidentity.sobrenome.."!")
          if #query2 > 0 then
            vRP.execute('skinweapon/updateSkin', { user_id = parseInt(nuser), skins = json.encode(skins2)})
          else
            vRP.execute('skinweapon/setSkin', { user_id = parseInt(nuser), skins = json.encode(skins2)})
          end
          local nsource = vRP.getUserSource(parseInt(nuser))
          if nsource then
            TriggerClientEvent("Notify",nsource,"sucesso","O cidadão "..identity.nome.." "..identity.sobrenome.." acabou de te enviar uma skin!")
          end
        else
          TriggerClientEvent("Notify",source,"negado","Este player já possui esta skin.")
        end
      else
        TriggerClientEvent("Notify",source,"negado","Usuario informado inexistente ou informado de forma errada.")
      end
    else
      if prints then print("componente não encontrado no id, possivel inject ID:"..user_id) end
    end
  end
end

RegisterTunnel.RequestEquip = function(data)
  local source = source
  local user_id = vRP.getUserId(source)
  if user_id then
    local weapons = vRPclient.getWeapons(source)
    if weapons[skinglobal[data][3]] then
      if EquipWeapons[user_id][skinglobal[data][3]] then
        RemoveWeaponComponentFromPed(GetPlayerPed(source),skinglobal[data][3],data)
      end
      EquipWeapons[user_id][skinglobal[data][3]] = data
      GiveWeaponComponentToPed(GetPlayerPed(source),skinglobal[data][3],data)
      TriggerClientEvent("Notify",source,"sucesso","Skin aplicada com sucesso.")
      TriggerClientEvent('skinweapon:CloseNUI', source) -- Adiciona esta linha para fechar a NUI
    else
      TriggerClientEvent("Notify",source,"negado","Você não possui essa arma equipada para usar o componente.")
    end
  end
end

RegisterTunnel.RequestUnequip = function(data)
  local source = source
  local user_id = vRP.getUserId(source)
  if user_id then
    local weapons = vRPclient.getWeapons(source)
    if weapons[skinglobal[data][3]] then
      EquipWeapons[user_id][skinglobal[data][3]] = nil
      RemoveWeaponComponentFromPed(GetPlayerPed(source),skinglobal[data][3],data)
      TriggerClientEvent("Notify",source,"sucesso","Skin removida com sucesso.")
    else
      TriggerClientEvent("Notify",source,"negado","Você não possui essa arma equipada para remover esse componente.")
    end
  end
end

RegisterTunnel.RequestPossuidas = function()
  local source = source
  local user_id = vRP.getUserId(source)
  if user_id then
    if not EquipWeapons[user_id] then EquipWeapons[user_id] = {} end
    local query = vRP.query('skinweapon/getPlayerSkins', { user_id = user_id })
    local weapons = {}
    if #query > 0 then
      local skins = json.decode(query[1].skins) or {}
      for k,v in pairs(skins) do
        weapons[#weapons+1] = { name = skinglobal[k][1], type = skinglobal[k][4], price = skinglobal[k][2], weapon = skinglobal[k][3], component = k, equip = (EquipWeapons[user_id][skinglobal[k][3]] == k and "Equipada" or "Desequipada"), rarity = skinglobal[k][5]}
      end
      return weapons
    end
  end
  return {}
end