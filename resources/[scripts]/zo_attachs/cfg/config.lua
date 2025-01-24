config = {
  salvarAttachsDb = true, -- SALVAR OS ATTACHS APLICADOS NO BANCO DE DADOS
  perderAttachsAoMorrer = false,
}

blips = {
  --{ x = 461.41, y = -983.05, z = 30.69, perms = { "admin.perm" }, pagarPelaModificacao = false, usarItens = false }
}

comandos = {
  { comando = "ati", perms = { "admin.permissao", "perm.vips", "perm.user"} },
  -- { comando = "ats", perms = { }, pagarPelaModificacao = true, usarItens = true },
  -- { comando = "ats", perms = { }, pagarPelaModificacao = true, usarItens = false }
}

priceAttachs = {
  mira = 0,
  cano = 0,
  grip = 0,
  lanterna = 0,
  carregador = 0,
  municao = 0,
  textura = 0,
  textura_slide = 0,
  cor = 0,
}

attachsDefault = {
  ["mira"] = { text = "MIRA", price = 1000, imgCategoria = "https://i.postimg.cc/sxfrRrN9/acog.png" },
  ["cano"] = { text = "CANO", price = 2000, imgCategoria = "https://i.postimg.cc/yYWMhv4d/supressor.png" },
  ["grip"] = { text = "GRIP", price = 3000, imgCategoria = "https://i.postimg.cc/28KfggFh/grip.png" },
  ["lanterna"] = { text = "LANTERNA", price = 4000, imgCategoria = "https://i.postimg.cc/tTp0hbpQ/lanterna.png" },
  ["carregador"] = { text = "CARREGADOR", price = 5000, imgCategoria = "https://i.postimg.cc/G3zRx44M/mag.png" },
  --["municao"] = { text = "MUNIÇÃO", price = 6000, imgCategoria = "https://imgur.com/dfamhES.png" },
  ["cor"] = { text = "COR DA ARMA", price = 1000, imgCategoria = "https://i.postimg.cc/fWH401Pp/lata.png" },
  ["textura"] = { text = "TEXTURA DA ARMA", price = 3500, imgCategoria = "https://i.postimg.cc/fWH401Pp/lata.png" },
  ["textura_slide"] = { text = "TEXTURA DO SLIDE", price = 2000, imgCategoria = "https://i.postimg.cc/fWH401Pp/lata.png" },
}

attachsItens = {
  mira = "attmira",
  cano = "attcano",
  grip = "attgrip",
  lanterna = "attlanterna",
  carregador = "attcarregador",
  textura = "atttextura",
  textura_slide = "atttexturaslide",
}


