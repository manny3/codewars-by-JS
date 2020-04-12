const anagrams = require('.')

test('Test 1', () => {
  expect(anagrams('ab',['aa', 'bb', 'cc', 'ac', 'bc', 'cd'])).toEqual(['ab', 'ba'])
})

test('Test 2', () => {
  expect(anagrams('racer',['abcd', 'abbba', 'baaab', 'abbab', 'abbaa', 'babaa'])).toEqual(['carer', 'arcre', 'carre'])
})

test('Test 3', () => {
  expect(anagrams('big',['gig', 'dib', 'bid', 'biig'])).toEqual([])
})
