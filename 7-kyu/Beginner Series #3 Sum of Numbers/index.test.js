const GetSum = require('.')

test('Test 1', () => {
  expect(GetSum(5,-1)).toEqual(14)
})

test('Test 2', () => {
  expect(GetSum(-50,0)).toEqual(-1275)
})

test('Test 3', () => {
  expect(GetSum(0,0)).toEqual(0)
})
