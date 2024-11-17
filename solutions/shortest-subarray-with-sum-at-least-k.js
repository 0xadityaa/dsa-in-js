// Function shortestSubarray(nums, k):
//     1. Initialize n as the length of nums.
//     2. Create an array sum of size n + 1, filled with 0.
    
//     3. For each index i from 0 to n - 1:
//         a. Calculate the prefix sum: sum[i + 1] = sum[i] + nums[i]
    
//     4. Create an array q of size n + 1, filled with 0.
//     5. Initialize left pointer l to 0.
//     6. Initialize right pointer r to 0.
//     7. Initialize minLen to n + 1 (to track the minimum length of subarray).
    
//     8. For each index i from 0 to n:
//         a. While r > l and sum[i] >= sum[q[l]] + k:
//             i. Update minLen to the minimum of minLen and (i - q[l])
//             ii. Increment left pointer l.
        
//         b. While r > l and sum[i] <= sum[q[r - 1]]:
//             i. Decrement right pointer r.
        
//         c. Set q[r] to i (add current index to the queue).
//         d. Increment right pointer r.
    
//     9. Return minLen if it is less than or equal to n, otherwise return -1.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const n = nums.length;
    const sum = new Array(n+1).fill(0);

    for(let i=0; i<n; i++) {
        sum[i+1] = sum[i] + nums[i];
    }

    const q = new Array(n+1).fill(0);
    let l = 0;
    let r = 0;
    let minLen = n+1;

    for(let i=0; i<sum.length; i++) {
        while(r > l && sum[i] >= sum[q[l]] + k) {
            minLen = Math.min(minLen, i - q[l]);
            l++;
        }
        while (r > l && sum[i] <= sum[q[r-1]]) {
            r--;
        }

        q[r] = i;
        r++;
    }

    return minLen <=n ? minLen : -1;
};

module.exports = { shortestSubarray };