// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('CUM')

const AllBlocks = ["vs_clockwork:balloon_casing","vs_clockwork:combustion_engine","vs_clockwork:propellor_bearing","vs_clockwork:flap_bearing","vs_clockwork:afterblazer","vs_clockwork:intake","vs_clockwork:ballooner","vs_clockwork:redstone_resistor","vs_clockwork:reactionwheel","vs_clockwork:command_seat","vs_clockwork:physics_infuser","vs_clockwork:wing","vs_clockwork:flap"]



onEvent('recipes', event => {
  event.remove({output: 'vs_eureka:balloon'})
})

onEvent('recipes', event => {
//  event.remove({output: 'peripherals:trading_interface'})

/*event.shaped("peripherals:trading_interface",[
       "###",
     "CBC",
       "###"
    ],
    {
        "#": {
            "item": "minecraft:emerald"
        },
        "C": {
            "item": "advancedperipherals:peripheral_casing"
        },
        "B": {
            "item": "minecraft:netherite_block"
        }
    })
    */

event.remove({output: 'mekanism:digital_miner'})
event.remove({output: 'mekanism:meka_bodyarmor'})
event.remove({output: 'mekanism:meka_helmet'})
event.remove({output: 'mekanism:meka_pants'})
event.remove({output: 'mekanism:meka_boots'})
event.recipes.create.mixing(Fluid.of('vs_clockwork:vanilla_frosting',400),[
Fluid.of('milk',250),
  '2x minecraft:coal',
'3x minecraft:sugar'
]).heated()

event.recipes.create.mixing(Fluid.of('vs_clockwork:vanilla_frosting',1000),[
'minecraft:milk_bucket',
'5x minecraft:sugar'
])



event.recipes.create.mixing(Fluid.of('vs_clockwork:strawberry_frosting',750),[
Fluid.of('vs_clockwork:vanilla_frosting',250),
  '2x minecraft:nether_wart',
'2x minecraft:sugar'
]).superheated()


event.recipes.create.mixing(Fluid.of('vs_clockwork:chocolate_frosting',500),[
Fluid.of('milk',500),
'4x minecraft:apple',
'4x minecraft:sugar'
])

event.recipes.create.mixing(Fluid.of('vs_clockwork:chocolate_frosting',500),[
Fluid.of('milk',500),
'2x quark:charcoal_block',
'4x minecraft:sugar'
])


event.shaped("vs_clockwork:afterblazer",[
        "#C#",
        "CBC",
        "#C#"
    ],
    {
        "#": {
            "item": "create:iron_sheet"
        },
        "C": {
            "item": "minecraft:chain"
        },
        "B": {
            "item": "create:blaze_burner"
        }
    })


event.shaped("4x vs_clockwork:balloon_casing",[
        " / ",
        "/W/",
        " / "
    ],
     {
        "/": {
            "item": "minecraft:stick"
        },
        "W": {
            "item": "minecraft:white_wool"
        }
    },)




event.shaped("vs_clockwork:pastrymaker",[
        "ABA",
        "CNC",
        "PLP"
    ],
    {
        "C": {
            "item": "create:copper_casing"
        },
        "B": {
            "item": "create:belt_connector"
        },
        "A": {
            "item": "create:copper_backtank"
        },
"N": {
            "item": "minecraft:netherite_ingot"
        },
"P": {
            "item": "create:potato_cannon"
        },
"L": {
            "item": "minecraft:leather"
        }
    })

event.shaped("vs_clockwork:combustion_engine",[
        "ASA",
        "ABA",
        "ACA"
    ],
    {
"A": {
"item": "create:steam_engine"
},
        "C": {
            "item": "create:copper_casing"
        },
        "B": {
            "item": "create:fluid_tank"
        },
        "S": {
            "item": "create:shaft"
        }
    })

event.shaped("vs_clockwork:command_seat",[
        "   ",
        "ABA",
        "CSC"
    ],
    {
"A": {
"item": "create:linked_controller"
},
        "C": {
            "item": "create:brass_casing"
        },
        "B": {
            "item": "create:lime_seat"
        },
        "S": {
            "item": "create:gearbox"
        }
    })
event.shaped("vs_clockwork:flap_bearing",[
        " F ",
        " B ",
        " S "
    ],
    {
"F": {
"item": "vs_clockwork:flap"
},
        "B": {
            "item": "create:gearshift"
        },
        "S": {
         
"item": "create:shaft"
        }
    })
event.shaped("vs_clockwork:reactionwheel",[
"ccc",
        "cCc",
        "ccc"
    ],
{
        "c": {
            "item": "minecraft:copper_ingot"
        },
        "C": {
            "item": "create:andesite_alloy"
        }
    })

event.shaped("vs_clockwork:physics_infuser",[
"cgc",
        "gAg",
        "cgc"
    ],
{
        "c": {
            "item": "create:copper_casing"
        },
        "A": {
            "item": "minecraft:amethyst_block"
        },
"g": {
            "item": "minecraft:glass_pane"
        }
    })

event.shaped("vs_clockwork:ballooner",[
"c c",
        "cAc",
        "cgc"
    ],
{
        "c": {
            "item": "minecraft:chain"
        },
        "A": {
            "item": "minecraft:netherrack"
        },
"g": {
            "item": "create:copper_casing"
        }
    })

event.shaped("vs_clockwork:redstone_resistor",[
        " F ",
        " B ",
        " S "
    ],
    {
"F": {
"item": "create:andesite_casing"
},
        "B": {
            "item": "create:cogwheel"
        },
        "S": {
         
"item": "minecraft:comparator"
        }
    })

event.shapeless("vs_clockwork:bluuguu",[
        {
            "item": "minecraft:light_blue_dye"
        },
        {
            "item": "create:dough"
        }
    ]    )

event.shapeless("vs_clockwork:propellor_bearing",[
        {
            "item": "vs_clockwork:phys_bearing"
        }
    ]    )

event.shapeless("vs_clockwork:phys_bearing",[
        {
            "item": "vs_clockwork:propellor_bearing"
        }
    ]    )

event.shapeless("create:raw_zinc",[
        {
            "item": "create:zinc_nugget"
        },

        {
            "item": "create:zinc_nugget"
        },

        {
            "item": "create:zinc_nugget"
        },

        {
            "item": "create:zinc_nugget"
        },

        {
            "item": "create:zinc_nugget"
        },

        {
            "item": "create:zinc_nugget"
        },

        {
            "item": "create:zinc_nugget"
        },

        {
            "item": "create:zinc_nugget"
        },

        {
            "item": "create:zinc_nugget"
        }
    ]    )

event.shapeless("vs_clockwork:bluperglue",[
        {
            "item": "vs_clockwork:bluuguu"
        },
        {
            "item": "create:iron_sheet"
        },
        {
            "item": "minecraft:iron_nugget"
        },
        {
            "item": "vs_clockwork:bluuguu"
        }
    ])    
event.shapeless("vs_clockwork:wing",[
        {
            "item": "vs_clockwork:flap"
        }
    ]    )
event.shapeless("vs_clockwork:flap",[
        {
            "item": "vs_clockwork:wing"
        }
    ]    )
event.shapeless("4x vs_clockwork:wing",[
        {
            "item": "create:white_sail"
        },
        {
            "item": "create:copper_casing"
        }
    ]    )
event.shapeless("vs_clockwork:propellor_bearing",[
        {
            "item": "create:mechanical_bearing"
        },
        {
            "item": "minecraft:iron_block"
        }
    ]    )
})
