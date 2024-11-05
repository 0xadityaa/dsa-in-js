// Pseudo Code:
// The goal is to concatenate the input array with itself.
// 1. Initialize a variable `res` as an empty array to store the result.
// 2. Set a loop count to 2, as we need to add the array twice.
// 3. While the loop count is not zero:
//    a. Iterate through each element in the input array `nums`.
//    b. For each element, push it into the result array `res`.
//    c. Decrement the loop count by 1.
// 4. Return the result array `res` containing the concatenated values.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let loopCount = 2;
  let res = [];

  while (loopCount !== 0) {
    for (let i = 0; i < nums.length; i++) {
      res.push(nums[i]);
    }
    loopCount--;
  }
  return res;
};

module.exports = { getConcatenation };
