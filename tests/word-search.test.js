const { exist } = require("../solutions/word-search");

describe("Word Search", () => {
  test("should return true for a word that exists in the board", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ];
    const word = "ABCCED";
    expect(exist(board, word)).toBe(true);
  });

  test("should return false for a word that does not exist in the board", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ];
    const word = "SEE";
    expect(exist(board, word)).toBe(true);
  });

  test("should return false for a word that cannot be formed", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ];
    const word = "ABCB";
    expect(exist(board, word)).toBe(false);
  });

  test("should return true for a single character word that exists", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ];
    const word = "A";
    expect(exist(board, word)).toBe(true);
  });

  test("should return false for a single character word that does not exist", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ];
    const word = "X";
    expect(exist(board, word)).toBe(false);
  });

  test("should return false for a board with empty rows", () => {
    const board = [
      [],
      [],
      []
    ];
    const word = "A";
    expect(exist(board, word)).toBe(false);
  });

  test("should return true for a word that uses all characters in the board", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ];
    const word = "ABCCED";
    expect(exist(board, word)).toBe(true);
  });
});

