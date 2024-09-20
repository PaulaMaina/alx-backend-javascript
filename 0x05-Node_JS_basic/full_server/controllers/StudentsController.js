import readDatabase from '../utils';

const validMajors = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(request, response) {
    const fileData = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(fileData)
      .then((stdGroups) => {
        const resParts = ['This is the list of our students'];
        const compFunc = (x, y) => {
          if (x[0].toLowerCase() < y[0].toLowerCase()) {
            return -1;
          }
          if (x[0].toLowerCase() > y[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };
        for (const [field, group] of Object.entries(stdGroups).sort(compFunc)) {
          resParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((std) => std.firstname).join(', ')].join(' '));
        }
        response.status(200).send(resParts.join('\n'));
      })
      .catch((error) => {
        response
          .status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const fileData = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!validMajors.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(fileData)
      .then((stdGroups) => {
        let resText = '';

        if (Object.keys(stdGroups).includes(major)) {
          const group = stdGroups[major];

          resText = `List: ${group.map((std) => std.firstname).join(', ')}`;
        }
        response.status(200).send(resText);
      })
      .catch((error) => {
        response
          .status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
