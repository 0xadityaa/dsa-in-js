// Pseudo Code:
// 1. Initialize n as the length of the input array arr.
// 2. Initialize left pointer to 0.
// 3. Increment left pointer while arr[left] is less than or equal to arr[left + 1].
// 4. If left pointer reaches the end of the array, return 0 (the array is already sorted).
// 5. Initialize right pointer to n - 1.
// 6. Decrement right pointer while arr[right - 1] is less than or equal to arr[right].
// 7. Initialize result as the minimum of (n - left - 1) and right (length of subarray to remove).
// 8. Initialize two pointers, i to 0 and j to right.
// 9. While i is less than or equal to left and j is less than n:
//    a. If arr[i] is less than or equal to arr[j]:
//       i. Update result to the minimum of result and (j - i - 1).
//       ii. Increment i.
//    b. Else:
//       i. Increment j.
// 10. Return result.


/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    let n = arr.length;
    let left = 0;

    if(n <= 1) return 0;

    while (left + 1 < n && arr[left] <= arr[left + 1]) {
        left++;
    }

    if (left === n - 1) return 0;

    let right = n - 1;
    while (right > 0 && arr[right - 1] <= arr[right]) {
        right--;
    }

    let res = Math.min(n - left - 1, right);

    for (let i = 0; i <= left; i++) {
        while (right < n && arr[i] > arr[right]) {
            right++;
        }
        res = Math.min(res, right - i - 1);
    }

    return res;
};

module.exports = { findLengthOfShortestSubarray };