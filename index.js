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

  for (let j = 0; j < students.length; j++) {
    let newTBody = document.createElement("tbody");
    let newRow = document.createElement("tr");
    let cell;

    for (let i = 0; i < 4; i++) {
      cell = document.createElement("td");
      cell.rowSpan = 5;
      cell.innerHTML = students[j][headers[i]];
      newRow.appendChild(cell);
      newTBody.appendChild(newRow);
    }

    for (let i = 0; i < 5; i++) {
      cell = document.createElement("td");
      cell.innerHTML = students[j].grades.subjects[i].name;
      newRow.appendChild(cell);
      cell = document.createElement("td");
      cell.innerHTML = students[j].grades.subjects[i].score;
      newRow.appendChild(cell);
      cell = document.createElement("td");
      cell.innerHTML = students[j].attendance.subjects[i].score;
      newRow.appendChild(cell);
      newTBody.appendChild(newRow);
      myTable.appendChild(newTBody);
      newRow = document.createElement("tr");
    }
  }
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
