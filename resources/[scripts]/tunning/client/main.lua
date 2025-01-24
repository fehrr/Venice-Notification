local VehiclesCustoms = {
    Config          = Config,
    vehicle         = nil,
    actual_custom   = {},
    old_custom      = {},
    cameraInstance  = nil,
    mechanic        = "",
    uiState         = {}
}
local unpack = table.unpack

function VehiclesCustoms:BuildMenu()
    self.vehicle = GetVehiclePedIsIn(PlayerPedId())
    local customs = {}
    for k,v in pairs(self.Config.Customs) do 
        if v.mod and (not v.type)then 
            local _tabs = GetNumVehicleMods(self.vehicle, v.mod)
            if _tabs <= 0 then 
                goto skip 
            end
        end
        customs[k] = v
        ::skip::
    end
    return customs
end

function VehiclesCustoms:ChangeMod(index,modSelected, payload)
    
    
    SetVehicleModKit(self.vehicle, 0) 
    if index:find("Pintura") then 
        index = "Pintura"
    end
    local modId = self.Config.Customs[index].mod
    if self.Config.Customs[index].type and self.Config.Customs[index].type == "toggle" then 
        ToggleVehicleMod(self.vehicle, modId, not IsToggleModOn(self.vehicle, modId))
    elseif modId then 
        SetVehicleMod(self.vehicle, modId, modSelected, ((modId == 23 or modId == 24) and GetVehicleModVariation(self.vehicle, modId)) or nil)
        if index == "Buzina" then 
            SetHornEnabled(self.vehicle, true)
            StartVehicleHorn(self.vehicle, 9000, GetHashKey("NORMAL"), false)
        end
    end

    if self.Config.Customs[index].setter then 
        if self.Config.Customs[index].type == "color" then 
            self.Config.Customs[index].setter(payload, self.vehicle, hex_to_rgb(modSelected))
        else 
            
            self.Config.Customs[index].setter(self.vehicle, modSelected)
            if self.Config.Customs[index].type == "wheel" then
                 self:ChangeMod("Rodas Dianteira", GetVehicleMod(self.vehicle,23), true)
            end
        end
    end

end

function VehiclesCustoms:getSubMenu(index)
    
    
    
    self.vehicle = GetVehiclePedIsIn(PlayerPedId())
    SetVehicleModKit(self.vehicle, 0) 
    local modId = self.Config.Customs[index].mod
    if(not self.Config.Customs[index]) then 
        return false
    end
    if self.Config.Customs[index].type and self.Config.Customs[index].type == "toggle" then 
        self:ChangeMod(index)
        return {
            price = self.Config.Customs[index].price,
        }
    elseif self.Config.Customs[index].type and self.Config.Customs[index].type == "wheel" then
        return {
            tabs = {
                {
                    "Sport",
                },
                {
                    "Muscle",
                },
                {
                    "Low Rider",
                },
                {
                    "SUV",
                },
                {
                    "Off Road",
                },   
                {
                    "Tuner",
                },
                {
                    "Bike",
                },
                {
                    "High End",
                },
                {
                    "Super 01",
                },
                {
                    "Super 02",
                },
                {
                    "Super 03",
                },
                {
                    "Super 04",
                },
                {
                    "Super 05",
                },
            },
            active = self.Config.Customs[index].getter(self.vehicle),
            price = self.Config.Customs[index].price,
        }
    else
        if not modId then 
            return false 
        end
    end
    local counter = self.Config.Customs[index].counter or GetNumVehicleMods 
    return {
        increasedPrice = self.Config.Customs[index].increasedPrice,
        tabs = counter(self.vehicle, modId),
        active =  (self.Config.Customs[index].getter or GetVehicleMod)(self.vehicle, modId),
        price = self.Config.Customs[index].price,
    }
end

