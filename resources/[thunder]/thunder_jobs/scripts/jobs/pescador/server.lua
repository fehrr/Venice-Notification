
local peixes = {
    "pacu",
    "tilapia",
     "salmao" ,
    "tucunare",
    "dourado"
}



-- RegisterTunnel.givePeixe = function()
--     local source = source
--     local user_id = vRP.getUserId(source)
--     if user_id then
--         local item = math.random(1,#peixes)
--         local quantidade = math.random(1,5)
--         if vRP.computeInvWeight(user_id)+vRP.getItemWeight(peixes[item])*parseInt(quantidade) <= vRP.getInventoryMaxWeight(user_id) then -- CASO ESTIVER CHEIO
--             vRP.giveInventoryItem(user_id, peixes[item], quantidade, true)
--         end
--     end
-- end

RegisterTunnel.givePeixe = function()
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        if vRP.tryGetInventoryItem(user_id, "isca", 1, true) then
            local item = math.random(1, #peixes)
            local quantidade = math.random(1, 5)
            if vRP.computeInvWeight(user_id) + vRP.getItemWeight(peixes[item]) * parseInt(quantidade) <= vRP.getInventoryMaxWeight(user_id) then
                vRP.giveInventoryItem(user_id, peixes[item], quantidade, true)
            else
                vRP.giveInventoryItem(user_id, "isca", 1, true)
                TriggerClientEvent("Notify", source, "aviso", "Seu inventário está cheio!", 5000)
            end
        else
            TriggerClientEvent("Notify", source, "aviso", "Você precisa de uma isca para pescar!", 5000)
        end
    end
end
