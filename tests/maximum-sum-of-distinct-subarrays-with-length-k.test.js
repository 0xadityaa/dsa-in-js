const { maximumSubarraySum } = require("../solutions/maximum-sum-of-distinct-subarrays-with-length-k");

describe("maximumSubarraySum", () => {
    test("should return 7 for input [1, 2, 3, 4] and k = 3", () => {
        expect(maximumSubarraySum([1, 2, 3, 4], 3)).toBe(9); // Subarray [2, 3, 4]
    });

    test("should return 6 for input [1, 2, 1, 2, 3] and k = 3", () => {
        expect(maximumSubarraySum([1, 2, 1, 2, 3], 3)).toBe(6); // Subarray [1, 2, 3]
    });

    test("should return 0 for input [1, 1, 1] and k = 2", () => {
        expect(maximumSubarraySum([1, 1, 1], 2)).toBe(0); // No valid subarray with distinct elements
    });

    test("should return 5 for input [5, 1, 2, 3] and k = 4", () => {
        expect(maximumSubarraySum([5, 1, 2, 3], 4)).toBe(11); // Subarray [5, 1, 2, 3]
    });

    test("should return 0 for input [] and k = 1", () => {
        expect(maximumSubarraySum([], 1)).toBe(0); // No valid subarray
    });

    test("should return 1 for input [1] and k = 1", () => {
        expect(maximumSubarraySum([1], 1)).toBe(1); // Subarray [1]
    });

    test("should return 0 for input [1, 2, 3] and k = 4", () => {
        expect(maximumSubarraySum([1, 2, 3], 4)).toBe(0); // No valid subarray
    });

    test("should return 15 for input [1, 2, 3, 4, 5] and k = 5", () => {
        expect(maximumSubarraySum([1, 2, 3, 4, 5], 5)).toBe(15); // Subarray [1, 2, 3, 4, 5]
    });

    test("should return 9 for input [1, 2, 3, 4, 5, 6] and k = 3", () => {
        expect(maximumSubarraySum([1, 2, 3, 4, 5, 6], 3)).toBe(15); // Subarray [4, 5, 6]
    });
});
