This is a standalone plugin that does not require any frameworks. You can use the exports or events down below that we provide to you send a notification to a player


-- Usage in a client script
TriggerEvent('codem-notification', text, time, notifytype, options)
or
exports["Venice-Notification"]:Notify(text, time, notifytype, options)


-- Usage in a server script
TriggerClientEvent('codem-notification', source, text, time, notifytype, options)


-- Usage with the options (use the options only when using msg and twt notification types)
exports["Venice-Notification"]:Notify("TEST TEST TEST", 5000, "twt", {
	twtName = "Lucid-Test"
})

exports["Venice-Notification"]:Notify("TEST TEST TEST", 5000, "msg", {
	msgNumber= "512-2432"
})

-- notification types

-check
-info
-ann
-msg
-twt
-call
-venicebank
-bill
-lspd
-save
-ems
-error


