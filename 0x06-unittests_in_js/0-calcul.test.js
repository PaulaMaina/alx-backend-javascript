const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('CalculateNumber', () => {
  it('floating point for whole number addition', () => {
    assert.strictEqual(calculateNumber(2.0, 5.0), 7);
  });
  it('rounding down the floating point for a', () => {
    assert.strictEqual(calculateNumber(2.3, 5.0), 7);
  });
  it('rounding down the floating point for b', () => {
    assert.strictEqual(calculateNumber(2.0, 5.2), 7);
  });
  it('rounding up the floating point for a', () => {
    assert.strictEqual(calculateNumber(2.6, 4.0), 7);
  });
  it('rounding up the floating point for b', () => {
    assert.strictEqual(calculateNumber(2.0, 4.8), 7);
  });
  it('addition of negative numbers', () => {
    assert.strictEqual(calculateNumber(-2.0, -5.0), -7);
  });
  it('addition of positive a and negative b', () => {
    assert.strictEqual(calculateNumber(2.4, -5.0), -3);
  });
  it('addition of negative a and positive b', () => {
    assert.strictEqual(calculateNumber(-2.4, 5.0), 3);
  });
});
