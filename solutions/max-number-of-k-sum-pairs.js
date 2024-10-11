// Pseudo Code:
// Initialize a map to keep track of the occurrences of numbers.
// Initialize a variable to count the number of operations (pairs).
// Iterate through each number in the input array:
//   Calculate the target number needed to form a pair with the current number.
//   If the target number exists in the map and its count is greater than 0:
//     Increment the operations count.
//     Decrease the count of the target number in the map by 1.
//   Else:
//     Add the current number to the map or increment its count.
// Return the total count of operations (pairs).

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let map = new Map();
  let opsCount = 0;

  for (let i of nums) {
    let target = k - i;

    if (map.has(target) && map.get(target) > 0) {
      opsCount++;
      map.set(target, map.get(target) - 1);
    } else {
      map.set(i, (map.get(i) || 0) + 1);
    }
  }
  return opsCount;
};

module.exports = { maxOperations };
