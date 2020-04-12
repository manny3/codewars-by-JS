const domainName = require('.')

test('Test 1', () => {
  expect(domainName('http://google.co.jp')).toEqual('google')
})

test('Test 2', () => {
  expect(domainName('https://hyphen-site.org')).toEqual('hyphen-site')
})

test('Test 3', () => {
  expect(domainName('https://youtube.com')).toEqual('youtube')
})
