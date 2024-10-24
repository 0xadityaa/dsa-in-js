const { countBits } = require("../solutions/counting-bits");

describe("countBits", () => {
  test("should return [0] for input 0", () => {
    expect(countBits(0)).toEqual([0]);
  });

  test("should return [0, 1] for input 1", () => {
    expect(countBits(1)).toEqual([0, 1]);
  });

  test("should return [0, 1, 1] for input 2", () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
  });

  test("should return [0, 1, 1, 2] for input 3", () => {
    expect(countBits(3)).toEqual([0, 1, 1, 2]);
  });

  test("should return [0, 1, 1, 2, 1] for input 4", () => {
    expect(countBits(4)).toEqual([0, 1, 1, 2, 1]);
  });

  test("should return [0, 1, 1, 2, 1, 2] for input 5", () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });

  test("should return [0, 1, 1, 2, 1, 2, 2] for input 6", () => {
    expect(countBits(6)).toEqual([0, 1, 1, 2, 1, 2, 2]);
  });

  test("should return [0, 1, 1, 2, 1, 2, 2, 3] for input 7", () => {
    expect(countBits(7)).toEqual([0, 1, 1, 2, 1, 2, 2, 3]);
  });

  test("should return [0, 1, 1, 2, 1, 2, 2, 3, 1] for input 8", () => {
    expect(countBits(8)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1]);
  });

  test("should return [0, 1, 1, 2, 1, 2, 2, 3, 1, 2] for input 9", () => {
    expect(countBits(9)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2]);
  });

  test("should return [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2] for input 10", () => {
    expect(countBits(10)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]);
  });
});

