// Pseudo Code:
// Initialize an array dp of size n + 1 filled with 0s to store the count of bits for each number.
// Initialize a variable offset to 1.
// Loop through each number i from 1 to n:
//   If i is equal to offset * 2, update offset to i.
//   Set dp[i] to 1 plus the count of bits for the number (i - offset).
// Return the dp array containing the count of bits for each number from 0 to n.

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let dp = new Array(n + 1).fill(0);
  let offset = 1;

  for (let i = 1; i <= n; i++) {
    if (offset * 2 == i) {
      offset = i;
    }
    dp[i] = 1 + dp[i - offset];
  }
  return dp;
};

module.exports = { countBits };
