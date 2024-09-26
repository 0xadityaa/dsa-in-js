// Pseudo Code:
// For encoding the input arr. in one string we can simply merge all the elements of input arr. into a string
// Which could separate each element with a special char. (#)
// In order to cover the edge case where # is also a char of input arr. we can also put up length of each element before joining it to a string.

/**
 * @param {string[]} strs
 * @returns {string}
 */
function encode(strs) {
  let res = "";
  for (let i in strs) {
    res += `${strs[i].length}#${strs[i]}`;
  }
  return res;
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
  let res = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    let len = parseInt(str.substring(i, j), 10);
    i = j + 1;
    j = i + len;
    res.push(str.substring(i, j));
    i = j;
  }
  return res;
}

module.exports = {
  encode,
  decode,
};
