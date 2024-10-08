const { findMin } = require("../solutions/find-minimum-in-rotated-sorted-array");

test("should return 1 for input [3, 4, 5, 1, 2]", () => {
  expect(findMin([3, 4, 5, 1, 2])).toBe(1);
});

test("should return 0 for input [4, 5, 6, 7, 0, 1, 2]", () => {
  expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
});

test("should return 2 for input [11, 13, 15, 17]", () => {
  expect(findMin([11, 13, 15, 17])).toBe(11);
});

test("should return 1 for input [1]", () => {
  expect(findMin([1])).toBe(1);
});

test("should return -1 for input [-1, -2, -3, -4]", () => {
  expect(findMin([-1, -2, -3, -4])).toBe(-4);
});

test("should return 0 for input [0, 1, 2, 3, 4, 5]", () => {
  expect(findMin([0, 1, 2, 3, 4, 5])).toBe(0);
});

test("should return 5 for input [5, 1, 2, 3, 4]", () => {
  expect(findMin([5, 1, 2, 3, 4])).toBe(1);
});
