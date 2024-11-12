// Pseudo Code:
// The goal is to count the number of students who are unable to eat lunch based on their sandwich preferences.
// We will use a map to track the number of students preferring each type of sandwich.

// Function countStudents(students, sandwiches):
// 1. Initialize a variable `res` to the length of the students array (total number of students).
// 2. Create a map to store the count of each sandwich preference from the students array.
// 3. Iterate through each student's preference in the students array:
//    a. Update the map with the count of each preference.
// 4. Iterate through each sandwich in the sandwiches array:
//    a. If the count of the current sandwich in the map is greater than 0:
//       - Decrement `res` by 1 (one more student can eat).
//       - Decrease the count of that sandwich in the map by 1.
//    b. If the count of the current sandwich is 0:
//       - Break the loop (no more students can eat).
// 5. Return `res` as the number of students unable to eat lunch.

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let res = students.length;
  let map = new Map();

  for (let preference of students) {
    map.set(preference, (map.get(preference) || 0) + 1);
  }

  for (let sandwich of sandwiches) {
    if (map.get(sandwich) > 0) {
      res -= 1;
      map.set(sandwich, map.get(sandwich) - 1);
    } else {
        break;
    }
  }

  return res;
};

module.exports = { countStudents };
