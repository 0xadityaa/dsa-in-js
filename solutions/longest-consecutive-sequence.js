// Pseudo Code:
// We will create a new Set of the input arr.
// First we iterate through the input arr. and find out if number is the start of the sequence (if the number - 1 is not present in the set)
// If it is start of seq. we keep the count of the len.
// Then we check if nums[i] + 1 exists in our set if yes len++

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  let set = new Set(nums);
  let longest = 0;

  for (let i of set) {
    if (!set.has(i - 1)) {
      let len = 1;
      while (set.has(i + len)) {
        len++;
      }
      longest = Math.max(len, longest);
    }
  }
  return longest;
}

module.exports = { longestConsecutive };
