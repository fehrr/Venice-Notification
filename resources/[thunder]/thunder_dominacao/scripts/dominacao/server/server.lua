Functions.prepare("thunder/getDominas","SELECT * FROM thunder_dominas")
Functions.prepare("thunder/SetDominas", "INSERT IGNORE INTO thunder_dominas(id,orgName,cooldown) VALUES(@id,@orgName,@cooldown)")
Functions.prepare("thunder/UpdateDominas", "UPDATE thunder_dominas SET orgName = @orgName, cooldown = @cooldown WHERE id = @id")

Functions.prepare("thunder/updateWins", "UPDATE thunder_ranking_dominas SET wins = @wins WHERE orgName = @orgName")
Functions.prepare("thunder/SetWins", "INSERT IGNORE INTO thunder_ranking_dominas(orgName, wins, type) VALUES(@orgName, @wins, type)")
Functions.prepare("thunder/getWins","SELECT * FROM thunder_ranking_dominas WHERE orgName = @orgName")
Functions.prepare("thunder/getAllWins", "SELECT * FROM thunder_ranking_dominas")
Functions.prepare("thunder/getWinsByType", "SELECT * FROM thunder_ranking_dominas WHERE type = @type")

local Delay = {}

local Andamento = {}

local inZone = {}

local Timing = {}

local OrgsDominas = {}


RegisterTunnel.RequestInit = function(index)
    local source = source
    local user_id = Functions.getUserId(source)
    local group = Functions.getUserGroupInfos(user_id,DominationConfig.gtype)
    if not Andamento[index.id] then
        if group and group._config and group._config.orgType then
            if group._config.orgType == DominationConfig.FormatNames[DominationConfig.Zones[index.id].name] then
                local orgName = group._config.orgName
                if orgName == OrgsDominas[index.id] then Functions.notify("Notify", source, 'negado', 'Sua organização já esta dominando esse local.', 5000) return end
                if not Delay[index.id] or not (Delay[index.id] >= os.time()) then
                    Delay[index.id] = os.time() + (DominationConfig.Zones[index.id].cooldown*60)
                    Andamento[index.id] = source
                    vTunnel.updateDomination(-1, index.id, true, orgName, source)
                    Timing[index.id] = { time = (os.time()+DominationConfig.Zones[index.id].time*60), org = orgName, user_id = user_id }
                    Functions.sendLog(DominationConfig.Webhooks.init, "A ORGANIZAÇÃO "..orgName.." [ USER_ID : "..user_id..", NAME: "..Functions.getAllName(user_id).." ] INICIOU A DOMINAÇÃO DA AREA "..DominationConfig.FormatNames[DominationConfig.Zones[index.id].name]..".")
                    return true
                else
                    Functions.notify("Notify", source, 'negado', 'Esse local não pode ser dominado pois ainda encontra-se em delay, aguarde '..(Delay[index.id]-os.time()).." segundos para tentar novamente.", 5000)
                end
            else
                Functions.notify("Notify", source, 'negado', 'Você não faz parte de uma organização desse tipo e não pode dominar esse local.', 5000)
            end
        else
            Functions.notify("Notify", source, 'negado', 'Você não faz parte de uma organização desse tipo e não pode dominar esse local.', 5000)
        end
    else
        Functions.notify("Notify", source, 'negado', 'Você não pode dominar esse local pois já esta em andamento a dominação.', 5000)
    end
end

CheckDominas = function(index, user_id)
    local group = Functions.getUserGroupInfos(user_id,DominationConfig.gtype)
    local check = ''
    for k,v in pairs(DominationConfig.FormatNames) do
        if index == v then
            check = k
        end
    end
    local index = ''
    for l,w in pairs(DominationConfig.Zones) do
        if w.name == check then
            index = l
        end
    end
    if OrgsDominas[index] == group._config.orgName then
        return true
    end
    return false
end

exports('checkDominas', function(user_id)
    local group = Functions.getUserGroupInfos(user_id,DominationConfig.gtype)
    local check = ''
    for k,v in pairs(DominationConfig.FormatNames) do
        if group._config.orgType == v then
            check = k
        end
    end
    local index = 0
    for l,w in pairs(DominationConfig.Zones) do
        if w.name == check then
            index = l
        end
    end
    if OrgsDominas[index] == group._config.orgName then
        return true
    end
    return false
end)

RegisterTunnel.EnterZone = function(index, running)
    local source = source
    local user_id = Functions.getUserId(source)
    if user_id and running then
        if not inZone[index] then inZone[index] = {} end
        inZone[index][user_id] = true
    end
end

RegisterTunnel.LeaveZone = function(index)
    local source = source
    local user_id = Functions.getUserId(source)
    if user_id then
        if not inZone[index] then inZone[index] = {} end
        inZone[index][user_id] = nil
    end
end

