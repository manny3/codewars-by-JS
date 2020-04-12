/*
  Title:
    Even or Odd

  Description:
  Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

  Examples:
    Example parties:
    Input 0:
    "1"

    Output 0:
    "Odd"

    Input 1:
    "-4"

    Output 1:
    "Even"
*/

// Long Solution
/*
function even_or_odd(number) {
  if (number%2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
*/

// Short Solution
const even_or_odd = (num) => {
  return num % 2 ? "Odd" : "Even"
}
// Function Export
module.exports = even_or_odd
