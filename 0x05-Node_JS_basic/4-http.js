const { createServer } = require('node:http');

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello Holberton School!");
});

app.listen(1245, '127.0.0.1', () => {
  console.log("Hello Holberton School!");
});

module.exports = app;
