local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")
fclient = Tunnel.getInterface("nation_creator")
func = {}
Tunnel.bindInterface("nation_creator", func)

multiCharacter = true

---------------------------------------------------------------------------
-----------------------VERIFICAÇÃO DE PERMISSÃO--------------------------
---------------------------------------------------------------------------

if multiCharacter then
    -- vRP._prepare("nation_creator/createAgeColumn","ALTER TABLE vrp_user_identities ADD IF NOT EXISTS age INT(11) NOT NULL DEFAULT 20")
    vRP._prepare("nation_creator/update_user_first_spawn","UPDATE vrp_user_identities SET nome = @name, sobrenome = @firstname, idade = @age, chavePix = @chavePix WHERE user_id = @user_id")
    vRP._prepare("nation_creator/create_characters","INSERT INTO vrp_users(license) VALUES(@license)")
    vRP._prepare("nation_creator/remove_characters","UPDATE vrp_users SET deleted = 1 WHERE id = @id")
    vRP._prepare("nation_creator/get_characters","SELECT * FROM vrp_users WHERE license = @license and deleted = 0")
    vRP._prepare("nation_creator/get_character","SELECT * FROM vrp_users WHERE license = @license and deleted = 0 and id = @user_id")
    vRP._prepare("creator/get_charinfo","SELECT * FROM vrp_user_identities WHERE user_id = @user_id")
    -- CreateThread(function() vRP.execute("nation_creator/createAgeColumn") end) -- criar coluna idade na db
else
    vRP._prepare("nation_creator/update_user_first_spawn","UPDATE vrp_user_identities SET firstname = @firstname, name = @name, age = @age WHERE user_id = @user_id")
end


function func.checkPermission(permission, src)
    local source = src or source
    local user_id = vRP.getUserId(source)
    if type(permission) == "table" then
        for i, perm in pairs(permission) do
            if vRP.hasPermission(user_id, perm) then
                return true
            end
        end
        return false
    end
    return vRP.hasPermission(user_id, permission)
end


function func.saveChar(name, lastName, age, char, id)
    local source = source
    local user_id = id or vRP.getUserId(source)
    if char then
        vRP.setUData(user_id, "nation_char", json.encode(char,{indent=false}))
    end
    if name and lastName and age then
        vRP.execute("nation_creator/update_user_first_spawn",{ user_id = user_id, name = name, firstname = lastName, age = age, chavePix = user_id })
        vRP.updateIdentity(user_id)
    end
    TriggerClientEvent("nation_barbershop:init", source, char)
    vRP._updateSelectSkin(user_id, GetEntityModel(GetPlayerPed(source)))
    vRP.setUData(user_id,"spawnController",json.encode(2))
		
    -- if user_id == 1 then
    --     vRP.addUserGroup(1,'manager')
    -- end
    vRPclient._playerStateReady(source,true)
    return true
end


function getUserChar(user_id, source, nation)
    local char
    local data = vRP.getUData(user_id, "nation_char")
    if data and data ~= "" then
        char = json.decode(data)
        char.gender = getGender(user_id) or char.gender
    elseif not nation then
        data = vRP.getUData(user_id, "currentCharacterMode")
        if data and data ~= "" then 
            local gender = "male"
            local char = json.decode(data)
            if char and char.gender and char.gender == 1 then
                gender = "female"
            else 
                gender = getGender(user_id) or "male"
            end
            char = fclient.setOldChar(source, char, getUserClothes(user_id), gender, user_id)
        end
    end
    return char
end

local userlogin = {}
function playerSpawn(user_id, source, first_spawn)
    if first_spawn then
        Wait(1000)
        processSpawnController(source,getUserChar(user_id, source),user_id)
    end
end

AddEventHandler("vRP:playerSpawn",playerSpawn)

function processSpawnController(source,char,user_id)
    getUserLastPosition(source, user_id)
	local source = source
	if char then
		if not userlogin[user_id] then
			userlogin[user_id] = true
			fclient._spawnPlayer(source,false)
		else
			fclient._spawnPlayer(source,true)
		end
        fclient.setPlayerChar(source, char, true)
        TriggerClientEvent("nation_barbershop:init", source, char)
        setPlayerTattoos(source, user_id)
        fclient._setClothing(source, getUserClothes(user_id))
	else
        userlogin[user_id] = true
        local data = vRP.getUData(user_id, "currentCharacterMode")
        if data and data ~= "" then 
            local gender = "male"
            local char = json.decode(data)
            if char and char.gender and char.gender == 1 then
                gender = "female"
            else 
                gender = getGender(user_id)
            end
            fclient._spawnPlayer(source,false)
            fclient._setOldChar(source, char, getUserClothes(user_id), gender, user_id)
        else
		    fclient._startCreator(source)
        end
	end

	-- for k,v in pairs(vRP.getSourceTables()) do
	-- 	vRPclient._addPlayer(source,v)
	-- end
	-- vRPclient._addPlayer(-1,source)
