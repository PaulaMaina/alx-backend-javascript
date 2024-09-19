const request = require('request');
const { expect } = require('chai');

describe('API integration tests', () => {
  const apiURL = 'http://localhost:7865';

  it('Index page returns the correct response and status code', (done) => {
    request.get(`${apiURL}/`, (_error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
