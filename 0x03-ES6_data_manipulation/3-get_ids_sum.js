export  default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((acc, val) => acc + val, 0);
  }
  return [];
}