end




function setPlayerTattoos(source, user_id)
    TriggerClientEvent("tattoos:setTattoos", source, getUserTattoos(user_id))
    TriggerClientEvent("reloadtattos", source)
    TriggerEvent('dpn_tattoo:setPedServer', source)
    TriggerClientEvent("nyoModule:tattooUpdate", source, false)
end


function func.setPlayerTattoos(id)
    local source = source
    local user_id = id or vRP.getUserId(source)
    if user_id then
        setPlayerTattoos(source, user_id)
    end
end

function getUserLastPosition(source, user_id)
    local coords = {-582.84,50.67,87.43}
    local datatable = vRP.getUserDataTable(user_id)
    if datatable and datatable.position then
        local p = datatable.position
        coords = { p.x, p.y, p.z }
    else
        local data = vRP.getUData(user_id, "vRP:datatable")
        if data and data ~= "" then
            local p = json.decode(data).position
            if p.x and p.y and p.z then
                coords = { p.x, p.y, p.z }
            end
        end
    end
    fclient._setPlayerLastCoords(source, coords)
    return coords
end


function func.getUserLastPosition()
    local source = source
    local user_id = vRP.getUserId(source)
    getUserLastPosition(source, user_id)
end


function format(n)
    local left,num,right = string.match(n,'^([^%d]*%d)(%d*)(.-)$')
    return left..(num:reverse():gsub('(%d%d%d)','%1.'):reverse())..right
end


function func.changeSession(session)
    local source = source
    SetPlayerRoutingBucket(source, session)
end

function func.updateLogin()
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        userlogin[user_id] = true
        local char = getUserChar(user_id, source)
        if char then 
            TriggerClientEvent("nation_barbershop:init", source, char)
            setPlayerTattoos(source, user_id)
        end
    end
end





function func.getCharsInfo()
    local source = source
    local license = getPlayerLicence(source)
    local data = vRP.query("nation_creator/get_characters",{ license = license })
    local info = { chars = {} }
    for k,v in ipairs(data) do
        local char = getUserChar(v.id, source) or {}
        local clothes = getUserClothes(v.id)
        local gender = "masculino"
        local identity = vRP.getUserIdentity(v.id)
        if char.gender and char.gender == "female" then
            gender = "feminino"
        elseif char.gender ~= "male" then
            gender = "outros"
        end
        local bank = parseInt(( identity and identity.banco or 0))
        -- local getbank = vRP.query("vRP/get_money", { user_id = v.id})
        -- if #getbank > 0 then
        --     bank = getbank[1].bank
        -- end
        info.chars[k] = {
            name = (identity and identity.nome or "Nome").." "..(identity and identity.sobrenome or 'Indefinido'), age = (identity and identity.idade or '18').." anos", bank = "$ "..format(bank), clothes = clothes,
            registration = (identity and identity.registro or '0000000'), phone = (identity and identity.telefone or '000-000'), user_id = v.id, id = "#"..v.id, gender = gender, char = char
        }
    end
    info.maxChars = getUserMaxChars(source) 
    return info
end

function getUserMaxChars(source)
    local license = getPlayerLicence(source)
    local infos = vRP.getInfos(license)
    if infos and infos[1] and infos[1].chars then
        return infos[1].chars -- máximo de chars para criar
    end
    return 1
end

function getUserClothes(user_id)
    local data = vRP.getUData(user_id, "Clothings")
    if data and data ~= "" then
        local clothes = json.decode(data)
        if clothes then
            return clothes
        end
    end
    data = vRP.getUData(user_id, "vRP:datatable")
    if data and data ~= "" then
        local datatable = json.decode(data)
        if datatable and datatable.customization then
            return datatable.customization
        end
    end
    local datatable = vRP.getUserDataTable(user_id) or {}
    return datatable.customization or {}
