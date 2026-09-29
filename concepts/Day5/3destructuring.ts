export {};

// 1. ARRAY DESTRUCTURING

console.log("1. ARRAY DESTRUCTURING");

const students = ["Akash", "Rahul", "Priya"];

// Without destructuring
const firstStudent = students[0];
const secondStudent = students[1];

console.log("Without destructuring:");
console.log(firstStudent);
console.log(secondStudent);

// With destructuring
const [first, second] = students;

console.log("With destructuring:");
console.log(first);
console.log(second);


// 2. SKIPPING ARRAY VALUES

console.log("\n2. SKIPPING ARRAY VALUES");

const marks = [85, 90, 78];

const [maths, , programming] = marks;

console.log("Maths:", maths);
console.log("Programming:", programming);

// 3. DEFAULT VALUES IN ARRAY DESTRUCTURING

console.log("\n3. DEFAULT VALUES");

const scores = [90];

const [english, science = 50] = scores;

console.log("English:", english);
console.log("Science:", science);

// 4. OBJECT DESTRUCTURING

console.log("\n4. OBJECT DESTRUCTURING");

const student = {
	id: 101,
	name: "Akash",
	age: 22
};

// Without destructuring
const studentName = student.name;
const studentAge = student.age;

console.log("Without destructuring:");
console.log(studentName);
console.log(studentAge);

// With destructuring
const { name, age } = student;

console.log("With destructuring:");
console.log(name);
console.log(age);

// 5. RENAMING VARIABLES

console.log("\n5. RENAMING VARIABLES");

const studentDetails = {
	name: "Akash",
	age: 22
};

const { name: studentName2, age: studentAge2 } = studentDetails;
// what the above line means
//const studentName2 = studentDetails.name;
//const studentAge2 = studentDetails.age;
// Destructuring is mainly a shorter and convenient syntax, 
// especially when working with function parameters, API responses, or objects with many properties.

console.log("Student Name:", studentName2);
console.log("Student Age:", studentAge2);

// 6. DEFAULT VALUES IN OBJECT DESTRUCTURING

console.log("\n6. OBJECT DEFAULT VALUES");

interface StudentInfo {
    name: string;
    age?: number;
}

const studentInfo: StudentInfo = {
    name: "Akash",
	//age: 22
};

const { name: name1, age: age1 = 18 } = studentInfo;

console.log("Name:", name1);
console.log("Age:", age1);

// 7. FUNCTION PARAMETERS

console.log("\n7. DESTRUCTURING FUNCTION PARAMETERS");

interface Student {
	name: string;
	age: number;
}
//The function receives a whole object,
// This part: { name, age } extracts the name and age properties from the object.
function printStudent({ name, age }: Student): void {
	console.log("Name:", name);
	console.log("Age:", age);
}

const studentData: Student = {
	name: "Akash",
	age: 22
};

printStudent(studentData);

// 8. REST IN DESTRUCTURING

console.log("\n8. REST IN DESTRUCTURING");

const studentList = ["Akash", "Rahul", "Priya", "Arun"];

const [firstStudentName, ...remainingStudents] = studentList;

console.log("First student:", firstStudentName);
console.log("Remaining students:", remainingStudents);