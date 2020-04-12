const isPrime = require('.')

test('Test 1', () => {
  expect(isPrime(2)).toEqual(true)
})

test('Test 2', () => {
  expect(isPrime(0)).toEqual(false)
})

test('Test 3', () => {
  expect(isPrime(73)).toEqual(false)
})
