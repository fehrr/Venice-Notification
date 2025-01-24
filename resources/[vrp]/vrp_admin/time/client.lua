CreateThread(function()
    while true do
        SetBlackout(GlobalState["Blackout"])
		SetWeatherTypeNow(GlobalState["Weather"])
		SetWeatherTypePersist(GlobalState["Weather"])
		SetWeatherTypeNowPersist(GlobalState["Weather"])
		NetworkOverrideClockTime(GlobalState["Hours"],GlobalState["Minutes"],00)
        Wait(1000)
    end
end)