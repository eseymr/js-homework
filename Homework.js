// ==============================
// JavaScript Homework: Student Data Processor
// ==============================

const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 58 },
  { name: "Charlie", grade: 95 },
  { name: "David", grade: 45 },
  { name: "Eva", grade: 72 },
];

// Task 1
const studentStrings = students.map(student => `${student.name}: ${student.grade}`);
console.log("Task 1:", studentStrings);

// Task 2
const passedStudents = students.filter(student => student.grade >= 60);
console.log("Task 2:", passedStudents);

// Task 3
const average = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log("Task 3 - Average Grade:", average.toFixed(2));

// Task 4
students.forEach(student => {
  console.log(`Task 4: ${student.name} ${student.grade >= 60 ? "passed" : "failed"}`);
});

// Task 5
for (let i = 0; i < students.length; i++) {
  console.log(`Task 5: ${students[i].name}`);
}

// Bonus Task
function getTopStudent(students) {
  return students.reduce((top, student) => student.grade > top.grade ? student : top);
}
console.log("Bonus Task - Top Student:", getTopStudent(students));

// In-Place Task 1
students.forEach(student => {
  student.status = student.grade >= 60 ? "pass" : "fail";
});
console.log("In-Place Task 1 - With Status:", students);

// In-Place Task 2
students.forEach(student => {
  student.grade = Math.min(student.grade + 5, 100);
});
console.log("In-Place Task 2 - Curved Grades:", students);


// ==============================
// JavaScript Homework: Functions and Scope
// ==============================

// Task 1
function greet() {
  console.log("Task Functions 1: Hello, student!");
}
greet();

// Task 2
function greetByName(name) {
  console.log(`Task Functions 2: Hello, ${name}!`);
}
greetByName("Alice");
greetByName("Bob");

// Task 3
function square(num) {
  return num * num;
}
let result = square(4);
console.log("Task Functions 3 - Square:", result);

// Task 4
let globalVar = "I am global";
function testScope() {
  let localVar = "I am local";
  console.log("Task Functions 4 - Global:", globalVar);
  console.log("Task Functions 4 - Local:", localVar);
}
testScope();

// Task 5
function executeCallback(callback) {
  callback();
}
executeCallback(() => console.log("Task Functions 5: Callback function was called"));

// Task 6
function operate(num1, num2, callback) {
  return callback(num1, num2);
}
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }

console.log("Task Functions 6 - Add:", operate(10, 5, add));
console.log("Task Functions 6 - Subtract:", operate(10, 5, subtract));

// Task 7
const anonFunc = function() {
  console.log("Task Functions 7: Anonymous function executed");
};
anonFunc();

// Task 8
const arrowFunc = () => {
  console.log("Task Functions 8: Arrow function executed");
};
arrowFunc();
