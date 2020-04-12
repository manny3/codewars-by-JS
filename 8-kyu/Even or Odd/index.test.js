const even_or_odd = require('.')

test('Test 1', () => {
  expect(even_or_odd(17)).toEqual('Odd')
})

test('Test 2', () => {
  expect(even_or_odd(78)).toEqual('Even')
})

test('Test 3', () => {
  expect(even_or_odd(-4)).toEqual('Even')
})
