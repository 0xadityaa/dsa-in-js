const { fib } = require("../solutions/fibonacci-number");

describe("Fibonacci Function", () => {
  test("should return 0 for input 0", () => {
    expect(fib(0)).toBe(0);
  });

  test("should return 1 for input 1", () => {
    expect(fib(1)).toBe(1);
  });

  test("should return 1 for input 2", () => {
    expect(fib(2)).toBe(1);
  });

  test("should return 2 for input 3", () => {
    expect(fib(3)).toBe(2);
  });

  test("should return 3 for input 4", () => {
    expect(fib(4)).toBe(3);
  });

  test("should return 5 for input 5", () => {
    expect(fib(5)).toBe(5);
  });

  test("should return 8 for input 6", () => {
    expect(fib(6)).toBe(8);
  });

  test("should return 13 for input 7", () => {
    expect(fib(7)).toBe(13);
  });

  test("should return 21 for input 8", () => {
    expect(fib(8)).toBe(21);
  });

  test("should return 34 for input 9", () => {
    expect(fib(9)).toBe(34);
  });

  test("should return 55 for input 10", () => {
    expect(fib(10)).toBe(55);
  });
});
