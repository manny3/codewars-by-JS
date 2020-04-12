/*
  Title:
    Range Extraction


  Description:
    A format for expressing an ordered list of integers is to use a comma separated list of either

    individual integers
    or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
    Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

  Example:

  solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
  // returns "-6,-3-1,3-5,7-11,14,15,17-20"

    當連續的數字小於3時，分別輸入；當連續的數字超過3時，例如“-3，-2，-1， 0, 1”記做“-3-1”。

    該題有兩個判斷（連續數字數量是否超過3，數字是否連續）

  Examples:
    Example parties:
    Input 0:


    Output 0:


    Input 1:

    Output 1:

*/

// Best Solution
/*
function solution(list){
   for(var i = 0; i < list.length; i++){
      var j = i;
      while(list[j] - list[j+1] == -1) j++;
      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}

function solution(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(",");
}

function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number]);
    return ranges;
  }

  var lastRange = ranges[ranges.length - 1];
  var lastNumber = lastRange[lastRange.length - 1];

  number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
  return ranges;
}

function convertToRange(range) {
  return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}
*/

// Short Solution
const solution = (list) => {
  let res = Array.from(list);複製陣列
 
  for(let i = 0;i < list.length; i++){
    if(i===0 || i=== list.length-1) {continue} //跳過頭尾數
    if(res[i]-1 === list[i - 1] && res[i]+1 === list[i+1]){
      res[i] = null;
    }//如果前後數字為連續中間變為空值
  }
  return res.toString().replace(/,{2,}/g,'-');//換成-
}
// Function Export
module.exports = solution
