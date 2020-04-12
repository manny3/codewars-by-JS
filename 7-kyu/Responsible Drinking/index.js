/*
  Title:
    Responsible Drinking

  Description:

  Examples:
    Example parties:
    Input 0:
    "1 beer"

    Output 0:
    "1 glass of water"

    Input 1:
    "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"

    Output 1:
    "10 glasses of water"
*/

// Best Solution
/*
function hydrate(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) > 0) {
      answer += +s[i];
    }
  }
  return answer > 1 ? `${answer} glasses of water`: '1 glass of water'
}
*/

// Short Solution
const hydrate = (s) => {
  const num = s.match(/\d/g).reduce((prev, curr)=> prev + parseInt(curr),0
  )
  return `${num} glass${num != 1 ? 'es' : '' } of water`
}
// Function Export
module.exports = hydrate
