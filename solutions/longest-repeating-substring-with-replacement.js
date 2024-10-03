// Pseudo Code:
// We can create a hashmap which stores char. as key and it's occurrence as val.
// Then we implement sliding window by creating l and r pointers on 0th index
// We then check if the current window is valid by doing window.len - most freq. element count
// If it is <= k, its a valid window so put the window len. in res.
// Else if it's invalid window, we increment l ptr. and also remove that char. from hashmap

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
  let map = new Map();
  let lPtr = 0;
  let res = 0;

  for (let rPtr = 0; rPtr < s.length; rPtr++) {
    let len = rPtr - lPtr + 1;
    map.set(s[rPtr], 1 + (map.get(s[rPtr]) || 0));

    if (len - Math.max(...map.values()) > k) {
      map.set(s[lPtr], map.get(s[lPtr]) - 1);
      lPtr++;
    }
    len = rPtr - lPtr + 1;
    res = Math.max(res, len);
  }
  return res;
}

module.exports = { characterReplacement };
