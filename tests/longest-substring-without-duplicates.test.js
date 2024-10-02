const { lengthOfLongestSubstring } = require("../solutions/longest-substring-without-duplicates");

test("should return 3 for input 'abcabcbb'", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test("should return 1 for input 'bbbbb'", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test("should return 3 for input 'pwwkew'", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});

test("should return 0 for input ''", () => {
  expect(lengthOfLongestSubstring("")).toBe(0);
});

test("should return 5 for input 'abcde'", () => {
  expect(lengthOfLongestSubstring("abcde")).toBe(5);
});

test("should return 2 for input 'abba'", () => {
  expect(lengthOfLongestSubstring("abba")).toBe(2);
});

test("should return 6 for input 'abcdefg'", () => {
  expect(lengthOfLongestSubstring("abcdefg")).toBe(7);
});

test("should return 3 for input 'dvdf'", () => {
  expect(lengthOfLongestSubstring("dvdf")).toBe(3);
});
