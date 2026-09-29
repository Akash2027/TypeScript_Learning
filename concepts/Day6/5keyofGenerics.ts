export {};

// 1. BASIC keyof

console.log("1. BASIC keyof");

interface Student {
    id: number;
    name: string;
    age: number;
}

type StudentKeys = keyof Student;
// "id" | "name" | "age"

const key1: StudentKeys = "id";
const key2: StudentKeys = "name";
const key3: StudentKeys = "age";

console.log("Keys:", key1, key2, key3);

// This would cause an error:
// const invalidKey: StudentKeys = "email";

// 2. ACCESSING OBJECT PROPERTIES

console.log("\n2. ACCESSING OBJECT PROPERTIES");

const student: Student = {
    id: 101,
    name: "Akash",
    age: 22
};

console.log("ID:", student["id"]);
console.log("Name:", student["name"]);

// 3. THE PROBLEM WITHOUT keyof

console.log("\n3. THE PROBLEM WITHOUT keyof");

function getValue(object: Student, key: string): unknown {
    return object[key as keyof Student];
}

console.log("Value:", getValue(student, "name"));
console.log("Value:", getValue(student, "mail")); // Typo intended to demonstrate the problem without keyof

// 4. keyof WITH GENERICS

console.log("\n4. keyof WITH GENERICS");

function getProperty<T, K extends keyof T>(object: T,key: K): T[K] {
    return object[key];
}

const studentName = getProperty(student, "name");
const studentAge = getProperty(student, "age");
const studentId = getProperty(student, "id");

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Student ID:", studentId);

// 5. TYPE SAFETY
// This would cause an error because "email" is not a property of Student:
// getProperty(student, "email");
