const { shortestSubarray } = require("../solutions/shortest-subarray-with-sum-at-least-k");

describe("shortestSubarray", () => {
    test("should return 1 for input [1, 2, 3, 4] and k = 7", () => {
        expect(shortestSubarray([1, 2, 3, 4], 7)).toBe(2); // Subarray [3, 4]
    });

    test("should return 2 for input [2, -1, 2, 1] and k = 3", () => {
        expect(shortestSubarray([2, -1, 2, 1], 3)).toBe(2); // Subarray [2, 1]
    });

    test("should return -1 for input [1, 2, 3] and k = 7", () => {
        expect(shortestSubarray([1, 2, 3], 7)).toBe(-1); // No valid subarray
    });

    test("should return 1 for input [5] and k = 5", () => {
        expect(shortestSubarray([5], 5)).toBe(1); // Subarray [5]
    });

    test("should return 3 for input [1, 2, 3, 4, 5] and k = 11", () => {
        expect(shortestSubarray([1, 2, 3, 4, 5], 11)).toBe(3); // Subarray [3, 4, 5]
    });

    test("should return 1 for input [1, 2, 3, 4, 5] and k = 5", () => {
        expect(shortestSubarray([1, 2, 3, 4, 5], 5)).toBe(1); // Subarray [5]
    });

    test("should return -1 for input [] and k = 1", () => {
        expect(shortestSubarray([], 1)).toBe(-1); // No valid subarray
    });

    test("should return 1 for input [1, 2, 3, 4, 5] and k = 1", () => {
        expect(shortestSubarray([1, 2, 3, 4, 5], 1)).toBe(1); // Subarray [1]
    });

    test("should return 2 for input [1, 2, 3, -1, 4] and k = 5", () => {
        expect(shortestSubarray([1, 2, 3, -1, 4], 5)).toBe(2); // Subarray [2, 3]
    });
});
