// Function takeCharacters(s: STRING, k: NUMBER) RETURNS NUMBER
//     Step 1: Initialize an array count of size 3 to hold the count of characters 'a', 'b', and 'c'
//     For each character c in string s DO
//         Increment count for character c based on its ASCII value

//     Step 2: Check if the minimum count in count is less than k
//     IF minimum count < k THEN
//         RETURN -1

//     Step 3: Initialize result res to Infinity and left pointer l to 0
//     For right pointer r from 0 to length of s - 1 DO
//         Decrement count for character at index r in s

//         Step 4: While the minimum count in count is less than k DO
//             Increment count for character at index l in s
//             Increment left pointer l

//         Step 5: Update result res with the minimum of res and the length of the substring
//         res = minimum of res and (length of s - (r - l + 1))

//     Step 6: RETURN res
// END FUNCTION

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
    const count = [0, 0, 0];
    for (let c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    if (Math.min(...count) < k) {
        return -1;
    }

    let res = Infinity;
    let l = 0;
    for (let r = 0; r < s.length; r++) {
        count[s.charCodeAt(r) - 'a'.charCodeAt(0)]--;
        while (Math.min(...count) < k) {
            count[s.charCodeAt(l) - 'a'.charCodeAt(0)]++;
            l++;
        }
        res = Math.min(res, s.length - (r - l + 1));
    }
    return res;
};

module.exports = { takeCharacters };