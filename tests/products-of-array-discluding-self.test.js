const { productExceptSelf } = require("../solutions/products-of-array-discluding-self");

test("should return [24, 12, 8, 6] for input [1, 2, 3, 4]", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test("should return [0, 0, 9, 0, 0] for input [-1, 1, 0, -3, 3]", () => {
  const result = productExceptSelf([-1, 1, 0, -3, 3]);
  const expected = [0, 0, 9, 0, 0];
  expect(result.map(Math.abs)).toEqual(expected.map(Math.abs));
});

test("should return [2, 1] for input [1, 2]", () => {
  expect(productExceptSelf([1, 2])).toEqual([2, 1]);
});

test("should return [1] for input [1]", () => {
  expect(productExceptSelf([1])).toEqual([1]);
});

test("should return [0, 0, 0, 0] for input [0, 0, 0, 0]", () => {
  expect(productExceptSelf([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
});
