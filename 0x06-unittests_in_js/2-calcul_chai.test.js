const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('CalculateNumber', () => {
  describe('SUM', () => {
    it('floating point for whole number addition', () => {
      expect(calculateNumber('SUM', 2.0, 5.0)).to.equal(7);
    });
    it('rounding down the floating point for a', () => {
      expect(calculateNumber('SUM', 2.3, 5.0)).to.equal(7);
    });
    it('rounding down the floating point for b', () => {
      expect(calculateNumber('SUM', 2.0, 5.2)).to.equal(7);
    });
    it('rounding up the floating point for a', () => {
      expect(calculateNumber('SUM', 2.6, 4.0)).to.equal(7);
    });
    it('rounding up the floating point for b', () => {
      expect(calculateNumber('SUM', 2.0, 4.8)).to.equal(7);
    });
    it('addition of negative numbers', () => {
      expect(calculateNumber('SUM', -2.0, -5.0)).to.equal(-7);
    });
    it('addition of positive a and negative b', () => {
      expect(calculateNumber('SUM', 2.4, -5.0)).to.equal(-3);
    });
    it('addition of negative a and positive b', () => {
      expect(calculateNumber('SUM', -2.4, 5.0)).to.equal(3);
    });
    it('addition by zero', () => {
      expect(calculateNumber('SUM', 2.4, 0)).to.equal(2);
    });
  });

  describe('SUBTRACT', () => {
    it('floating point for whole number subtraction', () => {
      expect(calculateNumber('SUBTRACT', 5.0, 2.0)).to.equal(3);
    });
    it('rounding down the floating point for a', () => {
      expect(calculateNumber('SUBTRACT', 5.3, 2.0)).to.equal(3);
    });
    it('rounding down the floating point for b', () => {
      expect(calculateNumber('SUBTRACT', 5.0, 2.2)).to.equal(3);
    });
    it('rounding up the floating point for a', () => {
      expect(calculateNumber('SUBTRACT', 4.6, 2.0)).to.equal(3);
    });
    it('rounding up the floating point for b', () => {
      expect(calculateNumber('SUBTRACT', 7.0, 2.8)).to.equal(4);
    });
    it('subtraction of negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -5.0, -2.0)).to.equal(-3);
    });
    it('subtraction of positive a and negative b', () => {
      expect(calculateNumber('SUBTRACT', 2.4, -5.0)).to.equal(7);
    });
    it('subtraction of negative a and positive b', () => {
      expect(calculateNumber('SUBTRACT', -2.4, 5.0)).to.equal(-7);
    });
    it('subtraction by zero', () => {
      expect(calculateNumber('SUBTRACT', 2.4, 0)).to.equal(2);
    });
  });

  describe('DIVIDE', () => {
    it('division by 0', () => {
      expect(calculateNumber('DIVIDE', 4.0, 0), 'Error');
    });
    it('floating point for whole number division', () => {
      expect(calculateNumber('DIVIDE', 4.0, 2.0)).to.equal(2);
    });
    it('rounding down the floating point for a', () => {
      expect(calculateNumber('DIVIDE', 4.3, 2.0)).to.equal(2);
    });
    it('rounding down the floating point for b', () => {
      expect(calculateNumber('DIVIDE', 4.0, 2.2)).to.equal(2);
    });
    it('rounding down a to 0', () => {
      expect(calculateNumber('DIVIDE', 0.3, 2.2)).to.equal(0);
    });
    it('rounding down b to 0', () => {
      expect(calculateNumber('DIVIDE', 4.0, 0.2)).to.equal('Error');
    });
    it('rounding up the floating point for a', () => {
      expect(calculateNumber('DIVIDE', 3.6, 2.0)).to.equal(2);
    });
    it('rounding up the floating point for b', () => {
      expect(calculateNumber('DIVIDE', 4.0, 1.8)).to.equal(2);
    });
    it('division of 0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
    it('rounding down negative b to 0', () => {
      expect(calculateNumber('DIVIDE', 4.0, -0.2)).to.equal('Error');
    });
    it('positive a and rounding down negative b to 0', () => {
      expect(calculateNumber('DIVIDE', -4.0, -0.2)).to.equal('Error');
    });
    it('division of negative numbers', () => {
      expect(calculateNumber('DIVIDE', -4.0, -2.0)).to.equal(2);
    });
    it('division of negative number with 0', () => {
      expect(calculateNumber('DIVIDE', -4.0, 0)).to.equal('Error');
    });
    it('division of positive a and negative b', () => {
      expect(calculateNumber('DIVIDE', 6.4, -2.0)).to.equal(-3);
    });
    it('division of negative a and positive b', () => {
      expect(calculateNumber('DIVIDE', -6.4, 2.0)).to.equal(-3);
    });
    it('division of numbers with remainder', () => {
      expect(calculateNumber('DIVIDE', 15.4, 2.0)).to.equal(7.5);
    });
  });
});