--Decompiled using Federal#9999's decompiler

local Tunnel = module("vrp", "lib/Tunnel")
local Proxy = module("vrp", "lib/Proxy")
vRP = Proxy.getInterface("vRP")

vRPclient = Tunnel.getInterface("vRP")

hpServer = {}
Tunnel.bindInterface("MaraltoHP", hpServer)



vCLIENT = Tunnel.getInterface("MaraltoHP")


--vRP.prepare("MaraltoHP/createTables", "CREATE TABLE IF NOT EXISTS `mrlt_hp_consultas` (`c_id` int(11) NOT NULL AUTO_INCREMENT,`c_user_id` int(11) NOT NULL,`c_esp` varchar(255) NOT NULL,`c_date` longtext NOT NULL,`c_status` int(11) NOT NULL DEFAULT 0,PRIMARY KEY (`c_id`)) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4; CREATE TABLE IF NOT EXISTS `mrlt_hp_data` (`id` int(11) NOT NULL AUTO_INCREMENT,`user_id` int(11) NOT NULL,`author` varchar(255) NOT NULL DEFAULT '',`ocorrencia` text CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,`datahora` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,PRIMARY KEY (`id`,`user_id`) USING BTREE,KEY `user_id` (`user_id`)) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;CREATE TABLE IF NOT EXISTS `mrlt_hp_fotos` (`user_id` int(11) NOT NULL,`imageUrl` varchar(255) NOT NULL,PRIMARY KEY (`user_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;")
vRP.prepare("MaraltoHP/saveData", "INSERT INTO mrlt_hp_data(user_id,author,ocorrencia,datahora) VALUES (@user_id,@author,@ocorrencia,@datahora)")
vRP.prepare("MaraltoHP/getUserData", "SELECT * FROM mrlt_hp_data WHERE user_id = @user_id ORDER BY `id` DESC")
vRP.prepare("MaraltoHP/deleteData", "DELETE FROM mrlt_hp_data WHERE `id` = @data_id")
vRP.prepare("MaraltoHP/salvarAgendamento", "INSERT INTO mrlt_hp_consultas(c_user_id,c_esp,c_date) VALUES (@user_id,@esp,@date)")
vRP.prepare("MaraltoHP/getSpecific", "SELECT * FROM mrlt_hp_consultas WHERE c_user_id = @user_id AND c_esp = @esp AND c_date = @date")
vRP.prepare("MaraltoHP/deletarAgendamento", "DELETE FROM mrlt_hp_consultas WHERE `c_id` = @id")
vRP.prepare("MaraltoHP/getAgendamentos", "SELECT * FROM mrlt_hp_consultas")
vRP.prepare("MaraltoHP/updateAgendamento", "UPDATE mrlt_hp_consultas SET c_status = @status WHERE `c_id` = @id")

local consultas = {}

local antiflood = {}

local atend = {}

local atendimentos = 0

local diaconsultas = 0

local concluidos = 0

Citizen.CreateThread(function()
  --vRP.execute("MaraltoHP/createTables")
end)

function hpServer.getConfig()
  return cfg
end

Citizen.CreateThread(function()
  Citizen.Wait(2000)
  local query = vRP.query("MaraltoHP/getAgendamentos")
  if #query >= 1 then
    for k, v in pairs(query) do
      local identity = vRP.getUserIdentity(parseInt(v.c_user_id))
      if identity and  identity.nome then
        consultas[v.c_id] = {
          id = v.c_id,
          paciente = identity.nome .. " " .. identity.sobrenome,
          especialidade = v.c_esp,
          celular = identity.telefone,
          status = v.c_status,
          date = v.c_date
        }
      end
    end
  end
end)

RegisterCommand(module("MaraltoHP", "config").commandName, function(a, b, c)
  if vRP.hasPermission(vRP.getUserId(a), cfg.permissao) then
    vCLIENT.ToggleNUI(a)
  end
end)

