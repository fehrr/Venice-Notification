
shared_script "@vrp/lib/lib.lua"
fx_version 'bodacious'
game 'gta5'
ui_page('web/index.html')
client_scripts {
	"@vrp/lib/utils.lua",
	"cfg.lua",
	"client.lua",
}
server_scripts {
	"@vrp/lib/utils.lua",
	"cfg.lua",
	"server.lua",
}
files ({
    'web/*',
    'web/**/*'
})