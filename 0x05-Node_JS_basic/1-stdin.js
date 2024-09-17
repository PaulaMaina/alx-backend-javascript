process.stdout.write('Welcome to Holberton School, what is your name? \n');

process.stdin.on('readable', function() {
  var username = process.stdin.read();
  if (username !== null) {
    process.stdout.write(`Your name is: ${username}`);
  }
});

process.stdin.on('end', function () {
  process.stdout.write('This important software is now closing');
});