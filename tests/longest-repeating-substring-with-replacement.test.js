const { characterReplacement } = require("../solutions/longest-repeating-substring-with-replacement");

test("should return 4 for input 'AABABBA' with k = 1", () => {
  expect(characterReplacement("AABABBA", 1)).toBe(4);
});

test("should return 6 for input 'AAABABBA' with k = 2", () => {
  expect(characterReplacement("AAABABBA", 2)).toBe(6);
});

test("should return 2 for input 'AABABBA' with k = 0", () => {
  expect(characterReplacement("AABABBA", 0)).toBe(2);
});

test("should return 4 for input 'AAAA' with k = 2", () => {
  expect(characterReplacement("AAAA", 2)).toBe(4);
});

test("should return 4 for input 'ABAB' with k = 2", () => {
  expect(characterReplacement("ABAB", 2)).toBe(4);
});

test("should return 5 for input 'AABABBA' with k = 2", () => {
  expect(characterReplacement("AABABBA", 2)).toBe(5);
});

test("should return 1 for input 'A' with k = 0", () => {
  expect(characterReplacement("A", 0)).toBe(1);
});

test("should return 0 for input '' with k = 1", () => {
  expect(characterReplacement("", 1)).toBe(0);
});
