// priority: 0


onEvent('recipes', event => {
 
    event.recipes.createSequencedAssembly([
        Item.of('alloyedguns:basic_gun_kit').withChance(99),
        Item.of('minecraft:coal_block').withChance(0.5),
        Item.of("6x minecraft:coal")
    ], '#minecraft:planks', [ // start with planks
        event.recipes.createDeploying(
            'kubejs:incomplete_basic_gun_kit',
            ['kubejs:incomplete_basic_gun_kit', 'minecraft:coal']
        ),
        event.recipes.createDeploying(
            'kubejs:incomplete_basic_gun_kit',
            ['kubejs:incomplete_basic_gun_kit', 'minecraft:iron_nugget']
        ),
        event.recipes.createFilling('kubejs:incomplete_basic_gun_kit', [
            'kubejs:incomplete_basic_gun_kit',
            Fluid.of('minecraft:lava', 100)
        ])
    ]).transitionalItem('kubejs:incomplete_basic_gun_kit').loops(9)
    event.recipes.createSequencedAssembly([
        Item.of('alloyedguns:advanced_gun_kit').withChance(66),
        Item.of('4x minecraft:gold_ingot').withChance(33),
    ], 'alloyedguns:basic_gun_kit', [ // start with planks
        event.recipes.createFilling('kubejs:incomplete_basic_gun_kit', [
            'kubejs:incomplete_basic_gun_kit',
            Fluid.of('tconstruct:molten_gold', 90)
        ])
    ]).transitionalItem('kubejs:incomplete_advanced_gun_kit').loops(8)
    event.recipes.createSequencedAssembly([
        Item.of('alloyedguns:complex_gun_kit').withChance(33),
        Item.of('2x minecraft:gold_block').withChance(33),
        Item.of('alloyedguns:advanced_gun_kit').withChance(16.5),
        Item.of('alloyedguns:basic_gun_kit').withChance(16.5)
    ], 'create:precision_mechanism', [
        event.recipes.createDeploying(
            'kubejs:incomplete_complex_gun_kit',
            ['kubejs:incomplete_complex_gun_kit', 'alloyedguns:basic_gun_kit']
        ),
        event.recipes.createFilling('kubejs:incomplete_basic_gun_kit', [
            'kubejs:incomplete_basic_gun_kit',
            Fluid.of('tconstruct:molten_gold', 810)
        ]),
        event.recipes.createDeploying(
            'kubejs:incomplete_complex_gun_kit',
            ['kubejs:incomplete_complex_gun_kit', 'alloyedguns:advanced_gun_kit']
        ),
    ]).transitionalItem('kubejs:incomplete_complex_gun_kit').loops(2)
})
