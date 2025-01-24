cfg = {}

-- # Auth
cfg.clientID = ""
cfg.licenseKey = ""

-- # Comando para abrir o tablet
cfg.commandName = "fichahp"
cfg.permissao = "perm.user"

-- # Usar animação (pegar tablet nas mãos ao abrir) ?
cfg.useAnim = true

-- # Aqui é o seu Webhook para as imagens serem salvas
cfg.imageUploadWebhook = ""

-- # Imagem padrão que vai aparecer se o usuário ainda não tiver foto na ficha do hospital
cfg.defaultUserImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg&usqp=CAU"

-- # Texto de ajuda na camera
-- # (As dicas aparecem na tela porém não saem na foto)
cfg.useCameraTips = true
cfg.cameraTips = "~y~Clique esquerdo:~w~ tirar foto\n~y~Clique direito:~w~ cancelar\n~y~Scroll:~w~ zoom"

cfg.getMedical = function()
    local medicos = vRP.getUsersByPermission("perm.user")
    return #medicos
end

-- # Configuração da recepção
cfg.atendimentos = {
    coords = {-438.89,-325.0,34.91},
    text = {
        use = true,
        string = "Pressione ~y~[E] ~w~para solicitar atendimento!",
        positionsXY = {0.265,0.945}
    },
    marker = {
        use = true,
        marker_id = 20,
        marker_rgb_color = {252,186,3},
        marker_height_adjustment = -0.6,
        marker_size = 0.3
    },
    soundCoords = {-438.89,-325.0,34.91},
    soundMaxDist = 13
}

-- # Configuração do gesso
cfg.gesso = {
    coords = {-446.88,-291.08,35.81},
    radius = 10,
    carryEvent = function(source,target_source) 
        TriggerClientEvent('Millennium:carregarFrente',target_source,source)
    end,
    preset = {
        [1885233650] = {                                      
            [5] = { -- mochila
                part = "left-arm",
                part_data = {100,0}
            }, 
            [6] = { -- sapato
                part = "left-leg",
                part_data = {102,0}
            },
            [6] = { -- sapato
                part = "right-leg",
                part_data = {102,0}
            },  
            [7] = { -- acessorios
                part = "head",
                part_data = {152,0}
            },  
            [8] = { -- blusa
                part = "right-arm",
                part_data = {184,0}
            } 
        },
        [-1667301416] = {
            [5] = { -- mochila
                part = "left-arm",
                part_data = {100,0}
            }, 
            [6] = { -- sapato
                part = "left-leg",
                part_data = {102,0}
            },
            [6] = { -- sapato
                part = "right-leg",
                part_data = {102,0}
            },  
            [7] = { -- acessorios
                part = "head",
                part_data = {152,0}
            },  
            [8] = { -- blusa
                part = "right-arm",
                part_data = {184,0}
            } 
        }
    }
}

-- # Seu evento de notificação
-- # Este metódo é executado via server e é lhe passado a source de quem será notificado.
cfg.notify = function(source,user_id,css,msg) 
    TriggerClientEvent("Notify",source,css,msg,5000)
end

-- # Configuração de mensagens
cfg.msgs = {
    atendimento_error_1 = {
        css = "negado",
        msg = "Você já possuí um atendimento pendente."
    },
    atendimento_registrado = {
        css = "sucesso",
        msg = "Atendimento registrado! Aguarde um médico lhe chamar!"
    },
    ja_atendido = {
        css = "aviso",
        msg = "Esta ocorrência já foi aceita por outra pessoa."
    },
    nao_encontrado = {
        css = "negado",
        msg = "Essa pessoa não se encontra na cidade"
    },
    gesso_error_1 = {
        css = "negado",
        msg = "Essa pessoa já está engessada."
    },
    gesso_error_2 = {
        css = "negado",
        msg = "Essa pessoa não está engessada."
    },
    gesso_error_3 = {
        css = "aviso",
        msg = "Você e o paciente devem estar na área de aplicação de gesso!"
    },
    gesso_success_1 = {
        css = "sucesso",
        msg = "Paciente engessado!"
    },
    gesso_success_1_1 = {
        css = "importante",
        msg = "Você foi engessado!"
    },
    gesso_success_2 = {
        css = "sucesso",
        msg = "Paciente desengessado!"
    },
    gesso_success_2_1 = {
        css = "importante",
        msg = "Você foi desengessado!"
    },
    chamar_error = {
        css = "negado",
        msg = "Aguarde para chamar este paciente novamente."
    },
    dirija_se = {
        css = "importante",
        msg = "Dirija-se à emergência!"
    }
}

-- # Seu evento de carregar a pessoa
cfg.holdEvent = function(source,target_source)
    TriggerClientEvent('Millennium:carregarFrente',target_source,source)
end

return cfg

