const { countStudents } = require("../solutions/number-of-students-unable-to-eat-lunch");

describe("countStudents", () => {
  test("all students can eat their preferred sandwiches", () => {
    const students = [1, 1, 0, 0];
    const sandwiches = [1, 0, 1, 0];
    expect(countStudents(students, sandwiches)).toBe(0); // All students can eat
  });

  test("no students can eat any sandwiches", () => {
    const students = [1, 1, 1, 1];
    const sandwiches = [0, 0, 0, 0];
    expect(countStudents(students, sandwiches)).toBe(4); // No students can eat
  });

  test("some students are unable to eat their preferred sandwiches", () => {
    const students = [1, 1, 0, 0];
    const sandwiches = [0, 1, 0, 1];
    expect(countStudents(students, sandwiches)).toBe(0); // All students can eat
  });

  test("more sandwiches than students, all students can eat", () => {
    const students = [1, 0];
    const sandwiches = [1, 0, 1, 0];
    expect(countStudents(students, sandwiches)).toBe(0); // All students can eat
  });

  test("more students than sandwiches, some students cannot eat", () => {
    const students = [1, 0, 1, 0, 1];
    const sandwiches = [1, 0, 0, 1];
    expect(countStudents(students, sandwiches)).toBe(1); // One student cannot eat
  });

  test("edge case with no students and no sandwiches", () => {
    const students = [];
    const sandwiches = [];
    expect(countStudents(students, sandwiches)).toBe(0); // No students, so no one to feed
  });

  test("edge case with only one student and one matching sandwich", () => {
    const students = [1];
    const sandwiches = [1];
    expect(countStudents(students, sandwiches)).toBe(0); // One student can eat
  });

  test("edge case with only one student and one non-matching sandwich", () => {
    const students = [0];
    const sandwiches = [1];
    expect(countStudents(students, sandwiches)).toBe(1); // Student cannot eat
  });
});
