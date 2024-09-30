// Pseudo Code:
// First we sort the input arr.
// Now science the arr. is sorted, if the 0th element is >0 this means no -ve vals. in the arr. so break
// If not, we check if curr. and prev. elements are same if i > 0 and i === i-1, if yes continue (ignore that index)
// Now that we got the element a, we will use 2 pointers to find b & c
// lPtr will start from i+1 and rPtr from nums.len - 1
// Now we calculate the sum of a,b & c
// If sum > 0 we decrease rPtr (rPtr--)
// If sum < 0 we increase lPtr (lPtr++)
// If sum === 0 we push all 3 elements in res arr.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let lPtr = i + 1;
    let rPtr = nums.length - 1;

    while (lPtr < rPtr) {
      let sum = nums[i] + nums[lPtr] + nums[rPtr];

      if (sum > 0) {
        rPtr--;
      } else if (sum < 0) {
        lPtr++;
      } else {
        res.push([nums[i], nums[lPtr], nums[rPtr]]);
        lPtr++;
        rPtr--;

        while (lPtr < rPtr && nums[lPtr] === nums[lPtr - 1]) {
          lPtr++;
        }
      }
    }
  }
  return res;
}

module.exports = { threeSum };
