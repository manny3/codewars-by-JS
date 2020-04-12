/*
  Title:
    Is a number prime?

  Description:
    Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.

    Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

    判斷質數
  Examples:
    Example parties:
    Input 0:
    "1 beer"

    Output 0:
    "1 glass of water"

    Input 1:
    "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"

    Output 1:
    "10 glasses of water"
*/

// Best Solution
/*
function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
*/

// Short Solution
const isPrime = (num) => {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// Function Export
module.exports = isPrime
