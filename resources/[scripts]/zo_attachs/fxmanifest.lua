shared_script "@vrp/lib/lib.lua" --Para remover esta pendencia de todos scripts, execute no console o comando "uninstall"

fx_version 'adamant'
game 'gta5'

lua54 'yes'

ui_page 'nui/index.html'

client_scripts {
	"@vrp/lib/utils.lua",
	"client/*.lua",
	"cfg/attachsGun.lua",
	"cfg/config.lua"
}

server_scripts {
	"@vrp/lib/utils.lua",
	"server/*.lua",
	"cfg/functions.lua",
	"cfg/config.lua"
}

files {
	"nui/*",
	"nui/assets/imgs/*",
}    