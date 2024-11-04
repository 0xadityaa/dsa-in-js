// Pseudo Code:
// The goal is to determine if a given Sudoku board is valid.
// A valid Sudoku board must satisfy the following conditions:
// 1. Each row must contain the digits 1-9 without repetition.
// 2. Each column must contain the digits 1-9 without repetition.
// 3. Each of the 9 sub-boxes (3x3 grids) must contain the digits 1-9 without repetition.

// Function isValidSudoku(board):
// 1. Initialize three arrays to keep track of the digits seen in rows, columns, and squares.
//    - rows: an array of size 9 to track digits for each row.
//    - cols: an array of size 9 to track digits for each column.
//    - squares: an array of size 9 to track digits for each 3x3 square.
// 2. Iterate through each cell in the 9x9 board using two nested loops (r, c):
//    a. If the cell is empty (i.e., contains '.'), continue to the next cell.
//    b. Convert the character in the cell to an integer value (val) by subtracting '1'.
//    c. Check if the digit has already been seen in the corresponding row, column, or square:
//       - If yes, return false (the board is invalid).
//    d. If no, mark the digit as seen in the corresponding row, column, and square.
// 3. After checking all cells, return true (the board is valid).

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rows = new Array(9).fill(0);
  let cols = new Array(9).fill(0);
  let squares = new Array(9).fill(0);

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") continue;

      let val = board[r][c] - "1";

      if (
        rows[r] & (1 << val) ||
        cols[c] & (1 << val) ||
        squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)] & (1 << val)
      ) {
        return false;
      }

      rows[r] |= 1 << val;
      cols[c] |= 1 << val;
      squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)] |= 1 << val;
    }
  }
  return true;
};

module.exports = { isValidSudoku };
