const { climbStairs } = require("../solutions/climbing-stairs");

describe("climbStairs", () => {
    test("should return 1 for 1 step", () => {
        expect(climbStairs(1)).toBe(1);
    });

    test("should return 2 for 2 steps", () => {
        expect(climbStairs(2)).toBe(2);
    });

    test("should return 3 for 3 steps", () => {
        expect(climbStairs(3)).toBe(3);
    });

    test("should return 5 for 4 steps", () => {
        expect(climbStairs(4)).toBe(5);
    });

    test("should return 8 for 5 steps", () => {
        expect(climbStairs(5)).toBe(8);
    });

    test("should return 13 for 6 steps", () => {
        expect(climbStairs(6)).toBe(13);
    });

    test("should return 21 for 7 steps", () => {
        expect(climbStairs(7)).toBe(21);
    });

    test("should return 34 for 8 steps", () => {
        expect(climbStairs(8)).toBe(34);
    });

    test("should return 55 for 9 steps", () => {
        expect(climbStairs(9)).toBe(55);
    });

    test("should return 89 for 10 steps", () => {
        expect(climbStairs(10)).toBe(89);
    });
});
