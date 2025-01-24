local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")
vRPserver = Tunnel.getInterface("vRP","mirtin_survival")

src = {}
Tunnel.bindInterface("mirtin_survival",src)

vSERVER = Tunnel.getInterface("mirtin_survival") 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
cfg = {}

cfg.versionNUI = true -- Tela de Morte Versão com NUI
cfg.deathNUItimer = 0 -- Tempo de morte que o jogador vai conseguir utilizar o botao de desistir imediatamente
cfg.deathtimer = 300 -- Tempo in coma
cfg.minHealth = 101 -- o Minimo de vida do seu servidor
cfg.maxHealth = 400 -- o Maximo de vida do seu servidor
cfg.cooldown = 10 -- Delay por pessoa, para evitar FLOODS de Logs no DISCORD [ OBS: Deixar sempre maior que 10 ]
cfg.respawn = vec3(339.14,-1394.92,32.5) -- Localização quando o jogador respawnar
cfg.timedown = false -- Quando acabar os segundos de vida o jogador morrer automaticamente.

cfg.clearAccount = function() -- Limpar a conta do player quando morrer
    vSERVER.limparConta() 
end

cfg.animDeath = function() -- Animação quando o jogador morrer
    local ped = PlayerPedId()

    if not IsEntityPlayingAnim(ped,"dead","dead_a",3) then -- Caso voce queira utilizar por animação
        vRP.playAnim(false,{{"dead","dead_a",8.0,8.0,-1,1,1,0,0,0}},true)
    end 
end


local in_paintball = false
local in_arena = false

cfg.dependencys = function() -- Coloque aqui suas dependencias de scripts para não dar conflito ex: nation_paintball, arenapvp
    if in_paintball then
        return
    end

    if in_arena then
        return
    end
	
	return true
end

RegisterNetEvent("mirtin_survival:updateArena")
AddEventHandler("mirtin_survival:updateArena", function(boolean)
    in_arena = boolean
end)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- CONFIG MOTIVOS DAS MORTES
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
cfg.reasons = {
    [0] = "Não especificado",
    [-1569615261] = "Soco",
    [-100946242] = "Animal",
    [148160082] = "Puma",
    [-1716189206] = "Arma Faca",
    [1737195953] = "Arma Cassetete",
    [1317494643] = "Arma Martelo",
    [-1786099057] = "Arma Taco de Baseball",
    [1141786504] = "Arma Taco de Golf",
    [-2067956739] = "Arma CrowBar",
    [453432689] = "Arma Pistola",
    [1593441988] = "Arma Pistola de Combate",
    [584646201] = "Arma AP Pistol",
    [-1716589765] = "Arma Pistola .50",
    [324215364] = "Arma Micro SMG",
    [736523883] = "Arma SMG",
    [-270015777] = "Arma Assault SMG",
    [-1074790547] = "Arma AK-47",
    [-2084633992] = "Arma M4",
    [-1357824103] = "Arma Advanced Rifle",
    [-1660422300] = "Arma MG",
    [2144741730] = "Arma Combat MG",
    [487013001] = "Arma Shotgun",
    [2017895192] = "Arma Shotgun cano curto",
    [-494615257] = "Arma Assalto Shotgun",
    [-1654528753] = "Arma Shotugun BullPup",
    [911657153] = "Arma Tazer",
    [100416529] = "Arma Sniper",
    [205991906] = "Arma Heavy Sniper",
    [856002082] = "Arma Sniper Remota",
    [-1568386805] = "Arma Lança Granada",
    [1305664598] = "Arma Lança Granada Fumaça",
    [-1312131151] = "Arma RPG",
    [375527679] = "Arma Missel",
    [324506233] = "Arma Missel",
    [1752584910] = "WEAPON_STINGER",
    [1119849093] = "Arma Minigun",
    [-1813897027] = "Granada",
    [741814745] = "Bomba Adesiva",
    [-37975472] = "Granada de Fumaça",
    [-1600701090] = "Granada de Gas",
    [615608432] = "Molotov",
    [101631238] = "Extintor de Incendio",
    [600439132] = "Arma Bola de Tenis",
    [-1090665087] = "Missel Teleguiado",
    [1223143800] = "Espinhos",
    [-10959621] = "Afogamento",
    [1936677264] = "Afogamento com Veiculo",
    [-1955384325] = "Sangrando",
    [-1833087301] = "Eletrocutado",
    [539292904] = "Explosão",
    [-842959696] = "Pulou de um lugar muito alto",
    [910830060] = "ExaustÃo",
    [133987706] = "Prensado por Veiculo",
    [-1553120962] = "Atropelado",
    [341774354] = "WEAPON_HELI_CRASH",
    [-544306709] = "Pegando fogo",

    [GetHashKey("WEAPON_MICROSMG")] = "Uzi", 
    [GetHashKey("WEAPON_SMG")] = "SMG", 
    [GetHashKey("WEAPON_ASSAULTSMG")] = "M-TAR 21", 
    [GetHashKey("WEAPON_COMBATPDW")] = "Sig Sauer", 
    [GetHashKey("WEAPON_MACHINEPISTOL")] = "MACHINE_PISTOL", 
    [GetHashKey("WEAPON_GUSENBERG")] = "Thompson", 
    [GetHashKey("WEAPON_MP5K")] = "MP5 k", 
    [GetHashKey("WEAPON_MP9")] = "MP9", 
    [GetHashKey("WEAPON_SCORPIONEVO")] = "SCORPIONEVO", 
    [GetHashKey("WEAPON_PISTOL")] = "Pistola", 
    [GetHashKey("WEAPON_PISTOL_MK2")] = "Five", 
    [GetHashKey("WEAPON_COMBATPISTOL")] = "Glock", 
    [GetHashKey("WEAPON_APPISTOL")] = "APP PISTOL", 
    [GetHashKey("WEAPON_SNSPISTOL")] = "Fajuta", 
    [GetHashKey("WEAPON_VINTAGEPISTOL")] = "Vintage Pistol", 
    [GetHashKey("WEAPON_REVOLVER")] = "Resolver", 
    [GetHashKey("WEAPON_M9A3")] = "M9A3", 
    [GetHashKey("WEAPON_ASSAULTRIFLE")] = "AK-103", 
    [GetHashKey("WEAPON_CARBINERIFLE_MK2")] = "MPX", 
    [GetHashKey("WEAPON_SPECIALCARBINE")] = "Parafal", 
    [GetHashKey("WEAPON_CARBINERIFLE")] = "M4A1", 
    [GetHashKey("WEAPON_PARAFAL")] = "Parafal", 
    [GetHashKey("WEAPON_SCARH")] = "ScarH", 
    [GetHashKey("WEAPON_NSR")] = "NSR", 
    [GetHashKey("WEAPON_NAVYCARBINE")] = "Navy Carbine", 
    [GetHashKey("WEAPON_MUSKET")] = "Musket", 
    [GetHashKey("WEAPON_PUMPSHOTGUN_MK2")] = "Doze MK2", 
    [GetHashKey("WEAPON_PUMPSHOTGUN")] = "Doze", 
    [GetHashKey("WEAPON_SAWNOFFSHOTGUN")] = "Doze Cano Cerrado", 
    [GetHashKey("WEAPON_SPECIALCARBINE_MK2")] = "SPECIALCARBINE_MK2 G3", 
}

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- SISTEMA DE DISCONNECT
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
local allCombats = {}
local ativado = true

