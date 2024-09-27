// Pseudo Code:
// We initialize a prefix var. that will hold the sum to the left of curr. index element
// We then store the prefix found at each index in res. arr.
// Then we calculate postfix var. that will hold the sum to the right of curr. index element
// Then we simply multiply the prefix in res. arr with the postfix val. and update the res. values

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  let res = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    postfix *= nums[j + 1];
    res[j] *= postfix;
  }

  return res;
}

module.exports = { productExceptSelf };
