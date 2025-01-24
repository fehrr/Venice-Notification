fx_version 'adamant'
game 'gta5'
author 'codem'
description 'codem'


client_scripts {
    'config.lua',
    'client.lua',

}
server_scripts {
    'server.lua',
}

ui_page 'html/index.html'
files {
    'html/index.html',
    'html/script.js',
    'html/style.css',
    'html/*.mp3',

    'html/img/*.png',
}

export "Notify"



shared_script 'config.lua'


lua54 'yes'

escrow_ignore {
	'config.lua',
	
}