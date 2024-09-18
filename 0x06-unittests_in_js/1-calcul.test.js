const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('CalculateNumber', () => {
  describe('SUM', () => {
    it('floating point for whole number addition', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 5.0), 7);
    });
    it('rounding down the floating point for a', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 5.0), 7);
    });
    it('rounding down the floating point for b', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 5.2), 7);
    });
    it('rounding up the floating point for a', () => {
      assert.strictEqual(calculateNumber('SUM', 2.6, 4.0), 7);
    });
    it('rounding up the floating point for b', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 4.8), 7);
    });
    it('addition of negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -5.0), -7);
    });
    it('addition of positive a and negative b', () => {
      assert.strictEqual(calculateNumber('SUM', 2.4, -5.0), -3);
    });
    it('addition of negative a and positive b', () => {
      assert.strictEqual(calculateNumber('SUM', -2.4, 5.0), 3);
    });
    it('addition by zero', () => {
      assert.strictEqual(calculateNumber('SUM', 2.4, 0), 2);
    });
  });

  describe('SUBTRACT', () => {
    it('floating point for whole number subtraction', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.0, 2.0), 3);
    });
    it('rounding down the floating point for a', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.3, 2.0), 3);
    });
    it('rounding down the floating point for b', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.0, 2.2), 3);
    });
    it('rounding up the floating point for a', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.6, 2.0), 3);
    });
    it('rounding up the floating point for b', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 7.0, 2.8), 4);
    });
    it('subtraction of negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.0, -2.0), -3);
    });
    it('subtraction of positive a and negative b', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.4, -5.0), 7);
    });
    it('subtraction of negative a and positive b', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.4, 5.0), -7);
    });
    it('subtraction by zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 0), 2);
    });
  });

  describe('DIVIDE', () => {
    it('division by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.0, 0), 'Error');
    });
    it('floating point for whole number division', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.0, 2.0), 2);
    });
    it('rounding down the floating point for a', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.3, 2.0), 2);
    });
    it('rounding down the floating point for b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.0, 2.2), 2);
    });
    it('rounding up the floating point for a', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.6, 2.0), 2);
    });
    it('rounding up the floating point for b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.0, 1.8), 2);
    });
    it('division of negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -4.0, -2.0), 2);
    });
    it('division of positive a and negative b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.4, -2.0), -3);
    });
    it('division of negative a and positive b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6.4, 2.0), -3);
    });
    it('division of numbers with remainder', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 15.4, 2.0), 7.5);
    });
  });
});
