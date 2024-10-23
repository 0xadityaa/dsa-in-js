// Pseudo Code:
// The goal is to find all unique combinations of candidates that sum up to the target.
// We can use a backtracking approach to explore all possible combinations.

// Function combinationSum(candidates, target):
// 1. Initialize an empty array ans to store the result combinations.
// 2. Initialize an empty array curr to store the current combination being explored.
// 3. Call the backtrack function with the following parameters:
//    - candidates: the list of candidate numbers
//    - target: the target sum
//    - curr: the current combination being explored
//    - ans: the result array to store valid combinations
//    - index: starting index (0)

// Function backtrack(nums, target, curr, ans, index):
// 1. If target is 0:
//    - Add a copy of curr to ans (a valid combination found).
//    - Return.
// 2. If target is less than 0 or index is out of bounds (greater than or equal to nums.length):
//    - Return (invalid combination).
// 3. Include the current number in the combination:
//    - Add nums[index] to curr.
//    - Recursively call backtrack with updated target (target - nums[index]) and the same index (to allow reuse).
// 4. Exclude the current number from the combination:
//    - Remove the last number from curr (backtrack).
//    - Recursively call backtrack with the next index (index + 1).

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  let ans = [];
  let curr = [];
  backtrack(candidates, target, curr, ans, 0);
  return ans;
}

function backtrack(nums, target, curr, ans, index) {
  if (target === 0) {
    ans.push([...curr]);
    return;
  }
  if (target < 0 || index >= nums.length) {
    return;
  }

  curr.push(nums[index]);
  backtrack(nums, target - nums[index], curr, ans, index);

  curr.pop();
  backtrack(nums, target, curr, ans, index + 1);
}

module.exports = { combinationSum, backtrack };
