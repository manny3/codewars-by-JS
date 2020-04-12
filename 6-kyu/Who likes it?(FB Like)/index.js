/*
  Title:
    Who likes it?

  Description:
    You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item

    製作FB Like功能
    likes [] // must be "no one likes this"
    likes ["Peter"] // must be "Peter likes this"
    likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
    likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
    likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"


  Examples:
    Example parties:
    Input 0:
    []

    Output 0:
    'no one likes this'

    Input 1:
    ["Max", "John", "Mark"]

    Output 1:
    'Max, John and Mark like this'
*/

// Best Solution
/*
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}
*/

// Short Solution
const likes = (names) => {
  if(names.length === 0) {
    return 'no one likes this';
  }else if(names.length === 1) {
    return `${names[0]} likes this`;
  }else if(names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }else if(names.length === 3) {
    return `${names[0]},${names[1]} and ${names[2]} like this`;
  }else {
    return `${names[0]},${names[1]} and ${names.length - 2} others like this`;
  }
}
// Function Export
module.exports = likes

