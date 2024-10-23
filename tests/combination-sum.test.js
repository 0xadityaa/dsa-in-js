const { combinationSum } = require("../solutions/combination-sum");

describe("combinationSum", () => {
  test("should return correct combinations for [2,3,6,7] with target 7", () => {
    const candidates = [2, 3, 6, 7];
    const target = 7;
    const expected = [[2, 2, 3], [7]];
    expect(combinationSum(candidates, target)).toEqual(
      expect.arrayContaining(expected)
    );
    expect(combinationSum(candidates, target)).toHaveLength(expected.length);
  });

  test("should return correct combinations for [2,3,5] with target 8", () => {
    const candidates = [2, 3, 5];
    const target = 8;
    const expected = [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ];
    expect(combinationSum(candidates, target)).toEqual(
      expect.arrayContaining(expected)
    );
    expect(combinationSum(candidates, target)).toHaveLength(expected.length);
  });

  test("should return empty array when no combinations are possible", () => {
    const candidates = [2, 4, 6];
    const target = 1;
    expect(combinationSum(candidates, target)).toEqual([]);
  });

  test("should handle single candidate equal to target", () => {
    const candidates = [5];
    const target = 5;
    expect(combinationSum(candidates, target)).toEqual([[5]]);
  });

  test("should return empty array for empty candidates", () => {
    const candidates = [];
    const target = 5;
    expect(combinationSum(candidates, target)).toEqual([]);
  });
});
