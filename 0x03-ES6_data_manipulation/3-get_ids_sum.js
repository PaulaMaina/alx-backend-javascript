export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (acc, val) => acc.id || acc + val.id,
      0,
    );
  }
  return 0;
}
