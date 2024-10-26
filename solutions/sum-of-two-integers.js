// Pseudo Code:
// The goal is to find the sum of two integers without using the + operator.
// We will use bitwise operations to achieve this.

// Function getSum(a, b):
// 1. Call the sum function with parameters a and b and return the result.

// Function sum(a, b):
// 1. While b is not equal to 0:
//    a. Calculate carry as (a & b) << 1 (this represents the bits that will carry over).
//    b. Update a to be (a ^ b) (this represents the sum without carry).
//    c. Update b to be carry (this will be added in the next iteration).
// 2. Return a as the final sum.

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  return sum(a, b);
};

function sum(a, b) {
  if (a === 0 || b === 0) {
    return a | b;
  }

  return sum(a ^ b, (a & b) << 1);
}

module.exports = { getSum, sum };
