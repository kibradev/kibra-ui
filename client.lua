exports("Show", function(control, text)
    SendNUIMessage({
        type = "Show",
        text = text,
        control = control
    })
end)

exports("Hide", function()
    SendNUIMessage({type = "Hide"})
end)

RegisterCommand('setb', function()
    SetNuiFocus(true, true)
end)