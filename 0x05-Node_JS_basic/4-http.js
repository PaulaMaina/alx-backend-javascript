const http = require('http');

const port = 1245;
const host = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
  const response = "Hello Holberton School!";
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', response.length);
  res.write(Buffer.from(response));
});

app.listen(port, host, () => {
  process.stdout.write(`Server running at http://${host}:${port}\n`);
});

module.exports = app;
