// Pseudo Code:
// Function exist(board, word):
// 1. Initialize m as the number of rows in the board.
// 2. Initialize n as the number of columns in the board.
// 3. Iterate through each cell in the board using two nested loops (i, j):
//    a. If the character at board[i][j] matches the first character of the word:
//       i. Call the dfs function with parameters (board, word, index = 0, i, j, m, n).
//       ii. If dfs returns true, return true.
// 4. If no match is found, return false.

// Function dfs(board, word, index, i, j, m, n):
// 1. If i or j is out of bounds or board[i][j] does not match word[index], return false.
// 2. If index equals the length of the word minus one, return true (word found).
// 3. Mark board[i][j] as visited by setting it to a special character (e.g., "#").
// 4. Recursively call dfs for the four possible directions (up, down, left, right) with index incremented by 1.
// 5. If any of the recursive calls return true, return true.
// 6. Restore board[i][j] to its original character (unmark it).
// 7. Return false (word not found).

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  let m = board.length;
  let n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0]) {
        if (dfs(board, word, 0, i, j, m, n)) {
          return true;
        }
      }
    }
  }

  return false;
}

function dfs(board, word, index, i, j, m, n) {
  if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) {
    return false;
  }

  if (index == word.length - 1) {
    return true;
  }

  board[i][j] = "#";

  if (
    dfs(board, word, index + 1, i - 1, j, m, n) ||
    dfs(board, word, index + 1, i + 1, j, m, n) ||
    dfs(board, word, index + 1, i, j - 1, m, n) ||
    dfs(board, word, index + 1, i, j + 1, m, n)
  ) {
    return true;
  }

  board[i][j] = word[index];
  return false;
}

module.exports = { exist, dfs };
