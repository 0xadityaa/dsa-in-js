const { longestConsecutive } = require("../solutions/longest-consecutive-sequence");

test("should return 4 for input [100, 4, 200, 1, 3, 2]", () => {
  expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
});

test("should return 9 for input [0,3,7,2,5,8,4,6,0,1]", () => {
  expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
});

test("should return 0 for empty input", () => {
  expect(longestConsecutive([])).toBe(0);
});

test("should return 1 for input [1]", () => {
  expect(longestConsecutive([1])).toBe(1);
});

test("should return 3 for input [1, 2, 0, 1]", () => {
  expect(longestConsecutive([1, 2, 0, 1])).toBe(3);
});