function VehiclesCustoms:GetAllMods(part)
    if part then 
        local callback = {}
        local value = self.Config.Customs[part]
        if not value then 
            return {}
        end
        if value.type and value.getter  then 
            callback[part] = value.getter(self.vehicle)
        elseif value.type and value.type == "toggle" then 
            callback[part] = IsToggleModOn(self.vehicle, value.mod)
        else 
            callback[part] = GetVehicleMod(self.vehicle, value.mod)
        end 
        return callback
    end 
    local callback = {}
    for part, value in pairs(self.Config.Customs) do 
        if value.type and value.getter  then 
            callback[part] = value.getter(self.vehicle)
        elseif value.type and value.type == "toggle" then 
            callback[part] = IsToggleModOn(self.vehicle, value.mod)
        else 
            
            
            callback[part] = GetVehicleMod(self.vehicle, value.mod)
        end
    end
    return callback
end

RegisterNUICallback("getMenu", function(data, cb)
    cb(VehiclesCustoms:BuildMenu())
end)

RegisterNUICallback("setCamera", function(data, cb)
    if not VehiclesCustoms.cameraInstance then
        return 
    end
    local resp = (VehiclesCustoms.cameraInstance:Set(data.part))
    cb('ok')
end)

RegisterNUICallback("createOrder", function(data, cb)
    local Request   = {}
    local vehmodel = getVehicleInfo(GetEntityModel(GetVehiclePedIsIn(PlayerPedId()))).model

    local response  = Remote.CreateOrder(vehmodel, getVehicleMods_retro(VehiclesCustoms.vehicle), data.cart,VehiclesCustoms.mechanic, data.cartPrices,GetVehicleNumberPlateText(VehiclesCustoms.vehicle), VehiclesCustoms.vehicle)
    if response.error then 
        Notify:negado(response.error)
        log:error(response.error)
    else
        --SetVehicleFixed(VehiclesCustoms.vehicle)
    end
    cb(response)
end)



local mecPainelExecuted = false  -- Variavel de controle

-- Fazer Painel Ser Aberto automaticamente Nao Toque bkvini ta de olho
RegisterNUICallback("close", function(data, cb)
    print("Executando evento de fechamento...")
    SetNuiFocus(false, false)
    TriggerEvent('hud', true)

    if VehiclesCustoms.cameraInstance then 
        FreezeEntityPosition(VehiclesCustoms.vehicle, false)
        VehiclesCustoms.cameraInstance:Destroy()
        VehiclesCustoms.cameraInstance = nil
        setVehicleMods_retro(VehiclesCustoms.vehicle, VehiclesCustoms.old_custom)
    end

    if DashboardState then 
        Remote.CloseDashboard()
        DashboardState = false
    end

    -- Executa o comando automaticamente apenas uma vez, se ainda não tiver sido executado
    if not mecPainelExecuted then
        ExecuteCommand("mecpainel")
        mecPainelExecuted = true  -- Marca o comando como executado
    end

    cb('ok')

    -- Redefine mecPainelExecuted após o ciclo completo, evitando múltiplas execuções
    Citizen.SetTimeout(5000, function()  -- Atraso opcional para garantir que o ciclo tenha sido encerrado completamente
        mecPainelExecuted = false
    end)
end)



RegisterNUICallback("cameraState", function(data, cb)
    cb(VehiclesCustoms.cameraInstance:setState())
end)

RegisterNUICallback("getSubItems",function(data,cb)
    cb(VehiclesCustoms:getSubMenu(data.index))
end)

RegisterNUICallback("getVehicleCustom",function(data,cb) 
    cb(VehiclesCustoms:GetAllMods(data.part))
end)

RegisterNUICallback("changeMod",function(data,cb)
    cb(VehiclesCustoms:ChangeMod(data.part, data.index, data.payload))
end)

