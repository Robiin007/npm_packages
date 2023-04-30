
const math = require("robin-math");

test('adds 1 + 2 to equal 3', () => {
    expect(math.sum(1, 2)).toBe(3);
});

test('adds 0+ 100 to equal 100', () => {
    expect(math.sum(0, 100)).toBe(100);
});