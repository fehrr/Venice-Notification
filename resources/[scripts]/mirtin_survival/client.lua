local reasonDeath
local pedKiller
local Killer

local cooldown = 0
local morto = false
local deathtimer = cfg.deathtimer


RegisterNetEvent('finalizar', function(time)
    deathtimer = time
end)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- THREAD
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CreateThread(function()
	while true do
        local time = 300
		local ped = PlayerPedId()
		local vida = GetEntityHealth(ped)
		local x,y,z = table.unpack(GetEntityCoords(ped,true))

        if cfg.dependencys() then
            if IsEntityDead(ped) then
                time = 0
                if GetPedCauseOfDeath(ped) ~= 0 and cooldown == 0 then
                    cooldown = cfg.cooldown

                    reasonDeath = GetPedCauseOfDeath(ped)
                    pedKiller = GetPedSourceOfDeath(ped)

                    if IsEntityAPed(pedKiller) and IsPedAPlayer(pedKiller) then
                        Killer = NetworkGetPlayerIndexFromPed(pedKiller)
                    elseif IsEntityAVehicle(pedKiller) and IsEntityAPed(GetPedInVehicleSeat(pedKiller, -1)) and IsPedAPlayer(GetPedInVehicleSeat(pedKiller, -1)) then
                        Killer = NetworkGetPlayerIndexFromPed(GetPedInVehicleSeat(pedKiller, -1))
                    end
                    
                    sendToLog(PlayerId(), reasonDeath, Killer)
                end 

                NetworkResurrectLocalPlayer(x,y,z,true,true, false)
                SetEntityInvincible(ped,true)
                SetPedDiesInWater(ped, false)
                SetEntityHealth(ped, cfg.minHealth)
            end

            if vida <= cfg.minHealth and not morto then
                morto = true
                SetEntityHealth(ped, cfg.minHealth)
                vRPserver.updateHealth(cfg.minHealth)
                print("Atualizou vida para: " .. cfg.minHealth)
                exports['pma-voice']:removePlayerFromRadio()
                TriggerEvent("radio:outServers")
                TriggerEvent("mirtin_hud:Nikito",false)
                TriggerEvent('mirtin_survival:updateComa', morto)
                TriggerServerEvent("pma-voice:toggleMutePlayer", true)
            end

            if morto then
                if vida <= cfg.minHealth then
                    time = 5
                    cfg.animDeath()

                    DisableControlAction(0,199,true)
                    DisableControlAction(0,200,true)
                    DisableControlAction(0,19,true)

                    if cfg.versionNUI then
                        openNui()

                        if deathtimer <= 0 then
                            if not cfg.timedown then
                                if IsControlJustPressed(0,38) then
                                    morrer()
                                    StopScreenEffect("DeathFailMPIn")
                                end
                            end
                        end
                    else
                        cfg.drawtext(deathtimer)
                    end

                end

                if vida > cfg.minHealth then
                    morto = false
                    deathtimer = cfg.deathtimer
                    SetEntityInvincible(ped,false)
                    SetPedDiesInWater(ped, true)
                    TriggerEvent('mirtin_survival:updateComa', morto)
                    StopScreenEffect("DeathFailMPIn")
                    vRPserver.updateHealth(GetEntityHealth(ped))
                    TriggerServerEvent('pma-voice:toggleMutePlayer', false)
                    TriggerEvent("pma-voice:DesmutePlayer")

                    if cfg.versionNUI then
                        closeNui()
                        TriggerEvent('Nikito:Emotes')
                        TriggerEvent('mirtin_hud:Nikito', true)
                    end
                end

                if deathtimer <= 0 then
                    if cfg.timedown then
                        morrer()
                    end
                end
            end
        end

        Wait(time)
	end
end)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- FUNCTION
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
sendToLog = function(idMorto, motivoMorto, quemMatou)
    local source = 0
    local ksource = 0
    local motivo = ""

    if idMorto ~= 0 then
        source = GetPlayerServerId(idMorto)
    end

    if quemMatou ~= 0 then
        ksource = GetPlayerServerId(quemMatou)
    end
    
    if cfg.reasons[motivoMorto] then
        motivo = cfg.reasons[motivoMorto]
    else
        motivo= cfg.reasons[0]
    end

    vSERVER.receberMorte(source, motivo, ksource)
end

src.getPosition = function()
    return GetEntityCoords(PlayerPedId(),true)
end

src.setFinalizado = function()
    deathtimer = 0
end

morrer = function()

    Wait(500)
    morto = false
    deathtimer = cfg.deathtimer

    StopScreenEffect("DeathFailMPIn")
    if cfg.versionNUI then
        closeNui()
    end

    TriggerEvent('mirtin_survival:updateComa', morto)
    TriggerServerEvent('pma-voice:toggleMutePlayer', false)
    DoScreenFadeOut(500)

    Wait(2000)
    SetEntityInvincible(PlayerPedId(),false)
    SetPedDiesInWater(PlayerPedId(), true)
    ClearPedBloodDamage(PlayerPedId())

    Wait(3000)
    SetEntityHealth(PlayerPedId(), cfg.maxHealth)
    Wait(200)
    SetEntityCoords(PlayerPedId(), cfg.respawn)
    cfg.clearAccount()
    
    Wait(4000)
    DoScreenFadeIn(1000)
    TriggerEvent('mirtin_hud:Nikito', true)
end

src.morrer2 = function()
    Wait(500)
    SetEntityHealth(PlayerPedId(), cfg.maxHealth)
    morto = false
    deathtimer = cfg.deathtimer

    StopScreenEffect("DeathFailMPIn")
    if cfg.versionNUI then
        closeNui()
    end

    TriggerEvent('mirtin_survival:updateComa', morto)
    TriggerServerEvent('pma-voice:toggleMutePlayer', false)
    DoScreenFadeOut(500)

    Wait(2000)
    SetPedDiesInWater(PlayerPedId(), true)
    ClearPedBloodDamage(PlayerPedId())

    Wait(3000)
    SetEntityCoords(PlayerPedId(), cfg.respawn)
    cfg.clearAccount()
    TriggerServerEvent('pma-voice:toggleMutePlayer', false)
    
    Wait(4000)
    DoScreenFadeIn(1000)
end

RegisterNetEvent("mirtin_survival:updateComa")

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- NUI
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
openNui = function()
    if DisableUI == nil then 
        SetNuiFocus(true,true)
    end
    TransitionFromBlurred(0)
    SendNUIMessage({ setDisplay = true, setDisplayDead = true, deathtimer = deathtimer })
end

closeNui = function()
    SetNuiFocus(false,false)
	TransitionFromBlurred(1000)
    SendNUIMessage({ setDisplay = false, setDisplayDead = false, deathtimer = deathtimer })
end

RegisterNUICallback('ButtonRevive', function()
    if deathtimer <= cfg.deathNUItimer then
        cfg.clearAccount()

        Wait(1000)
        morrer()
    else
        TriggerEvent("Notify","vermelho","Você não pode desistir de sua vida agora.", 5000)
    end
end)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- CONTADOR
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CreateThread(function()
    while true do
        local time = 1000
        
        if cooldown > 0 then
            cooldown = cooldown - 1

            if cooldown <= 0 then
                cooldown = 0
            end
        end

        if morto then
            deathtimer = deathtimer - 1

            if deathtimer <= 0 then
                deathtimer = 0
            end
        end

        Wait(time)
    end
end)