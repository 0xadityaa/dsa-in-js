// Pseudo Code:
// The goal is to find the missing number in the array of numbers from 0 to n.
// We will use the formula for the sum of the first n natural numbers to find the expected sum.
// Then, we will subtract the sum of the elements in the array from the expected sum to find the missing number.

// 1. Initialize a variable `res` to the length of the input array `nums`.
// 2. Iterate through each index `i` from 0 to the length of `nums` - 1:
//    a. Update `res` by adding `i` and subtracting `nums[i]`.
// 3. Return `res` as the missing number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let res = nums.length;

  for (let i = 0; i < nums.length; i++) {
    res += i - nums[i];
  }

  return res;
};

module.exports = {missingNumber};