end

function getUserTattoos(user_id)
    local data = vRP.getUData(user_id,"vRP:tattoos")
    if data and data ~= '' then
       local custom = json.decode(data)  
       return custom or {}
    end
    data = vRP.getUData(user_id,"Tattoos")
    if data and data ~= '' then
       local custom = json.decode(data)  
       return custom or {}
    end
    return {}
end

function isEmpty(t)
    if type(t) == "string" and t ~= "" then
        return false
    end
    for k,v in pairs(t) do
        if v then
            return false
        end
    end
    return true
end

function getGender(user_id)
    local datatable = vRP.getUserDataTable(user_id) or json.decode(vRP.getUData(user_id, "vrp:datatable")) or {}
    if type(datatable) == "table" then
        local model = datatable.skin or datatable.customization
        if model then
            if type(model) == "table" then
                model = model.modelhash or model.model
            end
            if model == GetHashKey("mp_m_freemode_01") then
                return "male"
            elseif model == GetHashKey("mp_f_freemode_01") then
                return "female"
            else
                return model
            end
        end
    end
end

function func.getOverlay()
    local source = source
    local user_id = vRP.getUserId(source)
    if user_id then
        local char = getUserChar(user_id, source, true)
        if char and char.overlay then
            return char.overlay
        end
    end
    return 0
end




function func.playChar(info)
    local source = source
    local license = getPlayerLicence(source)
    local data = vRP.query("nation_creator/get_character",{ license = license, user_id = info.user_id })
    if #data > 0 then
        TriggerEvent("baseModule:idLoaded",source,info.user_id,nil, nil, nil)
        local query = vRP.query("creator/get_charinfo", { user_id = info.user_id })
        if #query > 0 then
            TriggerEvent("baseModule:idLoaded",source,info.user_id,nil)
        else
            TriggerEvent("baseModule:idLoaded",source,info.user_id,"mp_m_freemode_01","Individuo","Indigente",20)
        end
        -- playerSpawn(info.user_id, source, true)
    end
end


function func.tryDeleteChar(info)
    local source = source
    local license = getPlayerLicence(source)
    local data = vRP.query("nation_creator/get_character",{ license = license, user_id = info.user_id })
    -- if #data > 0 then
    --     vRP._execute("nation_creator/remove_characters",{ id = info.user_id })
    --     return true, ""
    -- end
    return false, "Não permitido"
end

function func.tryCreateChar()
    local source = source
    local license = getPlayerLicence(source)
    local data = vRP.query("nation_creator/get_characters",{ license = license })
    if #data < getUserMaxChars(source)  then -- limite de personagens
        vRP.execute("nation_creator/create_characters",{ license = license })
        local myChars = vRP.query("nation_creator/get_characters",{ license = license })
        local user_id = myChars[#myChars].id
        TriggerEvent("baseModule:idLoaded",source,user_id,"mp_m_freemode_01","Individuo","Indigente",18,true)
        return true
    end
end


function getPlayerLicence(source)
    return vRP.GetLicense(source)
end


RegisterCommand("cr", function(source) -- setar as customizações dnv (tipo bvida)
local user_id = vRP.getUserId(source)
local char = getUserChar(user_id, source)
if char then
    fclient._setPlayerChar(source, char, true)
    TriggerClientEvent("nation_barbershop:init", source, char)
    setPlayerTattoos(source, user_id)
    fclient._setClothing(source, getUserClothes(user_id))
end
end)

RegisterCommand('resetchar',function(source, args) -- COMANDO DE ADMIN PARA RESETAR PERSONAGEM
    if func.checkPermission({"admin.permissao", "mod.permissao", "Admin"}, source) then
        if args[1] then 
            local id = tonumber(args[1])
            if id then
                local src = vRP.getUserSource(id)
                if src and vRP.request(source, "Deseja resetar o id "..id.." ?", 30) then
                    fclient._startCreator(src)
                end
            end
        elseif vRP.request(source, "Deseja resetar seu personagem ?", 30) then
            fclient._startCreator(source)
        end
    end
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- REesetandoplayer
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterServerEvent("nation:resetplayer")
AddEventHandler("nation:resetplayer",function(source,user_id)
    if source ~= nil then
        fclient._startCreator(source)
    end
end)

RegisterCommand("setupchar",function(source)
	TriggerClientEvent("spawn:setupChars",source)
end)