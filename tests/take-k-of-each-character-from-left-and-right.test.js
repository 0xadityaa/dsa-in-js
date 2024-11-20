const { takeCharacters } = require("../solutions/take-k-of-each-character-from-left-and-right");

describe('takeCharacters function', () => {
  // Basic valid input test
  test('returns correct result for a basic valid input', () => {
    expect(takeCharacters('aabaaaacaaaa', 3)).toBe(-1);
  });

  // Test case where it's impossible to meet the requirement
  test('returns -1 when impossible to meet minimum character count', () => {
    expect(takeCharacters('aaabbbcc', 4)).toBe(-1);
  });

  // Test with minimal input meeting requirements
  test('handles input where minimum characters are exactly k', () => {
    expect(takeCharacters('abcabcabc', 3)).toBe(9);
  });

  // Test with empty string
  test('returns -1 for empty string', () => {
    expect(takeCharacters('', 1)).toBe(-1);
  });

  // Test with k = 0
  test('works when k is 0', () => {
    expect(takeCharacters('abc', 0)).toBe(0);
  });

  // Test with a string that requires removal from multiple sides
  test('handles complex removal scenario', () => {
    expect(takeCharacters('aabacbaa', 3)).toBe(-1);
  });

  // Test with a string where all characters are the same
  test('handles string with single repeated character', () => {
    expect(takeCharacters('aaaaa', 3)).toBe(-1);
  });

  // Test with a larger string with multiple character types
  test('handles longer string with multiple character types', () => {
    expect(takeCharacters('cabbaaacbbc', 3)).toBe(9);
  });

  // Edge case with very large k
  test('returns -1 when k is larger than character frequency', () => {
    expect(takeCharacters('abc', 5)).toBe(-1);
  });

  // Test with different k values
  test('works with different minimum character requirements', () => {
    expect(takeCharacters('abcabcabc', 2)).toBe(6);
    expect(takeCharacters('abcabcabc', 4)).toBe(-1);
  });

  // Additional edge case with minimum possible removal
  test('handles case with minimum possible removal', () => {
    expect(takeCharacters('abcabcabc', 1)).toBe(3);
  });

  // Test with a more complex string requiring strategic removal
  test('handles strategically complex removal', () => {
    expect(takeCharacters('aabbccaabbcc', 3)).toBe(10);
  });
});