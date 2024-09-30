const { threeSum } = require("../solutions/3-sum");

test("should return [[-1, -1, 2], [-1, 0, 1]] for input [-1, 0, 1, 2, -1, -4]", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
});

test("should return [] for input []", () => {
  expect(threeSum([])).toEqual([]);
});

test("should return [] for input [0]", () => {
  expect(threeSum([0])).toEqual([]);
});

test("should return [[0, 0, 0]] for input [0, 0, 0]", () => {
  expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
});

test("should return [[-2, 0, 2], [-2, 1, 1]] for input [-2, 0, 1, 1, 2]", () => {
  expect(threeSum([-2, 0, 1, 1, 2])).toEqual([[-2, 0, 2], [-2, 1, 1]]);
});
