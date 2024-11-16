// Pseudo Code:
// The goal is to calculate the number of distinct ways to climb to the top of a staircase with n steps.
// We will use a recursive approach with memoization to optimize the solution.

// Function climbStairs(n):
// 1. Initialize a cache array of size n filled with -1 to store results of subproblems.
// 2. Define a helper function dfs(i) that takes the current step index i:
//    a. If i is equal to n, return 1 (one way to reach the top).
//    b. If i is greater than n, return 0 (no way to reach the top).
//    c. If cache[i] is not -1, return cache[i] (return the cached result).
//    d. Calculate the number of ways to reach the top from the current step:
//       - Call dfs(i + 1) and dfs(i + 2) and store the result in cache[i].
//    e. Return cache[i] (the number of ways to reach the top from step i).
// 3. Call dfs(0) to start from the first step and return the result.

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const cache = new Int32Array(n).fill(-1);
    const dfs = (i) => {
        if (i >= n) return i == n;
        if (cache[i] !== -1) return cache[i];
        return cache[i] = dfs(i + 1) + dfs(i + 2);
    }
    return dfs(0);
};

module.exports = { climbStairs };