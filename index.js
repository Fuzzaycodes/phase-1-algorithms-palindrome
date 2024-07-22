function isPalindrome(word) {
  // Write your algorithm here
}
function isPalindrome(str) {
  
  const reversedStr = str.split('').reverse().join('');
  
  
  return str === reversedStr;
}
/* 
  Add your pseudocode here
*/
console.log(isPalindrome("bob"));
console.log(isPalindrome("tea"));
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
