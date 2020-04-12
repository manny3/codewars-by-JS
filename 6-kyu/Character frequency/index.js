/*
  Title:
    Character frequency

  Description:
    Write a function that takes a piece of text in the form of a string and returns the letter frequency count for the text. This count excludes numbers, spaces and all punctuation marks. Upper and lower case versions of a character are equivalent and the result should all be in lowercase.

    The function should return a list of tuples (in Python and Haskell) or arrays (in other languages) sorted by the most frequent letters first. The Rust implementation should return an ordered BTreeMap. Letters with the same frequency are ordered alphabetically. 

    將字串統計個字母為多少

  Examples:
    Example parties:
    Input 0:
    'aaAabb dddDD hhcc'

    Output 0:
    [['d',5], ['a',4], ['b',2], ['c',2], ['h',2]]

    Input 1:
    'wklv lv d vhfuhw phvvdjh'

    Output 1:
    [['v', 5], ['h', 4], ['d', 2], ['l', 2], ['w', 2], ['f', 1], ['j', 1], ['k', 1], ['p', 1], ['u', 1]]
*/

// Best Solution
/*
function letterFrequency(text){
  return (text.toLowerCase()
              .replace(/[^a-z]/g,"")
              .split("")
              .sort()
              .join("")
              .match(/(\w)\1+|(\w)/g) || [])
              .map(function(v){ return [v[0], v.length]; })
              .sort(function(a,b){ 
                  if (a[1] === b[1]) return (a[0].charCodeAt(0) - b[0].charCodeAt(0))
                  else return b[1] - a[1]
              });
}
*/

// Short Solution
const letterFrequency = (text) => {
  let text = text.toLowerCase().replace(/[^a-z]/gi,'');

  let map = {};
  let array = text.split('');
  array.forEach((val,index) => {
    if(!map[val]){
      map[val] = 0;
    }
    map[val] += 1;
  });
  return Object.entries(map).filter((el)=>el[0] !== ' ').sort((a,b) => b[1]-a[1] || a[0].localeCompare(b[0]))
}
// Function Export
module.exports = letterFrequency

