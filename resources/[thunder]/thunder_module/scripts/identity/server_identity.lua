local Tunnel = module("vrp", "lib/Tunnel")
local Proxy = module("vrp", "lib/Proxy")
vRP = Proxy.getInterface("vRP")
fclient = Tunnel.getInterface("module")
Foxzin = {}
Tunnel.bindInterface("module", Foxzin)

function Foxzin.Identity()
    local source = source
    local user_id = vRP.getUserId(source)
    local identity = vRP.getUserIdentity(user_id)
    local groupv = vRP.getUserGroupByType(user_id, "org") or "Desempregado"
    local groupname = vRP.getGroupTitle(groupv)
    local vips = ""
    if vRP.hasGroup(user_id, "Inicial") then vips = vips.." Inicial" end
    if vRP.hasGroup(user_id, "VipBronze") then vips = vips.. " Bronze" end
    if vRP.hasGroup(user_id, "VipPrata") then vips = vips.." Prata" end
    if vRP.hasGroup(user_id, "VipOuro") then vips = vips.." Ouro" end
    if vRP.hasGroup(user_id, "VipPlatina") then vips = vips.." Platina" end
    if vRP.hasGroup(user_id, "VipCrianca") then vips = vips.." VipCrianca" end
    
    if vRP.hasGroup(user_id, "VipDiamante") then vips = vips.." Diamante" end
    if vRP.hasGroup(user_id, "VipEsmeralda") then vips = vips.." Esmeralda" end
    if vRP.hasGroup(user_id, "VipSafira") then vips = vips.." Safira" end
    if vRP.hasGroup(user_id, "VipRubi") then vips = vips.." Rubi" end
    if vRP.hasGroup(user_id, "Vipthunder") then vips = vips.." thunder" end
    if vRP.hasGroup(user_id, "VipSupremothunder") then vips = vips.." Supremothunder" end
    if vRP.hasGroup(user_id, "valecasa") then vips = vips.." valecasa" end
    if vRP.hasGroup(user_id, "valegaragem") then vips = vips.." valegaragem" end
    if vips == "" then vips = "Nenhum" end
    if user_id then
        local relacionamento = json.decode(identity.relacionamento)
        local consulta = vRP.getSData("ZoPorte:" .. user_id)
        local resultado = json.decode(consulta) or {}
        resultado.possui = resultado.possui or 0
        if resultado.possui == 1 then
            parmas = "Sim Possui"
        end

        -- Obtém as informações do jogador
        infos = {
            passaporte = user_id,
            nome = identity.nome,
            sobrenome = identity.sobrenome,
            registro = identity.registro,
            celular = identity.telefone,
            emprego = groupname,
            vip = vips,
            carteira = vRP.getMoney(user_id) or 0,
            banco = vRP.getBankMoney(user_id) or 0,
            relacionamento = (relacionamento and relacionamento.tipo or "Solteiro (a)"),
            multas = vRP.getMultas(user_id) or 0,
            valegaragem = vRP.hasGroup(user_id, "valegaragem") and 1 or 0,
            valecasa = vRP.hasGroup(user_id, "valecasa") and 1 or 0,
            parmas = (resultado and resultado.possui or 0 ),
        }
        return infos
    end
end


