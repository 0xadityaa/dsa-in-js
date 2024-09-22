const { isAnagram } = require("../solutions/is-anagram");

test("should return true if both strings are anagram", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
});

test("should return false if both strings are not anagram", () => {
  expect(isAnagram("hello", "world")).toBe(false);
});

test("should return false if one of the strings is empty", () => {
  expect(isAnagram("hello", "world")).toBe(false);
});

test("should return false if length of the strings is not same", () => {
  expect(isAnagram("hi", "world")).toBe(false);
});