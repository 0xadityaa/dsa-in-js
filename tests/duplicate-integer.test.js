const { hasDuplicate } = require("../solutions/Duplicate-Integer");

test("should return true if array has duplicate elements", () => {
  expect(hasDuplicate([1, 2, 3, 1])).toBe(true);
});

test("should return false if array has no duplicate elements", () => {
  expect(hasDuplicate([1, 2, 3, 4])).toBe(false);
});

test("should return false if array is empty", () => {
  expect(hasDuplicate([])).toBe(false);
});