function hpServer.getConsultas()
  local value = {}
  for k,v in pairs(consultas) do
    local c_status = ""
    if v.status == 1 then
      c_status= "Consulta realizada"
    else
      c_status = "Não Compareceu"
    end
    value[v.id] = {
      c_id = v.id,
      p_name = v.paciente,
      p_cel = v.celular,
      esp = v.especialidade,
      data = v.date,
      c_status = c_status
    }
  end
  return value
end

function hpServer.salvarAgendamento(a, b, c)
  diaconsultas = diaconsultas + 1
  vRP.execute("MaraltoHP/salvarAgendamento", {
    user_id = a,
    esp = b,
    date = c
  })
  Citizen.Wait(100)
  local query = vRP.query("MaraltoHP/getSpecific", {user_id = a,esp = b,date = c })
  if #query >= 1 then
    local identity = vRP.getUserIdentity(tonumber(query[1].c_user_id))
    if identity and identity.nome then
      consultas[query[1].c_id] = {
        id = query[1].c_id,
        paciente = identity.nome .. " " .. identity.sobrenome,
        especialidade = query[1].c_esp,
        celular = identity.telefone,
        status = 0,
        date = query[1].c_date
      }
    end
    vCLIENT.updateConsultas(-1, consultas)
  end
end

function hpServer.excluirConsulta(a)
  vRP.execute("MaraltoHP/deletarAgendamento", {id = parseInt(a)})
  if consultas[a] then
    consultas[a] = nil
    Citizen.Wait(50)
    vCLIENT.updateConsultas(-1, consultas)
  end
end

function hpServer.updateAgendamentoStatus(a, b)
  vRP.execute("MaraltoHP/updateAgendamento", {id = a, status = b})
  if consultas[a] then
    if b == 1 then
      consultas[a].status = "Consulta realizada"
    else
      consultas[a].status = "Não Compareceu"
    end
    Citizen.Wait(50)
    vCLIENT.updateConsultas(-1, consultas)
  end
end

function hpServer.saveData(a, b)
  local source = source
  local user_id = vRP.getUserId(source)
  local identity = vRP.getUserIdentity(user_id)
  if user_id then
    atendimentos = atendimentos + 1
    vRP.execute("MaraltoHP/saveData", {
      user_id = a,
      author = identity.nome .. " " .. identity.sobrenome .. " #" .. user_id,
      ocorrencia = b,
      datahora = os.date("%d/%m/%y | %H:%M")
    })
  end
end

function hpServer.deleteData(a)
  vRP.execute("MaraltoHP/deleteData", {data_id = a})
end



function hpServer.getInfos()
  local source = source
  local user_id = vRP.getUserId(source)
  if user_id then
    return {
      user_id = user_id,
      pat = atend,
      medicos = cfg.getMedical(),
      consultas = diaconsultas,
      atendimentos = atendimentos,
      concluidos = concluidos
    }
  end
end

vRP.prepare("MaraltoHP/smartphone_instagram", "SELECT * FROM smartphone_instagram WHERE user_id = @user_id")
vRP.prepare("MaraltoHP/updateUserPhoto", "REPLACE INTO mrlt_hp_fotos(user_id,avatarURL) values(@user_id,@url)")
hpServer.CheckImagePlayer = function(user_id)
  local infos = vRP.query("MaraltoHP/smartphone_instagram", {user_id = parseInt(user_id)})
  if infos[1] and infos[1].avatarURL and infos[1].avatarURL ~= "" then
      return infos[1].avatarURL
  else
      return "https://cdn.discordapp.com/attachments/452891038349262849/959382742624260136/unknown.png"
  end
end
 

function hpServer.getUserInfos(a)
  local identity = vRP.getUserIdentity(parseInt(a))
  if identity and identity.nome then
    local photo = vRP.query("MaraltoHP/smartphone_instagram", {user_id = a})
    local history = vRP.query("MaraltoHP/getUserData", {user_id = a}) or {}
    local foto = ""
    
    -- Verifica se a consulta retorna resultados e se avatarURL existe
    if photo[1] and photo[1].avatarURL then
      foto = photo[1].avatarURL
    else
      foto = "https://cdn.discordapp.com/attachments/452891038349262849/959382742624260136/unknown.png"
    end

    return {
      user_id = a,
      user_image = foto,
      name = identity.nome .. " " .. identity.sobrenome .. " #" .. a,
      age = identity.idade,
      phone = identity.telefone,
      registration = identity.registro,
      history = history
    }
  end