CreateThread(function()
    SetNuiFocus()
    local blip = nil -- Declare o blip fora do loop para acessá-lo depois
    while true do 
        local sleep = 1300
        local ply = PlayerPedId()
        local plyCoords = GetEntityCoords(ply)

        local blipExists = false -- Flag para rastrear se o blip foi criado

        for mechanicName, v in pairs(VehiclesCustoms.Config.Shops) do 
            for i = 1, #v.customerLocations do 
                local distance = #(v.customerLocations[i] - plyCoords)

                if distance < 5 and not VehiclesCustoms.cameraInstance then 
                    VehiclesCustoms.mechanic = mechanicName

                    -- Desenha os marcadores
                    DrawMarker(27, v.customerLocations[i] - vec3(0.0, 0.0, 0.97), 0, 0, 0, 0, 0, 0, 3.0, 3.0, 1.0, 247, 0, 62, 45, 0, 0, 0, 1)
                    DrawMarker(36, v.customerLocations[i], 0, 0, 0, 0, 0, 0, 1.0, 3.0, 1.0, 247, 0, 62, 40, 0, 0, 0, 1)
                    sleep = 3

                    -- Cria o blip se não existir
                    if not blip then
                        blip = AddBlipForCoord(v.customerLocations[i]) -- Adiciona o blip
                        SetBlipSprite(blip, 1) -- Define o ícone do blip (altere conforme necessário)
                        SetBlipColour(blip, 2) -- Define a cor do blip (altere conforme necessário)
                        SetBlipScale(blip, 1.0) -- Define o tamanho do blip
                        BeginTextCommandSetBlipName("STRING")
                        AddTextComponentSubstringPlayerName("Mecânico") -- Nome do blip
                        EndTextCommandSetBlipName(blip)
                        blipExists = true -- Marca que o blip foi criado
                    end

                    if distance < 5.0 then 
                        if IsControlJustPressed(0, 38) and IsPedInAnyVehicle(ply) then 
                            if Remote.hasPermission() then 
                                VehiclesCustoms.vehicle = GetVehiclePedIsIn(ply)

                                if GetPedInVehicleSeat(VehiclesCustoms.vehicle, -1) == ply then 
                                    SetVehicleModKit(VehiclesCustoms.vehicle, 0) 
                                    VehiclesCustoms.old_custom = getVehicleMods_retro(VehiclesCustoms.vehicle)

                                    local vehicleInfo = getVehicleInfo(GetEntityModel(VehiclesCustoms.vehicle))
                                    if vehicleInfo then
                                        local vehmodel = vehicleInfo.model

                                        -- Continua com o restante do código
                                        local Request = Remote.GetOrder(mechanicName, GetVehicleNumberPlateText(VehiclesCustoms.vehicle), vehmodel)
                                        local Bank = Remote.GetBankMoney()
                                        
                                        if Request and Request.error then 
                                            Notify:negado(Request.error)
                                        else
                                            if Request then 
                                                setVehicleMods_retro(VehiclesCustoms.vehicle, Request.custom)
                                                SetTimeout(1000, function() 
                                                    SendNUIMessage({
                                                        action = "forceCart",
                                                        cart = Request.cart,
                                                        prices = Request.cartPrices,
                                                    })
                                                end)
                                            end
                                            SetNuiFocus(true, true)
                                            FreezeEntityPosition(VehiclesCustoms.vehicle, true)
                                            VehiclesCustoms.cameraInstance = CameraControl:Init(VehiclesCustoms.vehicle)
                                            SendNUIMessage({
                                                action = "openUi",
                                                bank = Bank,
                                            })
                                            TriggerEvent('hud', false)
                                        end
                                    else
                                        Notify:negado("Veículo não encontrado na lista de veículos permitidos.")
                                    end
                                else
                                    Notify:negado("Você precisa ser o motorista!")
                                end
                            end
                        end
                    end
                end
            end
        end

        -- Remove o blip se a distância for maior que 5 ou a câmera estiver ativa
        if not blipExists and blip then
            RemoveBlip(blip)
            blip = nil
        end

        Wait(sleep)
    end
end)



getVehicleInfo = function(vehicle)
	for k,v in pairs(exports.thunder_garages:getListVehicles()) do
		if vehicle == k or vehicle == v.model then
            return v
        end
    end
    return false
end


getVehicleModel = function(vehicle)
	local vehInfo = getVehicleInfo(vehicle)
	if vehInfo then
		return vehInfo.model or vehicle
	end
	return vehicle
end





