// Function resultsArray(nums, k):
//     Initialize n as the length of nums
//     Initialize an empty array res to store results
//     For i from 0 to n - k (inclusive):
//         Extract subarray from nums starting at i with length k
//         Create a sorted copy of the subarray
//         Initialize isConsecutive as true
//         For j from 1 to k - 1:
//             If the difference between sortedSubarray[j] and sortedSubarray[j - 1] is not equal to 1:
//                 Set isConsecutive to false
//                 Break
//         If isConsecutive is true and all elements in subarray are in the same order as sortedSubarray:
//             Append the last element of sortedSubarray to res
//         Else:
//             Append -1 to res
//     Return res

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
    let n = nums.length;
    let res = [];
    

    for (let i = 0; i <= n - k; i++) {
        let subarray = nums.slice(i, i + k);
        let sortedSubarray = [...subarray].sort((a, b) => a - b);

        let isConsecutive = true;
        for (let j = 1; j < k; j++) {
            if (sortedSubarray[j] - sortedSubarray[j - 1] !== 1) {
                isConsecutive = false;
                break;
            }
        }

        if (isConsecutive && subarray.every((val, idx) => val === sortedSubarray[idx])) {
            res.push(sortedSubarray[k - 1]);
        } else {
            res.push(-1);
        }
    }
    return res;
};

module.exports = { resultsArray };