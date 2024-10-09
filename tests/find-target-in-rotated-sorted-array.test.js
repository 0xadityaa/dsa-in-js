const { search } = require("../solutions/find-target-in-rotated-sorted-array");

test("should return 4 for input [4,5,6,7,0,1,2] and target 0", () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
});

test("should return 0 for input [4,5,6,7,0,1,2] and target 4", () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 4)).toBe(0);
});

test("should return -1 for input [4,5,6,7,0,1,2] and target 3", () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
});

test("should return 3 for input [1] and target 1", () => {
  expect(search([1], 1)).toBe(0);
});

test("should return -1 for input [1] and target 0", () => {
  expect(search([1], 0)).toBe(-1);
});

test("should return 2 for input [3, 1] and target 1", () => {
  expect(search([3, 1], 1)).toBe(1);
});

test("should return 1 for input [1, 3] and target 3", () => {
  expect(search([1, 3], 3)).toBe(1);
});

test("should return -1 for input [] and target 1", () => {
  expect(search([], 1)).toBe(-1);
});
