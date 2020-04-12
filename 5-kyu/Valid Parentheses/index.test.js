const validParentheses = require('.')

test('Test 1', () => {
  expect(validParentheses('()()((()')).toEqual(false)
})

test('Test 2', () => {
  expect(validParentheses('()()')).toEqual(true)
})

test('Test 3', () => {
  expect(validParentheses('()))')).toEqual(false)
})
