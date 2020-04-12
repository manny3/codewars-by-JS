const hydrate = require('.')

test('Test 1', () => {
  expect(hydrate('1 beer')).toEqual('1 glass of water')
})

test('Test 2', () => {
  expect(hydrate('2 glasses of wine and 1 shot')).toEqual('3 glasses of water')
})

test('Test 3', () => {
  expect(hydrate('1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer')).toEqual('10 glasses of water')
})
