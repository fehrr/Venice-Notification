local cfg = {}

cfg.groups = {
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- ADMINISTRAÇÃO
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	["owner"] = { _config = { gtype = "staff", salario = 0 }, "admin.permissao", "dv.permissao","player.som", "ticket.permissao", "developer.permissao","player.blips", "player.noclip", "player.teleport", "player.secret", "player.spec", "player.wall","spec.permissao", "mqcu.permissao", "perm.ptr.staff", "player.som", "perm.algemar", "perm.portearmas" },
	["owneroff"] = { _config = { gtype = "staff", salario = 0 }, "perm.user", "staffoff.permissao", "perm.ptr.staff" },
	["admin"] = { _config = { gtype = "staff", salario = 15000 }, "admin.permissao", "dv.permissao","player.som", "ticket.permissao", "player.blips", "player.noclip", "player.teleport", "player.secret", "player.spec", "player.wall","spec.permissao", "mqcu.permissao", "perm.ptr.staff", "perm.algemar", "player.som" },
	["adminoff"] = { _config = { gtype = "staff", salario = 0 }, "perm.user", "staffoff.permissao", "perm.ptr.staff" },
	["moderador"] = { _config = { gtype = "staff", salario = 12000 }, "moderador.permissao", "player.som","dv.permissao", "ticket.permissao", "player.blips", "player.noclip", "player.teleport", "player.secret", "player.spec", "player.wall","spec.permissao", "mqcu.permissao", "perm.ptr.staff", "perm.algemar", "player.som" },
	["moderadoroff"] = { _config = { gtype = "staff", salario = 0 }, "perm.user", "staffoff.permissao", "perm.ptr.staff" },
	["suporte"] = { _config = { gtype = "staff", salario = 8000 }, "suporte.permissao", "dv.permissao", "player.som","ticket.permissao", "player.blips", "player.noclip", "player.teleport", "player.secret", "player.spec", "player.wall","spec.permissao", "mqcu.permissao", "perm.ptr.staff", "perm.algemar", "player.som" },
	["suporteoff"] = { _config = { gtype = "staff", salario = 0 }, "perm.user", "staffoff.permissao", "perm.ptr.staff" },
	["user"] = { "perm.user"},
	["streamer"] = { _config = { gtype = "staff" }, "player.blips", "player.noclip", "player.teleport", "player.secret", "player.spec", "player.wall", "mqcu.permissao", "streamer.permissao", "perm.algemar", "player.som" },
	["investidoranjo"] = { _config = { gtype = "staff" }, "investidoranjo.permissao" },


	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	-- VIPS 
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	---- VIPS  
	["GaragemVip"] = { _config = { salario = 0, ptr = nil }, "perm.garagemvip" },
	["Inicial"] = { _config = { gtype = "Inicial", salario = 4000, ptr = nil }, "perm.vips", "perm.inicial" },
	["VipNatal"] = { _config = { gtype = "Vip Natal", salario = 50000, ptr = nil }, "perm.vips", "perm.vipnatal", "perm.booster", "perm.roupas", "perm.mochila","player.som" },
	["VipWipe"] = { _config = { gtype = "Vip Wipe", salario = 20000, ptr = nil }, "perm.vips", "perm.vipwipe", "perm.booster", "perm.roupas", "perm.mochila","player.som" },
	--["VipCrianca"] = { _config = { gtype = "Vip Crianca", salario = 3000, ptr = nil }, "perm.vips", "perm.crianca", "perm.booster", "perm.roupas", "perm.mochila","player.som" },
	["VipBronze"] = { _config = { gtype = "Vip Bronze", salario = 12000, ptr = nil }, "perm.bronze", "perm.booster", "perm.roupas", "player.som"},
	["VipPrata"] = { _config = { gtype = "Vip Prata", salario = 14000, ptr = nil }, "perm.prata", "perm.booster", "perm.roupas", "player.som" },
    ["VipOuro"] = { _config = { gtype = "Vip Ouro", salario = 17000, ptr = nil }, "perm.vipouro", "perm.booster", "perm.roupas","player.som" },
	["VipPlatina"] = { _config = { gtype = "Vip Platina", salario = 22000, ptr = nil }, "perm.vips", "perm.vipplatina", "perm.booster", "perm.roupas", "player.som" },
	["VipDiamante"] = { _config = { gtype = "Vip Diamante", salario = 24000, ptr = nil }, "perm.vips", "perm.vipdiamante", "perm.booster", "perm.roupas", "perm.mochila","player.som" },
	["Vipthunder"] = { _config = { gtype = "Vip thunder", salario = 25000, ptr = nil }, "perm.vips", "perm.vipthunder", "perm.booster", "perm.roupas", "perm.mochila","player.som" },
	["VipSupremothunder"] = { _config = { gtype = "VipSupremo thunder", salario = 32000, ptr = nil }, "perm.vips", "perm.vipsupremothunder", "perm.booster", "perm.roupas", "perm.mochila","player.som", "perm.fixvip" },
	["VipMonster"] = { _config = { gtype = "Vip Monster", salario = 37000, ptr = nil }, "perm.vips", "perm.vipmonster", "perm.booster", "perm.roupas", "perm.mochila","player.som", "perm.fixvip" },
	["VipGod"] = { _config = { gtype = "Vip God", salario = 47000, ptr = nil }, "perm.vips","perm.vipgod","perm.booster", "perm.roupas", "perm.mochila","player.som", "perm.fixvip" },
	["VipRubi"] = { _config = { gtype = "Vip Rubi", salario = 69000, ptr = nil }, "perm.vips","perm.viprubi","perm.booster", "perm.roupas", "perm.mochila","player.som", "perm.fixvip" },
	["VipEsmeralda"] = { _config = { gtype = "Vip Esmeralda", salario = 80000, ptr = nil }, "perm.vips","perm.vipesmeralda", "perm.booster", "perm.roupas", "perm.mochila","player.som", "perm.fixvip" },
	

     ["PilotoParticular"] = { _config = { salario = 0, ptr = nil }, "piloto.permissao" },

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- BENEFICIOS
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	["Estagiario"] = { _config = { gtype = "jobdois", salario = 2000, ptr = nil }, "perm.estagiario"},
	["Funcionario"] = { _config = { gtype = "jobtres", salario = 4000, ptr = nil }, "perm.funcionario"},
	["Gerente"] = { _config = { gtype = "jobquatro", salario = 6000, ptr = nil }, "perm.gerente"},
	["Patrao"] = { _config = { gtype = "jobcinco", salario = 8000, ptr = nil }, "perm.patrao"},
	["CasaDoFranklin"] = { _config = { gtype = "jobseis", salario = 0, ptr = nil }, "perm.franklin"},
	["spotify"] = { _config = { gtype = "spotify", salario = 0, ptr = nil },"player.som", "perm.spotify" },
	["Booster"] = { _config = { salario = 0, ptr = nil }, "perm.booster" },
	["Verificado"] = { _config = { salario = 0, ptr = nil }, "perm.verificado"},
	["Vagas"] = { _config = { salario = 0, ptr = nil }, "perm.vagastres"},
	["VagasQuarenta"] = { _config = { salario = 0, ptr = nil }, "perm.vagasquarenta"}, 
	
	["valecasa"] = { _config = { salario = 0, ptr = nil }, "valecasa.permissao"}, 
	["valegaragem"] = { _config = { salario = 0, ptr = nil }, "valegaragem.permissao"}, 
	["cirurgia"] = { _config = { salario = 0, ptr = nil }, "cirurgia.permissao"}, 
	["foxzin"] = { _config = { salario = 0, ptr = nil }, "foxzin.permissao"}, 
	["ilegal"] = { _config = { salario = 25000, ptr = nil }, "ilegal.permissao"}, 
	["evento"] = { _config = { salario = 25000, ptr = nil }, "perm.evento"}, 

	["ValeCasaEsmeralda"] = { _config = { salario = 0, ptr = nil }, "valecasaesmeralda.permissao"}, 
	["ValeCasaRubi"] = { _config = { salario = 0, ptr = nil }, "valecasarubi.permissao"}, 

	["playboy"] = { _config = { salario = 0, ptr = nil }, "playboy.permissao"}, 
	["malibu"] = { _config = { salario = 0, ptr = nil }, "perm.malibu"}, 

	["starckhouse"] = { _config = { salario = 0, ptr = nil }, "perm.starckhouse"}, 
	["snakehouse"] = { _config = { salario = 0, ptr = nil }, "perm.snakehouse"}, 
	["beiramarhouse"] = { _config = { salario = 0, ptr = nil }, "perm.beiramarhouse"}, 
	["casadolado"] = { _config = { salario = 0, ptr = nil }, "perm.casadolago"}, 

	["manobras"] = { _config = { salario = 0, ptr = nil }, "perm.manobras"}, 

	-- barcos

	["sr650fly"] = { _config = { salario = 0, ptr = nil }, "sr650fly.permissao"}, 
	["yacht2"] = { _config = { salario = 0, ptr = nil }, "yacht2.permissao"}, 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- MANSÃO PERMS
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
["fox"] = { _config = { salario = 0, ptr = nil }, "perm.fox"},
["d4k"] = { _config = { salario = 0, ptr = nil }, "perm.d4k"},
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- POLICIA Thunder
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
["ComandoThunder"] = { _config = { gtype = "org", salario = 17000, ptr = nil, orgName = "PoliciaThunder" }, "perm.policia", "perm.policiathunder", "perm.recrutamentopm", "perm.baupolicialiderThunder", "player.blips","perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioThunder" },
["CoronelThunder"] = { _config = { gtype = "org", salario = 17000, ptr = nil, orgName = "PoliciaThunder" }, "perm.policia", "perm.policiathunder", "perm.recrutamentopm", "perm.baupolicialiderThunder", "player.blips","perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioThunder" },
["TenenteCoronelThunder"] = { _config = { gtype = "org", salario = 18000, ptr = nil, orgName = "PoliciaThunder" }, "perm.policia", "perm.policiathunder", "perm.baupolicialiderThunder","perm.recrutamentopm", "player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioThunder"  },
["MajorThunder"] = { _config = { gtype = "org", salario = 17000, ptr = nil, orgName = "PoliciaThunder" }, "perm.policia",  "perm.policiathunder", "player.blips","perm.recrutamentopm","perm.baupolicialiderThunder", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioThunder"  },
["CapitaoThunder"] = { _config = { gtype = "org", salario = 16000, ptr = nil , orgName = "PoliciaThunder"}, "perm.policia", "perm.policiathunder", "player.blips","perm.recrutamentopm","perm.baupolicialiderThunder", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioThunder"  },
["PrimeiroTenenteThunder"] = { _config = { gtype = "org", salario = 15000, ptr = nil, orgName = "PoliciaThunder" }, "perm.policia", "perm.policiathunder", "player.blips","perm.recrutamentopm", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioThunder"  },
["SegundoTenenteThunder"] = { _config = { gtype = "org", salario = 14000, ptr = nil, orgName = "PoliciaThunder" }, "perm.policia", "perm.policiathunder", "player.blips","perm.recrutamentopm", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioThunder"  },
["SubTenenteThunder"] = { _config = { gtype = "org", salario = 13000, ptr = nil, orgName = "PoliciaThunder" }, "perm.policia", "perm.policiathunder", "player.blips", "perm.disparo","perm.recrutamentopm", "perm.portasolicia", "perm.algemar", "perm.radioThunder"  },
["PrimeiroSargentoThunder"] = { _config = { gtype = "org", salario = 12000, ptr = nil, orgName = "PoliciaThunder" }, "perm.policia", "perm.policiathunder", "player.blips","perm.recrutamentopm", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioThunder"  },
["SegundoSargentoThunder"] = { _config = { gtype = "org", salario = 11000, ptr = nil, orgName = "PoliciaThunder" }, "perm.policia", "perm.policiathunder", "player.blips","perm.recrutamentopm", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioThunder"  },
["TerceiroSargentoThunder"] = { _config = { gtype = "org", salario = 10000, ptr = nil, orgName = "PoliciaThunder" }, "perm.policia", "perm.policiathunder", "player.blips","perm.recrutamentopm", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioThunder"  },
["CaboThunder"] = { _config = { gtype = "org", salario = 9000, ptr = nil, orgName = "PoliciaThunder" }, "perm.policia", "perm.policiathunder", "player.blips", "perm.disparo","perm.recrutamentopm", "perm.portasolicia", "perm.algemar", "perm.radioThunder"  },
["SoldadoThunder"] = { _config = { gtype = "org", salario = 8000, ptr = nil, orgName = "PoliciaThunder" }, "perm.policia", "perm.policiathunder", "player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioThunder"  },
["AlunoThunder"] = { _config = { gtype = "org", salario = 7000, ptr = nil, orgName = "PoliciaThunder" }, "perm.policia", "perm.policiathunder", "player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioThunder"  },


["Chamado Policia"] = { _config = { salario = 0, ptr = nil }, "perm.chamadoPolicia" },

	
-------------------------------------------------
-- POLICIA EXERCITO ---------
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
["Coronel"] = { _config = { gtype = "org", salario = 30000, ptr = nil, orgName = "PoliciaExercito" }, "perm.policia", "perm.policiaexercito", "perm.baupolicialider","perm.recrutamentoexercito", "player.blips","perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioexercito" },
["TenenteCoronel"] = { _config = { gtype = "org", salario = 28000, ptr = nil, orgName = "PoliciaExercito" }, "perm.policia", "perm.policiaexercito", "perm.baupolicialider","perm.recrutamentoexercito", "player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioexercito"  },
["Major"] = { _config = { gtype = "org", salario = 26000, ptr = nil, orgName = "PoliciaExercito" }, "perm.policia", "perm.policiaexercito", "player.blips", "perm.disparo","perm.recrutamentoexercito", "perm.portasolicia", "perm.algemar", "perm.radioexercito"  },
["Capitao"] = { _config = { gtype = "org", salario = 24000, ptr = nil , orgName = "PoliciaExercito"}, "perm.policia", "perm.policiaexercito", "player.blips", "perm.disparo","perm.recrutamentoexercito", "perm.portasolicia", "perm.algemar", "perm.radioexercito"  },
["PrimeiroTenente"] = { _config = { gtype = "org", salario = 22000, ptr = nil, orgName = "PoliciaExercito" }, "perm.policia", "perm.policiaexercito", "player.blips","perm.recrutamentoexercito", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioexercito"  },
["SegundoTenente"] = { _config = { gtype = "org", salario = 20000, ptr = nil, orgName = "PoliciaExercito" }, "perm.policia", "perm.policiaexercito", "player.blips","perm.recrutamentoexercito", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioexercito"  },
["SubTenente"] = { _config = { gtype = "org", salario = 18000, ptr = nil, orgName = "PoliciaExercito" }, "perm.policia", "perm.policiaexercito", "player.blips","perm.recrutamentoexercito", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioexercito"  },
["PrimeiroSargento"] = { _config = { gtype = "org", salario = 16000, ptr = nil, orgName = "PoliciaExercito" }, "perm.policia", "perm.policiaexercito", "player.blips","perm.recrutamentoexercito", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioexercito"  },
["SegundoSargento"] = { _config = { gtype = "org", salario = 14000, ptr = nil, orgName = "PoliciaExercito" }, "perm.policia", "perm.policiaexercito", "player.blips", "perm.recrutamentoexercito","perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioexercito"  },
["TerceiroSargento"] = { _config = { gtype = "org", salario = 12000, ptr = nil, orgName = "PoliciaExercito" }, "perm.policia", "perm.policiaexercito", "player.blips","perm.recrutamentoexercito", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioexercito"  },
["Cabo"] = { _config = { gtype = "org", salario = 10000, ptr = nil, orgName = "PoliciaExercito" }, "perm.policia", "perm.policiaexercito", "player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioexercito"  },
["Soldado"] = { _config = { gtype = "org", salario = 8000, ptr = nil, orgName = "PoliciaExercito" }, "perm.policia", "perm.policiaexercito", "player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radioexercito"  },

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- POLICIA CIVIL
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
["DelegadoGeral"] = { _config = { gtype = "org", salario = 25000, ptr = nil, orgName = "PoliciaCivil" }, "perm.policiacivil","perm.policia","perm.recrutamentocivil", "perm.baupoliciacivillider", "player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radiocivil"  },
["ComandanteCore"] = { _config = { gtype = "org", salario = 25000, ptr = nil, orgName = "PoliciaCivil" }, "perm.policiacivil","perm.policia","perm.recrutamentocivil", "perm.baupoliciacivillider", "player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radiocivil"  },
["SubComandanteCore"] = { _config = { gtype = "org", salario = 20000, ptr = nil, orgName = "PoliciaCivil" }, "perm.policiacivil","perm.policia","perm.recrutamentocivil", "perm.baupoliciacivillider", "player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radiocivil"  },
["Delegado"] = { _config = { gtype = "org", salario = 15000, ptr = nil, orgName = "PoliciaCivil" }, "perm.policiacivil","perm.recrutamentocivil", "perm.policia","player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radiocivil"  },
["Core"] = { _config = { gtype = "org", salario = 15000, ptr = nil, orgName = "PoliciaCivil" }, "perm.policiacivil","perm.policia","perm.recrutamentocivil", "player.blips", "perm.disparo", "perm.policia.radio", "perm.portasolicia", "perm.algemar", "perm.radiocivil" },
["Perito"] = { _config = { gtype = "org", salario = 12000, ptr = nil, orgName = "PoliciaCivil" }, "perm.policiacivil","perm.policia","perm.recrutamentocivil", "player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radiocivil"  },
["Escrivao"] = { _config = { gtype = "org", salario = 10000, ptr = nil, orgName = "PoliciaCivil" }, "perm.policiacivil","perm.policia","perm.recrutamentocivil", "player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radiocivil"  },
["Investigador"] = { _config = { gtype = "org", salario = 8000, ptr = nil, orgName = "PoliciaCivil" }, "perm.policiacivil","perm.policia","perm.recrutamentocivil", "player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radiocivil"  },
["Agente"] = { _config = { gtype = "org", salario = 6000, ptr = nil, orgName = "PoliciaCivil" }, "perm.policiacivil","perm.policia", "player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radiocivil"  },
["Recruta"] = { _config = { gtype = "org", salario = 4000, ptr = nil, orgName = "PoliciaCivil" }, "perm.policiacivil","perm.policia", "player.blips", "perm.disparo", "perm.portasolicia", "perm.algemar", "perm.radiocivil"  },


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- HOSPITAL
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
["Diretor"] = { _config = { gtype = "org", salario = 16000, ptr = nil, orgName = "Hospital" },"dv.permissao","perm.recrutamentohp", "hospital.permissao","perm.unizk","perm.hplider","perm.radiohp","samu.permissao" },
["ViceDiretor"] = { _config = { gtype = "org", salario = 14000, ptr = nil, orgName = "Hospital"},"dv.permissao","perm.recrutamentohp", "hospital.permissao","perm.unizk","perm.hplider","perm.radiohp", "samu.permissao" },
["Medico"] = { _config = { gtype = "org", salario = 12000, ptr = nil, orgName = "Hospital"},"dv.permissao","perm.recrutamentohp", "hospital.permissao","perm.unizk", "perm.radiohp","samu.permissao" },
["Enfermeiro"] = { _config = { gtype = "org", salario = 10000, ptr = nil, orgName = "Hospital"}, "hospital.permissao","perm.recrutamentohp","perm.unizk","perm.radiohp", "samu.permissao" },
["Socorrista"] = { _config = { gtype = "org", salario = 8000, ptr = nil, orgName = "Hospital"}, "hospital.permissao","perm.unizk","perm.radiohp", "samu.permissao" },
["Estagiario"] = { _config = { gtype = "org", salario = 6000, ptr = nil, orgName = "Hospital"},"dv.permissao", "hospital.permissao","perm.unizk", "perm.radiohp","samu.permissao" },

["Chamado Hospital"] = { _config = { salario = 0, ptr = nil }, "perm.chamadoHospital" },

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- BOMBEIROS
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
["CoronelBombeiros"] = { _config = { gtype = "org", salario = 27000, ptr = nil, orgName = "Hospital" },"dv.permissao","perm.recrutamentobombeiro","bombeiroslider.permissao", "perm.radiobombeiros", "perm.unizk" },
["MajorBombeiros"] = { _config = { gtype = "org", salario = 25000, ptr = nil, orgName = "Hospital"},"dv.permissao","bombeiroslider.permissao","perm.recrutamentobombeiro", "perm.radiobombeiros", "perm.unizk" },
["SargentoBombeiros"] = { _config = { gtype = "org", salario = 23000, ptr = nil, orgName = "Hospital"},"dv.permissao","bombeiroslider.permissao","perm.recrutamentobombeiro","perm.radiobombeiros",  "perm.unizk" },
["TenenteBombeiros"] = { _config = { gtype = "org", salario = 20000, ptr = nil, orgName = "Hospital"},"dv.permissao","bombeiroslider.permissao", "perm.recrutamentobombeiro","perm.radiobombeiros", "perm.unizk" },
["SubTenenteBombeiros"] = { _config = { gtype = "org", salario = 17000, ptr = nil, orgName = "Hospital"},"dv.permissao", "perm.unizk" },
["SocorristaBombeiros"] = { _config = { gtype = "org", salario = 10000, ptr = nil, orgName = "Hospital"}, "perm.unizk" },

["Chamado Hospital"] = { _config = { salario = 0, ptr = nil }, "perm.chamadoBombeiro" },
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- JUDICIARIO
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
["Ministro"] = { _config = { gtype = "org", salario = 20000, ptr = nil, orgName = "Judiciario"}, "perm.judiciario","perm.policia","perm.radiojudiciario", "perm.recrutamentojudiciario" },
["Juiz"] = { _config = { gtype = "org", salario = 10000, ptr = nil, orgName = "Judiciario"}, "perm.judiciario","perm.policia", "perm.radiojudiciario","perm.recrutamentojudiciario"},
["Desembargador"] = { _config = { gtype = "org", salario = 10000, orgName = "Judiciario"}, "perm.judiciario","perm.policia","perm.radiojudiciario","perm.recrutamentojudiciario" },
["Promotor"] = { _config = { gtype = "org", salario = 8000, ptr = nil, orgName = "Judiciario"}, "perm.judiciario","perm.policia","perm.radiojudiciario","perm.recrutamentojudiciario" },
["Advogado"] = { _config = { gtype = "org", salario = 5000, ptr = nil, orgName = "Judiciario"}, "perm.judiciario","perm.policia","perm.radiojudiciario","perm.recrutamentojudiciario" },

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  /groupadd 1 "lider bloods"
-- ARMAS
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


--DEMONIKE--
["Lider [DEMONIKE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Demonike", orgType = "Armas"}, "perm.demonike","perm.recrutamentodemonike", "perm.liderdemonike", "perm.arma", "perm.ilegal", "perm.baudemonike"},
["Sub-Lider [DEMONIKE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Demonike", orgType = "Armas"}, "perm.liderdemonike","perm.recrutamentodemonike", "perm.demonike", "perm.arma", "perm.ilegal", "perm.baudemonike"},
["Gerente [DEMONIKE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Demonike", orgType = "Armas"}, "perm.demonike","perm.recrutamentodemonike", "perm.arma", "perm.ilegal", "perm.baudemonike"},
["Recrutador [DEMONIKE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Demonike", orgType = "Armas"}, "perm.demonike","perm.recrutamentodemonike", "perm.arma", "perm.ilegal", "perm.baudemonike"},
["Membro [DEMONIKE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Demonike", orgType = "Armas"}, "perm.demonike","perm.recrutamentodemonike", "perm.arma", "perm.ilegal", "perm.baudemonike"},
["Aviaozinho [DEMONIKE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Demonike", orgType = "Armas"}, "perm.demonike", "perm.arma", "perm.ilegal"},

--PCC--
["Lider [PCC]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "PCC", orgType = "Armas"}, "perm.pcc", "perm.liderpcc","perm.recrutamentopcc", "perm.arma", "perm.ilegal", "perm.baupcc"},
["Sub-Lider [PCC]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "PCC", orgType = "Armas"}, "perm.liderpcc", "perm.pcc","perm.recrutamentopcc", "perm.arma", "perm.ilegal", "perm.baupcc"},
	["Gerente [PCC]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "PCC", orgType = "Armas"}, "perm.pcc", "perm.arma","perm.recrutamentopcc", "perm.ilegal", "perm.baupcc"},
	["Recrutador [PCC]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "PCC", orgType = "Armas"}, "perm.pcc", "perm.arma","perm.recrutamentopcc", "perm.ilegal", "perm.baupcc"},
	["Membro [PCC]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "PCC", orgType = "Armas"}, "perm.pcc", "perm.arma","perm.recrutamentopcc", "perm.ilegal", "perm.baupcc"},
	["Aviaozinho [PCC]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "PCC", orgType = "Armas"}, "perm.pcc", "perm.arma", "perm.ilegal"},
	
	--MAFIA--
	["Lider [MAFIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Mafia", orgType = "Municao"}, "perm.mafia", "perm.lidermafia","perm.recrutamentomafia", "perm.arma", "perm.ilegal", "perm.baumafia"},
	["Sub-Lider [MAFIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Mafia", orgType = "Municao"}, "perm.lidermafia", "perm.mafia","perm.recrutamentomafia", "perm.arma", "perm.ilegal", "perm.baumafia"},
	["Gerente [MAFIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Mafia", orgType = "Municao"}, "perm.mafia", "perm.arma", "perm.ilegal","perm.recrutamentomafia", "perm.baumafia"},
	["Recrutador [MAFIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Mafia", orgType = "Municao"}, "perm.mafia", "perm.arma", "perm.ilegal","perm.recrutamentomafia", "perm.baumafia"},
	["Membro [MAFIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Mafia", orgType = "Municao"}, "perm.mafia", "perm.arma", "perm.ilegal","perm.recrutamentomafia", "perm.baumafia"},
	["Aviaozinho [MAFIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Mafia", orgType = "Municao"}, "perm.mafia", "perm.arma","perm.recrutamentomafia", "perm.ilegal"},
	
	--Cartel--
	["Lider [CARTEL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cartel", orgType = "Armas"}, "perm.cartel", "perm.recrutamentocartel", "perm.lidercartel", "perm.arma", "perm.ilegal", "perm.baucartel"},
	["Sub-Lider [CARTEL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cartel", orgType = "Armas"}, "perm.lidercartel","perm.recrutamentocartel",  "perm.cartel", "perm.arma", "perm.ilegal", "perm.baucartel"},
	["Gerente [CARTEL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cartel", orgType = "Armas"}, "perm.cartel","perm.recrutamentocartel",  "perm.arma", "perm.ilegal", "perm.baucartel"},
	["Recrutador [CARTEL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cartel", orgType = "Armas"}, "perm.cartel","perm.recrutamentocartel",  "perm.arma", "perm.ilegal", "perm.baucartel"},
	["Membro [CARTEL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cartel", orgType = "Armas"}, "perm.cartel","perm.recrutamentocartel",  "perm.arma", "perm.ilegal", "perm.baucartel"},
	["Aviaozinho [CARTEL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cartel", orgType = "Armas"}, "perm.cartel", "perm.arma", "perm.ilegal"},
	
	
	--CROACIA--
	["Lider [CROACIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Croacia", orgType = "Armas"}, "perm.croacia","perm.recrutamentocroacia",  "perm.lidercroacia", "perm.arma", "perm.ilegal", "perm.baucroacia"},
	["Sub-Lider [CROACIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Croacia", orgType = "Armas" }, "perm.lidercroacia","perm.recrutamentocroacia", "perm.croacia", "perm.arma", "perm.ilegal", "perm.baucroacia"},
	["Gerente [CROACIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Croacia", orgType = "Armas" }, "perm.croacia","perm.recrutamentocroacia", "perm.arma", "perm.ilegal", "perm.baucroacia"},
	["Recrutador [CROACIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Croacia", orgType = "Armas" }, "perm.croacia", "perm.arma","perm.recrutamentocroacia", "perm.ilegal", "perm.baucroacia"},
	["Membro [CROACIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Croacia", orgType = "Armas" }, "perm.croacia","perm.recrutamentocroacia", "perm.arma", "perm.ilegal", "perm.baucroacia"},
	["Aviaozinho [CROACIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Croacia", orgType = "Armas" }, "perm.croacia", "perm.arma", "perm.ilegal"},

	
	--FRANCA--
	["Lider [FRANCA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Franca", orgType = "Armas"}, "perm.franca","perm.recrutamentofranca", "perm.liderfranca", "perm.arma", "perm.ilegal", "perm.baufranca"},
	["Sub-Lider [FRANCA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Franca", orgType = "Armas"}, "perm.liderfranca","perm.recrutamentofranca", "perm.franca", "perm.arma", "perm.ilegal", "perm.baufranca"},
	["Gerente [FRANCA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Franca", orgType = "Armas"}, "perm.franca","perm.recrutamentofranca", "perm.arma", "perm.ilegal", "perm.baufranca"},
	["Recrutador [FRANCA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Franca", orgType = "Armas"}, "perm.franca", "perm.recrutamentofranca","perm.arma", "perm.ilegal", "perm.baufranca"},
	["Membro [FRANCA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Franca", orgType = "Armas"}, "perm.franca", "perm.recrutamentofranca","perm.arma", "perm.ilegal", "perm.baufranca"},
	["Aviaozinho [FRANCA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Franca", orgType = "Armas"}, "perm.franca", "perm.arma", "perm.ilegal"},
	
	--WOLVES--
	["Lider [WOLVES]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Wolves", orgType = "Armas"}, "perm.wolves","perm.recrutamentowolves", "perm.liderwolves", "perm.arma", "perm.ilegal", "perm.bauwolves"},
	["Sub-Lider [WOLVES]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Wolves", orgType = "Armas"}, "perm.liderwolves","perm.recrutamentowolves", "perm.wolves", "perm.arma", "perm.ilegal", "perm.bauwolves"},
	["Gerente [WOLVES]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Wolves", orgType = "Armas"}, "perm.wolves","perm.recrutamentowolves", "perm.arma", "perm.ilegal", "perm.bauwolves"},
	["Recrutador [WOLVES]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Wolves", orgType = "Armas"}, "perm.wolves", "perm.recrutamentowolves","perm.arma", "perm.ilegal", "perm.bauwolves"},
	["Membro [WOLVES]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Wolves", orgType = "Armas"}, "perm.wolves", "perm.recrutamentowolves","perm.arma", "perm.ilegal", "perm.bauwolves"},
	["Aviaozinho [WOLVES]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Wolves", orgType = "Armas"}, "perm.wolves", "perm.arma", "perm.ilegal"},
	
	--Yakuza--
	["Lider [YAKUZA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Yakuza", orgType = "Armas"}, "perm.lideryakuza", "perm.recrutamentoyakuza","perm.yakuza", "perm.armas", "perm.ilegal", "perm.bauyakuza"},
	["Sub-Lider [YAKUZA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Yakuza", orgType = "Armas"}, "perm.lideryakuza","perm.recrutamentoyakuza", "perm.yakuza", "perm.armas", "perm.ilegal", "perm.bauyakuza"},
	["Gerente [YAKUZA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Yakuza", orgType = "Armas"}, "perm.yakuza","perm.recrutamentoyakuza", "perm.armas", "perm.ilegal", "perm.bauyakuza"},
	["Recrutador [YAKUZA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Yakuza", orgType = "Armas"}, "perm.yakuza","perm.recrutamentoyakuza", "perm.armas", "perm.ilegal", "perm.bauyakuza"},
	["Membro [YAKUZA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Yakuza", orgType = "Armas"}, "perm.yakuza", "perm.recrutamentoyakuza","perm.armas", "perm.ilegal", "perm.bauyakuza"},
	["Aviaozinho [YAKUZA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Yakuza", orgType = "Armas"}, "perm.yakuza", "perm.armas", "perm.ilegal"},
	
	--Triade--
	["Lider [TRIADE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Triade", orgType = "Armas"}, "perm.lidertriade", "perm.recrutamentotriade","perm.triade", "perm.armas", "perm.ilegal", "perm.bautriade"},
	["Sub-Lider [TRIADE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Triade", orgType = "Armas"}, "perm.lidertriade","perm.recrutamentotriade", "perm.triade", "perm.armas", "perm.ilegal", "perm.bautriade"},
	["Gerente [TRIADE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Triade", orgType = "Armas"}, "perm.triade","perm.recrutamentotriade", "perm.armas", "perm.ilegal", "perm.bautriade"},
	["Recrutador [TRIADE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Triade", orgType = "Armas"}, "perm.triade","perm.recrutamentotriade", "perm.armas", "perm.ilegal", "perm.bautriade"},
	["Membro [TRIADE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Triade", orgType = "Armas"}, "perm.triade", "perm.recrutamentotriade","perm.armas", "perm.ilegal", "perm.bautriade"},
	["Aviaozinho [TRIADE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Triade", orgType = "Armas"}, "perm.triade", "perm.armas", "perm.ilegal"},
	
	--Merlim--
	["Lider [MERLIM]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "c", orgType = "Armas"}, "perm.lidermerlim", "perm.recrutamentomerlim","perm.merlim", "perm.armas", "perm.ilegal", "perm.baumerlim"},
	["Sub-Lider [MERLIM]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Merlim", orgType = "Armas"}, "perm.lidermerlim","perm.recrutamentomerlim", "perm.merlim", "perm.armas", "perm.ilegal", "perm.baumerlim"},
	["Gerente [MERLIM]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Merlim", orgType = "Armas"}, "perm.merlim","perm.recrutamentomerlim", "perm.armas", "perm.ilegal", "perm.baumerlim"},
	["Recrutador [MERLIM]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Merlim", orgType = "Armas"}, "perm.merlim","perm.recrutamentomerlim", "perm.armas", "perm.ilegal", "perm.baumerlim"},
	["Membro [MERLIM]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Merlim", orgType = "Armas"}, "perm.merlim", "perm.recrutamentomerlim","perm.armas", "perm.ilegal", "perm.baumerlim"},
	["Aviaozinho [MERLIM]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Merlim", orgType = "Armas"}, "perm.merlim", "perm.armas", "perm.ilegal"},
	
	--GROTA--
	["Lider [GROTA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Grota", orgType = "Municao"}, "perm.gerentegrota","perm.recrutamentogrota",  "perm.grota", "perm.lidergrota", "perm.arma", "perm.ilegal", "perm.baugrota", "perm.baulidergrota"},
	["Sub-Lider [GROTA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Grota", orgType = "Municao"}, "perm.gerentegrota","perm.recrutamentogrota","perm.lidergrota", "perm.grota", "perm.arma", "perm.ilegal", "perm.baugrota", "perm.baulidergrota"},
	["Gerente [GROTA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Grota", orgType = "Municao"}, "perm.gerentegrota","perm.recrutamentogrota","perm.grota", "perm.arma", "perm.ilegal", "perm.baugrota", "perm.baulidergrota"},
	["Recrutador [GROTA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Grota", orgType = "Municao"}, "perm.grota","perm.recrutamentogrota", "perm.arma", "perm.ilegal", "perm.baugrota"},
	["Membro [GROTA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Grota", orgType = "Municao"}, "perm.grota", "perm.arma","perm.recrutamentogrota", "perm.ilegal", "perm.baugrota"},
	["Aviaozinho [GROTA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Grota", orgType = "Municao"}, "perm.grota", "perm.arma", "perm.ilegal"},
	
	
	--TURQUIA--
	["Lider [TURQUIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Turquia", orgType = "Municao"}, "perm.gerenteturquia", "perm.turquia","perm.recrutamentoturquia", "perm.liderturquia", "perm.arma", "perm.ilegal", "perm.bauturquia", "perm.bauliderturquia"},
	["Sub-Lider [TURQUIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Turquia", orgType = "Municao"}, "perm.gerenteturquia","perm.liderturquia","perm.recrutamentoturquia", "perm.turquia", "perm.arma", "perm.ilegal", "perm.bauturquia", "perm.bauliderturquia"},
	["Gerente [TURQUIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Turquia", orgType = "Municao"}, "perm.gerenteturquia","perm.turquia","perm.recrutamentoturquia", "perm.arma", "perm.ilegal", "perm.bauturquia", "perm.bauliderturquia"},
	["Recrutador [TURQUIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Turquia", orgType = "Municao"}, "perm.turquia", "perm.arma", "perm.ilegal","perm.recrutamentoturquia", "perm.bauturquia"},
	["Membro [TURQUIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Turquia", orgType = "Municao"}, "perm.turquia", "perm.arma", "perm.ilegal","perm.recrutamentoturquia", "perm.bauturquia"},
	["Aviaozinho [TURQUIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Turquia", orgType = "Municao"}, "perm.turquia", "perm.arma", "perm.ilegal"},
	
	--BLACKOUT--
	["Lider [BLACKOUT]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "BlackOut", orgType = "Armas"}, "perm.gerenteblackout", "perm.blackout","perm.recrutamentoblackout", "perm.liderblackout", "perm.arma", "perm.ilegal", "perm.baublackout", "perm.bauliderblackout"},
	["Sub-Lider [BLACKOUT]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "BlackOut", orgType = "Armas"}, "perm.gerenteblackout","perm.liderblackout","perm.recrutamentoblackout", "perm.blackout", "perm.arma", "perm.ilegal", "perm.baublackout", "perm.bauliderblackout"},
	["Gerente [BLACKOUT]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "BlackOut", orgType = "Armas"}, "perm.gerenteblackout","perm.blackout","perm.recrutamentoblackout", "perm.arma", "perm.ilegal", "perm.baublackout", "perm.bauliderblackout"},
	["Recrutador [BLACKOUT]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "BlackOut", orgType = "Armas"}, "perm.blackout", "perm.arma", "perm.ilegal","perm.recrutamentoblackout", "perm.baublackout"},
	["Membro [BLACKOUT]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "BlackOut", orgType = "Armas"}, "perm.blackout", "perm.arma", "perm.ilegal","perm.recrutamentoblackout", "perm.baublackout"},
	["Aviaozinho [BLACKOUT]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "BlackOut", orgType = "Armas"}, "perm.blackout", "perm.arma", "perm.ilegal"},
	
	
	
	
	
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	-- MUNIÇÃO E DESMANCHE
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	--Milicia--
	["Lider [MILICIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Milicia", orgType = "Municao"}, "perm.gerentemilicia","perm.recrutamentomilicia", "perm.milicia", "perm.lidermilicia", "perm.arma", "perm.ilegal", "perm.baumilicia", "perm.baulidermilicia"},
	["Sub-Lider [MILICIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Milicia", orgType = "Municao"}, "perm.gerentemilicia","perm.lidermilicia","perm.recrutamentomilicia", "perm.milicia", "perm.arma", "perm.ilegal", "perm.baumilicia", "perm.baulidermilicia"},
	["Gerente [MILICIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Milicia", orgType = "Municao"}, "perm.gerentemilicia","perm.milicia","perm.recrutamentomilicia", "perm.arma", "perm.ilegal", "perm.baumilicia", "perm.baulidermilicia"},
	["Recrutador [MILICIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Milicia", orgType = "Municao"}, "perm.milicia", "perm.arma","perm.recrutamentomilicia", "perm.ilegal", "perm.baumilicia"},
	["Membro [MILICIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Milicia", orgType = "Municao"}, "perm.milicia", "perm.arma", "perm.ilegal","perm.recrutamentomilicia", "perm.baumilicia"},
	["Aviaozinho [MILICIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Milicia", orgType = "Municao"}, "perm.milicia", "perm.arma", "perm.ilegal"},

	--Alemao--
	["Lider [ALEMAO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Alemao", orgType = "Municao"}, "perm.gerentealemao","perm.recrutamentoalemao", "perm.alemao", "perm.lideralemao", "perm.arma", "perm.ilegal", "perm.baualemao", "perm.baulideralemao"},
	["Sub-Lider [ALEMAO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Alemao", orgType = "Municao"}, "perm.gerentealemao","perm.recrutamentoalemao","perm.lideralemao", "perm.alemao", "perm.arma", "perm.ilegal", "perm.baualemao", "perm.baulideralemao"},
	["Gerente [ALEMAO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Alemao", orgType = "Municao"}, "perm.gerentealemao","perm.recrutamentoalemao","perm.alemao", "perm.arma", "perm.ilegal", "perm.baualemao", "perm.baulideralemao"},
	["Recrutador [ALEMAO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Alemao", orgType = "Municao"}, "perm.alemao", "perm.arma","perm.recrutamentoalemao", "perm.ilegal", "perm.baualemao"},
	["Membro [ALEMAO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Alemao", orgType = "Municao"}, "perm.alemao", "perm.arma","perm.recrutamentoalemao", "perm.ilegal", "perm.baualemao"},
	["Aviaozinho [ALEMAO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Alemao", orgType = "Municao"}, "perm.alemao", "perm.arma", "perm.ilegal"},
	
	--Helipa--
	["Lider [HELIPA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Helipa", orgType = "Desmanche"}, "perm.gerentehelipa","perm.recrutamentohelipa", "perm.helipa", "perm.liderhelipa", "perm.arma", "perm.ilegal", "perm.bauhelipa", "perm.bauliderhelipa"},
	["Sub-Lider [HELIPA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Helipa", orgType = "Desmanche"}, "perm.gerentehelipa","perm.recrutamentohelipa","perm.liderhelipa", "perm.helipa", "perm.arma", "perm.ilegal", "perm.bauhelipa", "perm.bauliderhelipa"},
	["Gerente [HELIPA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Helipa", orgType = "Desmanche"}, "perm.gerentehelipa","perm.recrutamentohelipa","perm.helipa", "perm.arma", "perm.ilegal", "perm.bauhelipa", "perm.bauliderhelipa"},
	["Recrutador [HELIPA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Helipa", orgType = "Desmanche"}, "perm.helipa","perm.recrutamentohelipa", "perm.arma", "perm.ilegal", "perm.bauhelipa"},
	["Membro [HELIPA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Helipa", orgType = "Desmanche"}, "perm.helipa","perm.recrutamentohelipa", "perm.arma", "perm.ilegal", "perm.bauhelipa"},
	["Aviaozinho [HELIPA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Helipa", orgType = "Desmanche"}, "perm.helipa", "perm.arma", "perm.ilegal"},
	
	--Rocinha--
	["Lider [ROCINHA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Rocinha", orgType = "Desmanche"}, "perm.gerenterocinha","perm.recrutamentorocinha", "perm.rocinha", "perm.liderrocinha", "perm.arma", "perm.ilegal", "perm.baurocinha", "perm.bauliderrocinha"},
	["Sub-Lider [ROCINHA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Rocinha", orgType = "Desmanche"}, "perm.gerenterocinha","perm.recrutamentorocinha","perm.liderrocinha", "perm.rocinha", "perm.arma", "perm.ilegal", "perm.baurocinha", "perm.bauliderrocinha"},
	["Gerente [ROCINHA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Rocinha", orgType = "Desmanche"}, "perm.gerenterocinha","perm.recrutamentorocinha","perm.rocinha", "perm.arma", "perm.ilegal", "perm.baurocinha", "perm.bauliderrocinha"},
	["Recrutador [ROCINHA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Rocinha", orgType = "Desmanche"}, "perm.rocinha", "perm.arma","perm.recrutamentorocinha", "perm.ilegal", "perm.baurocinha"},
	["Membro [ROCINHA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Rocinha", orgType = "Desmanche"}, "perm.rocinha","perm.recrutamentorocinha", "perm.arma", "perm.ilegal", "perm.baurocinha"},
	["Aviaozinho [ROCINHA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Rocinha", orgType = "Desmanche"}, "perm.rocinha", "perm.arma", "perm.ilegal"},
	
		--CRIPS--
	["Lider [CRIPS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Crips", orgType = "Municao"}, "perm.crips", "perm.lidercrips","perm.recrutamentocrips", "perm.drogas", "perm.metanfetamina", "perm.ilegal", "perm.baucrips"},
	["Sub-Lider [CRIPS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Crips", orgType = "Municao"}, "perm.lidercrips", "perm.crips","perm.recrutamentocrips", "perm.drogas", "perm.ilegal", "perm.metanfetamina", "perm.baucrips"},
	["Gerente [CRIPS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Crips", orgType = "Municao"}, "perm.crips", "perm.drogas", "perm.ilegal","perm.recrutamentocrips", "perm.metanfetamina", "perm.baucrips"},
	["Recrutador [CRIPS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Crips", orgType = "Municao"}, "perm.crips", "perm.drogas", "perm.ilegal","perm.recrutamentocrips", "perm.metanfetamina", "perm.baucrips"},
	["Membro [CRIPS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Crips", orgType = "Municao"}, "perm.crips", "perm.drogas", "perm.ilegal","perm.recrutamentocrips", "perm.metanfetamina", "perm.baucrips"},
	["Aviaozinho [CRIPS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Crips", orgType = "Municao"}, "perm.crips", "perm.drogas", "perm.metanfetamina", "perm.ilegal"},

	--FURIOUS--
	["Lider [FURIOUS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Furious", orgType = "Desmanche"}, "perm.furious","perm.recrutamentofurious", "perm.liderfurious", "perm.gerentefurious", "perm.desmanche", "perm.ilegal", "perm.baufurious"},
	["Sub-Lider [FURIOUS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Furious", orgType = "Desmanche"}, "perm.liderfurious","perm.recrutamentofurious", "perm.gerentefurious", "perm.furious", "perm.desmanche", "perm.ilegal", "perm.baufurious"},
	["Gerente [FURIOUS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Furious", orgType = "Desmanche"}, "perm.gerentefurious","perm.recrutamentofurious", "perm.furious", "perm.desmanche", "perm.ilegal", "perm.baufurious"},
	["Recrutador [FURIOUS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Furious", orgType = "Desmanche"}, "perm.furious", "perm.recrutamentofurious","perm.desmanche", "perm.ilegal", "perm.baufurious"},
	["Membro [FURIOUS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Furious", orgType = "Desmanche"}, "perm.furious","perm.recrutamentofurious", "perm.desmanche", "perm.ilegal", "perm.baufurious"},
	["Aviaozinho [FURIOUS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Furious", orgType = "Desmanche"}, "perm.furious", "perm.desmanche", "perm.ilegal"},

	--Motoclub--
	["Lider [MOTOCLUB]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Motoclub", orgType = "Desmanche"}, "perm.motoclub","perm.recrutamentomotoclub", "perm.desmanche", "perm.lidermotoclub", "perm.ilegal", "perm.baumotoclub"},
	["Sub-Lider [MOTOCLUB]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Motoclub", orgType = "Desmanche"}, "perm.lidermotoclub","perm.recrutamentomotoclub", "perm.motoclub", "perm.desmanche", "perm.ilegal", "perm.baumotoclub"},
	["Gerente [MOTOCLUB]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Motoclub", orgType = "Desmanche"}, "perm.motoclub","perm.recrutamentomotoclub", "perm.desmanche", "perm.ilegal", "perm.baumotoclub"},
	["Recrutador [MOTOCLUB]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Motoclub", orgType = "Desmanche"}, "perm.motoclub","perm.recrutamentomotoclub", "perm.desmanche", "perm.ilegal", "perm.baumotoclub"},
	 ["Membro [MOTOCLUB]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Motoclub", orgType = "Desmanche"}, "perm.motoclub","perm.recrutamentomotoclub", "perm.desmanche", "perm.ilegal", "perm.baumotoclub"},
	 ["Aviaozinho [MOTOCLUB]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Motoclub", orgType = "Desmanche"}, "perm.motoclub", "perm.desmanche", "perm.ilegal"},

 	--B13--
	 ["Lider [B13]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "B13", orgType = "Desmanche"}, "perm.b13", "perm.desmanche","perm.recrutamentob13", "perm.liderb13", "perm.ilegal", "perm.baub13"},
	 ["Sub-Lider [B13]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "B13", orgType = "Desmanche"}, "perm.liderb13", "perm.b13","perm.recrutamentob13", "perm.desmanche", "perm.ilegal", "perm.baub13"},
	 ["Gerente [B13]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "B13", orgType = "Desmanche"}, "perm.b13", "perm.desmanche","perm.recrutamentob13", "perm.ilegal", "perm.baub13"},
	 ["Recrutador [B13]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "B13", orgType = "Desmanche"}, "perm.b13", "perm.desmanche","perm.recrutamentob13", "perm.ilegal", "perm.baub13"},
	 ["Membro [B13]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "B13", orgType = "Desmanche"}, "perm.b13", "perm.desmanche", "perm.recrutamentob13","perm.ilegal", "perm.baub13"},
	 ["Aviaozinho [B13]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "B13", orgType = "Desmanche"}, "perm.b13", "perm.desmanche", "perm.ilegal"},
	 
	 
	 --LACOSTE--
	 ["Lider [LACOSTE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Lacoste", orgType = "Desmanche"}, "perm.lacoste","perm.recrutamentolacoste", "perm.liderlacoste", "perm.desmanche", "perm.ilegal", "perm.baulacoste"},
	["Sub-Lider [LACOSTE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Lacoste", orgType = "Desmanche"}, "perm.liderlacoste", "perm.lacoste","perm.recrutamentolacoste", "perm.desmanche", "perm.ilegal", "perm.baulacoste"},
	["Gerente [LACOSTE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Lacoste", orgType = "Desmanche"}, "perm.lacoste", "perm.desmanche","perm.recrutamentolacoste", "perm.ilegal", "perm.baulacoste"},
	["Recrutador [LACOSTE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Lacoste", orgType = "Desmanche"}, "perm.lacoste", "perm.desmanche","perm.recrutamentolacoste", "perm.ilegal", "perm.baulacoste"},
	["Membro [LACOSTE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Lacoste", orgType = "Desmanche"}, "perm.lacoste", "perm.desmanche","perm.recrutamentolacoste", "perm.ilegal", "perm.baulacoste"},
	["Aviaozinho [LACOSTE]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Lacoste", orgType = "Desmanche"}, "perm.lacoste", "perm.desmanche", "perm.ilegal"},
	
	 --HELLSANGELS--
	 ["Lider [HELLSANGELS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "HellsAngels", orgType = "Desmanche"}, "perm.hellsamgels","perm.recrutamentohellsamgels", "perm.desmanche", "perm.liderhellsamgels", "perm.ilegal", "perm.bauhellsamgels"},
	["Sub-Lider [HELLSANGELS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "HellsAngels", orgType = "Desmanche"}, "perm.liderhellsamgels","perm.recrutamentohellsamgels", "perm.hellsamgels", "perm.desmanche", "perm.ilegal", "perm.bauhellsamgels"},
	["Gerente [HELLSANGELS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "HellsAngels", orgType = "Desmanche"}, "perm.hellsamgels", "perm.recrutamentohellsamgels","perm.desmanche", "perm.ilegal", "perm.bauhellsamgels"},
	["Recrutador [HELLSANGELS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "HellsAngels", orgType = "Desmanche"}, "perm.hellsamgels","perm.recrutamentohellsamgels", "perm.desmanche", "perm.ilegal", "perm.bauhellsamgels"},
	["Membro [HELLSANGELS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "HellsAngels", orgType = "Desmanche"}, "perm.hellsamgels","perm.recrutamentohellsamgels", "perm.desmanche", "perm.ilegal", "perm.bauhellsamgels"},
	["Aviaozinho [HELLSANGELS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "HellsAngels", orgType = "Desmanche"}, "perm.hellsamgels", "perm.desmanche", "perm.ilegal"},
	
	-- --BENNYS--
	["Lider [BENNYS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bennys", orgType = "Desmanche"}, "perm.bennys","perm.recrutamentobennys", "perm.desmanche", "perm.liderbennys", "perm.ilegal", "perm.baubennys"},
	["Sub-Lider [BENNYS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bennys", orgType = "Desmanche"}, "perm.liderbennys","perm.recrutamentobennys", "perm.bennys", "perm.desmanche", "perm.ilegal", "perm.baubennys"},
	["Gerente [BENNYS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bennys", orgType = "Desmanche"}, "perm.bennys","perm.recrutamentobennys", "perm.desmanche", "perm.ilegal", "perm.baubennys"},
	["Recrutador [BENNYS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bennys", orgType = "Desmanche"}, "perm.bennys","perm.recrutamentobennys", "perm.desmanche", "perm.ilegal", "perm.baubennys"},
	["Membro [BENNYS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bennys", orgType = "Desmanche"}, "perm.bennys","perm.recrutamentobennys", "perm.desmanche", "perm.ilegal", "perm.baubennys"},
	["Aviaozinho [BENNYS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bennys", orgType = "Desmanche"}, "perm.bennys", "perm.desmanche", "perm.ilegal"},
	
	
	
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	-- LAVAGEM
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	--VANILLA--
	["Lider [VANILLA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Vanilla", orgType = "Lavagem"}, "perm.lidervanilla","perm.recrutamentovanilla", "perm.vanilla", "perm.lavagem", "perm.ilegal", "perm.bauvanilla"},
	["Sub-Lider [VANILLA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Vanilla",orgType = "Lavagem"}, "perm.lidervanilla","perm.recrutamentovanilla", "perm.vanilla", "perm.lavagem", "perm.ilegal", "perm.bauvanilla"},	
	["Gerente [VANILLA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Vanilla",orgType = "Lavagem"}, "perm.vanilla","perm.recrutamentovanilla", "perm.lavagem", "perm.ilegal", "perm.bauvanilla"},
	["Recrutador [VANILLA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Vanilla",orgType = "Lavagem"}, "perm.vanilla","perm.recrutamentovanilla", "perm.lavagem", "perm.ilegal", "perm.bauvanilla"},
	["Membro [VANILLA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Vanilla",orgType = "Lavagem"}, "perm.vanilla","perm.recrutamentovanilla", "perm.lavagem", "perm.ilegal", "perm.bauvanilla"},
	["Aviaozinho [VANILLA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Vanilla",orgType = "Lavagem"}, "perm.vanilla", "perm.lavagem", "perm.ilegal"},
	
	--BAHAMAS--
	["Lider [BAHAMAS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bahamas", orgType = "Lavagem"}, "perm.liderbahamas", "perm.recrutamentobahamas", "perm.bahamas", "perm.lavagem", "perm.ilegal", "perm.baubahamas"},
	["Sub-Lider [BAHAMAS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bahamas", orgType = "Lavagem"}, "perm.liderbahamas","perm.recrutamentobahamas", "perm.bahamas", "perm.lavagem", "perm.ilegal", "perm.baubahamas"},
	["Gerente [BAHAMAS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bahamas", orgType = "Lavagem"}, "perm.bahamas","perm.recrutamentobahamas", "perm.lavagem", "perm.ilegal", "perm.baubahamas"},
	["Recrutador [BAHAMAS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bahamas", orgType = "Lavagem"}, "perm.bahamas", "perm.lavagem","perm.recrutamentobahamas", "perm.ilegal", "perm.baubahamas"},
	["Membro [BAHAMAS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bahamas", orgType = "Lavagem"}, "perm.bahamas", "perm.recrutamentobahamas","perm.lavagem", "perm.ilegal", "perm.baubahamas"},
	["Aviaozinho [BAHAMAS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bahamas", orgType = "Lavagem"}, "perm.bahamas", "perm.lavagem", "perm.ilegal"},
	
	--BRATVA--
	["Lider [BRATVA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bratva", orgType = "Lavagem"}, "perm.liderbratva", "perm.recrutamentobratva", "perm.bratva", "perm.lavagem", "perm.ilegal", "perm.baubratva"},
	["Sub-Lider [BRATVA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bratva", orgType = "Lavagem"}, "perm.liderbratva","perm.recrutamentobratva", "perm.bratva", "perm.lavagem", "perm.ilegal", "perm.baubratva"},
	["Gerente [BRATVA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bratva", orgType = "Lavagem"}, "perm.bratva","perm.recrutamentobratva", "perm.lavagem", "perm.ilegal", "perm.baubratva"},
	["Recrutador [BRATVA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bratva", orgType = "Lavagem"}, "perm.bratva", "perm.lavagem","perm.recrutamentobratva", "perm.ilegal", "perm.baubratva"},
	["Membro [BRATVA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bratva", orgType = "Lavagem"}, "perm.bratva", "perm.recrutamentobratva","perm.lavagem", "perm.ilegal", "perm.baubratva"},
	["Aviaozinho [BRATVA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Bratva", orgType = "Lavagem"}, "perm.bratva", "perm.lavagem", "perm.ilegal"},
	
	--TEQUILA--
	["Lider [TEQUILA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Tequila", orgType = "Lavagem"}, "perm.lidertequila", "perm.recrutamentotequila", "perm.tequila", "perm.lavagem", "perm.ilegal", "perm.bautequila"},
	["Sub-Lider [TEQUILA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Tequila", orgType = "Lavagem"}, "perm.lidertequila","perm.recrutamentotequila", "perm.tequila", "perm.lavagem", "perm.ilegal", "perm.bautequila"},
	["Gerente [TEQUILA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Tequila", orgType = "Lavagem"}, "perm.tequila","perm.recrutamentotequila", "perm.lavagem", "perm.ilegal", "perm.bautequila"},
	["Recrutador [TEQUILA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Tequila", orgType = "Lavagem"}, "perm.tequila", "perm.lavagem","perm.recrutamentotequila", "perm.ilegal", "perm.bautequila"},
	["Membro [TEQUILA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Tequila", orgType = "Lavagem"}, "perm.tequila", "perm.recrutamentotequila","perm.lavagem", "perm.ilegal", "perm.bautequila"},
	["Aviaozinho [TEQUILA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Tequila", orgType = "Lavagem"}, "perm.tequila", "perm.lavagem", "perm.ilegal"},
	
	--ILUMINATIS--
	["Lider [ILUMINATIS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Iluminatis", orgType = "Lavagem"}, "perm.lideriluminatis", "perm.recrutamentoiluminatis", "perm.iluminatis", "perm.lavagem", "perm.ilegal", "perm.bauiluminatis"},
	["Sub-Lider [ILUMINATIS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Iluminatis", orgType = "Lavagem"}, "perm.lideriluminatis","perm.recrutamentoiluminatis", "perm.iluminatis", "perm.lavagem", "perm.ilegal", "perm.bauiluminatis"},
	["Gerente [ILUMINATIS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Iluminatis", orgType = "Lavagem"}, "perm.iluminatis","perm.recrutamentoiluminatis", "perm.lavagem", "perm.ilegal", "perm.bauiluminatis"},
	["Recrutador [ILUMINATIS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Iluminatis", orgType = "Lavagem"}, "perm.iluminatis", "perm.lavagem","perm.recrutamentoiluminatis", "perm.ilegal", "perm.bauiluminatis"},
	["Membro [ILUMINATIS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Iluminatis", orgType = "Lavagem"}, "perm.iluminatis", "perm.recrutamentoiluminatis","perm.lavagem", "perm.ilegal", "perm.bauiluminatis"},
	["Aviaozinho [ILUMINATIS]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Iluminatis", orgType = "Lavagem"}, "perm.iluminatis", "perm.lavagem", "perm.ilegal"},

	--LUXURY--
	["Lider [LUXURY]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Luxury", orgType = "Lavagem"}, "perm.liderluxury", "perm.recrutamentoluxury", "perm.luxury", "perm.lavagem", "perm.ilegal", "perm.bauluxury"},
	["Sub-Lider [LUXURY]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Luxury", orgType = "Lavagem"}, "perm.liderluxury","perm.recrutamentoluxury", "perm.luxury", "perm.lavagem", "perm.ilegal", "perm.bauluxury"},
	["Gerente [LUXURY]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Luxury", orgType = "Lavagem"}, "perm.luxury","perm.recrutamentoluxury", "perm.lavagem", "perm.ilegal", "perm.bauluxury"},
	["Recrutador [LUXURY]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Luxury", orgType = "Lavagem"}, "perm.luxury", "perm.lavagem","perm.recrutamentoluxury", "perm.ilegal", "perm.bauluxury"},
	["Membro [LUXURY]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Luxury", orgType = "Lavagem"}, "perm.luxury", "perm.recrutamentoluxury","perm.lavagem", "perm.ilegal", "perm.bauluxury"},
	["Aviaozinho [LUXURY]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Luxury", orgType = "Lavagem"}, "perm.luxury", "perm.lavagem", "perm.ilegal"},
	
		--GALAXY--
	["Lider [GALAXY]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Galaxy", orgType = "Lavagem"}, "perm.lidergalaxy", "perm.recrutamentogalaxy", "perm.galaxy", "perm.lavagem", "perm.ilegal", "perm.baugalaxy"},
	["Sub-Lider [GALAXY]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Galaxy", orgType = "Lavagem"}, "perm.lidergalaxy","perm.recrutamentogalaxy", "perm.galaxy", "perm.lavagem", "perm.ilegal", "perm.baugalaxy"},
	["Gerente [GALAXY]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Galaxy", orgType = "Lavagem"}, "perm.galaxy","perm.recrutamentogalaxy", "perm.lavagem", "perm.ilegal", "perm.baugalaxy"},
	["Recrutador [GALAXY]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Galaxy", orgType = "Lavagem"}, "perm.galaxy", "perm.lavagem","perm.recrutamentogalaxy", "perm.ilegal", "perm.baugalaxy"},
	["Membro [GALAXY]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Galaxy", orgType = "Lavagem"}, "perm.galaxy", "perm.recrutamentogalaxy","perm.lavagem", "perm.ilegal", "perm.baugalaxy"},
	["Aviaozinho [GALAXY]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Galaxy", orgType = "Lavagem"}, "perm.galaxy", "perm.lavagem", "perm.ilegal"},

		--CASSINO--
	["Lider [CASSINO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cassino", orgType = "Lavagem"}, "perm.lidercassino", "perm.recrutamentocassino", "perm.cassino", "perm.lavagem", "perm.ilegal", "perm.baucassino"},
	["Sub-Lider [CASSINO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cassino", orgType = "Lavagem"}, "perm.lidercassino","perm.recrutamentocassino", "perm.cassino", "perm.lavagem", "perm.ilegal", "perm.baucassino"},
	["Gerente [CASSINO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cassino", orgType = "Lavagem"}, "perm.cassino","perm.recrutamentocassino", "perm.lavagem", "perm.ilegal", "perm.baucassino"},
	["Recrutador [CASSINO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cassino", orgType = "Lavagem"}, "perm.cassino", "perm.lavagem","perm.recrutamentocassino", "perm.ilegal", "perm.baucassino"},
	["Membro [CASSINO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cassino", orgType = "Lavagem"}, "perm.cassino", "perm.recrutamentogalaxy","perm.lavagem", "perm.ilegal", "perm.baucassino"},
	["Aviaozinho [CASSINO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cassino", orgType = "Lavagem"}, "perm.cassino", "perm.lavagem", "perm.ilegal"},
	

	
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	-- DROGAS
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	--CANADA--
	["Lider [CANADA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Canada", orgType = "Drogas"}, "perm.canada","perm.recrutamentocanada", "perm.lidercanada", "perm.drogas", "perm.ilegal", "perm.maconha", "perm.baucanada"},
	["Sub-Lider [CANADA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Canada", orgType = "Drogas"}, "perm.lidercanada", "perm.recrutamentocanada","perm.canada", "perm.drogas", "perm.ilegal", "perm.maconha", "perm.baucanada"},
	["Gerente [CANADA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Canada", orgType = "Drogas"}, "perm.canada","perm.recrutamentocanada", "perm.drogas", "perm.ilegal", "perm.maconha", "perm.baucanada"},
	["Recrutador [CANADA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Canada", orgType = "Drogas"}, "perm.canada","perm.recrutamentocanada", "perm.drogas", "perm.ilegal", "perm.maconha", "perm.baucanada"},
	["Membro [CANADA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Canada", orgType = "Drogas"}, "perm.canada","perm.recrutamentocanada", "perm.drogas", "perm.ilegal", "perm.maconha", "perm.baucanada"},
	["Aviaozinho [CANADA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Canada", orgType = "Drogas"}, "perm.canada", "perm.drogas", "perm.maconha", "perm.ilegal"},

	--BRASIL--
	["Lider [BRASIL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Brasil", orgType = "Drogas"}, "perm.brasil","perm.recrutamentobrasil", "perm.liderbrasil", "perm.drogas", "perm.ilegal", "perm.maconha", "perm.baubrasil"},
	["Sub-Lider [BRASIL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Brasil", orgType = "Drogas"}, "perm.liderbrasil","perm.recrutamentobrasil", "perm.brasil", "perm.drogas", "perm.ilegal", "perm.maconha", "perm.baubrasil"},
	["Gerente [BRASIL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Brasil", orgType = "Drogas"}, "perm.brasil","perm.recrutamentobrasil", "perm.drogas", "perm.ilegal", "perm.maconha", "perm.baubrasil"},
	["Recrutador [BRASIL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Brasil", orgType = "Drogas"}, "perm.brasil","perm.recrutamentobrasil", "perm.drogas", "perm.ilegal", "perm.maconha", "perm.baubrasil"},
	["Membro [BRASIL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Brasil", orgType = "Drogas"}, "perm.brasil","perm.recrutamentobrasil", "perm.drogas", "perm.ilegal", "perm.maconha", "perm.baubrasil"},
	["Aviaozinho [BRASIL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Brasil", orgType = "Drogas"}, "perm.brasil", "perm.drogas", "perm.maconha", "perm.ilegal"},
	
	-- --NIGERIA--
	["Lider [NIGERIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Nigeria", orgType = "Drogas"}, "perm.nigeria","perm.recrutamentonige", "perm.lidernigeria", "perm.balinha", "perm.ilegal", "perm.baunigeria"},
	["Sub-Lider [NIGERIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Nigeria", orgType = "Drogas"}, "perm.lidernigeria","perm.recrutamentonige", "perm.nigeria", "perm.balinha", "perm.ilegal", "perm.baunigeria"},
	["Gerente [NIGERIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Nigeria", orgType = "Drogas"}, "perm.nigeria","perm.recrutamentonige", "perm.balinha", "perm.ilegal", "perm.baunigeria"},
	["Recrutador [NIGERIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Nigeria", orgType = "Drogas"}, "perm.nigeria","perm.recrutamentonige", "perm.balinha", "perm.ilegal", "perm.baunigeria"},
	["Membro [NIGERIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Nigeria", orgType = "Drogas"}, "perm.nigeria", "perm.recrutamentonige","perm.balinha", "perm.ilegal", "perm.baunigeria"},
	["Aviaozinho [NIGERIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Nigeria", orgType = "Drogas"}, "perm.nigeria", "perm.balinha", "perm.ilegal"},

	 --COLOMBIA--
	 ["Lider [COLOMBIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Colombia", orgType = "Drogas"}, "perm.colombia","perm.recrutamentocolombia", "perm.lidercolombia", "perm.balinha", "perm.ilegal", "perm.baucolombia"},
	["Sub-Lider [COLOMBIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Colombia", orgType = "Drogas"}, "perm.lidercolombia","perm.recrutamentocolombia", "perm.colombia", "perm.balinha", "perm.ilegal", "perm.baucolombia"},
	["Gerente [COLOMBIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Colombia", orgType = "Drogas"}, "perm.colombia","perm.recrutamentocolombia", "perm.balinha", "perm.ilegal", "perm.baucolombia"},
	["Recrutador [COLOMBIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Colombia", orgType = "Drogas"}, "perm.colombia","perm.recrutamentocolombia", "perm.balinha", "perm.ilegal", "perm.baucolombia"},
	["Membro [COLOMBIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Colombia", orgType = "Drogas"}, "perm.colombia","perm.recrutamentocolombia", "perm.balinha", "perm.ilegal", "perm.baucolombia"},
	["Aviaozinho [COLOMBIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Colombia", orgType = "Drogas"}, "perm.colombia", "perm.balinha", "perm.ilegal"},
	
	--ARGENTINA--
	["Lider [ARGENTINA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Argentina", orgType = "Drogas"}, "perm.argentina","perm.recrutamentoargentina", "perm.liderargentina", "perm.balinha", "perm.ilegal", "perm.bauargentina"},
	["Sub-Lider [ARGENTINA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Argentina", orgType = "Drogas"}, "perm.liderargentina","perm.recrutamentoargentina", "perm.argentina", "perm.balinha", "perm.ilegal", "perm.bauargentina"},
	["Gerente [ARGENTINA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Argentina", orgType = "Drogas"}, "perm.argentina","perm.recrutamentoargentina", "perm.balinha", "perm.ilegal", "perm.bauargentina"},
	["Recrutador [ARGENTINA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Argentina", orgType = "Drogas"}, "perm.argentina","perm.recrutamentoargentina", "perm.balinha", "perm.ilegal", "perm.bauargentina"},
	["Membro [ARGENTINA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Argentina", orgType = "Drogas"}, "perm.argentina", "perm.recrutamentoargentina","perm.balinha", "perm.ilegal", "perm.bauargentina"},
	["Aviaozinho [ARGENTINA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Argentina", orgType = "Drogas"}, "perm.argentina", "perm.balinha", "perm.ilegal"},
	
	-- --PORTUGAL--
	["Lider [PORTUGAL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Portugal", orgType = "Drogas"}, "perm.portugal","perm.recrutamentoportugal", "perm.liderportugal", "perm.balinha", "perm.ilegal", "perm.bauportugal"},
	["Sub-Lider [PORTUGAL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Portugal", orgType = "Drogas"}, "perm.liderportugal", "perm.recrutamentoportugal","perm.portugal", "perm.balinha", "perm.ilegal", "perm.bauportugal"},
	["Gerente [PORTUGAL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Portugal", orgType = "Drogas"}, "perm.portugal","perm.recrutamentoportugal", "perm.balinha", "perm.ilegal", "perm.bauportugal"},
	["Recrutador [PORTUGAL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Portugal", orgType = "Drogas"}, "perm.portugal","perm.recrutamentoportugal", "perm.balinha", "perm.ilegal", "perm.bauportugal"},
	["Membro [PORTUGAL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Portugal", orgType = "Drogas"}, "perm.portugal","perm.recrutamentoportugal", "perm.balinha", "perm.ilegal", "perm.bauportugal"},
	["Aviaozinho [PORTUGAL]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Portugal", orgType = "Drogas"}, "perm.portugal", "perm.balinha", "perm.ilegal"},
	
	--CV--
	["Lider [CV]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cv", orgType = "Contrabando"}, "perm.cv", "perm.lidercv","perm.recrutamentocv", "perm.arma", "perm.ilegal", "perm.baucv"},
	["Sub-Lider [CV]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cv", orgType = "Contrabando"}, "perm.lidercvi", "perm.cv","perm.recrutamentocv", "perm.arma", "perm.ilegal", "perm.baucv"},
	["Gerente [CV]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cv", orgType = "Contrabando"}, "perm.cv", "perm.arma", "perm.ilegal","perm.recrutamentocv", "perm.baucv"},
	["Recrutador [CV]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cv", orgType = "Contrabando"}, "perm.cv", "perm.arma", "perm.ilegal","perm.recrutamentocv", "perm.baucv"},
	["Membro [CV]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cv", orgType = "Contrabando"}, "perm.cv", "perm.arma", "perm.ilegal","perm.recrutamentocv", "perm.baucv"},
	["Aviaozinho [CV]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Cv", orgType = "Contrabando"}, "perm.cv", "perm.arma", "perm.ilegal"},

	--CAMORRA--
	["Lider [CAMORRA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Camorra", orgType = "Contrabando"}, "perm.camorra", "perm.lidercamorra","perm.recrutamentocamorra", "perm.arma", "perm.ilegal", "perm.baucamorra"},
	["Sub-Lider [CAMORRA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Camorra", orgType = "Contrabando"}, "perm.lidercamorrai", "perm.camorra","perm.recrutamentocamorra", "perm.arma", "perm.ilegal", "perm.baucamorra"},
	["Gerente [CAMORRA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Camorra", orgType = "Contrabando"}, "perm.camorra", "perm.arma", "perm.ilegal","perm.recrutamentocamorra", "perm.baucamorra"},
	["Recrutador [CAMORRA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Camorra", orgType = "Contrabando"}, "perm.camorra", "perm.arma", "perm.ilegal","perm.recrutamentocamorra", "perm.baucamorra"},
	["Membro [CAMORRA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Camorra", orgType = "Contrabando"}, "perm.camorra", "perm.arma", "perm.ilegal","perm.recrutamentocamorra", "perm.baucamorra"},
	["Aviaozinho [CAMORRA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Camorra", orgType = "Contrabando"}, "perm.camorra", "perm.arma", "perm.ilegal"},
	
	--MEXICO--
	["Lider [MEXICO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Mexico", orgType = "Contrabando"}, "perm.mexico", "perm.lidermexico","perm.recrutamentomexico", "perm.arma", "perm.ilegal", "perm.baumexico"},
	["Sub-Lider [MEXICO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Mexico", orgType = "Contrabando"}, "perm.lidermexicoi", "perm.mexico","perm.recrutamentomexico", "perm.arma", "perm.ilegal", "perm.baumexico"},
	["Gerente [MEXICO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Mexico", orgType = "Contrabando"}, "perm.mexico", "perm.arma", "perm.ilegal","perm.recrutamentomexico", "perm.baumexico"},
	["Recrutador [MEXICO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Mexico", orgType = "Contrabando"}, "perm.mexico", "perm.arma", "perm.ilegal","perm.recrutamentomexico", "perm.baumexico"},
	["Membro [MEXICO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Mexico", orgType = "Contrabando"}, "perm.mexico", "perm.arma", "perm.ilegal","perm.recrutamentomexico", "perm.baumexico"},
	["Aviaozinho [MEXICO]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Mexico", orgType = "Contrabando"}, "perm.mexico", "perm.arma", "perm.ilegal"},
	
	--JAMAICA--
	["Lider [JAMAICA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Jamaica", orgType = "Contrabando"}, "perm.jamaica", "perm.liderjamaica","perm.recrutamentojamaica", "perm.arma", "perm.ilegal", "perm.baujamaica"},
	["Sub-Lider [JAMAICA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Jamaica", orgType = "Contrabando"}, "perm.liderjamaicai", "perm.jamaica","perm.recrutamentojamaica", "perm.arma", "perm.ilegal", "perm.baujamaica"},
	["Gerente [JAMAICA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Jamaica", orgType = "Contrabando"}, "perm.jamaica", "perm.arma", "perm.ilegal","perm.recrutamentojamaica", "perm.baujamaica"},
	["Recrutador [JAMAICA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Jamaica", orgType = "Contrabando"}, "perm.jamaica", "perm.arma", "perm.ilegal","perm.recrutamentojamaica", "perm.baujamaica"},
	["Membro [JAMAICA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Jamaica", orgType = "Contrabando"}, "perm.jamaica", "perm.arma", "perm.ilegal","perm.recrutamentojamaica", "perm.baujamaica"},
	["Aviaozinho [JAMAICA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Jamaica", orgType = "Contrabando"}, "perm.jamaica", "perm.arma", "perm.ilegal"},
	
	--AUSTRALIA--
	["Lider [AUSTRALIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Australia", orgType = "Contrabando"}, "perm.australia", "perm.lideraustralia","perm.recrutamentoaustralia", "perm.arma", "perm.ilegal", "perm.bauaustralia"},
	["Sub-Lider [AUSTRALIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Australia", orgType = "Contrabando"}, "perm.lideraustraliai", "perm.australia","perm.recrutamentoaustralia", "perm.arma", "perm.ilegal", "perm.bauaustralia"},
	["Gerente [AUSTRALIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Australia", orgType = "Contrabando"}, "perm.australia", "perm.arma", "perm.ilegal","perm.recrutamentoaustralia", "perm.bauaustralia"},
	["Recrutador [AUSTRALIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Australia", orgType = "Contrabando"}, "perm.australia", "perm.arma", "perm.ilegal","perm.recrutamentoaustralia", "perm.bauaustralia"},
	["Membro [AUSTRALIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Australia", orgType = "Contrabando"}, "perm.australia", "perm.arma", "perm.ilegal","perm.recrutamentoaustralia", "perm.bauaustralia"},
	["Aviaozinho [AUSTRALIA]"] = { _config = { gtype = "org", salario = 2000, ptr = nil, orgName = "Australia", orgType = "Contrabando"}, "perm.australia", "perm.arma", "perm.ilegal"},

	
	
	
	
	
	
	

	
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	-- PAISANA
	
	["Paisana"] = { _config = { salario = 0, ptr = nil }, "-perm.unizk", "-perm.policia","-perm.mecanica" },
	
	----------------------------------------------------------------------------------------------------------------------------
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	-- Mecanicas
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	["LiderCustom"] = { _config = { gtype = "org", salario = 12000, ptr = nil, orgName = "Mecanica" }, "dv.permissao","perm.recrutamentomec", "mecanico.permissao",'perm.mecanica','perm.lidermecanica', "perm.algemar", "lscustom.permissao"},
	["SubLiderCustom"] = { _config = { gtype = "org", salario = 10000, ptr = nil, orgName = "Mecanica" }, "dv.permissao", "mecanico.permissao","perm.recrutamentomec",'perm.mecanica','perm.lidermecanica', "perm.algemar", "lscustom.permissao"},
	["GerenteCustom"] = { _config = { gtype = "org", salario = 8000, ptr = nil, orgName = "Mecanica" }, "dv.permissao", "mecanico.permissao","perm.recrutamentomec",'perm.mecanica', "perm.algemar", "lscustom.permissao"},
	["MecanicoCustom"] = { _config = { gtype = "org", salario = 6000, ptr = nil, orgName = "Mecanica" }, "dv.permissao", "mecanico.permissao","perm.recrutamentomec",'perm.mecanica', "perm.algemar", "lscustom.permissao"},
	["AprendizCustom"] = { _config = { gtype = "org", salario = 3000, ptr = nil, orgName = "Mecanica" }, "mecanico.permissao",'perm.mecanica', "lscustom.permissao"},
	
	["LiderStreetRacing"] = { _config = { gtype = "org", salario = 12000, ptr = nil, orgName = "Mecanica" }, "dv.permissao","perm.recrutamentomec2", "mecanico.permissao",'perm.mecanica','perm.lidersportrace','perm.mecanica2', "perm.algemar", "sportrace.permissao"}, 
	["SubLiderStreetRacinge"] = { _config = { gtype = "org", salario = 10000, ptr = nil, orgName = "Mecanica" }, "dv.permissao", "mecanico.permissao","perm.recrutamentomec2",'perm.mecanica','perm.lidersportrace','perm.mecanica2', "perm.algemar", "sportrace.permissao"},
    ["GerenteStreetRacing"] = { _config = { gtype = "org", salario = 8000, ptr = nil, orgName = "Mecanica" }, "dv.permissao", "mecanico.permissao","perm.recrutamentomec2",'perm.mecanica','perm.mecanica2', "perm.algemar", "sportrace.permissao"},
    ["MecanicoStreetRacing"] = { _config = { gtype = "org", salario = 6000, ptr = nil, orgName = "Mecanica" }, "dv.permissao", "mecanico.permissao","perm.recrutamentomec2",'perm.mecanica','perm.mecanica2', "perm.algemar", "sportrace.permissao"},
    ["AprendizStreetRacinge"] = { _config = { gtype = "org", salario = 3000, ptr = nil, orgName = "Mecanica" }, "mecanico.permissao","perm.recrutamentomec2",'perm.mecanica','perm.mecanica2', "sportrace.permissao"},

---------------------------------------------------------------------------------------------------

    ["Chamado Mecanica"] = { _config = { salario = 0, ptr = nil }, "perm.chamadoMecanica" },


---------------------------------------------------------------------------------------------------


}

cfg.users = {
	[1] = { "owner" },
	[2] = { "owner" },
	[3] = { "owner" },
	[4] = { "owner" },
	[5] = { "owner" },
}

cfg.selectors = { }

return cfg
