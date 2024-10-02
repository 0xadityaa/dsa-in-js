// Pseudo Code:
// We can keep the count of unique elements in a set
// We create a lPtr at the 0th index
// Then we check if the set has s[i] element already, if yes, we delete s[lPtr] and move it forward by lPtr++
// If not, we add s[i] to the set and find len. of seq. by i - lPtr + 1
// Then we compare prev. seq. len. with new found len. and update with max.

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let lPtr = 0;
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[lPtr]);
      lPtr++;
    }
    set.add(s[i]);
    res = Math.max(res, i - lPtr + 1);
  }
  return res;
}

module.exports = { lengthOfLongestSubstring };
