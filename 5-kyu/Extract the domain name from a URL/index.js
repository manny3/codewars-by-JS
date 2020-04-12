/*
  Title:
    Extract the domain name from a URL

  Description:
    Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

    抓出網址的domain

  Examples:
    Example parties:
    Input 0:
    "http://github.com/carbonfive/raygun"

    Output 0:
    'github'

    Input 1:
    "https://www.cnet.com"

    Output 1:
    'cnet'
*/

// Best Solution
/*
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
*/

// Short Solution
const domainName = (url) => {
  return  url.replace('http://', '')
             .replace('https://', '')
             .replace('www.', '')
             .split('.')[0];
}
// Function Export
module.exports = domainName
