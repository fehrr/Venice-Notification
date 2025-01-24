cfg = {
  debug = false,
  blacklist = 0,
  CommandChamados = "chamarpolicia",
  CommandOpen = 'mdt',

  webhook = {
      leaveorg = 'https://discord.com/api/webhooks/1279008522620895274/Fi4qsFwinAgK7QNdsYs_cTMD-9Dvb_mbpcQR8GBKs_s78dUa7lFKZ1dk9F5_PF3eKZPh',
      invite = 'https://discord.com/api/webhooks/1279008522620895274/Fi4qsFwinAgK7QNdsYs_cTMD-9Dvb_mbpcQR8GBKs_s78dUa7lFKZ1dk9F5_PF3eKZPh',
      demote = 'https://discord.com/api/webhooks/1279008522620895274/Fi4qsFwinAgK7QNdsYs_cTMD-9Dvb_mbpcQR8GBKs_s78dUa7lFKZ1dk9F5_PF3eKZPh',
      multar = 'https://discord.com/api/webhooks/1279008522620895274/Fi4qsFwinAgK7QNdsYs_cTMD-9Dvb_mbpcQR8GBKs_s78dUa7lFKZ1dk9F5_PF3eKZPh',
      prender = 'https://discord.com/api/webhooks/1279008522620895274/Fi4qsFwinAgK7QNdsYs_cTMD-9Dvb_mbpcQR8GBKs_s78dUa7lFKZ1dk9F5_PF3eKZPh',
  },

  BlipChamado = {126, 2, 0.6},
  CodesBlip = {  -- blip/color
      ['QTH'] = {56, 2, 0.6},
      ['QTI'] = {8, 1, 0.6},
      ['QRR'] = {56, 2, 0.6},
      ['QRT'] = {56, 2, 0.6}
  },

  langs = {
      isBlackList = function(source, dia, mes, hora, minutos)
          return TriggerClientEvent("Notify", source, "negado", 
              "Atenção: Você só poderá entrar em organização no dia "..dia.."/"..mes.." às "..hora..":"..minutos..".", 5000)
      end,
      haveBlackList = function(source, dia, mes, hora, minutos)
          return TriggerClientEvent("Notify", source, "negado", 
              "Este jogador está proibido de entrar em qualquer organização até dia "..dia.."/"..mes.." às "..hora..":"..minutos..".", 5000)
      end,
  },
  
  Groups = {
      ['Policiathunder'] = {}, --orgName
      ['PoliciaExercito'] = {},
      ['PoliciaCivil'] = {}
  }
}
--------------------------------------------------------------------------------------------------------------
-- Configuração comum para todos os grupos em 'Policiathunder' -----------------------------------------------
--------------------------------------------------------------------------------------------------------------
local commonConfigthunder = {
  Config = { isAdmin = true }, -- se é líder ou não
  Recrute = { 
      "Comandothunder", "Coronelthunder", "TenenteCoronelthunder", "Majorthunder", 
      "Capitaothunder", "PrimeiroTenentethunder", "SegundoTenentethunder", 
      "SubTenentethunder", "PrimeiroSargentothunder", "SegundoSargentothunder", 
      "TerceiroSargentothunder", "Cabothunder", "Soldadothunder", "Alunothunder"
  }
}

-- Permisão para abrir mdt
local groupsToAssignPoliciathunder = {'Comandothunder', 'Coronelthunder', 'TenenteCoronelthunder', 'Majorthunder', 'Capitaothunder', 'PrimeiroTenentethunder', 'SegundoTenentethunder', 'SubTenentethunder', 'PrimeiroSargentothunder', 'SegundoSargentothunder', 'TerceiroSargentothunder', 'Cabothunder', 'Soldadothunder', 'Alunothunder'}

for _, groupName in ipairs(groupsToAssignPoliciathunder) do
  cfg.Groups['Policiathunder'][groupName] = commonConfigthunder
end
-------------------------------------------------------------------------------------------------------------
-- Configuração comum para 'PoliciaExercito' ----------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------
local commonConfigPoliciaExercito = {
  Config = { isAdmin = true }, -- se é líder ou não
  Recrute = { 
      "TenenteCoronel", "Major", "Capitao", "PrimeiroTenente", 
      "SegundoTenente", "SubTenente", "PrimeiroSargento", 
      "SegundoSargento", "TerceiroSargento", "Cabo", "Soldado"
  }
}

-- Permisão para abrir mdt
local groupsToAssignPoliciaExercito = {'Coronel', 'TenenteCoronel', 'Major', 'Capitao', 'PrimeiroTenente', 'SegundoTenente', 'SubTenente', 'PrimeiroSargento', 'SegundoSargento', 'TerceiroSargento', 'Cabo', 'Soldado'}

for _, groupName in ipairs(groupsToAssignPoliciaExercito) do
  cfg.Groups['PoliciaExercito'][groupName] = commonConfigPoliciaExercito
end
-------------------------------------------------------------------------------------------------------------
-- Configuração comum para 'PoliciaCivil' -------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------
local commonConfigPoliciaCivil = {
  Config = { isAdmin = true }, -- se é líder ou não
  Recrute = { 
      "ComandanteCore", "SubComandanteCore", "Delegado", 
      "Core", "Perito", "Escrivao", "Investigador", 
      "Agente", "Recruta"
  }
}

-- Permisão para abrir mdt
local groupsToAssignPoliciaCivil = {'DelegadoGeral', 'ComandanteCore', 'SubComandanteCore', 'Delegado', 'Core', 'Perito', 'Escrivao', 'Investigador', 'Agente', 'Recruta'}

for _, groupName in ipairs(groupsToAssignPoliciaCivil) do
  cfg.Groups['PoliciaCivil'][groupName] = commonConfigPoliciaCivil
end
