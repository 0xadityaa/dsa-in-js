const { maxProfit } = require("../solutions/best-time-to-buy-and-sell-stock");

test("should return 5 for prices [7, 1, 5, 3, 6, 4]", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

test("should return 0 for prices [7, 6, 4, 3, 1]", () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});

test("should return 4 for prices [1, 2, 3, 4, 5]", () => {
  expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
});

test("should return 0 for prices [1, 1, 1, 1]", () => {
  expect(maxProfit([1, 1, 1, 1])).toBe(0);
});

test("should return 0 for empty prices array", () => {
  expect(maxProfit([])).toBe(0);
});

test("should return 0 for single price in array", () => {
  expect(maxProfit([5])).toBe(0);
});
