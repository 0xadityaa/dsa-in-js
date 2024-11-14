const { minimizedMaximum } = require("../solutions/minimized-maximum-of-products-distributed-to-any-store");

describe('minimizedMaximum', () => {
    test('basic case with simple distribution', () => {
        const n = 6;
        const quantities = [11, 6];
        const result = minimizedMaximum(n, quantities);
        expect(result).toBe(3);
    });

    test('case with single quantity', () => {
        const n = 4;
        const quantities = [8];
        const result = minimizedMaximum(n, quantities);
        expect(result).toBe(2);
        // Explanation: 8 can be split as 2+2+2+2
    });

    test('case where n equals total quantities length', () => {
        const n = 3;
        const quantities = [2, 3, 4];
        const result = minimizedMaximum(n, quantities);
        expect(result).toBe(4);
        // Each quantity gets one store
    });

    test('case with larger numbers', () => {
        const n = 7;
        const quantities = [15, 10, 10];
        const result = minimizedMaximum(n, quantities);
        expect(result).toBe(5);
        // 15 splits into 5+5+5, 10 splits into 5+5, 10 splits into 5+5
    });

    test('edge case with minimum possible n', () => {
        const n = 2;
        const quantities = [3, 3];
        const result = minimizedMaximum(n, quantities);
        expect(result).toBe(3);
        // Each quantity gets one store
    });

    test('case with different sized quantities', () => {
        const n = 8;
        const quantities = [20, 5, 15];
        const result = minimizedMaximum(n, quantities);
        expect(result).toBe(5);
        // 20 splits as 5+5+5+5, 5 as 5, 15 as 5+5+5
    });

    test('edge case with large single quantity', () => {
        const n = 10;
        const quantities = [100];
        const result = minimizedMaximum(n, quantities);
        expect(result).toBe(10);
        // 100 splits into 10 stores with 10 each
    });

    // Error cases
    test('should handle invalid inputs', () => {
        expect(() => minimizedMaximum(0, [1, 2, 3])).not.toThrow();
        expect(() => minimizedMaximum(-1, [1, 2, 3])).not.toThrow();
        expect(() => minimizedMaximum(3, [])).not.toThrow();
    });

    test('case with minimum possible value', () => {
        const n = 10;
        const quantities = [1, 1, 1, 1];
        const result = minimizedMaximum(n, quantities);
        expect(result).toBe(1);
        // Each quantity gets one store
    });
});