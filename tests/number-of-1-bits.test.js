const { hammingWeight } = require("../solutions/number-of-1-bits");

describe("hammingWeight", () => {
  test("should return 1 for input 1", () => {
    expect(hammingWeight(1)).toBe(1);
  });

  test("should return 3 for input 11", () => {
    expect(hammingWeight(11)).toBe(3);
  });

  test("should return 1 for input 16", () => {
    expect(hammingWeight(16)).toBe(1);
  });

  test("should return 0 for input 0", () => {
    expect(hammingWeight(0)).toBe(0);
  });

  test("should return 31 for input 2147483647", () => {
    expect(hammingWeight(2147483647)).toBe(31);
  });

  test("should return 32 for input 4294967295", () => {
    expect(hammingWeight(4294967295)).toBe(32);
  });
});
