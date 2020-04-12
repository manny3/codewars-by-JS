const solution = require('.')

test('Test 1', () => {
  expect(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])).toEqual("-6,-3-1,3-5,7-11,14,15,17-20")
})

test('Test 2', () => {
  expect(solution([-3,-2,-1,2,10,15,16,18,19,20])).toEqual('-3--1,2,10,15,16,18-20')
})

// test('Test 3', () => {
//   expect(solution('big',['gig', 'dib', 'bid', 'biig'])).toEqual([])
// })
