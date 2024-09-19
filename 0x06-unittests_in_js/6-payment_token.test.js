const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('validates the result of getPaymentTokenFromAPI(true)', (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({data: 'Successful response from the API'});
      done();
    });
  });
});
