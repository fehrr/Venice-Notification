cfgconce = {}

cfgconce.main = {
    vehPrice = 2, -- venda = valor do veiculo divido por 2
    maxCars = 5, -- Total de maximo de carros
    discountCars = {    
        { permission = "admin.permissao", discount = 50, maxCars = 100 },    
        { permission = "perm.bronze", discount = 10, maxCars = 46 },
        { permission = "perm.prata", discount = 10, maxCars = 46 },
        { permission = "perm.vipouro", discount = 15, maxCars = 46 },
        { permission = "perm.vipplatina", discount = 20, maxCars = 46 },
        { permission = "perm.crianca", discount = 25, maxCars = 46 },
        { permission = "perm.vipdiamante", discount = 25, maxCars = 46 },
        { permission = "perm.viphavana", discount = 35, maxCars = 46 },
        { permission = "perm.vipsupremohavana", discount = 40, maxCars = 46 },
        { permission = "perm.vipmonster", discount = 45, maxCars = 46 },
        { permission = "perm.vipgod", discount = 50, maxCars = 46 },
        { permission = "perm.viprubi", discount = 55, maxCars = 46 },
        { permission = "perm.vipesmeralda", discount = 60, maxCars = 46 },
    }
}


cfgconce.coords = {
    vec3(-44.42,-1095.94,26.42)
}

cfgconce.spawnCar =  { -- -- Spawn de onde o carro irá spawnar ao abrir a conce
    ['x'] = -43.81, ['y'] = -1097.51, ['z'] = 26.43, ['h'] = 117.53
}

cfgconce.type = 1 -- Mudar somente quando for solicitado pela equipe da Pixel


cfgconce.showCam  =  vec3(-44.42,-1095.94,26.42) -- local da camera
cfgconce.spawn    =  vec3(-44.42,-1095.94,26.42) -- spawn do player ao abrir a conce
cfgconce.respawn  =  vec3(-44.42,-1095.94,26.42) -- onde ele ira respawnar depois que fechar

cfgconce.test = { -- Spawn do test-drive
    ['x'] = -1729.14, ['y'] = -2924.58, ['z'] = 13.93, ['h'] = 236.32
}

cfgconce.tempoTest = 50 -- tempo do test-drive
cfgconce.valueTest = 500 -- valor do test-drive

cfgconce.blip = {
    r = 25, 
    g = 255, 
    b = 132, 
    a = 50
}