export {};

interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
}

// 1. BASIC keyof

console.log("1. BASIC keyof");

type StudentKeys = keyof Student;

const key1: StudentKeys = "id";
const key2: StudentKeys = "name";
const key3: StudentKeys = "age";
const key4: StudentKeys = "course";

console.log("Key 1:", key1);
console.log("Key 2:", key2);
console.log("Key 3:", key3);
console.log("Key 4:", key4);


// 2. keyof RESTRICTS INVALID KEYS

console.log("\n2. keyof RESTRICTS INVALID KEYS");

function printKey(key: keyof Student): void {
    console.log("Selected key:", key);
}

printKey("name");
printKey("age");
printKey("course");

// printKey("email"); // Error


// 3. keyof WITH AN OBJECT

console.log("\n3. keyof WITH AN OBJECT");

const student: Student = {
    id: 101,
    name: "Akash",
    age: 22,
    course: "Software Engineering"
};

function showStudentProperty(key: keyof Student): void {
    console.log("Key:", key);
    console.log("Value:", student[key]);
}

showStudentProperty("name");
showStudentProperty("age");
showStudentProperty("course");

// 4. keyof AND OBJECT ACCESS

console.log("\n4. keyof AND OBJECT ACCESS");

const studentKey: keyof Student = "name";

console.log("Selected key:", studentKey);
console.log("Selected value:", student[studentKey]);

// 5. keyof WITH GENERIC FUNCTION

console.log("\n5. keyof WITH GENERIC FUNCTION");

function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
}

const studentName = getProperty(student, "name");
const studentAge = getProperty(student, "age");
const studentId = getProperty(student, "id");

console.log("Student name:", studentName);
console.log("Student age:", studentAge);
console.log("Student ID:", studentId);

// getProperty(student, "email"); // Error

// 6. keyof VS Object.keys()

// Difference between keyof and Object.keys()?
// keyof works at compile time on a type, 
// while Object.keys() works at runtime on an actual object.
// keyof Student checks valid keys while writing code.
// Object.keys(student) gets keys while the program runs.

console.log("\n6. keyof VS Object.keys()");

type StudentKey = keyof Student;

const compileTimeKey: StudentKey = "name";
// const invalidKey: StudentKey = "email"; // TypeScript error

console.log("Compile-time key:", compileTimeKey);

const runtimeKeys1 = Object.keys(student);

console.log("Runtime keys:", runtimeKeys1);

// notes:
// In simple terms:
// keyof Student
// asks:
// What keys are allowed by the Student type?

// Object.keys(student)
// asks:
// What keys actually exist on this object right now?