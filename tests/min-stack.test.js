const { MinStack } = require("../solutions/min-stack");

describe("MinStack", () => {
  let minStack;

  beforeEach(() => {
    minStack = new MinStack();
  });

  test("should return the minimum value after multiple pushes", () => {
    minStack.push(5);
    minStack.push(2);
    minStack.push(3);
    expect(minStack.getMin()).toBe(2);
  });

  test("should return the top value after pushes", () => {
    minStack.push(1);
    minStack.push(2);
    expect(minStack.top()).toBe(2);
  });

  test("should return the minimum value after popping an element", () => {
    minStack.push(3);
    minStack.push(5);
    minStack.push(2);
    minStack.push(1);
    minStack.pop(); // Remove 1
    expect(minStack.getMin()).toBe(2);
  });

  test("should return the correct top value after popping", () => {
    minStack.push(10);
    minStack.push(20);
    minStack.pop(); // Remove 20
    expect(minStack.top()).toBe(10);
  });

  test("should return the minimum value when all elements are the same", () => {
    minStack.push(4);
    minStack.push(4);
    minStack.push(4);
    expect(minStack.getMin()).toBe(4);
  });

  test("should handle popping all elements", () => {
    minStack.push(1);
    minStack.push(2);
    minStack.pop(); // Remove 2
    minStack.pop(); // Remove 1
    expect(minStack.stack.length).toBe(0);
  });

  test("should return undefined for top and min on empty stack", () => {
    expect(minStack.top()).toBeUndefined();
    expect(minStack.getMin()).toBeUndefined();
  });
});
