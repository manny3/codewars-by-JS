const rot13 = require('.')

test('Test 1', () => {
  expect(rot13('EBG13 rknzcyr.')).toEqual('ROT13 example.')
})

test('Test 2', () => {
  expect(rot13('Guvf vf npghnyyl gur svefg xngn V rire znqr. Gunaxf sbe svavfuvat vg! :)')).toEqual('This is actually the first kata I ever made. Thanks for finishing it! :)')
})

test('Test 3', () => {
  expect(rot13('@[`{')).toEqual('@[`{')
})