end

function hpServer.updateUserPhoto(a, b)
  vRP.execute("MaraltoHP/updateUserPhoto", {user_id = a, url = b})
end

function dump(o)
  if type(o) == 'table' then
     local s = '{ '
     for k,v in pairs(o) do
        if type(k) ~= 'number' then k = '"'..k..'"' end
        s = s .. '['..k..'] = ' .. dump(v) .. ','
     end
     return s .. '} '
  else
     return tostring(o)
  end
end

local gesso = {}

function hpServer.engessar(a, b)
  local source = source
  local user_id = vRP.getUserId(source)
  if user_id then
    local nsource = vRP.getUserSource(parseInt(a))
    if not nsource then
      cfg.notify(source, user_id, cfg.msgs.nao_encontrado.css, cfg.msgs.nao_encontrado.msg)
      return
    end

   if not vCLIENT.checkGessoDist(nsource) then
     cfg.notify(source, user_id, cfg.msgs.gesso_error_3.css, cfg.msgs.gesso_error_3.msg)
     return
   end

    gesso[parseInt(a)] = true
    vCLIENT.forceCloseNUI(source)
    cfg.gesso.carryEvent(source, nsource)
    vRPclient._playAnim(source, false, {{"amb@prop_human_parking_meter@female@idle_a","idle_a_female"}}, true)
    vRP.setUData(parseInt(a), "MaraltoHP:oldCustomization", json.encode(vRPclient.getCustomization(nsource)))
    SetTimeout(5000, function()
      cfg.gesso.carryEvent(source, nsource)
      TriggerClientEvent("MaraltoHP/Gesso/apply", nsource, b, cfg.gesso.preset)
      cfg.notify(source, user_id, cfg.msgs.gesso_success_1.css, cfg.msgs.gesso_success_1.msg)
      cfg.notify(nsource, vRP.getUserId(nsource), cfg.msgs.gesso_success_1_1.css, cfg.msgs.gesso_success_1_1.msg)
      vRPclient.stopAnim(source)
    end)
  end
end


function hpServer.chamar(a)
  local source = source
  local user_id = vRP.getUserId(source)
  local nsource = vRP.getUserSource(parseInt(a))
  local identity = vRP.getUserIdentity(parseInt(a))
  
  if not nsource then
    cfg.notify(source, user_id, cfg.msgs.nao_encontrado.css, cfg.msgs.nao_encontrado.msg)
    return
  end
  
  if antiflood[a] then
    cfg.notify(source, user_id, cfg.msgs.chamar_error.css, cfg.msgs.chamar_error.msg)
    return
  end
  
  antiflood[a] = true
  cfg.notify(source, a, cfg.msgs.dirija_se.css, cfg.msgs.dirija_se.msg)

  local playerCoords = GetEntityCoords(GetPlayerPed(source))
  local hospitalCoords = vector3(-438.13,-324.85,34.91) 
  local distance = #(playerCoords - hospitalCoords)

  if distance <= 50.0 then -- Se a distância ao hospital igual a 50 metros
 
    vCLIENT.playAudioFromURL(-1, "http://181.215.254.182/hp/bip.mp3", 1, table.unpack(cfg.atendimentos.soundCoords), 5000)
    Citizen.Wait(5000)

    local url = string.format("https://translate.google.com/translate_tts?ie=UTF-8&tl=%s&client=tw-ob&q=%s", "pt-BR", (identity.nome .. " " .. identity.sobrenome) .. ", Dirija-se a Emergencia.")
    
    TriggerClientEvent("sjr_me:sound", -1, url, 0.5, cfg.atendimentos.soundCoords[1], cfg.atendimentos.soundCoords[2], cfg.atendimentos.soundCoords[3], 5000)
    vCLIENT.playAudioFromURL(-1, url, 1, table.unpack(cfg.atendimentos.soundCoords), 5000)
  end
  
  Citizen.SetTimeout(30000, function()
    if antiflood[a] then
      antiflood[a] = nil
    end
  end)
