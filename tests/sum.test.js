const sum = require('../src/sum');

test('sum adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum works with negative numbers', () => {
  expect(sum(-1, 5)).toBe(4);
});
