const { calPoints } = require("../solutions/baseball-game");

describe("calPoints", () => {
  test("should handle basic operations correctly", () => {
    const operations = ["5", "2", "C", "D", "+"];
    expect(calPoints(operations)).toBe(30);
    // Explanation: [5, 2] -> [5] -> [5, 10] -> [5, 10, 15] = 30
  });

  test("should return 0 for empty operations array", () => {
    expect(calPoints([])).toBe(0);
  });

  test("should handle array with only numbers", () => {
    const operations = ["1", "2", "3"];
    expect(calPoints(operations)).toBe(6);
  });

  test('should handle multiple "C" operations', () => {
    const operations = ["5", "2", "C", "C"];
    expect(calPoints(operations)).toBe(0);
  });

  test('should handle multiple "D" operations', () => {
    const operations = ["5", "D", "D"];
    expect(calPoints(operations)).toBe(35);
    // Explanation: [5] -> [5, 10] -> [5, 10, 20] = 35
  });

  test("should handle complex combination of operations", () => {
    const operations = ["5", "-2", "4", "C", "D", "9", "+", "+"];
    expect(calPoints(operations)).toBe(27);
    // Explanation: [5, -2, 4] -> [5, -2] -> [5, -2, -4] -> [5, -2, -4, 9] ->
    // [5, -2, -4, 9, 5] -> [5, -2, -4, 9, 5, 14] = 27
  });

  test("should handle single operation correctly", () => {
    expect(calPoints(["5"])).toBe(5);
    expect(calPoints(["C"])).toBe(0);
    expect(calPoints(["D"])).toBe(0);
    expect(calPoints(["+"])).toBe(0);
  });
});
