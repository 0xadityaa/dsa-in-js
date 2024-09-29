// Pseudo Code:
// Using 2 pointers, we iterate through input str. from both left and right
// First we check if the char. at the pointer is alpha numeric (A-Z, a-z, 0-9)
// If yes, we compare if both left and right pointers have same value, if no, return false
// If yes, we increment pointer to the left and decrement pointer to right
// Until either both pointers cross each other or overlap

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  let leftPtr = 0;
  let rightPtr = s.length - 1;

  while (leftPtr < rightPtr) {
    while (leftPtr < rightPtr && !alphaNum(s[leftPtr])) {
      leftPtr++;
    }
    while (rightPtr > leftPtr && !alphaNum(s[rightPtr])) {
      rightPtr--;
    }
    if (s[leftPtr].toLowerCase() !== s[rightPtr].toLowerCase()) {
      return false;
    }
    leftPtr++;
    rightPtr--;
  }
  return true;
}
/**
 * @param {string} c
 * @return {boolean}
 */
var alphaNum = (c) => {
  const charCode = c.charCodeAt(0);
  return (
    (65 <= charCode && charCode <= 90) ||
    (97 <= charCode && charCode <= 122) ||
    (48 <= charCode && charCode <= 57)
  );
};

module.exports = { isPalindrome };
