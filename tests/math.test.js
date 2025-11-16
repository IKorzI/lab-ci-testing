const { sum } = require('../src/math');

test('sum 2 + 2 = 4', () => {
  expect(sum(2, 2)).toBe(4);
});
