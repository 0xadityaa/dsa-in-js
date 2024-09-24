// Pseudo Code:
// For the solution we need to iterate the nums arr. and compare each element with all other elements indise the arr.
// For brutforce solution, we can simply create a nested for loops where loop i starts from 0 and j frm i+1 = 1.
// Then we check if sum of i and j equals target and return index if true.
// To optimize this solution we can use hashmap.

// Optimized Pseudo Code:
// First we iterate through the nums arr. and find the diff. between curr num and target.
// Then we check if the diff exists in our hashmap. If exists, return the curr. index and index of diff from hashmap.
// Else we set the current index and its num to the hashmap and move to next index.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {

  if (target === 0) {
    return [0, 0];
  }  

  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    let compliment = target - currNum;

    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }

    map.set(currNum, i);
  }
}

module.exports = {
  twoSum,
};