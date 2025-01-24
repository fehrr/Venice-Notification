elevatorConfig = {}

elevatorConfig.elevators = {
    locs = {
        { coords = vec3(-418.93,-344.69,24.23),  perm = nil, locais = "Hospital" },
        { coords = vec3(-435.99,-359.59,34.95), perm = nil, locais = "Hospital" },
        { coords = vec3(-493.39,-326.94,42.31),  perm = nil, locais = "Hospital" },
        { coords = vec3(-493.51,-326.95,69.51), perm = nil, locais = "Hospital" },
        { coords = vec3(-459.58,-338.49,91.01), perm = nil, locais = "Hospital" },
        { coords = vec3(-452.28,-288.56,34.95), perm = nil, locais = "Hospital" },
        { coords = vec3(-452.28,-288.38,-130.84), perm = nil, locais = "Hospital" },
        --
        { coords = vec3(-68.54,-800.67,44.23),  perm = nil, locais = "HELIPONTO" },
        { coords = vec3(-76.54,-827.22,326.08),   perm = nil, locais = "HELIPONTO" },
        --
        { coords = vec3(380.44, -15.17, 83.0),     perm = nil, locais = "BRATVA" },
        { coords = vec3(414.95, -15.33, 99.65),    perm = nil, locais = "BRATVA" },
        --
        { coords = vec3(-304.83,-721.06,28.02),     perm = nil, locais = "COBERTURA" },
        { coords = vec3(-288.51,-722.33,125.46),    perm = nil, locais = "COBERTURA" },
         --
        { coords = vec3(-587.19,-911.49,23.88),     perm = nil, locais = "JORNAL" },
        { coords = vec3(-577.45,-939.04,36.83),    perm = nil, locais = "JORNAL" },
         --
        { coords = vec3(-2276.29,346.78,174.6),     perm = nil, locais = "thunder" },
        { coords = vec3(-2309.84,352.71,178.57),    perm = nil, locais = "thunder" },
        { coords = vec3(-2290.69,266.01,164.47),    perm = nil, locais = "thunder" },
        { coords = vec3(-2279.92,345.24,174.6),    perm = nil, locais = "thunder" },
         --
        { coords = vec3(1006.17,-113.93,73.95),     perm = nil, locais = "MOTOCLUB" },
        { coords = vec3(1.68,-701.63,16.13),    perm = nil, locais = "MOTOCLUB" },
                 --
        { coords = vec3(-320.5,210.51,87.92),     perm = nil, locais = "LUXURY" },
        { coords = vec3(-304.35,192.8,144.37),    perm = nil, locais = "LUXURY" },
    },

    andares = {
        ["Hospital"] = {
            { coords = vec3(-418.93,-344.69,24.23),  h = 104.89, botao = 'G' },
            { coords = vec3(-435.99,-359.59,34.95), h = 107.72, botao = '1A' },
            { coords = vec3(-493.39,-326.94,42.31),  h = 104.89, botao = '2A' },
            { coords = vec3(-493.51,-326.95,69.51), h = 107.72, botao = '3A' },
            { coords = vec3(-459.58,-338.49,91.01), h = 107.72, botao = 'H' },
            { coords = vec3(-452.28,-288.56,34.95), h = 107.72, botao = '1B' },
            { coords = vec3(-452.28,-288.38,-130.84), h = 107.72, botao = '0' },
        },
        ['HELIPONTO'] = {
            { coords = vec3(-68.54,-800.67,44.23), h = 116.23, botao = 'T' },
            { coords = vec3(-76.54,-827.22,326.08),  h = 209.77, botao = 'H' }
        },
        ['BRATVA'] = {
            { coords = vec3(380.44, -15.17, 83.0), h = 34.02, botao = '-1' },
            { coords = vec3(414.95, -15.33, 99.65), h = 243.78, botao = 'T' }
        },
        ['COBERTURA'] = {
            { coords = vec3(-304.83,-721.06,28.02), h = 34.02, botao = '-1' },
            { coords = vec3(-288.51,-722.33,125.46), h = 243.78, botao = 'T' }
        },
        ['JORNAL'] = {
            { coords = vec3(-587.19,-911.49,23.88), h = 34.02, botao = '-1' },
            { coords = vec3(-577.45,-939.04,36.83), h = 243.78, botao = 'T' }
        },
        ['thunder'] = {
            { coords = vec3(-2276.29,346.78,174.6), h = 34.02, botao = '1A' },
            { coords = vec3(-2309.84,352.71,178.57), h = 243.78, botao = '2A' },
            { coords = vec3(-2290.69,266.01,164.47), h = 243.78, botao = 'G' },
            { coords = vec3(-2279.92,345.24,174.6), h = 243.78, botao = '1B' }
        },
        ['MOTOCLUB'] = {
            { coords = vec3(1006.17,-113.93,73.95), h = 34.02, botao = 'FAC' },
            { coords = vec3(-303.05,192.12,144.42), h = 243.78, botao = 'PORÃO' }
        },
        ['LUXURY'] = {
            { coords = vec3(-320.5,210.51,87.92), h = 30.02, botao = '1A' },
            { coords = vec3(-304.35,192.8,144.37), h = 40.02, botao = '2A' }
        },
    }
}
