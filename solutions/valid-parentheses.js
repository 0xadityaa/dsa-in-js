// Pseudo Code:
// In order to keep the track of order of the brackets, we can use a stack
// First, we create a map which maps type of bracket ot it's respective closing bracket
// Then, we check if current bracket is a closing bracket
// If not, we push current bracket onto stack
// Then we check if current bracket is closing top most bracket from stack
// If yes, we pop the element from stack
// If no, means there is invalid sequence or pairs so return false
// After whole iteration if string is valid stack.length should be 0, so return true

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  let stack = [];
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i of s) {
    let isBracket = i in map;
    if (!isBracket) {
      stack.push(i);
      continue;
    }

    let isEqual = stack[stack.length - 1] === map[i];

    if (isEqual) {
      stack.pop();
      continue;
    }

    return false;
  }

  return stack.length === 0;
}

module.exports = { isValid };
