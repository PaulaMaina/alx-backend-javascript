const http = require('http');
const fs = require('fs');

const app = http.createServer();
const dbFile = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (fileData) => new Promise((resolve, reject) => {
  if (!fileData) {
    reject(new Error('Cannot load database'));
  }
  fs.readFile(fileData, (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const report = [];
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const stdGroups = {};
      const columnNames = fileLines[0].split(',');
      const stdNames = columnNames.slice(0, columnNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const stdRecord = line.split(',');
        const stdValues = stdRecord.slice(0, stdRecord.length - 1);
        const field = stdRecord[stdRecord.length - 1];
        if (!Object.keys(stdGroups).includes(field)) {
          stdGroups[field] = [];
        }
        const stdEntries = stdNames
          .map((stdName, ind) => [stdName, stdValues[ind]]);
        stdGroups[field].push(Object.fromEntries(stdEntries));
      }

      const totalStudents = Object
        .values(stdGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      report.push(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(stdGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        report.push([`Number of students in ${field}: ${group.length}. List: ${studentNames}`].join(' '));
      }
      resolve(report.join('\n'));
    }
  });
});

const serverRouteHandlers = [
  {
    route: '/',
    handler (_, res) {
      const resText = 'Hello Holberton School!';

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', resText.length);
      res.write(Buffer.from(resText));
    }
  },
  {
    route: '/students',
    handler (_, res) {
      const resMessage = ['This is the list of our students'];

      countStudents(dbFile)
        .then((response) => {
          resMessage.push(response);
          const resText = resMessage.join('\n');
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', resText.length);
          res.write(Buffer.from(resText));
        })
        .catch((error) => {
          resMessage.push(error instanceof Error ? error.message : error.toString());
          const resText = resMessage.join('\n');
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', resText.length);
          res.write(Buffer.from(resText));
        });
    }
  }
];

app.on('request', (req, res) => {
  for (const routeHandler of serverRouteHandlers) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(1245, 'localhost', () => {
  process.stdout.write('Server running at http://localhost:1245\n');
});

module.exports = countStudents;
