fx_version 'adamant'
game 'gta5'

ui_page "web-side/index.html"
loadscreen "loading/darkside.html"

server_scripts {
	"lib/utils.lua",
	"base.lua",
	"server-side/*",
	"modules/*"

}

client_scripts {
	"lib/utils.lua",
	"client-side/*"
}

files {
	"lib/Tunnel.lua",
	"lib/Proxy.lua",
	"lib/Tools.lua",
	"web-side/*",
	"loading/*",
	"loading/svgs/*.png",
	"loading/svgs/*.svg",
}

loadscreen "loading/index.html"              