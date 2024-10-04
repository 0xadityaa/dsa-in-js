const { isValid } = require("../solutions/valid-parentheses");

test("should return true for valid parentheses '()'", () => {
  expect(isValid("()")).toBe(true);
});

test("should return true for valid parentheses '()[]{}'", () => {
  expect(isValid("()[]{}")).toBe(true);
});

test("should return false for invalid parentheses '(]'", () => {
  expect(isValid("(]")).toBe(false);
});

test("should return false for invalid parentheses '([)]'", () => {
  expect(isValid("([)]")).toBe(false);
});

test("should return true for valid parentheses '{[()]}'", () => {
  expect(isValid("{[()]}")).toBe(true);
});

test("should return false for invalid parentheses '((()))}'", () => {
  expect(isValid("((()))}")).toBe(false);
});

test("should return true for empty string", () => {
  expect(isValid("")).toBe(true);
});

test("should return false for single closing bracket '}'", () => {
  expect(isValid("}")).toBe(false);
});

test("should return false for single opening bracket '{'", () => {
  expect(isValid("{")).toBe(false);
});
