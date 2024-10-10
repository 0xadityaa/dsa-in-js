// Pseudo Code:
// Implementing Binary Search
// Initialize two pointers, lPtr and rPtr, to the start and end of the array.
// While lPtr is less than or equal to rPtr:
//   Calculate the mid index as the average of lPtr and rPtr.
//   If the target is equal to the element at mid, return mid.
//   Check if the left half of the array is sorted:
//     If it is sorted:
//       If the target is greater than the element at mid or less than the element at lPtr, move lPtr to mid + 1.
//       Else, move rPtr to mid - 1.
//   If the right half of the array is sorted:
//     If the target is less than the element at mid or greater than the element at rPtr, move rPtr to mid - 1.
//     Else, move lPtr to mid + 1.
// If the target is not found, return -1.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let lPtr = 0;
  let rPtr = nums.length - 1;

  while (lPtr <= rPtr) {
    let mid = Math.floor((lPtr + rPtr) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    if (nums[lPtr] <= nums[mid]) {
      if (target > nums[mid] || target < nums[lPtr]) {
        lPtr = mid + 1;
      } else {
        rPtr = mid - 1;
      }
    } else {
      if (target < nums[mid] || target > nums[rPtr]) {
        rPtr = mid - 1;
      } else {
        lPtr = mid + 1;
      }
    }
  }
  return -1;
}

module.exports = { search };
