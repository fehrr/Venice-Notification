-----------------------------------------------------------------------------------------------------------------------------------------
-- VRP
-----------------------------------------------------------------------------------------------------------------------------------------
local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")
-----------------------------------------------------------------------------------------------------------------------------------------
-- CONNECTION
-----------------------------------------------------------------------------------------------------------------------------------------
cRP = {}
Tunnel.bindInterface("target",cRP)
-----------------------------------------------------------------------------------------------------------------------------------------
-- PERMISSÃO POLICIA
-----------------------------------------------------------------------------------------------------------------------------------------
function cRP.PermissionPolicia()
	local source = source
	local user_id = vRP.getUserId(source)
	return vRP.hasPermission(user_id,"perm.policia")
end

-----------------------------------------------------------------------------------------------------------------------------------------
-- PERMISSÃO PARAMEDICO
-----------------------------------------------------------------------------------------------------------------------------------------
function cRP.PermissionParamedico()
	local source = source
	local user_id = vRP.getUserId(source)
	return vRP.hasPermission(user_id,"perm.paramedico")
end

-----------------------------------------------------------------------------------------------------------------------------------------
-- LIKE E DESLIKE
-----------------------------------------------------------------------------------------------------------------------------------------

function cRP.getLikeInfos(nsource)
	local nuser_id = vRP.getUserId(nsource)
	if nuser_id then
		local query = vRP.query('getLike', { user_id = nuser_id })
		if #query > 0 then
			return query[1].like, query[1].deslike
		end
	end
	return 0,0
end

-----------------------------------------------------------------------------------------------------------------------------------------
-- PERMISSÃO PARAMEDICO
-----------------------------------------------------------------------------------------------------------------------------------------
function cRP.PermissionAdmin()
	local source = source
	local user_id = vRP.getUserId(source)
	return vRP.hasPermission(user_id,"admin.permissao")
end