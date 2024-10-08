const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
i});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_,res) => {
  res.json({payment_methods: {credit_cards: true, paypal: false}});
});

app.post('/login', (req, res) => {
  let username = '';

  if (req.body) {
    username = req.body.userName;
  }

  res.send(`Welcome ${username}`);
});

app.listen(7865, 'localhost', () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
