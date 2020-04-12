const authenticate = require('.')

test('Test 1', () => {
  expect(authenticate('Santa Claus', 'Ho Ho Ho!')).toEqual(true)
})

test('Test 2', () => {
  expect(authenticate('Santa Claus', 'Ho Ho!')).toEqual(false)
})

test('Test 3', () => {
  expect(authenticate('Easter Bunny', 'Ho Ho Ho!')).toEqual(false)
})
