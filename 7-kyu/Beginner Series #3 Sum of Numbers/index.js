/*
  Title:
    Beginner Series #3 Sum of Numbers

  Description:
  Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

  //將兩數字間的數字相加
  Note: a and b are not ordered!

  Examples:
    Example parties:
    Input 0:
    1, 2

    Output 0:
    1 + 2 = 3

    Input 1:
    -1, 2

    Output 1:
    -1 + 0 + 1 + 2 = 2
*/

// Best Solution
/*
//梯形公式
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
*/

// Short Solution
const GetSum = (a,b) => {
  let sum=0;
   
   if (a===b){
     return a;
   }else if(a>b){
     for(let i = b;i <= a;i++){
        sum+= i
     }
   }else {
     for(let i = a;i <= b;i++){
        sum+= i
     }
   }
   return sum
}
// Function Export
module.exports = hydrate
