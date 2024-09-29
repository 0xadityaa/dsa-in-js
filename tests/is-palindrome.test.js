const { isPalindrome } = require("../solutions/is-palindrome");

test("should return true for a valid palindrome 'A man, a plan, a canal: Panama'", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});

test("should return false for an invalid palindrome 'race a car'", () => {
  expect(isPalindrome("race a car")).toBe(false);
});

test("should return true for an empty string", () => {
  expect(isPalindrome("")).toBe(true);
});

test("should return true for a single character 'a'", () => {
  expect(isPalindrome("a")).toBe(true);
});

test("should return true for a string with only non-alphanumeric characters '!!!'", () => {
  expect(isPalindrome("!!!")).toBe(true);
});

test("should return true for a valid palindrome with mixed case 'No lemon, no melon'", () => {
  expect(isPalindrome("No lemon, no melon")).toBe(true);
});

test("should return false for a string with different alphanumeric characters '123ab321'", () => {
  expect(isPalindrome("123ab321")).toBe(false);
});
