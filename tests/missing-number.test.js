const { missingNumber } = require("../solutions/missing-number");

describe("missingNumber", () => {
  test("should return 2 for input [0, 1]", () => {
    expect(missingNumber([0, 1])).toBe(2);
  });

  test("should return 2 for input [3, 0, 1]", () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });

  test("should return 8 for input [0, 1, 2, 3, 4, 5, 6, 7]", () => {
    expect(missingNumber([0, 1, 2, 3, 4, 5, 6, 7])).toBe(8);
  });

  test("should return 0 for input [1]", () => {
    expect(missingNumber([1])).toBe(0);
  });

  test("should return 1 for input [0]", () => {
    expect(missingNumber([0])).toBe(1);
  });

  test("should return 3 for input [0, 1, 2]", () => {
    expect(missingNumber([0, 1, 2])).toBe(3);
  });

  test("should return 4 for input [0, 1, 3]", () => {
    expect(missingNumber([0, 1, 3])).toBe(2);
  });

  test("should return 5 for input [0, 1, 2, 3, 4]", () => {
    expect(missingNumber([0, 1, 2, 3, 4])).toBe(5);
  });
});

