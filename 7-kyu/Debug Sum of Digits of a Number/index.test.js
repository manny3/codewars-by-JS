const getSumOfDigits = require('.')

test('Test 1', () => {
  expect(getSumOfDigits(123)).toEqual(6)
})

test('Test 2', () => {
  expect(getSumOfDigits(223)).toEqual(7)
})

