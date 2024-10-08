// Pseudo Code:
// Sort the array in descending order as we are explicitly asked for O(n log n) solution.
// Return the last element

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  nums.sort((a, b) => b - a);
  return nums[nums.length - 1];
}

module.exports = { findMin };
