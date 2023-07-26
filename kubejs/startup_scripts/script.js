// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {

    event.create('incomplete_basic_gun_kit', 'create:sequenced_assembly').displayName('Incomplete Basic Gun Kit')
    event.create('incomplete_advanced_gun_kit', 'create:sequenced_assembly').displayName('Incomplete Advanced Gun Kit')
    event.create('incomplete_complex_gun_kit', 'create:sequenced_assembly').displayName('Incomplete Complex Gun Kit')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent('item.modification', event => {
  event.modify('minecraft:tnt', item => {
    item.maxStackSize = 1
  })
})