const { getSum } = require("../solutions/sum-of-two-integers");

describe("getSum", () => {
  test("should return 5 for inputs 2 and 3", () => {
    expect(getSum(2, 3)).toBe(5);
  });

  test("should return -1 for inputs -2 and 1", () => {
    expect(getSum(-2, 1)).toBe(-1);
  });

  test("should return 0 for inputs 0 and 0", () => {
    expect(getSum(0, 0)).toBe(0);
  });

  test("should return 10 for inputs 5 and 5", () => {
    expect(getSum(5, 5)).toBe(10);
  });

  test("should return 7 for inputs 3 and 4", () => {
    expect(getSum(3, 4)).toBe(7);
  });

  test("should return -5 for inputs -2 and -3", () => {
    expect(getSum(-2, -3)).toBe(-5);
  });

  test("should return 1 for inputs 1 and 0", () => {
    expect(getSum(1, 0)).toBe(1);
  });

  test("should return -3 for inputs -1 and -2", () => {
    expect(getSum(-1, -2)).toBe(-3);
  });

  test("should return 100 for inputs 50 and 50", () => {
    expect(getSum(50, 50)).toBe(100);
  });

  test("should return 0 for inputs 1 and -1", () => {
    expect(getSum(1, -1)).toBe(0);
  });
});

