const { encode, decode } = require('../solutions/string-encode-decode');

test('Encode and decode ["neet","code","love","you"]', () => {
  const input = ["neet", "code", "love", "you"];
  const encoded = encode(input);
  const decoded = decode(encoded);
  expect(decoded).toEqual(input);
});

test('Encode and decode ["we","say",":","yes"]', () => {
  const input = ["we", "say", ":", "yes"];
  const encoded = encode(input);
  const decoded = decode(encoded);
  expect(decoded).toEqual(input);
});

// Additional test cases
test('Encode and decode ["hello","world"]', () => {
  const input = ["hello", "world"];
  const encoded = encode(input);
  const decoded = decode(encoded);
  expect(decoded).toEqual(input);
});

test('Encode and decode ["#","##","###"]', () => {
  const input = ["#", "##", "###"];
  const encoded = encode(input);
  const decoded = decode(encoded);
  expect(decoded).toEqual(input);
});

test('Encode and decode [""]', () => {
  const input = [""];
  const encoded = encode(input);
  const decoded = decode(encoded);
  expect(decoded).toEqual(input);
});

test('Encode and decode ["a","b","c"]', () => {
  const input = ["a", "b", "c"];
  const encoded = encode(input);
  const decoded = decode(encoded);
  expect(decoded).toEqual(input);
});
