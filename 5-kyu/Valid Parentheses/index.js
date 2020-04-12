/*
  Title:
    Valid Parentheses

  Description:
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true

    判斷括號順序是否有效

  Examples:
    Example parties:
    Input 0:


    Output 0:


    Input 1:


    Output 1:

*/

// Best Solution
/*
function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}
*/

// Short Solution
const validParentheses = (parens) => {
  let stack = [];
  let map = new Map();
  map.set(')','(');
  for(let i = 0;i < parens.length; i++){
    let c = parens[i];
    if(map.has(c)){
      if(stack.length !== 0){
        if(stack.pop() !== map.get(c)){
          return false;
        }
      }else{
        return false;
      }
    }else{
      stack.push(c);
    }
  }
  return stack.length === 0;
}
// Function Export
module.exports = validParentheses
