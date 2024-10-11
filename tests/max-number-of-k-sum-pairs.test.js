const { maxOperations } = require("../solutions/max-number-of-k-sum-pairs");

describe("maxOperations", () => {
  test("should return 2 for input [1, 2, 3, 4] and k = 5", () => {
    expect(maxOperations([1, 2, 3, 4], 5)).toBe(2);
  });

  test("should return 1 for input [3, 1, 3, 4, 3] and k = 6", () => {
    expect(maxOperations([3, 1, 3, 4, 3], 6)).toBe(1);
  });

  test("should return 0 for input [1, 2, 3] and k = 7", () => {
    expect(maxOperations([1, 2, 3], 7)).toBe(0);
  });

  test("should return 3 for input [1, 2, 3, 4, 5, 6] and k = 7", () => {
    expect(maxOperations([1, 2, 3, 4, 5, 6], 7)).toBe(3);
  });

  test("should return 0 for input [] and k = 5", () => {
    expect(maxOperations([], 5)).toBe(0);
  });

  test("should return 0 for input [1, 1, 1] and k = 2", () => {
    expect(maxOperations([1, 1, 1], 2)).toBe(1);
  });

  test("should return 2 for input [1, 2, 2, 3, 3] and k = 4", () => {
    expect(maxOperations([1, 2, 2, 3, 3], 4)).toBe(2);
  });
});

