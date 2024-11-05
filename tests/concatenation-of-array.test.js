const { getConcatenation } = require("../solutions/concatenation-of-array");

describe("getConcatenation", () => {
  test("should return [1, 2, 1] for input [1, 2]", () => {
    expect(getConcatenation([1, 2])).toEqual([1, 2, 1, 2]);
  });

  test("should return [0, 0] for input [0]", () => {
    expect(getConcatenation([0])).toEqual([0, 0]);
  });

  test("should return [] for input []", () => {
    expect(getConcatenation([])).toEqual([]);
  });

  test("should return [1, 2, 3, 1, 2, 3] for input [1, 2, 3]", () => {
    expect(getConcatenation([1, 2, 3])).toEqual([1, 2, 3, 1, 2, 3]);
  });

  test("should return [5, 5, 5, 5] for input [5, 5]", () => {
    expect(getConcatenation([5, 5])).toEqual([5, 5, 5, 5]);
  });

  test("should return [1, 2, 3, 4, 1, 2, 3, 4] for input [1, 2, 3, 4]", () => {
    expect(getConcatenation([1, 2, 3, 4])).toEqual([1, 2, 3, 4, 1, 2, 3, 4]);
  });
});
