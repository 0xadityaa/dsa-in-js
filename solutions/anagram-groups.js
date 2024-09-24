// Pseudo Code:
// sort each string in the input arr.
// group similar sorted strings in a new sub-array.
// This could be optimized using a hashmap.

// Optimized Pseudo Code:
// Iterate through the input arr. and populate hashmap
// We store the word count of a string as key
// We store the arr. of strings with same word count as value
// return all values as a subarray from hashmap

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const ans = {}; // Mapping charCount to List of anagrams

  for (let i of strs) {
    // iterating through each input str. element
    const count = Array(26).fill(0); // Initializing an arr. with fix length of 26 for each char in english and initially filling with 0
    for (let j of i) {
      // iterating through each str. of input
      count[j.charCodeAt(0) - "a".charCodeAt(0)]++; // subtracting current char from the ascii val of 'a' to find appropriate pos. of curr. char.
    }
    const key = count.join("#");
    if (!ans[key]) {
      ans[key] = []; // if a unique charCount str. found creating a new key as the charCount in map and value as empty arr.
    }

    ans[key].push(i); // if another str. found with same charCount in map, pushing new val as curr str.
  }
  return Object.values(ans); // returning all val. from map after all elements are itrated
}

module.exports = {
  groupAnagrams,
};