end


function hpServer.desengessar(a)
  local source = source
  local user_id = vRP.getUserId(source)
  local nsource = vRP.getUserSource(parseInt(a))

  if not gesso[a] then
    cfg.notify(source, user_id, cfg.msgs.gesso_error_2.css, cfg.msgs.gesso_error_2.msg)
    return
  end

  if not nsource then
    cfg.notify(source, user_id, cfg.msgs.nao_encontrado.css, cfg.msgs.nao_encontrado.msg)
    return
  end

  if not vCLIENT.checkGessoDist(nsource) then
    cfg.notify(source, vRP.getUserId(source), cfg.msgs.gesso_error_3.css, cfg.msgs.gesso_error_3.msg)
    return
  end

  vCLIENT.forceCloseNUI(source)
  gesso[a] = nil
  cfg.gesso.carryEvent(source, nsource)
  vRPclient._playAnim(source, false, {{"amb@prop_human_parking_meter@female@idle_a","idle_a_female"}}, true)
  Citizen.SetTimeout(5000, function()
    cfg.gesso.carryEvent(source, nsource)
    TriggerClientEvent("MaraltoHP/Gesso/remove", nsource, json.decode(vRP.getUData(parseInt(a), "MaraltoHP:oldCustomization")))
    cfg.notify(source, user_id, cfg.msgs.gesso_success_2.css, cfg.msgs.gesso_success_2.msg)
    cfg.notify(nsource, parseInt(a), cfg.msgs.gesso_success_2_1.css, cfg.msgs.gesso_success_2_1.msg)
    Citizen.SetTimeout(2000, function()
      vRP.setUData(parseInt(a), "MaraltoHP:oldCustomization", json.encode({}))
    end)
    vRPclient.stopAnim(source)
  end)
end

local ematendimento = {}

RegisterServerEvent("MaraltoHP/Atendimentos/accept")
AddEventHandler("MaraltoHP/Atendimentos/accept", function(a)
  local source = source
  for fg, fh in pairs(atend) do
    if fh.id == a and not fh.accepted then
      a = fg
    else
      cfg.notify(source, vRP.getUserId(source), cfg.msgs.ja_atendido.css, cfg.msgs.ja_atendido.msg)
    end
  end
  if atend[a] and atend[a].accepted == nil then
    atend[a].accepted = true
    atend[a].owner = vRP.getUserId(source)
    Citizen.Wait(40)
    vCLIENT.updatePAT(-1, atend)
    return
  end
end)

local pendente = {}

RegisterServerEvent("MaraltoHP/Atendimentos/new")
AddEventHandler("MaraltoHP/Atendimentos/new", function(a)
  local source = source
  local user_id = vRP.getUserId(source)
  if user_id then
    if pendente[a] then
      cfg.notify(source, vRP.getUserId(source), cfg.msgs.atendimento_error_1.css, cfg.msgs.atendimento_error_1.msg)
    elseif a ~= nil and a ~= "" then
      local identity = vRP.getUserIdentity(user_id)
      atendimentos = atendimentos + 1
      local at_id = "AT_" .. atendimentos
      atend[#atend + 1] = {
        id = at_id,
        user_id = user_id,
        name = identity.nome .. " " .. identity.sobrenome .. " #" .. user_id,
        ocorrency = a,
        time = os.date("%d/%m/%y | %H:%M")
      }
      Citizen.Wait(40)
      vCLIENT.updatePAT2(-1, atend)
      cfg.notify(source, user_id, cfg.msgs.atendimento_registrado.css, cfg.msgs.atendimento_registrado.msg)
    end
  end
end)

RegisterServerEvent("MaraltoHP/Atendimentos/end")
AddEventHandler("MaraltoHP/Atendimentos/end", function(a)
  for fe, fg in pairs(atend) do
    if fg.id == a then
      concluidos = concluidos + 1
      atend[fe] = nil
      Citizen.Wait(40)
      vCLIENT.removePAT(-1, a)
    end
  end
end)
