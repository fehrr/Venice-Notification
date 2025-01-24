local config = {}

config.Token      = "FOXZIN"
config.LicenseKey = "FOXZIN"
config.IPItems    = "http://181.215.254.182/inventario/"
config.IPVehicles = "http://181.215.254.182/veiculos/"

config.permissions = {
    ["developer.permissao"] = { 
        ["players"]       = true,
        ["groups"]        = true,
        ["punishments"]   = true,
        ["messages"]      = true,
        ["spawnitems"]    = true,
        ["spawnvehicles"] = true,
        ["addvehicles"]   = true
    },
    ["admin.permissao"] = { 
        ["players"]       = true,
        ["groups"]        = true,
        ["punishments"]   = true,
        ["messages"]      = true,
        ["spawnitems"]    = true,
        ["spawnvehicles"] = true,
        ["addvehicles"]   = false
    },
    ["moderador.permissao"] = { 
        ["players"]       = true,
        ["groups"]        = false,
        ["punishments"]   = true,
        ["messages"]      = true,
        ["spawnitems"]    = false,
        ["spawnvehicles"] = false,
        ["addvehicles"]   = false
    },
    ["suporte.permissao"] = { 
        ["players"]       = true,
        ["groups"]        = false,
        ["punishments"]   = true,
        ["messages"]      = true,
        ["spawnitems"]    = false,
        ["spawnvehicles"] = false,
        ["addvehicles"]   = false
    },
}

config.commands = {
    opentablet = "painelstaff",
    openchat   = "chatstaff"
}

config.webhooks = {
    addgroup          = "  ",
    remgroup          = "  ",
    addban            = "  ",
    addwarning        = "  ",
    editban           = "  ",
    deletewarning     = "  ",
    sendmessage       = "  ",
    sendmessageplayer = "  ",
    spawnitem         = "  ",
    spawnvehicle      = "  ",
    addvehicle        = "  ",
    webhookimage      = "https://cdn.discordapp.com/attachments/1229607276923322368/1275999012641701929/ROLE_1.png?ex=66e4ef2f&is=66e39daf&hm=e0239b705dfcc78a4f4e86a04617660d3876c40bd0de334710dbdb57e57bee79&",
    webhooktext       = "foxzin - ",
    webhookcolor      = 16431885
}

config.starttablet = function()
    vRP._CarregarObjeto("amb@code_human_in_bus_passenger_idles@female@tablet@idle_a","idle_b","prop_cs_tablet",49,60309)
    TriggerEvent("syncclean",-1,nveh)
end

config.stoptablet = function()
	vRP._DeletarObjeto()
	vRP._stopAnim(false)
end

return config