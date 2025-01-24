local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")

vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")

src = {}
Tunnel.bindInterface("mirtin_survival",src)
Proxy.addInterface("mirtin_survival",src)

vCLIENT = Tunnel.getInterface("mirtin_survival")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
cfg = {}
config = {}

config.token = "c3683d9089d11e6a8da660305861219a" -- configure aqui seu token [ DEFINA-SEU-TOKEN-AQUI ]
cfg.weebhook = "https://discord.com/api/webhooks/1279008000165543947/lQvJgY1_FKYollhxzLmtuisdjGE_S9t1cTo_2Zt0W1m42ISOrsQVnN-lSygW1FXpate4" -- WEEBHOOK
cfg.logo = "" -- IMAGEM DO WEEBHOOK
cfg.color = 6356736 -- COR DO WEEBHOOK

src.limparConta = function() -- FUNÇÃO QUE VEM DO CONFIG.CLIENT PARA EXECUTAR FUNÇÕES DIRETAS
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        vRP.clearAccount(user_id)
    end
end

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- SISTEMA DE DISCONNECT
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
AddEventHandler("playerDropped", function(reason)
    local source = source
    local coords = GetEntityCoords(GetPlayerPed(source))
    local user_id = vRP.getUserId(source)
    if user_id then
        TriggerClientEvent("anticl", -1, user_id, coords, reason )
    end
end)


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- COMANDOS
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

local webhooksocorro = "https://discord.com/api/webhooks/1279008000165543947/lQvJgY1_FKYollhxzLmtuisdjGE_S9t1cTo_2Zt0W1m42ISOrsQVnN-lSygW1FXpate4"

function SendWebhookMessage(webhookUrl, message)
    PerformHttpRequest(webhookUrl, function(err, text, headers)
            if err == 200 then
        end
    end, 'POST', json.encode({content = message}), {['Content-Type'] = 'application/json'})
end

RegisterServerEvent("socorro")
AddEventHandler("socorro", function()
    local source = source
    local user_id = vRP.getUserId(source)
    local valor = 30000


    local medicosDisponiveis = checkServices(source)
    if not medicosDisponiveis then
        TriggerClientEvent("Notify", source, "importante", "Você não pode utilizar o /socorro com médicos em serviço.", 10000)
        return
    end

    local saldoBanco = vRP.getBankMoney(user_id)
    if saldoBanco >= valor then
        if vRP.tryWithdraw(user_id, valor) then
            vRPclient.killGod(source)
            vRPclient.setHealth(source, 140)
            vRP.varyThirst(user_id, -100)
            vRP.varyHunger(user_id, -100)
            TriggerClientEvent("resetBleeding", source)
            TriggerClientEvent("resetDiagnostic", source)
            TriggerClientEvent("Notify", source, "sucesso", "Você pagou <b>R$ " .. vRP.format(valor) .. "</b> pelo socorro divino", 10000)

            local identity = vRP.getUserIdentity(user_id)
            local message = "```prolog\n[ID]: " .. user_id .. " " .. identity.nome .. " " .. identity.sobrenome .. " \n[USOU SOCORRO] " .. os.date("\n[Data]: %d/%m/%Y [Hora]: %H:%M:%S") .. " \r```"
            SendWebhookMessage(webhooksocorro, message)
        else
            TriggerClientEvent("Notify", source, "erro", "Erro ao processar o pagamento.", 10000)
        end
    else
        TriggerClientEvent("Notify", source, "importante", "Você não possui dinheiro suficiente no banco. R$ " .. vRP.format(valor) .. "", 10000)
    end
end)


function checkServices(source)
    local user_id = vRP.getUserId(source)
    if user_id then
        local paramedicos = vRP.getUsersByPermission("perm.unizk")
        if parseInt(#paramedicos) == 0 then
            return true
        end
    end
end

