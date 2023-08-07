const myTable = document.getElementById("myTable");
const headers = [
  "name",
  "student_id",
  "university",
  "major",
  "grades",
  "score",
  "attendance",
];
fetch("./students.json")
  .then((response) => response.json())
  .then((result) => ArrangeData(result.students));

function ArrangeData(data) {
  const students = data;
  students.sort(CompareStudentID);
}

function CompareStudentID(a, b) {
  if (Number(a.student_id) < Number(b.student_id)) {
    return -1;
  }
  if (Number(a.student_id) > Number(b.student_id)) {
    return 1;
  }
  return 0;
}
