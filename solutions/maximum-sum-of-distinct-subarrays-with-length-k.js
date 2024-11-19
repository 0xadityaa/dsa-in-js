// Function maximumSubarraySum(nums, k):
//     1. Initialize left pointer l to 0.
//     2. Initialize sum to 0.
//     3. Initialize max to 0.
//     4. Create a map to track the frequency of elements in the current window.

//     5. For each right pointer r from 0 to length of nums - 1:
//         a. Add nums[r] to sum.
//         b. Increment the count of nums[r] in the map.

//         c. If the size of the window (r - l + 1) equals k:
//             i. If the size of the map equals k (all elements are distinct):
//                 - Update max to the maximum of max and sum.
//             ii. Subtract nums[l] from sum.
//             iii. Decrement the count of nums[l] in the map.
//             iv. If the count of nums[l] becomes 0, remove nums[l] from the map.
//             v. Increment left pointer l.

//     6. Return max.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    let l = 0;
    let sum = 0;
    let max = 0;
    let map = new Map();

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];
        map.set(nums[r], (map.get(nums[r]) || 0) + 1);

        if (r - l + 1 === k) {
            if (map.size === k) {
                max = Math.max(max, sum);
            }
            sum -= nums[l];
            map.set(nums[l], (map.get(nums[l]) || 0) - 1);
            if (map.get(nums[l]) === 0) map.delete(nums[l]);
            l++;
        }
    }
    return max;
};

module.exports = { maximumSubarraySum };