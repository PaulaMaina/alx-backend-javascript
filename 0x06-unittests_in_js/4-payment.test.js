const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('validates the usages of the Utils function', () => {
    const funcSpy = sinon.spy(console);
    const dummy = sinon.stub(Utils, 'calculateNumber');

    dummy.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
    expect(dummy.callCount).to.be.equal(1);
    expect(funcSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(funcSpy.log.callCount).to.be.equal(1);
    dummy.restore();
    funcSpy.log.restore();
  });
});
