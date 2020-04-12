const sum_pairs = require('.')

test('Test 1', () => {
  expect(sum_pairs([1, 4, 8, 7, 3, 15],8)).toEqual([1, 7])
})

test('Test 2', () => {
  expect(sum_pairs([10, 5, 2, 3, 7, 5],10)).toEqual([3, 7])
})

test('Test 3', () => {
  expect(sum_pairs([4, -2, 3, 3, 4],8)).toEqual([4, 4])
})
