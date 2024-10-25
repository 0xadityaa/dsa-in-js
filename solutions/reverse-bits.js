// Pseudo Code:
// Initialize a result variable res to 0
// Loop through each bit position from 0 to 31:
//   - Extract the bit at the current position i from n using a right shift and bitwise AND
//   - Shift the extracted bit to its new position (31 - i) in the result
//   - Add the shifted bit to the result
// Return the result as an unsigned integer

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let res = 0;

  for (let i = 0; i < 32; i++) {
    let bit = (n >>> i) & 1;
    res += bit << (31 - i);
  }

  return res >>> 0;
};

module.exports = { reverseBits };
