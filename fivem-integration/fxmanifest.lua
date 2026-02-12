fx_version 'cerulean'
game 'gta5'

author 'FiveM Icon Generator'
description 'Browser-based AI icon system for FiveM phone scripts'
version '3.0.0'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/app.js',
    'assets/icons/**/*.svg'
}

client_scripts {
    'config.lua',
    'client.lua'
}

lua54 'yes'
use_fxv2_oal 'yes'
