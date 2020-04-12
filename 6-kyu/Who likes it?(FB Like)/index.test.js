const likes = require('.')

test('Test 1', () => {
  expect(likes([])).toEqual('no one likes this')
})

test('Test 2', () => {
  expect(likes(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this')
})

test('Test 3', () => {
  expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual('Alex, Jacob and 2 others like this')
})
