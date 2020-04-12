/*
  Title:
    Sum of Pairs

  Description:
    Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

    找出第一組符合兩數字總合等於第二參數陣列

  Examples:
    Example parties:
    Input 0:
    [11, 3, 7, 5],         10

    Output 0:
    [3, 7]

    Input 1:
    [4, 3, 2, 3, 4],         6

    Output 1:
    ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]
*/

// Best Solution
/*
function sum_pairs(ints, s) {
  let seen = new Set();
  for (let i of ints) {
    if (seen.has(s - i)) return [s - i, i];
    seen.add(i);
  }
}

var sum_pairs=function(ints, s){
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
  }
}

let sum_pairs= (a, s) => {
  let mem = {};
  for(x of a) 
    if(mem[s - x])
      return [s - x, x];
    else 
      mem[x] = 1;
}
*/

// Short Solution
const sum_pairs = (ints, s) => {
  let intSet = new Set();
  intSet.add(ints[0]);
  for(let i = 1;i < ints.length; i++){
    let needed = s-ints[i];
    if(intSet.has(needed)){
      return [needed,ints[i]];
    }
  }
  intSet.add(ints[i]);
}
// Function Export
module.exports = sum_pairs
