const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let funcSpy;

  beforeEach(() => {
    if (!funcSpy) {
      funcSpy = sinon.spy(console);
    }
  });

  afterEach(() => {
    funcSpy.log.resetHistory();
  });

  it('Function call logs The total is 120 to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(funcSpy.log.calledWith('The total is: 120')).to.be.true;
    expect(funcSpy.log.calledOnce).to.be.true;
  });

  it('Function call logs The total is 20 to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(funcSpy.log.calledWith('The total is: 20')).to.be.true;
    expect(funcSpy.log.calledOnce).to.be.true;
  });
});
