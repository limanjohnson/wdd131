const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let day = 0; day < studentReport.length; day++) {
  if (studentReport[day] < LIMIT) {
    console.log(studentReport[day]);
  }
}

studentReport.forEach((i) => {
  if (i < LIMIT) {
    console.log(i);
  }
});

for (let i in studentReport) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}