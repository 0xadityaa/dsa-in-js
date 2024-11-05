// Pseudo Code:
// The goal is to calculate the total score based on a series of operations.
// We will use a stack to keep track of the scores.

// Function calPoints(operations):
// 1. Initialize an empty stack to store scores.
// 2. Initialize a variable total to 0 to keep track of the total score.
// 3. Iterate through each operation in the operations array:
//    a. If the operation is "C":
//       - Remove the last score from the stack (invalid score).
//    b. If the operation is "D":
//       - Double the last score in the stack and add it to the stack.
//    c. If the operation is "+":
//       - Sum the last two scores in the stack and add the result to the stack.
//    d. If the operation is a number:
//       - Convert the operation to a number and add it to the stack.
// 4. After processing all operations, calculate the total score by summing all values in the stack.
// 5. Return the total score.

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let stack = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "C") {
      stack.pop();
    } else if (operations[i] === "D") {
      if (stack.length > 0) {
        let double = 2 * stack[stack.length - 1];
        stack.push(double);
      }
    } else if (operations[i] === "+") {
      if (stack.length > 1) {
        let sum = stack[stack.length - 1] + stack[stack.length - 2];
        stack.push(sum);
      }
    } else {
      stack.push(Number(operations[i]));
    }
  }

  return stack.reduce((acc, score) => acc + score, 0);
};

module.exports = { calPoints };
