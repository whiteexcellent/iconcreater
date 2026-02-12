Config = {}

-- Default theme (will be populated by the web generator)
Config.DefaultTheme = "default"

-- Available themes matching the web generator
Config.Themes = {
    ["default"] = {
        name = "Default",
        description = "Standard FiveM icons"
    },
    ["kawaii"] = {
        name = "Kawaii",
        description = "Cute pastel style"
    },
    ["drift"] = {
        name = "Drift",
        description = "JDM racing aesthetic"
    },
    ["minimal"] = {
        name = "Minimal",
        description = "Clean flat design"
    },
    ["neon"] = {
        name = "Neon",
        description = "Cyberpunk glow effects"
    },
    ["retro"] = {
        name = "Retro",
        description = "80s vaporwave style"
    }
}

-- Icon configuration (paths will be set by the generator)
Config.Icons = {
    -- Structure: [theme_id] = { [icon_id] = "path/to/icon.svg" }
    ["default"] = {},
    ["kawaii"] = {},
    ["drift"] = {},
    ["minimal"] = {},
    ["neon"] = {},
    ["retro"] = {}
}

-- Phone apps configuration
Config.Apps = {
    { id = "camera", name = "Camera", icon = "camera", default = true },
    { id = "bank", name = "Bank", icon = "bank", default = true },
    { id = "car", name = "Garage", icon = "car", default = true },
    { id = "phone", name = "Phone", icon = "phone", default = true },
    { id = "message", name = "Messages", icon = "message", default = true },
    { id = "map", name = "Maps", icon = "map", default = true },
    { id = "settings", name = "Settings", icon = "settings", default = true },
    { id = "gallery", name = "Gallery", icon = "gallery", default = true },
    { id = "music", name = "Music", icon = "music", default = true },
    { id = "weather", name = "Weather", icon = "weather", default = true },
    { id = "wallet", name = "Wallet", icon = "wallet", default = false },
    { id = "house", name = "Real Estate", icon = "house", default = false },
    { id = "shop", name = "Store", icon = "shop", default = false },
    { id = "police", name = "Police", icon = "police", default = false },
    { id = "hospital", name = "EMS", icon = "hospital", default = false }
}

-- Theme settings
Config.Settings = {
    enableAnimations = true,
    transitionDuration = 300,
    cacheIcons = true
}

-- Debug mode
Config.Debug = false
