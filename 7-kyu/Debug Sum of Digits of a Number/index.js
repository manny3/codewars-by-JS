/*
  Title:
    Debug Sum of Digits of a Number
    數字分開加總
  Description:

  Examples:
    Example parties:
    123  => 6
    223  => 7
*/

// Best Solution
/*
function getSumOfDigits(integer) {
  var sum = null;
  var digits =  Math.floor(integer).toString();
  for(let ix = 0; ix < digits.length; ix++) {
    let num = digits[ix]*1
    sum += num
  }
  return sum;
}
*/

// Short Solution
function getSumOfDigits(integer) {
  
  return Array.from(String(integer), Number).reduce((a,b) => a + b)
 }
// Function Export
module.exports = getSumOfDigits(integer)

