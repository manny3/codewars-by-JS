/*
  Title:
    ROT13

  Description:
    How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

    I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

    Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

    rot13("EBG13 rknzcyr.") == "ROT13 example.";
    rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"

    給字符串加密，字母要位移13位，數字和特殊字符不動

  Examples:
    Example parties:
    Input 0:
    

    Output 0:
    

    Input 1:
    

    Output 1:
    
*/

// Best Solution
/*
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
*/

// Short Solution
const rot13 = (str) => {
  let arr = str.split('');
  let lcase = 'abcdefghijklmnopqrstuvwxyzabcdefghijklm'.split('');
  let ucase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM'.split('');

  for(let i = 0;i < arr.length;i++){
    let letter = '';
    if(arr[i].match(/[a-z]/)){
      letter = lcase.indexOf(arr[i]);
      arr[i] = lcase[letter+13];
    }else if(arr[i].match(/[A-Z]/)){
      letter = ucase.indexOf(arr[i]);
      arr[i] = ucase[letter+13];
    }
  }
  return arr.join('');
}
// Function Export
module.exports = rot13
