local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")

src = {}
Tunnel.bindInterface("thunder_arena",src)
Proxy.addInterface("thunder_arena",src)

vCLIENT = Tunnel.getInterface("thunder_arena")
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- VARIAVEIS
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
local old_weapons = {}
local old_health = {}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- CONFIGS
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
config = {}

config.weebhook = {
    link = "https://discord.com/api/webhooks/1279008761285050459/tIjXITzPyGEvHlMSb2brKXG-GRvA7X3aKqnHjfL6YQSF4I-VwYwICZzl2p_6ek-LoUsf",
    logo = "",
    color = 4169E1
}

config.license = "new" -- não mexa aqui ( isso server para updates exclusivos )
config.voip = "pma-voice2" -- ou tokovoip [ Para o VO-IP Funcionar no sistema de dimensoes ]
config.maxHealth = 400 -- Maximo de vida em seu servidor
config.rhealth = true -- Recuperar Vida quando matar alguem
config.aKillstreak = true -- Ativar sistema de killstreak
config.forceClearWeapons = true -- Ativar essa função caso acontece qualquer tentativa de bugar armas ( deslogar / crashar ) limpar todas as armas do jogador ( Não que vai acontecer, mas isso é uma forma pra previnir tambem. )
config.cmdarena = "pvpoff" -- Comando de sair da arena
config.cmdkickarena = "arenakick" -- Comando para kickar todos os jogadores de todas as arenas
config.permKick = "admin.permissao" -- Permissao para kickar os jogadores da arena
config.chatkill = true -- Ligar/Desligar chatkill da arena
config.chatKillDelay = 3000 -- Delay para sumir as mensagem do chatkill

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- ARENAS
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
config.arenas = {
    [1] = { 
        nome = "Arena X5", -- Nome da Arena 
        descricacao = "<b>Arma:</b> Pistola MK2 <br> <b>Tempo:</b> 5 Minutos<br> <b>Vagas:</b> 2 Vagas<br> <b>Aposta Minima:</b> R$ 5000,00 <br><b>Para Sair:</b> /pvpoff", -- Descricao da NUI
        arma = "WEAPON_PISTOL_MK2", -- Arma da Arena
        imagem = "http://181.215.254.182/img/spaco.png", -- Imagem da Arena
        maxPlayers = 5, -- Maximo de Jogadores na Arena
        timeArena = 30, -- Tempo da Arena (em minutos)
        minAposta = 5000, -- Valor minimo da Aposta
        coords = { -- CORDENADAS DE SPAWNS NA ARENA
            [1] = vec3(-3493.56,-2323.63,293.59),
            [2] = vec3(-3492.36,-2288.09,293.59),
            [3] = vec3(-3568.83,-2285.57,293.62),
            [4] = vec3(-3563.59,-2316.76,293.59),
            [5] = vec3(-3529.13,-2312.43,293.62),
        }
    },

    [2] = { 
        nome = "Arena X1", -- Nome da Arena 
        descricacao = "<b>Arma:</b> Pistola MK2 <br> <b>Tempo:</b> 5 Minutos<br> <b>Vagas:</b> 2 Vagas<br> <b>Aposta Minima:</b> R$ 5000,00 <br><b>Para Sair:</b> /pvpoff", -- Descricao da NUI
        arma = "WEAPON_PISTOL_MK2", -- Arma da Arena
        imagem = "http://181.215.254.182/img/predio2.png", -- Imagem da Arena
        maxPlayers = 2, -- Maximo de Jogadores na Arena
        timeArena = 5, -- Tempo da Arena (em minutos)
        minAposta = 5000, -- Valor minimo da Aposta
        coords = { -- CORDENADAS DE SPAWNS NA ARENA
            [1] = vec3(-3300.71,-2863.45,294.15),
            [2] = vec3(-3294.02,-2828.0,294.15),
            [3] = vec3(-3299.73,-2847.08,294.15),
            [4] = vec3(-3284.3,-2848.12,294.15)
        }
    },

    [3] = { 
        nome = "Arena X10", -- Nome da Arena 
        descricacao = "<b>Arma:</b> Pistola MK2 <br> <b>Tempo:</b> 30 Minutos<br> <b>Vagas:</b> 10 Vagas<br> <b>Aposta Minima:</b> R$ 5000,00 <br><b>Para Sair:</b> /pvpoff", -- Descricao da NUI
        arma = "WEAPON_PISTOL_MK2", -- Arma da Arena
        imagem = "http://181.215.254.182/img/predio.png", -- Imagem da Arena
        maxPlayers = 10, -- Maximo de Jogadores na Arena
        timeArena = 30, -- Tempo da Arena (em minutos)
        minAposta = 5000, -- Valor minimo da Aposta
        coords = { -- CORDENADAS DE SPAWNS NA ARENA
            [1] = vec3(-3488.71,-1734.65,293.59),
            [2] = vec3(-3491.55,-1763.74,293.59),
            [3] = vec3(-3490.62,-1790.9,293.59),
            [4] = vec3(-3529.27,-1790.9,293.59),
            [5] = vec3(-3565.71,-1787.98,293.59),
            [6] = vec3(-3566.17,-1762.0,293.59),
            [7] = vec3(-3565.92,-1738.54,293.57),
            [8] = vec3(-3530.37,-1743.56,293.57)
        }
    },

    [4] = { 
        nome = "Arena X1", -- Nome da Arena 
        descricacao = "<b>Arma:</b> Pistola MK2 <br> <b>Tempo:</b> 5 Minutos<br> <b>Vagas:</b> 2 Vagas<br> <b>Aposta Minima:</b> R$ 5000,00 <br><b>Para Sair:</b> /pvpoff", -- Descricao da NUI
        arma = "WEAPON_PISTOL_MK2", -- Arma da Arena
        imagem = "http://181.215.254.182/img/unknown2.png", -- Imagem da Arena
        maxPlayers = 2, -- Maximo de Jogadores na Arena
        timeArena = 5, -- Tempo da Arena (em minutos)
        minAposta = 5000, -- Valor minimo da Aposta
        coords = { -- CORDENADAS DE SPAWNS NA ARENA
            [1] = vec3(-3283.76,-2640.83,294.13),
            [2] = vec3(-3300.3,-2624.33,294.15),
            [3] = vec3(-3285.46,-2606.74,294.15),
            [4] = vec3(-3301.27,-2599.93,294.15)
        }
    },

    [5] = { 
        nome = "Arena X2", -- Nome da Arena 
        descricacao = "<b>Arma:</b> Pistola MK2 <br> <b>Tempo:</b> 5 Minutos<br> <b>Vagas:</b> 4 Vagas<br> <b>Aposta Minima:</b> R$ 5000,00 <br><b>Para Sair:</b> /pvpoff", -- Descricao da NUI
        arma = "WEAPON_PISTOL_MK2", -- Arma da Arena
        imagem = "http://181.215.254.182/img/unknown2.png", -- Imagem da Arena
        maxPlayers = 4, -- Maximo de Jogadores na Arena
        timeArena = 5, -- Tempo da Arena (em minutos)
        minAposta = 5000, -- Valor minimo da Aposta
        coords = { -- CORDENADAS DE SPAWNS NA ARENA
            [1] = vec3(-3079.93,-2642.3,294.15),
            [2] = vec3(-3096.81,-2641.68,294.15),
            [3] = vec3(-3084.14,-2627.52,294.15),
            [4] = vec3(-3093.12,-2613.0,294.15),
            [5] = vec3(-3095.43,-2602.66,294.15),
            [6] = vec3(-3080.47,-2603.38,294.13),
            [7] = vec3(-3089.96,-2623.43,296.94),
        }
    },
    [6] = { 
        nome = "Arena X10", -- Nome da Arena 
        descricacao = "<b>Arma:</b> G3 <br> <b>Tempo:</b> 30 Minutos<br> <b>Vagas:</b> 10 Vagas<br> <b>Aposta Minima:</b> R$ 5000,00 <br><b>Para Sair:</b> /pvpoff", -- Descricao da NUI
        arma = "WEAPON_SPECIALCARBINE_MK2", -- Arma da Arena
        imagem = "http://181.215.254.182/img/arena6.png", -- Imagem da Arena
        maxPlayers = 10, -- Maximo de Jogadores na Arena
        timeArena = 30, -- Tempo da Arena (em minutos)
        minAposta = 5000, -- Valor minimo da Aposta
        coords = { -- CORDENADAS DE SPAWNS NA ARENA
            [1] = vec3(-3064.08,-2864.46,294.15),
            [2] = vec3(-3082.89,-2861.32,294.13),
            [3] = vec3(-3079.09,-2853.52,294.15),
            [4] = vec3(-3066.75,-2845.85,294.15),
            [5] = vec3(-3077.11,-2836.12,294.13),
            [6] = vec3(-3066.72,-2825.84,294.15),
            [7] = vec3(-3079.41,-2822.83,294.15),
            [8] = vec3(-3079.74,-2828.94,294.15)
        }
    },
    [7] = { 
        nome = "Arena Dupla", -- Nome da Arena 
        descricacao = "<b>Arma:</b> Pistola MK2 <br> <b>Tempo:</b> 30 Minutos<br> <b>Vagas:</b> 10 Vagas<br> <b>Aposta Minima:</b> R$ 5000,00 <br><b>Para Sair:</b> /pvpoff", -- Descricao da NUI
        arma = "WEAPON_PISTOL_MK2", -- Arma da Arena
        imagem = "http://181.215.254.182/img/dupla.png", -- Imagem da Arena
        maxPlayers = 10, -- Maximo de Jogadores na Arena
        timeArena = 30, -- Tempo da Arena (em minutos)
        minAposta = 5000, -- Valor minimo da Aposta
        coords = { -- CORDENADAS DE SPAWNS NA ARENA
            [1] = vector3(-3462.18,-2415.29,158.05),
            [2] = vector3(-3462.44,-2434.35,158.05),
            [3] = vector3(-3462.32,-2481.27,158.05),
            [4] = vector3(-3461.98,-2500.04,158.05),
            [5] = vector3(-3556.66,-2502.21,158.05),
            [6] = vector3(-3556.83,-2479.5,158.05),
            [7] = vector3(-3557.72,-2438.32,158.05),
            [8] = vector3(-3556.62,-2416.28,158.05),
            [9] = vector3(-3556.53,-2369.6,158.05),
            [10] = vector3(-3556.76,-2350.41,158.05),
            [11] = vector3(-3461.22,-2369.35,158.05),
            [12] = vector3(-3461.36,-2347.33,158.05),
            [13] = vector3(-3461.89,-2303.72,158.05),
            [14] = vector3(-3462.17,-2284.69,158.03),
            [15] = vector3(-3556.93,-2282.49,158.05),
            [16] = vector3(-3555.63,-2305.38,158.05)
        }
    },
    [8] = { 
        nome = "Arena  X10<", -- Nome da Arena 
        descricacao = "<b>Arma:</b> Pistola MK2 <br> <b>Tempo:</b>30 Minutos<br> <b>Vagas:</b> 10 Vagas<br> <b>Aposta Minima:</b> R$ 5000 <br><b>Para Sair:</b> /pvpoff", -- Descricao da NUI
        arma = "WEAPON_PISTOL_MK2", -- Arma da Arena
        imagem = "http://181.215.254.182/img/arena8.png", -- Imagem da Arena
        maxPlayers = 10, -- Maximo de Jogadores na Arena
        timeArena = 30, -- Tempo da Arena (em minutos)
        minAposta = 5000, -- Valor minimo da Aposta
        coords = { -- CORDENADAS DE SPAWNS NA ARENA
            [1] = vector3(-3491.15,-2624.46,293.59),
            [2] = vector3(-3493.39,-2595.19,293.98),
            [3] = vector3(-3488.24,-2570.69,293.57),
            [4] = vector3(-3523.16,-2574.35,293.59),
            [5] = vector3(-3507.95,-2601.27,293.59),
            [6] = vector3(-3523.99,-2623.3,293.59),
            [7] = vector3(-3566.2,-2627.82,293.59),
            [8] = vector3(-3573.96,-2593.64,293.59),
            [9] = vector3(-3556.7,-2570.94,293.59)
        }
    },
}


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- TRADUCOES
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
config.lang = {
    arenaFinalizada = function(id) return TriggerClientEvent('chatMessage', -1, "^1[ARENA] ^0 Arena ^2"..id.."^0 acaba de ser finalizada.") end, -- Quando a Arena for finalizada
    arenaCancelada = function(id) return TriggerClientEvent('chatMessage', -1, "^1[ARENA] ^0 Arena ^2"..id.."^0 acaba de ser cancelada por falta de jogadores.") end, -- Quando a Arena for finalizada
    arenaLotada = function(source) return TriggerClientEvent("Notify",source,"negado","Está arena está lotada.", 3) end, -- Quando a Arena estiver Lotada
    kickAllArena = function(source) return TriggerClientEvent("Notify",source,"sucesso","Você kickou todos os jogadores da arena", 3) end, -- Kickar todos jogadores da arena
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- SISTEMA DE APOSTAS
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
config.apostarArena = function(source, user_id, id)
    local minAposta = parseInt(config.arenas[parseInt(id)].minAposta)
    local aposta = vRP.prompt(source, "Digite a sua Aposta: ", minAposta)
    if aposta ~= nil and aposta ~= "" and tonumber(aposta) then
        if tonumber(aposta) < minAposta then
            TriggerClientEvent("Notify",source,"sucesso","O Valor minimo de aposta é <b>"..vRP.format(minAposta).."</b>", 3)
            return
        end

        if vRP.tryFullPayment(user_id, tonumber(aposta)) then
            entrarArena(source, user_id, id, tonumber(aposta))
        else
            TriggerClientEvent("Notify",source,"negado","Você não possui essa quantia para apostar.", 3)
        end
    end
end

config.pagamentoApostas = function(user_id, kills, arena, cofre)
    local pagamento = cofre * 0.8 -- 80% Do valor do cofre da arena de apostas
    local identity = vRP.getUserIdentity(user_id)

    TriggerClientEvent('chatMessage', -1, "^1[ARENA] ^0O Cidadão ^2"..identity.nome.." "..identity.sobrenome.."^0 venceu a arena ^2 "..arena.."^0 com ^2"..kills.." kill(s)^0.")
    vRP.giveMoney(user_id, pagamento)

    corpoHook = { { ["color"] = config.weebhook['color'], ["title"] = "**".. "Vencedor ( ".. arena .." )" .."**\n", ["thumbnail"] = { ["url"] = config.weebhook['logo'] }, ["description"] = "**ID:** ```css\n- "..user_id.." ```\n**KILLS** ```css\n- ".. kills .."```\n**RECEBEU** ```css\n- ".. vRP.format(pagamento) .."```\n**HORARIO** ```css\n- ".. os.date("%d/%m/%Y") .." ```", ["footer"] = { ["text"] = "Big Store", }, } }
    sendToDiscord(config.weebhook['link'], corpoHook)
end

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- SISTEMA DE KILL STREAK
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
config.killStreak = function(source, user_id, kills, arena)
    if kills > 3 then
        local pagamento = 50 + (5 * kills)
        TriggerClientEvent('chatMessage', source, "^1[ARENA] ^0 ** KILL STREAK ** Você matou ^2"..kills.."^0 sem morrer e recebeu ^2"..pagamento.."^0 por isso.")
        vRP.giveInventoryItem(user_id, "money", pagamento, true)

        corpoHook = { { ["color"] = config.weebhook['color'], ["title"] = "**".. "Kill Streak ( ".. arena .." )" .."**\n", ["thumbnail"] = { ["url"] = config.weebhook['logo'] }, ["description"] = "**ID:** ```css\n- "..user_id.." ```\n**KILLS** ```css\n- ".. kills .."```\n**RECEBEU** ```css\n- ".. vRP.format(pagamento) .."```\n**HORARIO** ```css\n- ".. os.date("%d/%m/%Y") .." ```", ["footer"] = { ["text"] = "Big Store", }, } }
        sendToDiscord(config.weebhook['link'], corpoHook)
    end
end

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- ENTRAR ARENA
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
config.joinArena = function(user_id, id)
    local source = vRP.getUserSource(user_id)

    if source then
        old_weapons[user_id] = vRPclient.getWeapons(source)
        old_health[user_id] = vRPclient.getHealth(source)

        local weapon = config.arenas[parseInt(id)].arma
        vRPclient._giveWeapons(source,{[weapon] = { ammo = 250 }}, true)
        vRPclient._setHealth(source, config.maxHealth)
    end
end

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- ENTRAR JOGOS
-----------------------------------------------------------------------------

config.joinjogos = function(user_id)
    local source = vRP.getUserSource(user_id)

    if source then
        old_weapons[user_id] = vRPclient.getWeapons(source)
        old_health[user_id] = vRPclient.getHealth(source)

        local weapon = "WEAPON_PISTOL_MK2"
        vRPclient._giveWeapons(source,{[weapon] = { ammo = 250 }}, true)
        vRPclient._setHealth(source, config.maxHealth)
    end
end

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- SAIR JOGOS
-----------------------------------------------------------------------------

config.leavejogos = function(user_id)
    local source = vRP.getUserSource(user_id)

    if source then
        if old_weapons[user_id] ~= nil then
            vRPclient._giveWeapons(source, old_weapons[user_id], true)
            old_weapons[user_id] = nil
        end

        if old_health[user_id] ~= nil then
            vRPclient._setHealth(source, old_health[user_id])
            old_health[user_id] = nil
        end
    end
end





--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- SAIR DA ARENA
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
config.leaveArena = function(user_id)
    local source = vRP.getUserSource(user_id)

    if source then
        if old_weapons[user_id] ~= nil then
            vRPclient._giveWeapons(source, old_weapons[user_id], true)
            old_weapons[user_id] = nil
        end

        if old_health[user_id] ~= nil then
            vRPclient._setHealth(source, old_health[user_id])
            old_health[user_id] = nil
        end
    end
end

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- IDENTIDADE
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
config.identity = function(user_id)
    local identity = vRP.getUserIdentity(user_id)

    if identity then
        identity.nome = identity.nome
        identity.sobrenome = identity.sobrenome

        return identity
    end
end

--[[ COLOQUE ISSO NAS FUNCOES SERVER
    local arena = Tunnel.getInterface("hawk_arena")

    if arena.inArena(source) then
		return
    end


    function vRP.limparArmas(user_id) -- COLOCAR ISSO DENTRO DE QUALQUER VRP>MODULES [ CASO SUA FUNÇÃO forceClearWeapons for ativada ]
        local data = vRP.getUserDataTable(user_id)
        if user_id then
            if data then
                data.weapons = {}
            end
        end
    end
]]