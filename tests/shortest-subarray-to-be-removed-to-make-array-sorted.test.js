const { findLengthOfShortestSubarray } = require("../solutions/shortest-subarray-to-be-removed-to-make-array-sorted");

describe('findLengthOfShortestSubarray', () => {
  test('returns 0 for already sorted array', () => {
    expect(findLengthOfShortestSubarray([1, 2, 3, 4, 5])).toBe(0);
  });

  test('returns length of array minus 1 for reverse sorted array', () => {
    expect(findLengthOfShortestSubarray([5, 4, 3, 2, 1])).toBe(4);
  });

  test('returns correct length of shortest subarray to remove', () => {
    expect(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5])).toBe(3);
    expect(findLengthOfShortestSubarray([5, 6, 3, 4, 7, 8, 1, 2, 9])).toBe(6);
  });

  test('handles edge cases', () => {
    expect(findLengthOfShortestSubarray([1])).toBe(0);
    expect(findLengthOfShortestSubarray([])).toBe(0);
  });
});
