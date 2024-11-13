// Pseudo Code:
// The goal is to calculate the nth Fibonacci number using recursion.
// 1. Define a function `fib(n)` that takes a number `n` as input.
// 2. If `n` is 0, return 0 (base case).
// 3. If `n` is 1, return 1 (base case).
// 4. Otherwise, return the sum of `fib(n - 1)` and `fib(n - 2)` (recursive call).

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // Base Case
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Recursive Call
  let res = fib(n - 1) + fib(n - 2);
  return res;
};

module.exports = { fib };
