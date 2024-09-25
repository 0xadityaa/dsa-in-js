// Pseudo Code
// iterate through the input arr. and map the int as key and it's count as val.
// then we can use bucket sort for getting the top k freq. elements
// to implement bucket sort we have to create a fixed arr. of len. 6 (as the size of input arr. is max. of 6 elemments)
// then we populate the arr. based on occurrence i.e. if 1 occurs 3 times we store val. 1 on index 3 of the arr.
// at last we iterate through this arr. from right to left (as we need to find most freq. elements) until we find k elements.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const count = {};
  const freq = Array.from({ length: nums.length + 1 }, () => []);

  for (const n of nums) {
    count[n] = (count[n] || 0) + 1;
  }
  for (const n in count) {
    freq[count[n]].push(parseInt(n));
  }

  const res = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }
  return res;
}

module.exports = {
  topKFrequent,
};
