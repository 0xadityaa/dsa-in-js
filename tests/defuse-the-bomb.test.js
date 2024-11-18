const { decrypt } = require('../solutions/defuse-the-bomb');

describe('decrypt', () => {
    test('returns empty array when input is empty', () => {
        expect(decrypt([], 1)).toEqual([]);
    });

    test('returns array of zeros when k is 0', () => {
        expect(decrypt([1, 2, 3], 0)).toEqual([0, 0, 0]);
    });

    test('decrypts with positive k', () => {
        expect(decrypt([5, 7, 1, 4], 3)).toEqual([12, 10, 16, 13]);
    });

    test('decrypts with negative k', () => {
        expect(decrypt([1, 2, 3, 4], -2)).toEqual([7, 5, 3, 5]);
    });

    test('handles wrapping around array with positive k', () => {
        expect(decrypt([2, 4, 9, 3], 2)).toEqual([13, 12, 5, 6]);
    });

    test('handles wrapping around array with negative k', () => {
        expect(decrypt([1, 2, 3, 4], -3)).toEqual([9, 8, 7, 6]);
    });

    test('handles array of length 1', () => {
        expect(decrypt([5], 2)).toEqual([10]);
        expect(decrypt([5], -2)).toEqual([10]);
    });

    test('handles k larger than array length', () => {
        expect(decrypt([1, 2, 3], 4)).toEqual([8, 9, 7]);
    });

    test('handles k smaller than negative array length', () => {
        expect(decrypt([1, 2, 3], -4)).toEqual([9, 7, 8]);
    });
});