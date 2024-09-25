const { topKFrequent } = require("../solutions/top-k-elements");

function sortArray(arr) {
  return arr ? arr.sort((a, b) => a - b) : [];
}

test("should return [1, 3, 5] if input is [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5] and k is 3", () => {
  const result = topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 3);
  const expected = [1, 3, 5];
  expect(sortArray(result)).toEqual(sortArray(expected));
});

test("should return [1, 2, 3, 4, 5] if input is [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5] and k is 5", () => {
  const result = topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 5);
  const expected = [1, 2, 3, 4, 5];
  expect(sortArray(result)).toEqual(sortArray(expected));
});

test("should return [1, 2, 3, 4, 5] if input is [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5] and k is 6", () => {
  const result = topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 6);
  const expected = [1, 2, 3, 4, 5];
  expect(sortArray(result)).toEqual(sortArray(expected));
});

test("should return [1, 2, 3, 4, 5] if input is [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5] and k is 7", () => {
  const result = topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 7);
  const expected = [1, 2, 3, 4, 5];
  expect(sortArray(result)).toEqual(sortArray(expected));
});

test("should return [1, 2, 3, 4, 5] if input is [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5] and k is 8", () => {
  const result = topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 8);
  const expected = [1, 2, 3, 4, 5];
  expect(sortArray(result)).toEqual(sortArray(expected));
});