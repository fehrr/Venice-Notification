-- vTunnelGarages.lua
local vTunnelGarages = {}

function vTunnelGarages._sellVehicle(id, name, value)
    -- Aqui você deve implementar a lógica para vender o veículo.
    print("Vendendo veículo: ID = " .. id .. ", Nome = " .. name .. ", Valor = " .. value)
    -- Retornar true se a venda for bem-sucedida, caso contrário false
    -- Aqui você deve adicionar a lógica de venda real.
    return true -- ou false, dependendo do sucesso da operação
end

return vTunnelGarages
