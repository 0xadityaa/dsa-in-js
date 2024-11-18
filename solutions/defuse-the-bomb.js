// FUNCTION decrypt(code: ARRAY OF NUMBERS, k: NUMBER) RETURNS ARRAY OF NUMBERS
//      Step 1: Initialize the result array
//     INITIALIZE res AS NEW ARRAY OF LENGTH OF code FILLED WITH 0
//      This array will hold the decrypted values based on the input code.
//      Step 2: Loop through each index of the code array
//     FOR EACH i FROM 0 TO LENGTH OF code - 1 DO
//          Check the value of k to determine the direction of summation
//         IF k > 0 THEN
//              Step 3: Sum the next k elements
//             FOR EACH j FROM i + 1 TO i + k DO
//                  Add the value from the code array to the result
//                 res[i] = res[i] + code[j MOD LENGTH OF code]
//                  Use modulo to wrap around if j exceeds the length of the code array
//             END FOR
//         ELSE IF k < 0 THEN
//              Step 4: Sum the previous k elements
//             FOR EACH j FROM i - 1 TO i + k DO
//                  Add the value from the code array to the result
//                 res[i] = res[i] + code[(j MOD LENGTH OF code + LENGTH OF code) MOD LENGTH OF code]
//                  Use modulo to wrap around and ensure positive indexing
//             END FOR
//         END IF
//     END FOR
//      Step 5: Return the result array
//     RETURN res
// END FUNCTION

/*
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {

    let res = new Array(code.length).fill(0);

    for (let i = 0; i < code.length; i++) {
        if (k > 0) {
            for (let j = i + 1; j < i + 1 + k; j++) {
                res[i] += code[j % code.length];
            }
        } else if (k < 0) {
            for (let j = i - 1; j > i - 1 + k; j--) {
                res[i] += code[((j % code.length) + code.length) % code.length];
            }
        }
    }
    return res;
};

module.exports = { decrypt };