// Pseudo Code:
// We will initialize 2 pointers one at index 0 and one at heights.len - 1
// Based on r and l pointer we can determine the width by doing r - l
// Then we calculate the area by len * min height from l and r ptrs.
// If the area > currMaxArea we update it
// Else we check for smallest height in l and r ptr.
// if l < r l++
// if r < l r--

/**
 * @param {number[]} heights
 * @return {number}
 */
function maxArea(heights) {
  let lPtr = 0;
  let rPtr = heights.length - 1;
  let res = 0;

  while (lPtr < rPtr) {
    let len = rPtr - lPtr;
    let area = len * Math.min(heights[lPtr], heights[rPtr]);
    res = Math.max(res, area);

    if (heights[lPtr] < heights[rPtr]) {
      lPtr++;
    } else {
      rPtr--;
    }
  }
  return res;
}

module.exports = { maxArea };