RegisterTunnel.CancelDomination = function(index)
    local source = source
    local user_id = Functions.getUserId(source)
    if user_id then
        Andamento[index] = nil
        if not OrgsDominas[index] then OrgsDominas[index] = "Ninguem" end
        for k,v in pairs(inZone[index]) do
            local nsource = Functions.getUserSource(parseInt(k))
            vTunnel.updateDomination(nsource, index, false, false, source)
        end
        Delay[index] = os.time() + (DominationConfig.delayDeath*60)
        if OrgsDominas[index] == "Ninguem" then
            Functions.execute("thunder/SetDominas",{ id = index, orgName = OrgsDominas[index], cooldown = Delay[index] })
        else
            Functions.execute("thunder/UpdateDominas",{ id = index, orgName = OrgsDominas[index], cooldown = Delay[index] })
        end
        Functions.sendLog(DominationConfig.Webhooks.cancel, "A ORGANIZAÇÃO "..Timing[index].org.." [ USER_ID : "..user_id..", NAME: "..Functions.getAllName(user_id).." ] CANCELOU A DOMINAÇÃO DA AREA "..DominationConfig.FormatNames[DominationConfig.Zones[index].name]..".")
        vTunnel.updateDomination(-1, index, false, false, source)
        vTunnel.syncBlipsDomination(-1,OrgsDominas)
        Timing[index] = nil
    end
end


Citizen.CreateThread(function()
    while true do
        for k,v in pairs(Timing) do
            if not (Timing[k].time >= os.time()) then
                if not OrgsDominas[k] or OrgsDominas[k] == "Ninguem" then
                    Functions.execute("thunder/SetDominas",{ id = k, orgName = Timing[k].org, cooldown = Delay[k] })
                else
                    Functions.execute("thunder/UpdateDominas",{ id = k, orgName = Timing[k].org, cooldown = Delay[k] })
                end
                local query = Functions.query("thunder/getWins", { orgName = Timing[k].org})
                if #query > 0 then
                    Functions.execute("thunder/updateWins",{ orgName = Timing[k].org, wins = query[1].wins+1 })
                else
                    Functions.execute("thunder/SetWins",{ orgName = Timing[k].org, wins = 1, type = DominationConfig.FormatNames[DominationConfig.Zones[k].name] })
                end

                if DominationConfig.Zones[k].reward then
                    DominationConfig.Zones[k].reward(Timing[k].user_id)
                end

                Functions.sendLog(DominationConfig.Webhooks.domination, "A ORGANIZAÇÃO "..Timing[k].org.." [ USER_ID : "..Timing[k].user_id..", NAME: "..Functions.getAllName(Timing[k].user_id).." ]  DOMINOU A ARÉA DE DOMINAÇÃO "..DominationConfig.FormatNames[DominationConfig.Zones[k].name]..".")
                OrgsDominas[k] = Timing[k].org
                --vTunnel.syncBlipsDomination(-1,OrgsDominas)
                vTunnel.updateDomination(-1, k, false, OrgsDominas[k], nil)
                Timing[k] = nil
                Andamento[k] = nil
            end
        end
        Wait(1000)
    end
end)


AddEventHandler("vRP:playerSpawn",function(user_id,source,first_spawn)
    vTunnel.syncBlipsDomination(source,OrgsDominas)
end)


Citizen.CreateThread(function()
    local query = Functions.query("thunder/getDominas")
    for k,v in pairs(query) do
        OrgsDominas[v.id] = v.orgName
        Delay[v.id] = v.cooldown
    end
    Wait(10000)
    vTunnel.syncBlipsDomination(-1,OrgsDominas)
end)

RegisterTunnel.TopRanks = function()
    local query = Functions.query('thunder/getAllWins')
    if #query > 0 then
        table.sort(query, function(value1, value2) return value1.wins > value2.wins end)
        for i = 1,#query do
            query[i].position = i
            query[i].org = query[i].orgName
        end
        return {query, query}
    end
end

RegisterTunnel.getRank = function(type)
    local query = Functions.query('thunder/getWinsByType', { type = type })
    if #query > 0 then
        table.sort(query, function(value1, value2) return value1.wins > value2.wins end)
        for i = 1,#query do
            query[i].position = i
            query[i].org = query[i].orgName
        end
    -- local orgs = {
    --     {
    --         position = 1,
    --         org = "teste",
    --         wins = 10
    --     },
    -- }
        return query
    end
end

-- RegisterTunnel.SendKillFeed = function(index, killer, weapon)
--     local source = source
--     local user_id = Functions.getUserId(source)
--     local kuser_id = Functions.getUserId(killer)
--     if user_id and kuser_id then
--         local kidentity = Functions.getUserIdentity(kuser_id)
--         local identity = Functions.getUserIdentity(user_id)
--         for k,v in pairs(inZone[index]) do
--             vTunnel.syncDeath(Functions.getUserSource(k),{ killer = kidentity.name.." "..kidentity.firstname, victim = identity.name.." "..identity.firstname, weapon = weapon })
--         end
--     end
-- end


function dump(o)
    if type(o) == 'table' then
       local s = '{ '
       for k,v in pairs(o) do
          if type(k) ~= 'number' then k = '"'..k..'"' end
          s = s ..dump(v) .. ','
       end
       return s .. '} '
    else
       return tostring(o)
    end
 end

RegisterTunnel.SendZone = function(zones)
    local source = source
    Functions.prompt(source, 'Zona:', dump(zones))
end


RegisterCommand(DominationConfig['command'],function(source,args,rawCommand)
	local user_id = Functions.getUserId(source)
	if user_id then
		if Functions.hasPermission(user_id, DominationConfig.permCreate) then
			vTunnel.openCreateMode(source)
		end
	end
end)






