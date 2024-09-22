// Time Complexity of this solution is O(n) as we iterate through both the input strings.
// Space Complexity of this solution is O(n) as we also create 2 corresponding hash maps to store char count for both the string input.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  // Checking if both the input strings are of same length in order to be anagram.
  if (s.length !== t.length) {
    return false; // if not, given strings are not an anagram.
  }

  // Creating 2 hashmaps for both the input strings to store the count of char occurrence in each string.
  let mapS = new Map();
  let mapT = new Map();

  // Iterating s and populating chars as keys and their occurrence as count value to their respective map.
  for (let i = 0; i < s.length; i++) {
    mapS.set(s[i], (mapS.get(s[i]) || 0) + 1);
    mapT.set(t[i], (mapT.get(t[i]) || 0) + 1);
  }

  for (let [char, count] of mapS) {
    // Iterating the mapS, Checking if the character count in both the maps are equal.
    if (mapT.get(char) !== count) {
      // Check if each mapT element has equal to characters in frequency to mapS.
      return false;
    }
  }

  return true;
}

module.exports = {
  isAnagram,
};
