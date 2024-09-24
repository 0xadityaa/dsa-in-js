const { twoSum } = require("../solutions/two-sum");

test("should return [0, 1] if target is 7 and nums is [3, 4, 5, 6]", () => {
  expect(twoSum([3, 4, 5, 6], 7)).toEqual([0, 1]);
});

test("should return [0, 2] if target is 10 and nums is [4, 5, 6]", () => {
  expect(twoSum([4, 5, 6], 10)).toEqual([0, 2]);
});

test("should return [0, 0] if target is 0 and nums is [1, -2, 3, 4]", () => {
  expect(twoSum([1, -2, 3, 4], 0)).toEqual([0, 0]);
});