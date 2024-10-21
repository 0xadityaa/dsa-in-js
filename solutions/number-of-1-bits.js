// Pseudo Code:
// Initialize a count variable to 0
// While n is not equal to 0:
//   Perform bitwise AND operation between n and (n-1)
//   Increment the count
// Return the count

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
  let count = 0;
  while (n !== 0) {
    n &= n - 1;
    count++;
  }
  return count;
}

module.exports = { hammingWeight };
