const { maxArea } = require('../solutions/max-water-container');

describe('maxArea', () => {
  test('should return 49 for heights [1,8,6,2,5,4,8,3,7]', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  test('should return 1 for heights [1,1]', () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  test('should return 16 for heights [4,3,2,1,4]', () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });

  test('should return 2 for heights [1,2,1]', () => {
    expect(maxArea([1, 2, 1])).toBe(2);
  });

  test('should return 0 for heights []', () => {
    expect(maxArea([])).toBe(0);
  });

  test('should return 0 for heights [0,0,0,0]', () => {
    expect(maxArea([0, 0, 0, 0])).toBe(0);
  });
});
