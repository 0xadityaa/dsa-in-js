const { rob } = require('../solutions/house-robber');

describe('House Robber', () => {
    test('should return 0 for an empty array', () => {
        expect(rob([])).toBe(0);
    });

    test('should return the amount for a single house', () => {
        expect(rob([5])).toBe(5);
    });

    test('should return the maximum amount for two houses', () => {
        expect(rob([1, 2])).toBe(2);
        expect(rob([2, 1])).toBe(2);
    });

    test('should handle larger inputs', () => {
        expect(rob([2, 7, 9, 3, 1])).toBe(12); // 2 + 9 + 1
        expect(rob([1, 2, 3, 1])).toBe(4); // 1 + 3
        expect(rob([5, 1, 2, 10, 6])).toBe(15); // 5 + 10
    });

    test('should handle cases with zeros', () => {
        expect(rob([0, 0, 0, 0])).toBe(0);
        expect(rob([0, 1, 0, 2])).toBe(3); // 1 + 2
    });

    test('should return the correct amount for alternating high and low values', () => {
        expect(rob([10, 1, 10, 1, 10])).toBe(30); // 10 + 10 + 10
        expect(rob([1, 10, 1, 10, 1])).toBe(20); // 10 + 10
    });
});