RegisterNetEvent("anticl")
AddEventHandler("anticl", function(user_id, coords, motivo)
    allCombats[user_id] = { coords = coords, motivo = motivo, time = 60 }
end)

Citizen.CreateThread(function()
    while true do
        local time = 1000

        if ativado then
            local pedCoords = GetEntityCoords(PlayerPedId())

            for k,v in pairs(allCombats) do
                local distance = #(pedCoords - v.coords)
                if distance <= 10 then
                    time = 5
                    DrawText3D(v.coords[1],v.coords[2],v.coords[3], "~r~Deslogou | "..v.time.." ~n~ ~w~ID: ".. k .."~n~ Motivo: "..v.motivo)
                end
            end
        end

        Citizen.Wait(time)
    end
end)

Citizen.CreateThread(function()
    while true do
        for k,v in pairs(allCombats) do
            if k then
                allCombats[k] = { coords = allCombats[k].coords, motivo = allCombats[k].motivo, time = allCombats[k].time - 1  }

                if v.time <= 0 then
                    allCombats[k] = nil
                end
            end
        end
        Citizen.Wait(1000)
    end
end)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- FUNCTIONS
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function drawTxt(text,font,x,y,scale,r,g,b,a)
    SetTextFont(font)
    SetTextScale(scale,scale)
    SetTextColour(r,g,b,a)
    SetTextOutline()
    SetTextCentre(1)
    SetTextEntry("STRING")
    AddTextComponentString(text)
    DrawText(x,y)
end

function DrawText3D(x,y,z, text)
    local onScreen,_x,_y=World3dToScreen2d(x,y,z)
    local px,py,pz=table.unpack(GetGameplayCamCoords())
    SetTextScale(0.45, 0.45)
    SetTextFont(4)
    SetTextProportional(1)
    SetTextColour(255,255,255, 255)
    SetTextEntry("STRING")
    SetTextCentre(1)
    AddTextComponentString(text)
    DrawText(_x,_y)
end


local deathtime = 300 -- a
local socorroEnable = false
Citizen.CreateThread( function()
    while true do
        Citizen.Wait(1000)
        local ped = PlayerPedId()
        if GetEntityHealth(ped) <= 101 then
            deathtime = deathtime - 1
            if deathtime <= 100 --[[Aqui vai o tempo min que a pessoa consegue pedir o socorro]]then
                socorroEnable = true
            end
        else
            socorroEnable = false
            deathtime = 300 -- aqui vai usar o mesmo valor que usa pro deathtime do mirtin
        end
    end
end)

RegisterCommand("socorro",function(source,args,rawCommand)
    TriggerServerEvent("socorro",source)
end)