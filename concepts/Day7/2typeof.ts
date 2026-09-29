export {};

console.log("1. BASIC typeof");

const student = {
    id: 101,
    name: "Akash",
    age: 22
};

type Student = typeof student;

// const student2: Student = {
//     id: "102",
//     name: "Rahul",
//     age: 21
// };

// interface MyStudent {
//     id: number;
//     name: string;
//     age: number;
// }

// const stu : MyStudent = {
//     id: 103,
//     name: "Sita",
//     age: 23
// };

// const stu2: MyStudent = {
//     id: 104,
//     name: "Ravi",
//     age: 24
// };



console.log("Student 1:", student);
// console.log("Student 2:", student2);

// 2. typeof WITH ARRAYS

console.log("\n2. typeof WITH ARRAYS");

const studentNames = ["Akash", "Rahul", "Priya"];

type StudentNames = typeof studentNames;

const moreStudentNames: StudentNames = ["Arun", "Kiran"];

// const invalid: StudentNames = [1, 2];       // numbers are not strings
// const invalid: StudentNames = ["Akash", 10]; // mixed type
// typeof avoids manually writing:

// type StudentNames = string[];

console.log("Original:", studentNames);
console.log("New:", moreStudentNames);

// 3. typeof WITH A VARIABLE

console.log("\n3. typeof WITH A VARIABLE");

const studentAge: number = 22;

type Age = typeof studentAge;

const anotherAge: Age = 25;

// const invalidAge: Age = "25";

console.log("Student age:", studentAge);
console.log("Another age:", anotherAge);


// 4. typeof WITH FUNCTIONS

console.log("\n4. typeof WITH FUNCTIONS");

function greet(name: string): string {
    return `Hello, ${name}`;
}

type GreetFunction = typeof greet;

const welcome: GreetFunction = (name) => {
    return `Welcome, ${name}`;
};

console.log(greet("Akash"));
console.log(welcome("Rahul"));

// If greet changes to:
// function greet(name: string, title: string): string

// TypeScript will show an error for welcome until it also
// accepts name and title.

// 5. typeof WITH OBJECTS

console.log("\n5. typeof WITH OBJECTS");

const course = {
    id: 1,
    name: "Software Engineering",
    duration: 5
};

type Course = typeof course;

const course2: Course = {
    id: 2,
    name: "Computer Science",
    duration: 4
};

console.log("Course 1:", course);
console.log("Course 2:", course2);

// course2 must contain the same required properties with the correct types. 
// If you later add teacher: string to course, eg:teacher: "John"
// TypeScript requires it in course2 too.
// Advantage: you do not write the same shape twice.

// If you add this property to course:
// teacher: "John"

// Then TypeScript automatically requires teacher in every Course object:
// const anotherCourse: Course = {
//     id: 2,
//     name: "JavaScript",
//     duration: 3
// };
// Error: teacher is missing

// 6. typeof VS typeof AT RUNTIME

console.log("\n6. typeof VS typeof AT RUNTIME");

const value: string  = "Akash";
console.log("Runtime typeof:", typeof value);

type ValueType = typeof value;
const anotherValue: ValueType = "Rahul";
console.log("Another value:", anotherValue);
//ValueType only checks that "Rahul" is a string; 
// it does not change the value.

// 7. typeof WITH keyof

console.log("\n7. typeof WITH keyof");

const user = {
    id: 101,
    name: "Akash",
    role: "Student"
};

type User = typeof user;

type UserKeys = keyof User;

const userKey1: UserKeys = "id";
const userKey2: UserKeys = "name";
const userKey3: UserKeys = "role";
//const key: UserKeys = "email"; // error

console.log("User key 1:", userKey1);
console.log("User key 2:", userKey2);
console.log("User key 3:", userKey3);