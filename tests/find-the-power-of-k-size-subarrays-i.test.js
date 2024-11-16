const { resultsArray } = require("../solutions/find-the-power-of-k-size-subarrays-i");

describe('resultsArray', () => {
    // Test case 1: Basic case with consecutive numbers in order
    test('should return correct results for consecutive numbers in order', () => {
        expect(resultsArray([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
        expect(resultsArray([2, 3, 4], 3)).toEqual([4]);
    });

    // Test case 2: Non-consecutive numbers
    test('should return -1 for non-consecutive numbers', () => {
        expect(resultsArray([1, 3, 5], 3)).toEqual([-1]);
        expect(resultsArray([1, 2, 4, 6], 3)).toEqual([-1, -1]);
    });

    // Test case 3: Numbers not in sorted order
    test('should return -1 for numbers not in sorted order', () => {
        expect(resultsArray([3, 2, 1], 3)).toEqual([-1]);
        expect(resultsArray([2, 1, 3, 4], 3)).toEqual([-1, -1]);
    });

    // Test case 4: Mixed cases with both valid and invalid subarrays
    test('should handle mixed cases correctly', () => {
        expect(resultsArray([1, 2, 3, 2, 1], 3)).toEqual([3, -1, -1]);
        expect(resultsArray([1, 2, 3, 4, 3], 3)).toEqual([3, 4, -1]);
    });

    // Test case 5: Edge case - k equals array length
    test('should handle when k equals array length', () => {
        expect(resultsArray([1, 2, 3], 3)).toEqual([3]);
        expect(resultsArray([3, 2, 1], 3)).toEqual([-1]);
    });

    // Test case 6: Edge case - minimum valid k value
    test('should handle minimum valid k value', () => {
        expect(resultsArray([1, 2], 2)).toEqual([2]);
        expect(resultsArray([2, 1], 2)).toEqual([-1]);
    });

    // Test case 7: Edge case - array with duplicate numbers
    test('should handle arrays with duplicate numbers', () => {
        expect(resultsArray([1, 1, 2, 2], 3)).toEqual([-1, -1]);
        expect(resultsArray([1, 2, 2, 3], 3)).toEqual([-1, -1]);
    });

    // Test case 8: Larger consecutive sequences
    test('should handle larger consecutive sequences', () => {
        expect(resultsArray([1, 2, 3, 4, 5], 4)).toEqual([4, 5]);
        expect(resultsArray([2, 3, 4, 5, 6], 5)).toEqual([6]);
    });

    // Test case 9: Invalid inputs - should return empty array
    test('should handle invalid inputs appropriately', () => {
        expect(resultsArray([], 1)).toEqual([]);
        expect(resultsArray([1], 2)).toEqual([]);
        expect(resultsArray([1, 2], 3)).toEqual([]);
    });

    // Test case 10: Single valid subarray among invalid ones
    test('should handle single valid subarray among invalid ones', () => {
        expect(resultsArray([5, 1, 2, 3, 6], 3)).toEqual([-1, 3, -1]);
        expect(resultsArray([4, 1, 2, 3, 5], 3)).toEqual([-1, 3, -1]);
    });
});
