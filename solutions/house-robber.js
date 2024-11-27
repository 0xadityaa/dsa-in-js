// Pseudo Code for House Robber:

// Function rob(nums):
// 1. Initialize rob1 as 0 (represents the maximum amount that can be robbed up to the previous house).
// 2. Initialize rob2 as 0 (represents the maximum amount that can be robbed up to the current house).
// 3. Iterate through each number in nums (representing the amount of money in each house):
//    a. For each num, calculate the maximum amount that can be robbed by either:
//       i. Adding the current house's money (num) to rob1 (the amount robbed from the house before the previous one).
//       ii. Keeping the amount robbed from the previous house (rob2).
//    b. Store the result in a temporary variable temp.
//    c. Update rob1 to be equal to rob2 (move to the next house).
//    d. Update rob2 to be equal to temp (the new maximum amount robbed).
// 4. After iterating through all houses, return rob2 (the maximum amount that can be robbed).

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let rob1 = 0;
    let rob2 = 0;

    for (const num of nums) {
        const temp = Math.max(num + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
};

module.exports = { rob };