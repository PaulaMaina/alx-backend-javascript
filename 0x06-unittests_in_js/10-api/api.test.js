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

  it('Cart page returns the corret response and status code', (done) => {
    request.get(`${apiURL}/cart/7`, (_error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 7');
      done();
    });
  });

  it('Cart page returns the correct response and status code', (done) => {
    request.get(`${apiURL}/cart/-7`, (_error, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Cart page returns the correct response and status code', (done) => {
    request.get(`${apiURL}/cart/hello`, (_error, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Login returns the correct response and status code', (done) => {
    request.post(`${apiURL}/login`, {json: {userName: 'Teddy'}}, (_error, res, body) => {
      expect(res.body).to.be.equal('Welcome Teddy');
      done();
    });
  });

  it('Available payments parses the right methods and returns 200', (done) => {
    request.get(`${apiURL}/available_payments`, (_error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
