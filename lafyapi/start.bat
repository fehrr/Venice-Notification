@echo off
:start
echo Iniciando o script Node.js
start cmd /c "node ."
echo Script Node.js iniciado. Aguardando 7 horas para reiniciar...
timeout /t 25200 >nul
taskkill /im node.exe /f
goto start
