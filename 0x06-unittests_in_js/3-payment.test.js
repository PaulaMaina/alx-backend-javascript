const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('validates the usages of the Utils function', () => {
    const funcSpy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(funcSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(funcSpy.calculateNumber.callCount).to.be.equal(1);
    funcSpy.calculateNumber.restore();
  });
});
