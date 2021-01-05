import sortHeroes from './heroes.js';

const expected = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

const received = sortHeroes(
  [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ],
);

test('sort heroes from max health to min', () => {
  expect(received).toEqual(expected);
});

test('sort heroes from max health to min', () => {
  const result = sortHeroes(
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'рыцарь', health: 0 },
      { name: 'гном', health: 100500 },
    ],
  );

  const exp = [
    { name: 'гном', health: 100500 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'рыцарь', health: 0 },
  ];

  expect(result).toEqual(exp);
});

test('sortHeroes: Not toBe', () => {
  expect(sortHeroes(expected)).not.toBe(received);
});
