fx_version "bodacious"
game "gta5"
ui_page "html/index.html"

shared_scripts {
    "config.lua",
}

client_scripts {
	"@vrp/lib/utils.lua",
	"client/*"
}

server_scripts {
	"@vrp/lib/utils.lua",
	"server/*"
}

files {
	"html/*",
	"html/**/*",
}

dependencies {
    'vrp'
}