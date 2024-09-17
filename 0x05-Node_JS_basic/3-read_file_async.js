const fs = require('fs');

const countStudents = (fileData) => new Promise((resolve, reject) => {
  fs.readFile(fileData, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
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
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(stdGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
