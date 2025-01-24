Config = {
    images = 'http://181.215.254.182/inventario/', -- URL DAS SUAS IMAGENS
    storeLink = 'https://thunderrj.hydrus.gg/', -- LINK DA SUA LOJA
    dirtymoney = 'dinheirosujo', -- SPAWN DO DINHEIRO SUJO
    Tables = {
        ['Armas'] = {
            -- INICIO DE UMA BANCADA, NUNCA REPETIR ESSE NOME
            craft = {
                -- ZONA DE CRAFT
                {
                    item = 'WEAPON_SNSPISTOL_MK2', -- SPAWN DO ITEM
                    amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 15, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "pecadearma" , amount = 20 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "gatilho" , amount = 1 },  
                        { item = "molas" , amount = 6 },  
                        { item = "metal" , amount = 6 }
                    }
                },
                {
                    item = 'WEAPON_PISTOL_MK2', -- SPAWN DO ITEM
                    amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 20, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "pecadearma" , amount = 30 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "gatilho" , amount = 1 },  
                        { item = "molas" , amount = 10 },  
                        { item = "metal" , amount = 10 }
                    }
                },
                {
                    item = 'WEAPON_MACHINEPISTOL', -- SPAWN DO ITEM
                    amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 20, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "pecadearma" , amount = 150 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "gatilho" , amount = 1 },  
                        { item = "molas" , amount = 20 },  
                        { item = "metal" , amount = 20 }
                    }
                },
                {
                    item = 'WEAPON_SMG', -- SPAWN DO ITEM
                    amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 30, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "pecadearma" , amount = 150 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "gatilho" , amount = 1 },  
                        { item = "molas" , amount = 15 },  
                        { item = "metal" , amount = 15 }
                    }
                },
                {
                    item = 'WEAPON_ASSAULTRIFLE', -- SPAWN DO ITEM
                    amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 35, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "pecadearma" , amount = 150 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "gatilho" , amount = 1 },  
                        { item = "molas" , amount = 15 },  
                        { item = "metal" , amount = 15 }
                    }
                },
                {
                    item = 'WEAPON_ASSAULTRIFLE_MK2', -- SPAWN DO ITEM
                    amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 40, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "pecadearma" , amount = 200 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "gatilho" , amount = 1 },  
                        { item = "molas" , amount = 20 },  
                        { item = "metal" , amount = 20 }
                    }
                },
                {
                    item = 'WEAPON_SPECIALCARBINE_MK2', -- SPAWN DO ITEM
                    amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 45, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "pecadearma" , amount = 200 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "gatilho" , amount = 1 },  
                        { item = "molas" , amount = 20 },  
                        { item = "metal" , amount = 20 }
                    }
                }
            },
            farm = {
                -- ZONA DE FARM
                list = {
                    {
                        dangerRoute = {
                            status = false, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                            percentualPolice = 30 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                        },
                        dominationBonus = {
                            -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                            status = true, -- Se o sistema ta ativo ou não
                            zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                            bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                        },
                        itensList = {
                            {item = 'molas', minAmount = 20, maxAmount = 25},
                            {item = 'metal', minAmount = 20, maxAmount = 25},
                            {item = 'gatilho', minAmount = 5, maxAmount = 10},
                        }
                    },
                    {
                        dangerRoute = {
                            status = false, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                            percentualPolice = 3 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                        },
                        dominationBonus = {
                            -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                            status = true, -- Se o sistema ta ativo ou não
                            zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                            bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                        },
                        itensList = {
                            {item = 'pecadearma', minAmount = 50, maxAmount = 60}
                        }
                    }
                }
            },
            delivery = {
                list = {
                    {
                        dangerRoute = {
                            status = true, -- Rota Perigosa (CHANCE DE CHAMAR A POLICIA)
                            percentualPolice = 30 -- 3% de chamar a polícia (APENAS SE DangerRoute estiver ativo)
                        },
                        dominationBonus = {
                            status = true, -- Se o sistema de bônus está ativo
                            zone = false, -- Zona necessária para duplicar o farm (exemplo: 'Armas', 'Municao', etc.)
                            bonus = 2 -- 2x a quantidade de itens coletados ao dominar a zona
                        },
                        itensList = {
                            {
                                item = 'lsd',
                                minAmount = 10, -- Quantidade mínima de 'lsd' no delivery
                                maxAmount = 15, -- Quantidade máxima de 'lsd' no delivery
                                payment = 100 -- Valor por unidade de 'lsd'
                            }
                        }
                    },
                    {
                        dangerRoute = {
                            status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                            percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                        },
                        dominationBonus = {
                            status = true, -- Bônus ativo
                            zone = false, -- Zona necessária para duplicar o farm
                            bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                        },
                        itensList = {
                            {
                                item = 'maconha',
                                minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                                maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                                payment = 50 -- Valor por unidade de 'maconha'
                            }
                        }
                    },
                    {
                        dangerRoute = {
                            status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                            percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                        },
                        dominationBonus = {
                            status = true, -- Bônus ativo
                            zone = false, -- Zona necessária para duplicar o farm
                            bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                        },
                        itensList = {
                            {
                                item = 'opio',
                                minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                                maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                                payment = 50 -- Valor por unidade de 'maconha'
                            }
                        }
                    },
                    {
                        dangerRoute = {
                            status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                            percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                        },
                        dominationBonus = {
                            status = true, -- Bônus ativo
                            zone = false, -- Zona necessária para duplicar o farm
                            bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                        },
                        itensList = {
                            {
                                item = 'metanfetamina',
                                minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                                maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                                payment = 50 -- Valor por unidade de 'maconha'
                            }
                        }
                    }
                }
            },
            locations = {
                -- LOCALIZACOES DESSAS BANCADAS
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Mafia',
                    coords = vec3(1889.86,585.37,194.8), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Mafia'
                    },
                    tablePermission = 'perm.mafia', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lidermafia', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Cartel',
                    coords = vec3(1391.54,1135.92,109.74), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Cartel'
                    },
                    tablePermission = 'perm.cartel', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lidercartel', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Croacia',
                    coords = vec3(-1507.21,838.17,181.59), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Croacia'
                    },
                    tablePermission = 'perm.croacia', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lidercroacia', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Yakuza',
                    coords = vec3(-897.57,-1443.89,9.82), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Yakuza'
                    },
                    tablePermission = 'perm.yakuza', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lideryakuza', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Triade',
                    coords = vec3(-1866.1,2061.25,135.44), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Triade'
                    },
                    tablePermission = 'perm.triade', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lidertriade', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Merlim',
                    coords = vec3(-873.96,2655.58,58.27), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Merlim'
                    },
                    tablePermission = 'perm.merlim', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lidermerlim', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'BlackOut',
                    coords = vec3(2003.97,-11.98,203.33), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'BlackOut'
                    },
                    tablePermission = 'perm.blackout', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.liderblackOut', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Wolves',
                    coords = vec3(717.97,-276.96,60.2), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Wolves'
                    },
                    tablePermission = 'perm.wolves', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.liderwolves', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Franca',
                    coords = vec3(-2415.21,1774.74,187.67), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Franca'
                    },
                    tablePermission = 'perm.franca', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.liderfranca', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                }
            }
        }, -- FIM DE UMA BANCADA
        
        ['Municao'] = {
            -- INICIO DE UMA BANCADA, NUNCA REPETIR ESSE NOME
            craft = {
                -- ZONA DE CRAFT
                {
                    item = 'AMMO_SNSPISTOL_MK2', -- SPAWN DO ITEM
                    amount = 50, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 15, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "capsulas" , amount = 40 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "polvora" , amount = 40 }  
                    }
                },
                {
                    item = 'AMMO_PISTOL_MK2', -- SPAWN DO ITEM
                    amount = 50, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 20, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "capsulas" , amount = 50 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "polvora" , amount = 50 }  
                    }
                },
                {
                    item = 'AMMO_MACHINEPISTOL', -- SPAWN DO ITEM
                    amount = 50, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 15, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "capsulas" , amount = 60 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "polvora" , amount = 60 }  
                    }
                },
                {
                    item = 'AMMO_SMG', -- SPAWN DO ITEM
                    amount = 50, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 15, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "capsulas" , amount = 70 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "polvora" , amount = 70 }  
                    }
                },
                {
                    item = 'AMMO_MICROSMG', -- SPAWN DO ITEM
                    amount = 50, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 15, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "capsulas" , amount = 80 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "polvora" , amount = 80 }  
                    }
                },
                {
                    item = 'AMMO_PUMPSHOTGUN_MK2', -- SPAWN DO ITEM
                    amount = 50, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 15, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "capsulas" , amount = 120 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "polvora" , amount = 120 }  
                    }
                },
                {
                    item = 'AMMO_ASSAULTRIFLE', -- SPAWN DO ITEM
                    amount = 50, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 15, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "capsulas" , amount = 80 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "polvora" , amount = 80 }  
                    }
                },
                {
                    item = 'AMMO_ASSAULTRIFLE_MK2', -- SPAWN DO ITEM
                    amount = 50, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 15, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "capsulas" , amount = 80 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "polvora" , amount = 80 }  
                    }
                },
                {
                    item = 'AMMO_SPECIALCARBINE_MK2', -- SPAWN DO ITEM
                    amount = 50, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 15, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "capsulas" , amount = 80 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "polvora" , amount = 80 }  
                    }
                }
            },
            farm = {
                -- ZONA DE FARM
                list = {
                    {
                        dangerRoute = {
                            status = false, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                            percentualPolice = 3 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                        },
                        dominationBonus = {
                            -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                            status = true, -- Se o sistema ta ativo ou não
                            zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                            bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                        },
                        itensList = {
                            {item = 'capsulas', minAmount = 20, maxAmount = 30},
                            {item = 'polvora', minAmount = 20, maxAmount = 30}

                        }
                    }
                }
            },
            delivery = {
                list = {
                    {
                        dangerRoute = {
                            status = true, -- Rota Perigosa (CHANCE DE CHAMAR A POLICIA)
                            percentualPolice = 30 -- 3% de chamar a polícia (APENAS SE DangerRoute estiver ativo)
                        },
                        dominationBonus = {
                            status = true, -- Se o sistema de bônus está ativo
                            zone = false, -- Zona necessária para duplicar o farm (exemplo: 'Armas', 'Municao', etc.)
                            bonus = 2 -- 2x a quantidade de itens coletados ao dominar a zona
                        },
                        itensList = {
                            {
                                item = 'lsd',
                                minAmount = 10, -- Quantidade mínima de 'lsd' no delivery
                                maxAmount = 15, -- Quantidade máxima de 'lsd' no delivery
                                payment = 100 -- Valor por unidade de 'lsd'
                            }
                        }
                    },
                    {
                        dangerRoute = {
                            status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                            percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                        },
                        dominationBonus = {
                            status = true, -- Bônus ativo
                            zone = false, -- Zona necessária para duplicar o farm
                            bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                        },
                        itensList = {
                            {
                                item = 'maconha',
                                minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                                maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                                payment = 50 -- Valor por unidade de 'maconha'
                            }
                        }
                    },
                    {
                        dangerRoute = {
                            status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                            percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                        },
                        dominationBonus = {
                            status = true, -- Bônus ativo
                            zone = false, -- Zona necessária para duplicar o farm
                            bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                        },
                        itensList = {
                            {
                                item = 'opio',
                                minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                                maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                                payment = 50 -- Valor por unidade de 'maconha'
                            }
                        }
                    },
                    {
                        dangerRoute = {
                            status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                            percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                        },
                        dominationBonus = {
                            status = true, -- Bônus ativo
                            zone = false, -- Zona necessária para duplicar o farm
                            bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                        },
                        itensList = {
                            {
                                item = 'metanfetamina',
                                minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                                maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                                payment = 50 -- Valor por unidade de 'maconha'
                            }
                        }
                    }
                }
            },
            locations = {
                -- LOCALIZACOES DESSAS BANCADAS
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Grota',
                    coords = vec3(1354.03,-182.75,135.12), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Grota'
                    },
                    tablePermission = 'perm.grota', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lidergrota', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                                'Pressione ~p~[E]~w~ para acessar a bancada.'
                            )
                            DrawMarker(
                                27,
                                coords.x,
                                coords.y,
                                coords.z - 0.95,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1.5,
                                1.5,
                                1.5,
                                132,
                                102,
                                226,
                                180,
                                0,
                                0,
                                0,
                                1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Milicia',
                    coords = vec3(1070.23,1005.26,250.42), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Milicia'
                    },
                    tablePermission = 'perm.milicia', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lidermilicia', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
               {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Alemao',
                    coords = vec3(417.22,710.31,199.64), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Alemao'
                    },
                    tablePermission = 'perm.alemao', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lideralemao', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Helipa',
                    coords = vec3(1436.79,1851.37,111.71), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Helipa'
                    },
                    tablePermission = 'perm.helipa', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.liderhelipa', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Crips',
                    coords = vec3(1428.78,-2410.58,67.23), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Crips'
                    },
                    tablePermission = 'perm.crips', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lidercrips', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Canada',
                    coords = vec3(-135.04,-1609.74,35.03), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Canada'
                    },
                    tablePermission = 'perm.canada', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lidercanada', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Turquia',
                    coords = vec3(1361.64,-701.35,71.95), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Turquia'
                    },
                    tablePermission = 'perm.turquia', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.liderturquia', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                }
           }
    }, -- FIM DE UMA BANCADA

        

        ['Desmanche'] = {
            -- INICIO DE UMA BANCADA, NUNCA REPETIR ESSE NOME
            craft = {
                -- ZONA DE CRAFT
                {
                    item = 'lockpick', -- SPAWN DO ITEM
                    amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 10, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "ferro" , amount = 50 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "aluminio" , amount = 25 }  
                    }
                },
                {
                    item = 'chave', -- SPAWN DO ITEM
                    amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 10, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "ferro" , amount = 50 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "plastico" , amount = 25 }  
                    }
                },
                {
                    item = 'pedecabra', -- SPAWN DO ITEM
                    amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 5, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "ferro" , amount = 50 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                    }
                },
                {
                    item = 'colete', -- SPAWN DO ITEM
                    amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 15, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "m-malha" , amount = 45 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "ferro" , amount = 30 }  
                    }
                }
            },
            farm = {
                -- ZONA DE FARM
                list = {
                    {
                        dangerRoute = {
                            status = true, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                            percentualPolice = 3 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                        },
                        dominationBonus = {
                            -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                            status = true, -- Se o sistema ta ativo ou não
                            zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                            bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                        },
                        itensList = {
                            {item = 'ferro', minAmount = 40, maxAmount = 50},
                            {item = 'm-malha', minAmount = 20, maxAmount = 30},
                            {item = 'aluminio', minAmount = 20, maxAmount = 30},
                            {item = 'plastico', minAmount = 20, maxAmount = 30},
                        }
                    }
                }
            },
            delivery = {
                list = {
                    {
                        dangerRoute = {
                            status = true, -- Rota Perigosa (CHANCE DE CHAMAR A POLICIA)
                            percentualPolice = 30 -- 3% de chamar a polícia (APENAS SE DangerRoute estiver ativo)
                        },
                        dominationBonus = {
                            status = true, -- Se o sistema de bônus está ativo
                            zone = false, -- Zona necessária para duplicar o farm (exemplo: 'Armas', 'Municao', etc.)
                            bonus = 2 -- 2x a quantidade de itens coletados ao dominar a zona
                        },
                        itensList = {
                            {
                                item = 'lsd',
                                minAmount = 10, -- Quantidade mínima de 'lsd' no delivery
                                maxAmount = 15, -- Quantidade máxima de 'lsd' no delivery
                                payment = 100 -- Valor por unidade de 'lsd'
                            }
                        }
                    },
                    {
                        dangerRoute = {
                            status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                            percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                        },
                        dominationBonus = {
                            status = true, -- Bônus ativo
                            zone = false, -- Zona necessária para duplicar o farm
                            bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                        },
                        itensList = {
                            {
                                item = 'maconha',
                                minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                                maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                                payment = 50 -- Valor por unidade de 'maconha'
                            }
                        }
                    },
                    {
                        dangerRoute = {
                            status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                            percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                        },
                        dominationBonus = {
                            status = true, -- Bônus ativo
                            zone = false, -- Zona necessária para duplicar o farm
                            bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                        },
                        itensList = {
                            {
                                item = 'opio',
                                minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                                maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                                payment = 50 -- Valor por unidade de 'maconha'
                            }
                        }
                    },
                    {
                        dangerRoute = {
                            status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                            percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                        },
                        dominationBonus = {
                            status = true, -- Bônus ativo
                            zone = false, -- Zona necessária para duplicar o farm
                            bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                        },
                        itensList = {
                            {
                                item = 'metanfetamina',
                                minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                                maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                                payment = 50 -- Valor por unidade de 'maconha'
                            }
                        }
                    }
                }
            },
            locations = {
                -- LOCALIZACOES DESSAS BANCADAS
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'MotoClub',
                    coords = vec3(998.6,-124.18,74.05), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'MotoClub'
                    },
                    tablePermission = 'perm.motoclub', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lidermotoclub', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },

                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Furious',
                    coords = vec3(-319.87,-131.55,38.97), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Furious'
                    },
                    tablePermission = 'perm.furious', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.liderfurious', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
               {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Lacoste',
                    coords = vec3(-196.53,-1318.02,31.09), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Lacoste'
                    },
                    tablePermission = 'perm.lacoste', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.liderlacoste', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'b13',
                    coords = vec3(-616.39,-1620.98,33.01), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'b13'
                    },
                    tablePermission = 'perm.b13', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.liderb13', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                }
        }, -- FIM DE UMA BANCADA

    }, -- FIM DA  CONFIGURACAO

    ['MECANICA'] = {
        -- INICIO DE UMA BANCADA, NUNCA REPETIR ESSE NOME
        craft = {
            -- ZONA DE CRAFT
            {
                item = 'repairkit', -- SPAWN DO ITEM
                amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                itemTime = 15, -- 30 segundo(s) para a maquina concluir o craft.
                requires = {
                    -- ITENS NECESSARIOS PARA O CRAFT
                    { item = "metal" , amount = 8 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                    { item = "plastico" , amount = 8 }  
                }
            },
            {
                item = 'rastreador', -- SPAWN DO ITEM
                amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                itemTime = 20, -- 30 segundo(s) para a maquina concluir o craft.
                requires = {
                    -- ITENS NECESSARIOS PARA O CRAFT
                    { item = "plastico" , amount = 8 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                    { item = "c-cobre" , amount = 8 }  
                }
            }
        },
        farm = {
            -- ZONA DE FARM
            list = {
                {
                    dangerRoute = {
                        status = true, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                        percentualPolice = 3 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                    },
                    dominationBonus = {
                        -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                        status = true, -- Se o sistema ta ativo ou não
                        zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                        bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                    },
                    itensList = {
                        {item = 'plastico', minAmount = 5, maxAmount = 8},
                        {item = 'metal', minAmount = 5, maxAmount = 8},
                        {item = 'c-cobre', minAmount = 5, maxAmount = 8}
                    }
                }
            }
        },
        delivery = {
            list = {

            }
        },
        locations = {
            -- LOCALIZACOES DESSAS BANCADAS
            {
                -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                name = 'thunderCustom',
                coords = vec3(-723.3,-1517.77,5.09), -- COORDENADAS DA BANCADA
                requireStorage = {
                    -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                    active = true,
                    name = 'thunderCustom'
                },
                tablePermission = 'mecanico.permissao', -- PERMISSAO PARA ACESSAR A BANCADA
                craftPermission = 'perm.lidermecanica', -- PERMISSAO PARA CRAFTAR ITEM
                drawMarker = function(coords, dist)
                    if dist <= 5.0 then
                        DrawText3Ds(
                            coords.x,
                            coords.y,
                            coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                        )
                    end
                end -- BLIP DO CHAO
            },

            {
                -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                name = 'StreetRacing',
                coords = vec3(817.5,-955.6,22.09), -- COORDENADAS DA BANCADA
                requireStorage = {
                    -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                    active = true,
                    name = 'StreetRacing'
                },
                tablePermission = 'mecanico.permissao', -- PERMISSAO PARA ACESSAR A BANCADA
                craftPermission = 'perm.lidermec2', -- PERMISSAO PARA CRAFTAR ITEM
                drawMarker = function(coords, dist)
                    if dist <= 5.0 then
                        DrawText3Ds(
                            coords.x,
                            coords.y,
                            coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                        )
                    end
                end -- BLIP DO CHAO
            }
    }, -- FIM DE UMA BANCADA

}, -- FIM DA  CONFIGURACAO


['HOSPITAL'] = {
    -- INICIO DE UMA BANCADA, NUNCA REPETIR ESSE NOME
    craft = {
        -- ZONA DE CRAFT
        {
            item = 'bandagem', -- SPAWN DO ITEM
            amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
            itemTime = 15, -- 30 segundo(s) para a maquina concluir o craft.
            requires = {
                -- ITENS NECESSARIOS PARA O CRAFT
                { item = "fita_de_pano" , amount = 8 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                { item = "elastico" , amount = 8 }  
            }
        },
        {
            item = 'militec', -- SPAWN DO ITEM
            amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
            itemTime = 20, -- 30 segundo(s) para a maquina concluir o craft.
            requires = {
                -- ITENS NECESSARIOS PARA O CRAFT
                { item = "fita_de_pano" , amount = 5 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                { item = "elastico" , amount = 5 }  
            }
        }
    },
    farm = {
        -- ZONA DE FARM
        list = {
            {
                dangerRoute = {
                    status = true, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                    percentualPolice = 3 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                },
                dominationBonus = {
                    -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                    status = true, -- Se o sistema ta ativo ou não
                    zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                    bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                },
                itensList = {
                    {item = 'fita_de_pano', minAmount = 5, maxAmount = 8},
                    {item = 'elastico', minAmount = 5, maxAmount = 8}
                }
            }
        }
    },
    delivery = {
        list = {

        }
    },
    locations = {
        -- LOCALIZACOES DESSAS BANCADAS
        {
            -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
            name = 'Hospital',
            coords = vec3(-438.15,-307.89,34.91), -- COORDENADAS DA BANCADA
            requireStorage = {
                -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                active = true,
                name = 'Hospital'
            },
            tablePermission = 'perm.unizk', -- PERMISSAO PARA ACESSAR A BANCADA
            craftPermission = 'perm.hplider', -- PERMISSAO PARA CRAFTAR ITEM
            drawMarker = function(coords, dist)
                if dist <= 5.0 then
                    DrawText3Ds(
                        coords.x,
                        coords.y,
                        coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                    )
                end
            end -- BLIP DO CHAO
        },

    }, -- FIM DE UMA BANCADA

}, -- FIM DA  CONFIGURACAO

    ['Drogas'] = {
        -- INICIO DE UMA BANCADA, NUNCA REPETIR ESSE NOME
        craft = {
            -- ZONA DE CRAFT
            {
                item = 'lsd', -- SPAWN DO ITEM
                amount = 20, -- Quantidade de item que vai receber por unidade selecionada.
                itemTime = 10, -- 30 segundo(s) para a maquina concluir o craft.
                requires = {
                    -- ITENS NECESSARIOS PARA O CRAFT
                    { item = "acidolsd" , amount = 35 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                    { item = "pastabase" , amount = 35 }  
                }
            },
            {
                item = 'opio', -- SPAWN DO ITEM
                amount = 20, -- Quantidade de item que vai receber por unidade selecionada.
                itemTime = 10, -- 30 segundo(s) para a maquina concluir o craft.
                requires = {
                    -- ITENS NECESSARIOS PARA O CRAFT
                    { item = "opiopapoula" , amount = 35 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                    { item = "pastabase" , amount = 35 }
                }
            },
            {
                item = 'maconha', -- SPAWN DO ITEM
                amount = 20, -- Quantidade de item que vai receber por unidade selecionada.
                itemTime = 10, -- 30 segundo(s) para a maquina concluir o craft.
                requires = {
                    -- ITENS NECESSARIOS PARA O CRAFT
                    { item = "folhamaconha" , amount = 35 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                    { item = "plastico" , amount = 35 }
                }
            },
            {
                item = 'metanfetamina', -- SPAWN DO ITEM
                amount = 20, -- Quantidade de item que vai receber por unidade selecionada.
                itemTime = 10, -- 30 segundo(s) para a maquina concluir o craft.
                requires = {
                    -- ITENS NECESSARIOS PARA O CRAFT
                    { item = "pastabase" , amount = 20 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                    { item = "tiner" , amount = 20 },
                    { item = "cristal" , amount = 20 }  
                }
            }
        },
        farm = {
            -- ZONA DE FARM
            list = {
                {
                    dangerRoute = {
                        status = true, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                        percentualPolice = 3 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                    },
                    dominationBonus = {
                        -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                        status = true, -- Se o sistema ta ativo ou não
                        zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                        bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                    },
                    itensList = {
                        {item = 'acidolsd', minAmount = 10, maxAmount = 15},
                        {item = 'pastabase', minAmount = 10, maxAmount = 15},
                    }
                },
                {
                    dangerRoute = {
                        status = false, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                        percentualPolice = 30 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                    },
                    dominationBonus = {
                        -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                        status = true, -- Se o sistema ta ativo ou não
                        zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                        bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                    },
                    itensList = {
                        {item = 'opiopapoula', minAmount = 10, maxAmount = 15},
                        {item = 'pastabase', minAmount = 10, maxAmount = 15},
                    }
                },
                {
                    dangerRoute = {
                        status = false, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                        percentualPolice = 30 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                    },
                    dominationBonus = {
                        -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                        status = true, -- Se o sistema ta ativo ou não
                        zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                        bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                    },
                    itensList = {
                        {item = 'folhamaconha', minAmount = 10, maxAmount = 15},
                        {item = 'plastico', minAmount = 10, maxAmount = 15},
                    }
                },
                {
                    dangerRoute = {
                        status = false, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                        percentualPolice = 30 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                    },
                    dominationBonus = {
                        -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                        status = true, -- Se o sistema ta ativo ou não
                        zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                        bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                    },
                    itensList = {
                        {item = 'pastabase', minAmount = 10, maxAmount = 15},
                        {item = 'tiner', minAmount = 10, maxAmount = 15},
                        {item = 'cristal', minAmount = 10, maxAmount = 15},
                    }
                }
            }
        },
        delivery = {
            list = {
                {
                    dangerRoute = {
                        status = true, -- Rota Perigosa (CHANCE DE CHAMAR A POLICIA)
                        percentualPolice = 30 -- 3% de chamar a polícia (APENAS SE DangerRoute estiver ativo)
                    },
                    dominationBonus = {
                        status = true, -- Se o sistema de bônus está ativo
                        zone = false, -- Zona necessária para duplicar o farm (exemplo: 'Armas', 'Municao', etc.)
                        bonus = 2 -- 2x a quantidade de itens coletados ao dominar a zona
                    },
                    itensList = {
                        {
                            item = 'lsd',
                            minAmount = 10, -- Quantidade mínima de 'lsd' no delivery
                            maxAmount = 15, -- Quantidade máxima de 'lsd' no delivery
                            payment = 100 -- Valor por unidade de 'lsd'
                        }
                    }
                },
                {
                    dangerRoute = {
                        status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                        percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                    },
                    dominationBonus = {
                        status = true, -- Bônus ativo
                        zone = false, -- Zona necessária para duplicar o farm
                        bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                    },
                    itensList = {
                        {
                            item = 'maconha',
                            minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                            maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                            payment = 50 -- Valor por unidade de 'maconha'
                        }
                    }
                },
                {
                    dangerRoute = {
                        status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                        percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                    },
                    dominationBonus = {
                        status = true, -- Bônus ativo
                        zone = false, -- Zona necessária para duplicar o farm
                        bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                    },
                    itensList = {
                        {
                            item = 'opio',
                            minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                            maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                            payment = 50 -- Valor por unidade de 'maconha'
                        }
                    }
                },
                {
                    dangerRoute = {
                        status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                        percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                    },
                    dominationBonus = {
                        status = true, -- Bônus ativo
                        zone = false, -- Zona necessária para duplicar o farm
                        bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                    },
                    itensList = {
                        {
                            item = 'metanfetamina',
                            minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                            maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                            payment = 50 -- Valor por unidade de 'maconha'
                        }
                    }
                }
            }
        },
        
        locations = {
            -- LOCALIZACOES DESSAS BANCADAS
            {
                -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                name = 'Portugal',
                coords = vec3(1871.61,6411.28,47.31), -- COORDENADAS DA BANCADA
                requireStorage = {
                    -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                    active = true,
                    name = 'Portugal'
                },
                tablePermission = 'perm.portugal', -- PERMISSAO PARA ACESSAR A BANCADA
                craftPermission = 'perm.liderportugal', -- PERMISSAO PARA CRAFTAR ITEM
                drawMarker = function(coords, dist)
                    if dist <= 5.0 then
                        DrawText3Ds(
                            coords.x,
                            coords.y,
                            coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                        )
                    end
                end -- BLIP DO CHAO
            },
            {
                -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                name = 'Brasil',
                coords = vec3(-1616.69,4728.86,53.68), -- COORDENADAS DA BANCADA
                requireStorage = {
                    -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                    active = true,
                    name = 'Brasil'
                },
                tablePermission = 'perm.brasil', -- PERMISSAO PARA ACESSAR A BANCADA
                craftPermission = 'perm.liderbrasil', -- PERMISSAO PARA CRAFTAR ITEM
                drawMarker = function(coords, dist)
                    if dist <= 5.0 then
                        DrawText3Ds(
                            coords.x,
                            coords.y,
                            coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                        )
                    end
                end -- BLIP DO CHAO
            },
            {
                -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                name = 'Argentina',
                coords = vec3(345.67,-2018.8,22.39), -- COORDENADAS DA BANCADA
                requireStorage = {
                    -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                    active = true,
                    name = 'Argentina'
                },
                tablePermission = 'perm.argentina', -- PERMISSAO PARA ACESSAR A BANCADA
                craftPermission = 'perm.liderargentina', -- PERMISSAO PARA CRAFTAR ITEM
                drawMarker = function(coords, dist)
                    if dist <= 5.0 then
                        DrawText3Ds(
                            coords.x,
                            coords.y,
                            coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                        )
                    end
                end -- BLIP DO CHAO
            },
    }, -- FIM DE UMA BANCADA

}, -- FIM DA  CONFIGURACAO

    ['CONTRABANDO'] = {
        -- INICIO DE UMA BANCADA, NUNCA REPETIR ESSE NOME
        craft = {
            -- ZONA DE CRAFT
            {
                item = 'c4', -- SPAWN DO ITEM
                amount = 2, -- Quantidade de item que vai receber por unidade selecionada.
                itemTime = 10, -- 30 segundo(s) para a maquina concluir o craft.
                requires = {
                    -- ITENS NECESSARIOS PARA O CRAFT
                    { item = "c-cobre" , amount = 30 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                    { item = "c-fio" , amount = 30 },
                    { item = "polvora" , amount = 30 },
                    { item = "aluminio" , amount = 30 } 
                }
            },
            {
                item = 'placa', -- SPAWN DO ITEM
                amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                itemTime = 10, -- 30 segundo(s) para a maquina concluir o craft.
                requires = {
                    -- ITENS NECESSARIOS PARA O CRAFT
                    { item = "ferro" , amount = 50 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                    { item = "aluminio" , amount = 50 }
                }
            },
            {
                item = 'pendrive', -- SPAWN DO ITEM
                amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                itemTime = 10, -- 30 segundo(s) para a maquina concluir o craft.
                requires = {
                    -- ITENS NECESSARIOS PARA O CRAFT
                    { item = "plastico" , amount = 30 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                    { item = "c-cobre" , amount = 30 }
                }
            },
            {
                item = 'algemas', -- SPAWN DO ITEM
                amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                itemTime = 10, -- 30 segundo(s) para a maquina concluir o craft.
                requires = {
                    -- ITENS NECESSARIOS PARA O CRAFT
                    { item = "c-ferro" , amount = 30 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                    { item = "m-aco" , amount = 30 }  
                }
            },
            {
                item = 'corda', -- SPAWN DO ITEM
                amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                itemTime = 10, -- 30 segundo(s) para a maquina concluir o craft.
                requires = {
                    -- ITENS NECESSARIOS PARA O CRAFT
                    { item = "pacote_tecido" , amount = 40 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                    { item = "c-fio" , amount = 40 }
                }
            }
        },
        farm = {
            -- ZONA DE FARM
            list = {
                {
                    dangerRoute = {
                        status = true, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                        percentualPolice = 3 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                    },
                    dominationBonus = {
                        -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                        status = true, -- Se o sistema ta ativo ou não
                        zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                        bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                    },
                    itensList = {
                        {item = 'c-cobre', minAmount = 10, maxAmount = 15},
                        {item = 'c-fio', minAmount = 10, maxAmount = 15},
                        {item = 'polvora', minAmount = 10, maxAmount = 15},
                        {item = 'aluminio', minAmount = 10, maxAmount = 15},
                    }
                },
                {
                    dangerRoute = {
                        status = false, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                        percentualPolice = 30 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                    },
                    dominationBonus = {
                        -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                        status = true, -- Se o sistema ta ativo ou não
                        zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                        bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                    },
                    itensList = {
                        {item = 'ferro', minAmount = 10, maxAmount = 15},
                        {item = 'aluminio', minAmount = 10, maxAmount = 15},
                    }
                },
                {
                    dangerRoute = {
                        status = false, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                        percentualPolice = 30 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                    },
                    dominationBonus = {
                        -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                        status = true, -- Se o sistema ta ativo ou não
                        zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                        bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                    },
                    itensList = {
                        {item = 'plastico', minAmount = 10, maxAmount = 15},
                        {item = 'c-cobre', minAmount = 10, maxAmount = 15},
                    }
                },
                {
                    dangerRoute = {
                        status = false, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                        percentualPolice = 30 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                    },
                    dominationBonus = {
                        -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                        status = true, -- Se o sistema ta ativo ou não
                        zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                        bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                    },
                    itensList = {
                        {item = 'c-ferro', minAmount = 10, maxAmount = 15},
                        {item = 'm-aco', minAmount = 10, maxAmount = 15},
                    }
                },
                {
                    dangerRoute = {
                        status = false, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                        percentualPolice = 30 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                    },
                    dominationBonus = {
                        -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                        status = true, -- Se o sistema ta ativo ou não
                        zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                        bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                    },
                    itensList = {
                        {item = 'pacote_tecido', minAmount = 10, maxAmount = 15},
                        {item = 'c-fio', minAmount = 10, maxAmount = 15},
                    }
                }
            }
        },
        delivery = {
            list = {
                {
                    dangerRoute = {
                        status = true, -- Rota Perigosa (CHANCE DE CHAMAR A POLICIA)
                        percentualPolice = 30 -- 3% de chamar a polícia (APENAS SE DangerRoute estiver ativo)
                    },
                    dominationBonus = {
                        status = true, -- Se o sistema de bônus está ativo
                        zone = false, -- Zona necessária para duplicar o farm (exemplo: 'Armas', 'Municao', etc.)
                        bonus = 2 -- 2x a quantidade de itens coletados ao dominar a zona
                    },
                    itensList = {
                        {
                            item = 'lsd',
                            minAmount = 10, -- Quantidade mínima de 'lsd' no delivery
                            maxAmount = 15, -- Quantidade máxima de 'lsd' no delivery
                            payment = 100 -- Valor por unidade de 'lsd'
                        }
                    }
                },
                {
                    dangerRoute = {
                        status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                        percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                    },
                    dominationBonus = {
                        status = true, -- Bônus ativo
                        zone = false, -- Zona necessária para duplicar o farm
                        bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                    },
                    itensList = {
                        {
                            item = 'maconha',
                            minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                            maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                            payment = 50 -- Valor por unidade de 'maconha'
                        }
                    }
                },
                {
                    dangerRoute = {
                        status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                        percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                    },
                    dominationBonus = {
                        status = true, -- Bônus ativo
                        zone = false, -- Zona necessária para duplicar o farm
                        bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                    },
                    itensList = {
                        {
                            item = 'opio',
                            minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                            maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                            payment = 50 -- Valor por unidade de 'maconha'
                        }
                    }
                },
                {
                    dangerRoute = {
                        status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                        percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                    },
                    dominationBonus = {
                        status = true, -- Bônus ativo
                        zone = false, -- Zona necessária para duplicar o farm
                        bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                    },
                    itensList = {
                        {
                            item = 'metanfetamina',
                            minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                            maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                            payment = 50 -- Valor por unidade de 'maconha'
                        }
                    }
                }
            }
        },
        
        locations = {
            -- LOCALIZACOES DESSAS BANCADAS
            {
                -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                name = 'Cv',
                coords = vec3(-809.39,189.71,72.47), -- COORDENADAS DA BANCADA
                requireStorage = {
                    -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                    active = true,
                    name = 'Cv'
                },
                tablePermission = 'perm.cv', -- PERMISSAO PARA ACESSAR A BANCADA
                craftPermission = 'perm.lidercv', -- PERMISSAO PARA CRAFTAR ITEM
                drawMarker = function(coords, dist)
                    if dist <= 5.0 then
                        DrawText3Ds(
                            coords.x,
                            coords.y,
                            coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                        )
                    end
                end -- BLIP DO CHAO
            },

            {
                -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                name = 'Camorra',
                coords = vec3(3258.36,5104.66,24.04), -- COORDENADAS DA BANCADA
                requireStorage = {
                    -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                    active = true,
                    name = 'Camorra'
                },
                tablePermission = 'perm.camorra', -- PERMISSAO PARA ACESSAR A BANCADA
                craftPermission = 'perm.lidercamorra', -- PERMISSAO PARA CRAFTAR ITEM
                drawMarker = function(coords, dist)
                    if dist <= 5.0 then
                        DrawText3Ds(
                            coords.x,
                            coords.y,
                            coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                        )
                    end
                end -- BLIP DO CHAO
            },
            {
                -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                name = 'Mexico',
                coords = vec3(2286.81,2392.03,67.75), -- COORDENADAS DA BANCADA
                requireStorage = {
                    -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                    active = true,
                    name = 'Mexico'
                },
                tablePermission = 'perm.mexico', -- PERMISSAO PARA ACESSAR A BANCADA
                craftPermission = 'perm.lidermexico', -- PERMISSAO PARA CRAFTAR ITEM
                drawMarker = function(coords, dist)
                    if dist <= 5.0 then
                        DrawText3Ds(
                            coords.x,
                            coords.y,
                            coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                        )
                    end
                end -- BLIP DO CHAO
            },
            {
                -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                name = 'Jamaica',
                coords = vec3(-515.68,2977.68,26.82), -- COORDENADAS DA BANCADA
                requireStorage = {
                    -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                    active = true,
                    name = 'Jamaica'
                },
                tablePermission = 'perm.jamaica', -- PERMISSAO PARA ACESSAR A BANCADA
                craftPermission = 'perm.liderjamaica', -- PERMISSAO PARA CRAFTAR ITEM
                drawMarker = function(coords, dist)
                    if dist <= 5.0 then
                        DrawText3Ds(
                            coords.x,
                            coords.y,
                            coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                        )
                    end
                end -- BLIP DO CHAO
            },
            {
                -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                name = 'Australia',
                coords = vec3(867.68,2853.78,60.15), -- COORDENADAS DA BANCADA
                requireStorage = {
                    -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                    active = true,
                    name = 'Australia'
                },
                tablePermission = 'perm.australia', -- PERMISSAO PARA ACESSAR A BANCADA
                craftPermission = 'perm.lideraustralia', -- PERMISSAO PARA CRAFTAR ITEM
                drawMarker = function(coords, dist)
                    if dist <= 5.0 then
                        DrawText3Ds(
                            coords.x,
                            coords.y,
                            coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                        )
                    end
                end -- BLIP DO CHAO
            },
    }, -- FIM DE UMA BANCADA

    }, -- FIM DA  CONFIGURACAO




        ['Lavagem'] = {
            -- INICIO DE UMA BANCADA, NUNCA REPETIR ESSE NOME
            craft = {
                -- ZONA DE CRAFT
                {
                    item = 'money', -- SPAWN DO ITEM
                    amount = 95000, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 15, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "dinheirosujo" , amount = 100000 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "l-alvejante" , amount = 25 }  
                    }
                },
                {
                    item = 'money', -- SPAWN DO ITEM
                    amount = 195000, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 15, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "dinheirosujo" , amount = 200000 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "l-alvejante" , amount = 25 }  
                    }
                },
                {
                    item = 'money', -- SPAWN DO ITEM
                    amount = 295000, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 20, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "dinheirosujo" , amount = 300000 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "l-alvejante" , amount = 40 }  
                    }
                },
                {
                    item = 'money', -- SPAWN DO ITEM
                    amount = 950000, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 30, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "dinheirosujo" , amount = 1000000 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "l-alvejante" , amount = 60 } 
                    }
                },
                {
                    item = 'capuz', -- SPAWN DO ITEM
                    amount = 1, -- Quantidade de item que vai receber por unidade selecionada.
                    itemTime = 25, -- 30 segundo(s) para a maquina concluir o craft.
                    requires = {
                        -- ITENS NECESSARIOS PARA O CRAFT
                        { item = "pacote_tecido" , amount = 40 }, -- ITEM / QUANTIDADE ( POR UNIDADE )
                        { item = "c-fio" , amount = 40 } 
                    }
                },
            },
            farm = {
                -- ZONA DE FARM
                list = {
                    {
                        dangerRoute = {
                            status = false, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                            percentualPolice = 30 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                        },
                        dominationBonus = {
                            -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                            status = true, -- Se o sistema ta ativo ou não
                            zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                            bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                        },
                        itensList = {
                            {item = 'l-alvejante', minAmount = 10, maxAmount = 15},
                        }
                    },
                    {
                        dangerRoute = {
                            status = false, -- Rota Perigosa ( CHANCE DE CHAMAR A POLICIA )
                            percentualPolice = 30 -- 3% De chamar A Policia ( APENAS SE O DangerRoute For ativo )
                        },
                        dominationBonus = {
                            -- Caso utilize o script mirtin_dominacao e queira dobrar/triplicar o farm se tiver a zona dominada.
                            status = true, -- Se o sistema ta ativo ou não
                            zone = false, -- Qual a zona que precisa ter dominada para boostar o farm. Exemplo: [ 'Armas', 'Municao' ou etc ]
                            bonus = 2 -- 2x Quantidade que o farm vai duplicar quando estiver com a zona dominada.
                        },
                        itensList = {
                            {item = 'c-fio', minAmount = 3, maxAmount = 6},
                            {item = 'pacote_tecido', minAmount = 3, maxAmount = 6},
                        }
                    }
                }
            },
            delivery = {
                list = {
                    {
                        dangerRoute = {
                            status = true, -- Rota Perigosa (CHANCE DE CHAMAR A POLICIA)
                            percentualPolice = 30 -- 3% de chamar a polícia (APENAS SE DangerRoute estiver ativo)
                        },
                        dominationBonus = {
                            status = true, -- Se o sistema de bônus está ativo
                            zone = false, -- Zona necessária para duplicar o farm (exemplo: 'Armas', 'Municao', etc.)
                            bonus = 2 -- 2x a quantidade de itens coletados ao dominar a zona
                        },
                        itensList = {
                            {
                                item = 'lsd',
                                minAmount = 10, -- Quantidade mínima de 'lsd' no delivery
                                maxAmount = 15, -- Quantidade máxima de 'lsd' no delivery
                                payment = 100 -- Valor por unidade de 'lsd'
                            }
                        }
                    },
                    {
                        dangerRoute = {
                            status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                            percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                        },
                        dominationBonus = {
                            status = true, -- Bônus ativo
                            zone = false, -- Zona necessária para duplicar o farm
                            bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                        },
                        itensList = {
                            {
                                item = 'maconha',
                                minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                                maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                                payment = 50 -- Valor por unidade de 'maconha'
                            }
                        }
                    },
                    {
                        dangerRoute = {
                            status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                            percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                        },
                        dominationBonus = {
                            status = true, -- Bônus ativo
                            zone = false, -- Zona necessária para duplicar o farm
                            bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                        },
                        itensList = {
                            {
                                item = 'opio',
                                minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                                maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                                payment = 50 -- Valor por unidade de 'maconha'
                            }
                        }
                    },
                    {
                        dangerRoute = {
                            status = true, -- Rota não perigosa (sem chance de chamar a polícia)
                            percentualPolice = 30 -- 30% de chance de chamar a polícia (apenas se DangerRoute for ativo)
                        },
                        dominationBonus = {
                            status = true, -- Bônus ativo
                            zone = false, -- Zona necessária para duplicar o farm
                            bonus = 2 -- Multiplicador de 2x quando a zona for dominada
                        },
                        itensList = {
                            {
                                item = 'metanfetamina',
                                minAmount = 3, -- Quantidade mínima de 'maconha' no delivery
                                maxAmount = 6, -- Quantidade máxima de 'maconha' no delivery
                                payment = 50 -- Valor por unidade de 'maconha'
                            }
                        }
                    }
                }
            },
            locations = {
                -- LOCALIZACOES DESSAS BANCADAS
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Tequila',
                    coords = vec3(-1034.53,313.71,71.66), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Tequila'
                    },
                    tablePermission = 'perm.tequila', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lidertequila', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                -- LOCALIZACOES DESSAS BANCADAS
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Bahamas',
                    coords = vec3(-1378.54,-629.24,30.63), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Bahamas'
                    },
                    tablePermission = 'perm.bahamas', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.liderbahamas', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Iluminatis',
                    coords = vec3(-571.71,288.94,79.18), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Iluminatis'
                    },
                    tablePermission = 'perm.iluminatis', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lideriluminatis', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Cassino',
                    coords = vec3(963.24,23.74,76.99), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Cassino'
                    },
                    tablePermission = 'perm.cassino', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.lidercassino', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                },
                {
                    -- POSSIVEL ADICIONAR VARIAS LOCALIZACOES E VARIAS ORGANIZACOES DIFERENTE
                    name = 'Luxury',
                    coords = vec3(-303.11,217.86,79.48), -- COORDENADAS DA BANCADA
                    requireStorage = {
                        -- SE VAI PUXAR OS ITENS DO ARMAZEM NA HORA DE FABRICAR ( Caso for true configurar na parte Storages )
                        active = true,
                        name = 'Luxury'
                    },
                    tablePermission = 'perm.luxury', -- PERMISSAO PARA ACESSAR A BANCADA
                    craftPermission = 'perm.liderluxury', -- PERMISSAO PARA CRAFTAR ITEM
                    drawMarker = function(coords, dist)
                        if dist <= 5.0 then
                            DrawText3Ds(
                                coords.x,
                                coords.y,
                                coords.z + 0.1,
                        'Pressione ~r~[E]~w~ para acessar a bancada.'
                    )
                    DrawMarker(
                        27,
                        coords.x,
                        coords.y,
                        coords.z - 0.95,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.5,
                        1.5,
                        1.5,
                        243,
                        5,
                        72,
                        180,
                        0,
                        0,
                        0,
                        1
                            )
                        end
                    end -- BLIP DO CHAO
                }
            }
        }, -- FIM DE UMA BANCADA

    }, -- FIM DA CONFIGURACAO

    -- CONFIGURACAO DOS ARMAZENS
    Storages = {
        ------------- ARMAS --------------
        ['Yakuza'] = {
            itens = {
                ['pecadearma'] = 9999999, -- ITEM / QUANTIDADE MAXIMA
                ['gatilho'] = 9999999, 
                ['molas'] = 9999999, 
                ['metal'] = 9999999
            }
        },
        ['Mafia'] = {
            itens = {
                ['pecadearma'] = 9999999, 
                ['gatilho'] = 9999999, 
                ['molas'] = 9999999, 
                ['metal'] = 9999999
            }
        },
        ['Cartel'] = {
            itens = {
                ['pecadearma'] = 9999999, 
                ['gatilho'] = 9999999, 
                ['molas'] = 9999999, 
                ['metal'] = 9999999
            }
        },
        ['Croacia'] = {
            itens = {
                ['pecadearma'] = 9999999, 
                ['gatilho'] = 9999999, 
                ['molas'] = 9999999, 
                ['metal'] = 9999999
            }
        },
        ['Triade'] = {
            itens = {
                ['pecadearma'] = 9999999, 
                ['gatilho'] = 9999999, 
                ['molas'] = 9999999, 
                ['metal'] = 9999999
            }
        },
        ['Merlim'] = {
            itens = {
                ['pecadearma'] = 9999999, 
                ['gatilho'] = 9999999, 
                ['molas'] = 9999999, 
                ['metal'] = 9999999
            }
        },
        ['BlackOut'] = {
            itens = {
                ['pecadearma'] = 9999999, 
                ['gatilho'] = 9999999, 
                ['molas'] = 9999999, 
                ['metal'] = 9999999
            }
        },
        ['Wolves'] = {
            itens = {
                ['pecadearma'] = 9999999, 
                ['gatilho'] = 9999999, 
                ['molas'] = 9999999, 
                ['metal'] = 9999999
            }
        },
        ['Franca'] = {
            itens = {
                ['pecadearma'] = 9999999, 
                ['gatilho'] = 9999999, 
                ['molas'] = 9999999, 
                ['metal'] = 9999999
            }
        },
    
        ------------- DROGAS --------------
        ['Portugal'] = {
            itens = {
                ['acidolsd'] = 9999999, 
                ['pastabase'] = 9999999, 
                ['opiopapoula'] = 9999999, 
                ['folhamaconha'] = 9999999, 
                ['plastico'] = 9999999, 
                ['tiner'] = 9999999, 
                ['cristal'] = 9999999
            }
        },
        ['Brasil'] = {
            itens = {
                ['acidolsd'] = 9999999, 
                ['pastabase'] = 9999999, 
                ['opiopapoula'] = 9999999, 
                ['folhamaconha'] = 9999999, 
                ['plastico'] = 9999999, 
                ['tiner'] = 9999999, 
                ['cristal'] = 9999999
            }
        },
        ['Argentina'] = {
            itens = {
                ['acidolsd'] = 9999999, 
                ['pastabase'] = 9999999, 
                ['opiopapoula'] = 9999999, 
                ['folhamaconha'] = 9999999, 
                ['plastico'] = 9999999, 
                ['tiner'] = 9999999, 
                ['cristal'] = 9999999
            }
        },
    
    
        ------------- MUNI --------------
        ['Grota'] = {
            itens = {
                ['capsulas'] = 9999999, 
                ['polvora'] = 9999999
            }
        },
        ['Milicia'] = {
            itens = {
                ['capsulas'] = 9999999, 
                ['polvora'] = 9999999
            }
        },
        ['Alemao'] = {
            itens = {
                ['capsulas'] = 9999999, 
                ['polvora'] = 9999999
            }
        },
        ['Helipa'] = {
            itens = {
                ['capsulas'] = 9999999, 
                ['polvora'] = 9999999
            }
        },
        ['Crips'] = {
            itens = {
                ['capsulas'] = 9999999, 
                ['polvora'] = 9999999
            }
        },
        ['Canada'] = {
            itens = {
                ['capsulas'] = 9999999, 
                ['polvora'] = 9999999
            }
        },
        ['Turquia'] = {
            itens = {
                ['capsulas'] = 9999999, 
                ['polvora'] = 9999999
            }
        },

        -----------CONTRABANDO-------------
        ['Cv'] = {
            itens = {
                ['c-cobre'] = 9999999, 
                ['c-fio'] = 9999999, 
                ['polvora'] = 9999999, 
                ['aluminio'] = 9999999, 
                ['ferro'] = 9999999, 
                ['plastico'] = 9999999,
                ['c-ferro'] = 9999999,
                ['m-aco'] = 9999999,
                ['pacote_tecido'] = 9999999,
            }
        },
        ['Camorra'] = {
            itens = {
                ['c-cobre'] = 9999999, 
                ['c-fio'] = 9999999, 
                ['polvora'] = 9999999, 
                ['aluminio'] = 9999999, 
                ['ferro'] = 9999999, 
                ['plastico'] = 9999999,
                ['c-ferro'] = 9999999,
                ['m-aco'] = 9999999,
                ['pacote_tecido'] = 9999999,
            }
        },
        ['Mexico'] = {
            itens = {
                ['c-cobre'] = 9999999, 
                ['c-fio'] = 9999999, 
                ['polvora'] = 9999999, 
                ['aluminio'] = 9999999, 
                ['ferro'] = 9999999, 
                ['plastico'] = 9999999,
                ['c-ferro'] = 9999999,
                ['m-aco'] = 9999999,
                ['pacote_tecido'] = 9999999,
            }
        },
        ['Jamaica'] = {
            itens = {
                ['c-cobre'] = 9999999, 
                ['c-fio'] = 9999999, 
                ['polvora'] = 9999999, 
                ['aluminio'] = 9999999, 
                ['ferro'] = 9999999, 
                ['plastico'] = 9999999,
                ['c-ferro'] = 9999999,
                ['m-aco'] = 9999999,
                ['pacote_tecido'] = 9999999,
            }
        },
        ['Australia'] = {
            itens = {
                ['c-cobre'] = 9999999, 
                ['c-fio'] = 9999999, 
                ['polvora'] = 9999999, 
                ['aluminio'] = 9999999, 
                ['ferro'] = 9999999, 
                ['plastico'] = 9999999,
                ['c-ferro'] = 9999999,
                ['m-aco'] = 9999999,
                ['pacote_tecido'] = 9999999,
            }
        },
    
        ------------- LAVAGEM --------------
        ['Cassino'] = {
            itens = {
                ['dinheirosujo'] = 9999999, 
                ['l-alvejante'] = 9999999, 
                ['c-fio'] = 9999999, 
                ['pacote_tecido'] = 9999999, 
            }
        },
        ['Tequila'] = {
            itens = {
                ['dinheirosujo'] = 9999999, 
                ['l-alvejante'] = 9999999, 
                ['c-fio'] = 9999999, 
                ['pacote_tecido'] = 9999999, 
            }
        },
        ['Bahamas'] = {
            itens = {
                ['dinheirosujo'] = 9999999, 
                ['l-alvejante'] = 9999999, 
                ['c-fio'] = 9999999, 
                ['pacote_tecido'] = 9999999, 
            }
        },
        ['Iluminatis'] = {
            itens = {
                ['dinheirosujo'] = 9999999, 
                ['l-alvejante'] = 9999999, 
                ['c-fio'] = 9999999, 
                ['pacote_tecido'] = 9999999, 
            }
        },
        ['Luxury'] = {
            itens = {
                ['dinheirosujo'] = 9999999, 
                ['l-alvejante'] = 9999999, 
                ['c-fio'] = 9999999, 
                ['pacote_tecido'] = 9999999, 
            }
        },
    
        ------------- DESMANCHE --------------
        ['MotoClub'] = {
            itens = {
                ['ferro'] = 9999999, 
                ['aluminio'] = 9999999, 
                ['m-malha'] = 9999999, 
                ['molas'] = 9999999, 
                ['plastico'] = 9999999
            }
        },
        ['Furious'] = {
            itens = {
                ['ferro'] = 9999999, 
                ['aluminio'] = 9999999, 
                ['m-malha'] = 9999999, 
                ['molas'] = 9999999, 
                ['plastico'] = 9999999
            }
        },
        ['Lacoste'] = {
            itens = {
                ['ferro'] = 9999999, 
                ['aluminio'] = 9999999, 
                ['m-malha'] = 9999999, 
                ['molas'] = 9999999, 
                ['plastico'] = 9999999
            }
        },
        ['b13'] = {
            itens = {
                ['ferro'] = 9999999, 
                ['aluminio'] = 9999999, 
                ['m-malha'] = 9999999, 
                ['molas'] = 9999999, 
                ['plastico'] = 9999999
            }
        },
        ['Cartel'] = {
            itens = {
                ['ferro'] = 9999999, 
                ['aluminio'] = 9999999, 
                ['m-malha'] = 9999999, 
                ['molas'] = 9999999, 
                ['plastico'] = 9999999
            }
        },
    
        ------------- MECANICA --------------
        ['thunderCustom'] = {
            itens = {
                ['plastico'] = 9999999, 
                ['metal'] = 9999999, 
                ['c-cobre'] = 9999999
            }
        },
        ['StreetRacing'] = {
            itens = {
                ['plastico'] = 9999999, 
                ['metal'] = 9999999, 
                ['c-cobre'] = 9999999
            }
        },
    
        ------------- HOSPITAL --------------
        ['Hospital'] = {
            itens = {
                ['fita_de_pano'] = 9999999, 
                ['elastico'] = 9999999
            }
        }
    
    }, -- final do storages


    -- LOCALIZAÇÕES DAS ROTAS DE COLETA
    
    Locations = {
        ['SUL'] = {
            {['x'] = 269.72659301758, ['y'] = -433.30996704102, ['z'] = 45.258628845215},
            {['x'] = 1095.2623291016, ['y'] = -265.18560791016, ['z'] = 69.314659118652},
            {['x'] = 1215.4553222656, ['y'] = -1381.8483886719, ['z'] = 35.360610961914},
            {['x'] = 1149.3568115234, ['y'] = -2506.0375976563, ['z'] = 33.346450805664},
            {['x'] = -877.59, ['y'] = -2177.98, ['z'] = 9.81},
            {['x'] = 174.5284576416, ['y'] = -2025.7756347656, ['z'] = 18.331029891968},
            {['x'] = 184.11695861816, ['y'] = -1256.9632568359, ['z'] = 29.198429107666},
            {['x'] = 58.734958648682, ['y'] = -269.14291381836, ['z'] = 48.188236236572},
            {['x'] = -994.46783447266, ['y'] = 92.465660095215, ['z'] = 51.955184936523},
            {['x'] = -1818.31, ['y'] = 796.95, ['z'] = 138.13},
            {['x'] = -1599.8289794922, ['y'] = -370.38012695313, ['z'] = 44.385177612305},
            {['x'] = -2187.79296875, ['y'] = -408.98895263672, ['z'] = 13.147369384766},
            {['x'] = -1329.2437744141, ['y'] = -1150.451171875, ['z'] = 4.38121509552},
            {['x'] = -508.26608276367, ['y'] = -1212.435546875, ['z'] = 18.596347808838},
            {['x'] = -663.63, ['y'] = -1371.19, ['z'] = 10.62},
            {['x'] = -434.28, ['y'] = -2170.6, ['z'] = 11.34},
            {['x'] = -557.94, ['y'] = -1123.17, ['z'] = 21.5},
            {['x'] = -838.60534667969, ['y'] = -609.32543945313, ['z'] = 29.026960372925},
            {['x'] = -448.94778442383, ['y'] = -132.73837280273, ['z'] = 39.08292388916},
            {['x'] = -195.33979797363, ['y'] = -835.03845214844, ['z'] = 30.730991363525}
        },
        ['NORTE'] = {
            {['x'] = -2194.1354980469, ['y'] = -388.45462036133, ['z'] = 13.4704246521},
            {['x'] = -3056.3854980469, ['y'] = 176.16958618164, ['z'] = 11.608025550842},
            {['x'] = -3070.3815917969, ['y'] = 1734.58984375, ['z'] = 36.621490478516},
            {['x'] = -2568.1369628906, ['y'] = 2347.6342773438, ['z'] = 33.080039978027},
            {['x'] = -3036.3552246094, ['y'] = 3338.3732910156, ['z'] = 9.9349489212036},
            {['x'] = -2188.9052734375, ['y'] = 4252.9638671875, ['z'] = 48.940746307373},
            {['x'] = -1046.5561523438, ['y'] = 5323.1616210938, ['z'] = 45.031158447266},
            {['x'] = -388.29217529297, ['y'] = 6269.0458984375, ['z'] = 30.446243286133},
            {['x'] = 578.3857421875, ['y'] = 6558.1704101563, ['z'] = 28.018701553345},
            {['x'] = 1722.88, ['y'] = 6417.93, ['z'] = 35.0},
            {['x'] = 2559.7729492188, ['y'] = 5241.736328125, ['z'] = 44.841533660889},
            {['x'] = 1792.2270507813, ['y'] = 4593.7094726563, ['z'] = 37.682899475098},
            {['x'] = 812.02703857422, ['y'] = 4229.8442382813, ['z'] = 52.776302337646},
            {['x'] = 1662.9755859375, ['y'] = 4768.0571289063, ['z'] = 42.007564544678},
            {['x'] = 2803.7299804688, ['y'] = 4971.3461914063, ['z'] = 33.498306274414},
            {['x'] = 3066.6625976563, ['y'] = 3820.4030761719, ['z'] = 74.83943939209},
            {['x'] = 2086.1723632813, ['y'] = 2707.5336914063, ['z'] = 48.272926330566},
            {['x'] = 1925.9898681641, ['y'] = 1794.541015625, ['z'] = 64.200401306152},
            {['x'] = 2498.7375488281, ['y'] = 808.64178466797, ['z'] = 94.018333435059},
            {['x'] = 2386.96875, ['y'] = -391.27166748047, ['z'] = 75.157066345215}
        }
    },
    -- LOCALIZAÇÕES DAS ENTREGAS
    DeliveryLocations = {
        {['x'] = 727.77172851563, ['y'] = 216.70178222656, ['z'] = 87.030082702637},
        {['x'] = 200.47122192383, ['y'] = 495.94183349609, ['z'] = 140.99989318848},
        {['x'] = -184.89025878906, ['y'] = 502.69140625, ['z'] = 134.91850280762},
        {['x'] = -355.51943969727, ['y'] = 343.93936157227, ['z'] = 109.34753417969},
        {['x'] = -568.55474853516, ['y'] = 494.0881652832, ['z'] = 106.95864105225},
        {['x'] = -836.76580810547, ['y'] = 454.63809204102, ['z'] = 88.595893859863},
        {['x'] = -1161.8542480469, ['y'] = 480.41220092773, ['z'] = 86.093757629395},
        {['x'] = -1455.5434570313, ['y'] = 413.61660766602, ['z'] = 109.88622283936},
        {['x'] = -1481.2939453125, ['y'] = -7.4827694892883, ['z'] = 55.236015319824},
        {['x'] = -1149.9549560547, ['y'] = -388.05087280273, ['z'] = 36.635585784912},
        {['x'] = -895.76831054688, ['y'] = -779.05114746094, ['z'] = 15.910481452942},
        {['x'] = -870.94580078125, ['y'] = -1129.8197021484, ['z'] = 7.0695457458496},
        {['x'] = -1138.6221923828, ['y'] = -1410.21484375, ['z'] = 5.2557005882263},
        {['x'] = -1351.5860595703, ['y'] = -1216.1368408203, ['z'] = 5.944146156311},
        {['x'] = -1012.6721801758, ['y'] = -1138.9058837891, ['z'] = 2.1586010456085},
        {['x'] = -1315.2711181641, ['y'] = -903.45721435547, ['z'] = 11.322186470032},
        {['x'] = -1586.9901123047, ['y'] = -571.14691162109, ['z'] = 34.97908782959},
        {['x'] = -1997.5615234375, ['y'] = -334.21292114258, ['z'] = 48.106292724609},
        {['x'] = -1630.5080566406, ['y'] = -361.54281616211, ['z'] = 48.140926361084},
        {['x'] = -2235.0270996094, ['y'] = -362.39163208008, ['z'] = 13.311479568481},
        {['x'] = -2819.4743652344, ['y'] = 64.266174316406, ['z'] = 14.754144668579},
        {['x'] = -3031.900390625, ['y'] = 516.42614746094, ['z'] = 7.3950986862183},
        {['x'] = -3224.7846679688, ['y'] = 1098.7489013672, ['z'] = 10.571074485779},
        {['x'] = -3008.2175292969, ['y'] = 1912.2239990234, ['z'] = 28.482349395752},
        {['x'] = -2520.0417480469, ['y'] = 2315.4816894531, ['z'] = 33.216365814209},
        {['x'] = -2351.4899902344, ['y'] = 3994.7272949219, ['z'] = 26.699678421021},
        {['x'] = -1491.5766601563, ['y'] = 4980.5122070313, ['z'] = 63.323047637939},
        {['x'] = -581.72552490234, ['y'] = 5621.5712890625, ['z'] = 38.658626556396},
        {['x'] = -182.99453735352, ['y'] = 6311.8110351563, ['z'] = 31.489393234253},
        {['x'] = 756.95104980469, ['y'] = 6461.7241210938, ['z'] = 31.427434921265},
        {['x'] = 1745.1613769531, ['y'] = 6411.2065429688, ['z'] = 35.239028930664},
        {['x'] = 2559.6745605469, ['y'] = 5241.7177734375, ['z'] = 44.855991363525},
        {['x'] = 1959.9293212891, ['y'] = 5172.603515625, ['z'] = 47.927612304688},
        {['x'] = 1819.3823242188, ['y'] = 4588.7680664063, ['z'] = 36.047267913818},
        {['x'] = 2667.91015625, ['y'] = 4763.7509765625, ['z'] = 34.724266052246},
        {['x'] = 2845.0456542969, ['y'] = 3436.298828125, ['z'] = 50.762619018555},
        {['x'] = 2538.9609375, ['y'] = 2572.9411621094, ['z'] = 37.944816589355},
        {['x'] = 2333.9645996094, ['y'] = 1196.4398193359, ['z'] = 64.543518066406},
        {['x'] = 2276.1181640625, ['y'] = -487.01263427734, ['z'] = 81.982582092285},
        {['x'] = 1001.8076171875, ['y'] = -813.86273193359, ['z'] = 33.975234985352},
        {['x'] = 91.650726318359, ['y'] = -1209.86328125, ['z'] = 37.548927307129},
        {['x'] = 474.55722045898, ['y'] = -1062.0173339844, ['z'] = 29.211532592773},
        {['x'] = 493.51379394531, ['y'] = -583.89660644531, ['z'] = 24.714595794678},
        {['x'] = 633.35852050781, ['y'] = -291.8196105957, ['z'] = 39.99861907959},
        {['x'] = 936.87609863281, ['y'] = -875.10345458984, ['z'] = 43.794380187988},
        {['x'] = 767.81390380859, ['y'] = -1318.5142822266, ['z'] = 27.275230407715},
        {['x'] = 765.59387207031, ['y'] = -1901.9017333984, ['z'] = 29.173307418823},
        {['x'] = 421.52984619141, ['y'] = -1543.0887451172, ['z'] = 29.249750137329},
        {['x'] = 26.712888717651, ['y'] = -1458.2862548828, ['z'] = 30.478290557861},
        {['x'] = -425.20614624023, ['y'] = -1699.0222167969, ['z'] = 19.079179763794},
        {['x'] = -76.685134887695, ['y'] = -1313.3244628906, ['z'] = 29.260971069336},
        {['x'] = -253.92417907715, ['y'] = -944.14013671875, ['z'] = 31.219984054565},
        {['x'] = -663.40991210938, ['y'] = -890.51904296875, ['z'] = 24.578384399414},
        {['x'] = -703.26116943359, ['y'] = -1390.6459960938, ['z'] = 5.1502690315247},
        {['x'] = -549.00323486328, ['y'] = -939.03460693359, ['z'] = 23.852233886719},
        {['x'] = -829.84509277344, ['y'] = -623.87945556641, ['z'] = 29.026956558228},
        {['x'] = -900.43634033203, ['y'] = -195.82566833496, ['z'] = 38.067127227783},
        {['x'] = -352.57220458984, ['y'] = 14.588917732239, ['z'] = 47.854736328125},
        {['x'] = -33.800872802734, ['y'] = -23.058477401733, ['z'] = 68.997619628906},
        {['x'] = 290.91644287109, ['y'] = -293.37322998047, ['z'] = 53.981533050537}
    },
}

-- OUTRAS CONFIGURAÇÕES
if not SERVER then
    function DrawText3Ds(x, y, z, text)
        local onScreen, _x, _y = World3dToScreen2d(x, y, z)
        SetTextFont(4)
        SetTextScale(0.35, 0.35)
        SetTextColour(255, 255, 255, 200)
        SetTextEntry('STRING')
        SetTextCentre(1)
        AddTextComponentString(text)
        DrawText(_x, _y)
    end
end
