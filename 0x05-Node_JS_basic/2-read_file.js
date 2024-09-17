const fs = require('fs');

const countStudents = (data) => {
  if (!fs.existsSync(data)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(data).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(data, 'utf-8')
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
};

module.exports = countStudents;
