Functions = {}

Functions.query = function(name, params)
	return vRP.query(name, params)
end

Functions.prepare = function(name, params)
	return vRP.prepare(name, params)
end

Functions.execute = function(name, params)
	return vRP.execute(name, params)
end

Functions.getUserId = function(source)
    return vRP.getUserId(source)
end

Functions.getUserSource = function(user_id)
    return vRP.getUserSource(user_id)
end

Functions.getUserGroupInfos = function(user_id, orgtype)
    return vRP.getUserGroupInfos(user_id,orgtype)
end

Functions.hasPermission = function(user_id, perm)
    return vRP.hasPermission(user_id, perm)
end

Functions.prompt = function(source, text, resposta)
    vRP.prompt(source, text, resposta)
end

Functions.getInventoryItemAmount = function(user_id, item)
    return vRP.getInventoryItemAmount(user_id,item)
end

Functions.tryGetInventoryItem = function(user_id, item, amount)
    return vRP.tryGetInventoryItem(user_id, item, amount)
end

Functions.getAllName = function(user_id)
    local identity = vRP.getUserIdentity(user_id)
    return identity.nome.." "..identity.sobrenome
end

Functions.notify = function(event, source, type, mensagem, time)
	TriggerClientEvent(event, source, type, mensagem, time)
end

Functions.sendLog = function(webhook, text)
	SendWebhookMessage(webhook,text)
end

Functions.checkInventoryWeight = function(user_id, spawnID, amount)
    if vRP.getInventoryWeight(user_id)+vRP.getItemWeight(tostring(spawnID))*parseInt(amount) > vRP.getInventoryMaxWeight(user_id) then -- CASO ESTIVER CHEIO
        return false
    end

    return true
end

Functions.giveInventoryItem = function(user_id, item, amount)
    vRP.giveInventoryItem(user_id, item, amount, true)
end

Functions.getInventory = function(user_id)
    return vRP.getInventory(user_id)
end


Functions.progressBar = function(user_id, time)
    local source = vRP.getUserSource(user_id)
    TriggerClientEvent("progress", source, time) -- Caso use em segundos
end

SendWebhookMessage = function(webhook,message)
    if webhook ~= "none" then
        PerformHttpRequest(webhook, function(err, text, headers) end, 'POST', json.encode({content = message}), { ['Content-Type'] = 'application/json' })
    end
end