Config = {
    finishTime = 1730427613,      --30 dias: [1730427613]  --15 dias: 1731727613 --60 dias: 1735547613
    website = 'https://thunderrj.hydrus.gg/',
    payFree = 5, --- pagamento nos minutos free
    payVip = 10, --- pagamento nos minutos vip
    timingVip = 10, --- tempo vip pra dar as moedas acima
    timingFree = 5,  --- tempo free pra dar as moedas acima
    defaultReward = { ----- ranking do ultimo ganhador
        photo = '',
        name = 'Foxzin',
        user_id = 1,
        award = '1x VIP OURO',
        time_played = 60,
        desc = 'Ola,',
    },

    topRewards = { -- PREMIAÇÃO 1/2/3 do ranking
        [1] = '1x VIP OURO',
        [2] = '1x VIP PRATA',
        [3] = '1x BRONZE',
    },

    vipsGroups = { -- LISTA DE VIPS que recebem a moeda vip
        ['VipBronze'] = true,
        ['VipPrata'] = true,
        ['VipOuro'] = true,
        ['VipPlatina'] = true,
        ['VipDiamante'] = true,
        ['Vipthunder'] = true,
        ['VipMonster'] = true,
        ['VipGod'] = true,
        ['VipRubi'] = true,
        ['VipEsmeralda'] = true,
        ['VipWipe'] = true,
    },

    rarityColors = { -- CORES DAS RARIDADES --- cor q vai mostrar na nui no open box
        ['COMUM'] = '#4482FF',
        ['SPECIAL'] = '#FFB742',
        ['EPIC'] = '#FF445D',
        ['LEGENDARY'] = '#A41AFF',
    },

    percentualRarity = { -- CALCULO DAS RARIDADES ---- recomendo nao mexer
        ['COMUM'] = 51, -- 50% ( checa se o numero é maior que 51 ou igual )
        ['SPECIAL'] = 50, --- 30% ( 50-20% do lendario = 30%)
        ['EPIC'] = 20, --- 15% ( 20-5%(do lendario) = 15% )
        ['LEGENDARY'] = 5, --- 5%
    },

    crate = {
        { ----- manter o index certinho pra nao ter perigo
            crate_index = 1, --- sempre na ordem pra n ter erro
            name = 'COMUM',
            icon = 'http://181.215.254.182/box/fechado.png', 
            iconOpened = 'http://181.215.254.182/box/aberto.png',
            coins = 500,

            itens = {
                {
                    type = 'VEHICLE', -- ITEM/VEHICLE/OTHERS
                    spawn = 'bmx',
                    amount = 1,
                    rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "Bmx",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'celular',
                    amount = 1,
                    rarity = 'SPECIAL', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "Celular",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'radio',
                    amount = 1,
                    rarity = 'EPIC', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "radio",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'bandagem',
                    amount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "bandagem",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'lsd',
                    amount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "lsd",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'pneus',
                    amount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "pneus",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'alianca',
                    amount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "alianca",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'mochila',
                    amount = 3,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "mochila",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'militec',
                    amount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "militec",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'roupas',
                    amount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "roupas",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'money',
                    amount = 50000,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "money",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'repairkit',
                    amount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "repairkit",
                    func = function(source,user_id, amount)
                        print('chegou aqui papi')
                    end,
                },
                

            }
        },

        {
            crate_index = 2, ---- ordem q falei
            name = 'ESPECIAL',
            icon = 'http://181.215.254.182/box/fechado2.png', 
            iconOpened = 'http://181.215.254.182/box/aberto2.png',
            coins = 1000,

            itens = {
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'algemas',
                    amount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "algemas",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'corda',
                    amount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "corda",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'colete',
                    amount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "colete",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'capuz',
                    amount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "capuz",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'lockpick',
                    amount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "lockpick",
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    spawn = 'dinheirosujo',
                    amount = 200000,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    name = "dinheirosujo",
               },
               {
                type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                spawn = 'rastreador',
                amount = 2,
                rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                name = "rastreador",
             },
             {
               type = 'ITEM', -- ITEM/VEHICLE/OTHERS
               spawn = 'chave',
               amount = 2,
               rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
               name = "chave",
             },
             {
                type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                spawn = 'placa',
                amount = 2,
                rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                name = "placa",
              },
             }
        },

        {
            crate_index = 3, --- ordem
            name = 'EPICA',
            icon = 'http://181.215.254.182/box/fechado3.png', 
            iconOpened = 'http://181.215.254.182/box/aberto3.png',
            coins = 3500,
            
            itens = {
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    name = "G3",
                    spawn = 'WEAPON_SPECIALCARBINE_MK2',
                    amount = 1,
                    maxAmount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    name = "MK2",
                    spawn = 'WEAPON_PISTOL_MK2',
                    amount = 1,
                    maxAmount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                },
                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    name = "M-MK2",
                    spawn = 'AMMO_PISTOL_MK2',
                    amount = 350,
                    maxAmount = 400,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                },

                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    name = "M-G3",
                    spawn = 'AMMO_SPECIALCARBINE_MK2',
                    amount = 350,
                    maxAmount = 400,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                },

                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    name = "SMG",
                    spawn = 'WEAPON_SMG',
                    amount = 1,
                    maxAmount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                },

                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    name = "M-SMG",
                    spawn = 'AMMO_SMG',
                    amount = 300,
                    maxAmount = 400,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                },

                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    name = "Tec-9",
                    spawn = 'WEAPON_MACHINEPISTOL',
                    amount = 1,
                    maxAmount = 1,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                },

                {
                    type = 'ITEM', -- ITEM/VEHICLE/OTHERS
                    name = "M-Tec-9",
                    spawn = 'AMMO_MACHINEPISTOL',
                    amount = 300,
                    maxAmount = 400,
                    rarity = 'COMUM', -- COMUM, SPECIAL, EPIC, LEGENDARY
                },
            }
        },

        {
            crate_index = 4, -- ordem
            name = 'LENDARIA',
            icon = 'http://181.215.254.182/box/fechado4.png', 
            iconOpened = 'http://181.215.254.182/box/aberto4.png',
            coins = 10000,
            
            itens = {
                { -- /rbg de 10 à 20 dias
                    name = "rgbcar",
                    type = 'OTHERS', -- ITEM/VEHICLE/OTHERS
                    spawn = 'rbg',
                    amount = 4,
                    maxAmount = 4,
                    rarity = 'EPIC', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    func = function(source,user_id, amount)
                        if not GetResourceState('vrp_fanho') == 'started' then return end
                        vRP._addUserGroup(user_id, 'rgb')
                        exports["vrp_fanho"]:createCommand("ungroup",user_id, 'rgb', amount * 86400)
                    end,
                },
            }
        },

        {
            crate_index = 5,
            name = 'thunder',
            icon = 'http://181.215.254.182/box/fechado5.png', 
            iconOpened = 'http://181.215.254.182/box/aberto5.png',
            coins = 20000,
            
            itens = {
                { -- /rbg de 10 à 20 dias
                    name = "VipBronze",
                    type = 'OTHERS', -- ITEM/VEHICLE/OTHERS
                    spawn = 'VipBronze',
                    amount = 1,
                    maxAmount = 1,
                    rarity = 'EPIC', -- COMUM, SPECIAL, EPIC, LEGENDARY
                    func = function(source,user_id, amount)
                        if not GetResourceState('vrp_fanho') == 'started' then return end
                        vRP._addUserGroup(user_id, 'VipBronze')
                        exports["vrp_fanho"]:createCommand("ungroup",user_id, 'VipBronze', amount * 86400)
                    end,
                },
                { -- /rbg de 10 à 20 dias
                name = "VipPrata",
                type = 'OTHERS', -- ITEM/VEHICLE/OTHERS
                spawn = 'VipPrata',
                amount = 1,
                maxAmount = 1,
                rarity = 'EPIC', -- COMUM, SPECIAL, EPIC, LEGENDARY
                func = function(source,user_id, amount)
                    if not GetResourceState('vrp_fanho') == 'started' then return end
                    vRP._addUserGroup(user_id, 'VipPrata')
                    exports["vrp_fanho"]:createCommand("ungroup",user_id, 'VipPrata', amount * 86400)
                end,
               },
               { -- /rbg de 10 à 20 dias
               name = "VipOuro",
               type = 'OTHERS', -- ITEM/VEHICLE/OTHERS
               spawn = 'VipOuro',
               amount = 1,
               maxAmount = 1,
               rarity = 'EPIC', -- COMUM, SPECIAL, EPIC, LEGENDARY
               func = function(source,user_id, amount)
                 if not GetResourceState('vrp_fanho') == 'started' then return end
                 vRP._addUserGroup(user_id, 'VipOuro')
                 exports["vrp_fanho"]:createCommand("ungroup",user_id, 'VipOuro', amount * 86400)
                end,
                },
                { -- /rbg de 10 à 20 dias
              name = "VipPlatina",
              type = 'OTHERS', -- ITEM/VEHICLE/OTHERS
              spawn = 'VipPlatina',
              amount = 1,
              maxAmount = 1,
              rarity = 'EPIC', -- COMUM, SPECIAL, EPIC, LEGENDARY
              func = function(source,user_id, amount)
              if not GetResourceState('vrp_fanho') == 'started' then return end
              vRP._addUserGroup(user_id, 'VipPlatina')
              exports["vrp_fanho"]:createCommand("ungroup",user_id, 'VipPlatina', amount * 86400)
           end,
          },
          }
        },
    },

    store = {
        {
            price = 100,
            type = 'ITEM',  -- ITEM/VEHICLE
            rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
            spawn = 'celular',
            amount = 5,
            name = "celular"
        },

        {
            price = 100,
            type = 'ITEM',  -- ITEM/VEHICLE
            rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
            spawn = 'radio',
            amount = 5,
            name = "Radio"
        },
        


        {
            price = 1900,
            type = 'VEHICLE',  -- ITEM/VEHICLE
            rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
            spawn = 'weevil',
            amount = 5,
            name = "weevil",
            func = function(source,user_id, amount)
                print('testando')
            end,
        },

        {
            price = 1000,
            type = 'VEHICLE',  -- ITEM/VEHICLE
            rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
            spawn = 'bikelete',
            amount = 5,
            name = "bikelete",
            func = function(source,user_id, amount)
                print('testando')
            end,
        },


        {
            price = 1000,
            type = 'VEHICLE',  -- ITEM/VEHICLE
            rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
            spawn = 'rmodbacalar',
            amount = 5,
            name = "rmodbacalar",
            func = function(source,user_id, amount)
                print('testando')
            end,
        },

        {
            price = 1000,
            type = 'VEHICLE',  -- ITEM/VEHICLE
            rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
            spawn = 'fordfocus',
            amount = 5,
            name = "fordfocus",
            func = function(source,user_id, amount)
                print('testando')
            end,
        },


        {
            price = 1200,
            type = 'VEHICLE',  -- ITEM/VEHICLE
            rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
            spawn = 'fox',
            amount = 5,
            name = "fox",
            func = function(source,user_id, amount)
                print('testando')
            end,
        },

        {
            price = 1200,
            type = 'VEHICLE',  -- ITEM/VEHICLE
            rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
            spawn = 'cb500x',
            amount = 5,
            name = "cb500x",
            func = function(source,user_id, amount)
                print('testando')
            end,
        },

        {
            price = 1200,
            type = 'VEHICLE',  -- ITEM/VEHICLE
            rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
            spawn = 'bora',
            amount = 5,
            name = "bora",
            func = function(source,user_id, amount)
                print('testando')
            end,
        },

        {
            price = 1200,
            type = 'VEHICLE',  -- ITEM/VEHICLE
            rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
            spawn = 'ftoro',
            amount = 5,
            name = "ftoro",
            func = function(source,user_id, amount)
                print('testando')
            end,
        },


        {
            price = 1000,
            type = 'VEHICLE',  -- ITEM/VEHICLE
            rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
            spawn = 'CeltaCH',
            amount = 5,
            name = "CeltaCH",
            func = function(source,user_id, amount)
                print('testando')
            end,
        },

        {
            price = 1500,
            type = 'VEHICLE',  -- ITEM/VEHICLE
            rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
            spawn = 'pcx',
            amount = 5,
            name = "pcx",
            func = function(source,user_id, amount)
                print('testando')
            end,
        },

        {
            price = 1300,
            type = 'VEHICLE',  -- ITEM/VEHICLE
            rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
            spawn = 'golg2',
            amount = 5,
            name = "golg2",
            func = function(source,user_id, amount)
                print('testando')
            end,
        },

        {
            price = 300,
            type = 'VEHICLE',  -- ITEM/VEHICLE
            rarity = 'LEGENDARY', -- COMUM, SPECIAL, EPIC, LEGENDARY
            spawn = 't20',
            amount = 5,
            name = "t20",
        },


    }
}