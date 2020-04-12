/*
  Title:
    Where my anagrams at?

  Description:
    Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

    找出兩邊字母一模一樣的

  Examples:
    Example parties:
    Input 0:
    'abba', ['aabb', 'abcd', 'bbaa', 'dada']

    Output 0:
    ['aabb', 'bbaa']

    Input 1:
    'laser', ['lazing', 'lazy',  'lacer']

    Output 1:
    []
*/

// Best Solution
/*
String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}
*/

// Short Solution
const anagrams = (word, words) => {
  return words.filter(function(e){
    let ws = e.split("").sort().join();
    let w = word.split("").sort().join();
    return ws===w;
    })
}
// Function Export
module.exports = anagrams
