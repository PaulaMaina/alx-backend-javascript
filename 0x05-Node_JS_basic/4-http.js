const http = require('http');

const app = http.createServer();

app.on('request', (_, res) => {
  const resText = "Hello Holberton School!";

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', resText.length);
  res.write(Buffer.from(resText));
});

app.listen(1245, 'localhost', () => {
  process.stdout.write('Server running at http://localhost:1245\n');
});

module.exports = app;
