/*
  Title:
    Sleigh Authentication

  Description:
  Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

  Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

  Examples:
    Example parties:
    Input 0:
    "Santa Claus", "Ho Ho Ho!"

    Output 0:
    TRUE

    Input 1:
    "Santa", "Ho Ho Ho!"

    Output 1:
    FALSE
*/

// Long Solution
/*
function Sleigh() {
  this.name = "Santa Claus";
  this.password = "Ho Ho Ho!";
}

Sleigh.prototype.authenticate = function(name, password) {
  return this.name == name && this.password == password;
};
*/

// Short Solution
const authenticate = (name, password) => {
  return name === 'Santa Claus' && password === 'Ho Ho Ho!'
}
// Function Export
module.exports = authenticate
