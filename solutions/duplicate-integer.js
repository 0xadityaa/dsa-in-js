// Time complexity of this solution is O(n) as we perform itrartion of array.
// Space complexity of this solution is O(n) as we keep map of all uinque elements.
// In worst case of all unique values in input, we need to store all the elements to set.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function hasDuplicate(nums) {

  // If input array is empty, we return false as there are no elements to check.
  if (nums.length === 0) {
    return false;
  }

  // Creating a Set to store all the qunique values from the array.
  let set = new Set();

  for (let i in nums) {
    if (set.has(nums[i])) {
      // Checking if current index elememt already exists in the set.
      return true; // If element already exists in the set, we return true as it is a repeting value.
    } else {
      set.add(nums[i]); // If element dosen't exist, adding it to set a newfound unique value.
    }
  }

  return false; // If all elements of input array are unique, returning false.
}

module.exports = {
  hasDuplicate,
};
