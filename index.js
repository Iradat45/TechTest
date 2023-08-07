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

function myFunction() {
  const input = document.getElementById("myInput");
  const filter = input.value.toUpperCase();
  let tr = myTable.getElementsByTagName("tr");
  let tb = myTable.getElementsByTagName("tbody");
  const header = document.getElementById("search");
  const option = header.value;

  // Loop through all table rows, and hide those who don't match the search query
  for (let i = 1; i < tb.length; i++) {
    tr = tb[i].getElementsByTagName("tr")[0];
    const td = tr.getElementsByTagName("td")[option];
    if (td) {
      txtValue = td.innerText.toUpperCase();

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tb[i].style.display = "";
      } else {
        tb[i].style.display = "none";
      }
    }
  }
}
