const { reverseBits } = require("../solutions/reverse-bits");

describe("reverseBits", () => {
  test("should reverse bits of 0", () => {
    expect(reverseBits(0)).toBe(0);
  });

  test("should reverse bits of 1", () => {
    expect(reverseBits(1)).toBe(2147483648); // 1 in binary is 000...0001, reversed is 1000...0000
  });

  test("should reverse bits of 2", () => {
    expect(reverseBits(2)).toBe(1073741824); // 2 in binary is 000...0010, reversed is 1000...0000
  });

  test("should reverse bits of 3", () => {
    expect(reverseBits(3)).toBe(3221225472); // 3 in binary is 000...0011, reversed is 1100...0000
  });

  test("should reverse bits of 4294967295", () => {
    expect(reverseBits(4294967295)).toBe(4294967295); // All bits set
  });

  test("should reverse bits of 43261596", () => {
    expect(reverseBits(43261596)).toBe(964176192); // Example from the problem statement
  });

  test("should reverse bits of 2147483648", () => {
    expect(reverseBits(2147483648)).toBe(1); // 1000...0000 reversed is 000...0001
  });

  test("should reverse bits of 15", () => {
    expect(reverseBits(15)).toBe(4026531840); // 0000...1111 reversed is 1111...0000
  });
});

