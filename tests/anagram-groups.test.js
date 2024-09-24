const { groupAnagrams } = require("../solutions/anagram-groups");

function sortAnagramGroups(groups) {
  return groups.map(group => group.sort()).sort((a, b) => a[0].localeCompare(b[0]));
}

test("should return [['hat'],['act', 'cat'],['stop', 'pots', 'tops']] if input is ['act', 'pots', 'tops', 'cat', 'stop', 'hat']", () => {
  const result = groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]);
  const expected = [
    ["hat"],
    ["act", "cat"],
    ["stop", "pots", "tops"],
  ];
  expect(sortAnagramGroups(result)).toEqual(sortAnagramGroups(expected));
});

test("should return [['x']] if input is ['x']", () => {
  const result = groupAnagrams(["x"]);
  const expected = [["x"]];
  expect(sortAnagramGroups(result)).toEqual(sortAnagramGroups(expected));
});

test("should return [['']] if input is ['']", () => {
  const result = groupAnagrams([""]);
  const expected = [[""]];
  expect(sortAnagramGroups(result)).toEqual(sortAnagramGroups(expected));
});

test("should return [['a'], ['b']] if input is ['a', 'b']", () => {
  const result = groupAnagrams(["a", "b"]);
  const expected = [["a"], ["b"]];
  expect(sortAnagramGroups(result)).toEqual(sortAnagramGroups(expected));
});

test("should return [[''], ['a']] if input is ['', 'a']", () => {
  const result = groupAnagrams(["", "a"]);
  const expected = [[""], ["a"]];
  expect(sortAnagramGroups(result)).toEqual(sortAnagramGroups(expected));
});

test("should return [['a', 'a']] if input is ['a', 'a']", () => {
  const result = groupAnagrams(["a", "a"]);
  const expected = [["a", "a"]];
  expect(sortAnagramGroups(result)).toEqual(sortAnagramGroups(expected));
});