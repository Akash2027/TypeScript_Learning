export {};

// 1. THE PROBLEM

console.log("1. THE PROBLEM");

function printLength<T>(value: T): void {
    // We cannot do this:
    // console.log(value.length);
}
printLength("Akash");
printLength(["Akash", "Rahul"]);
printLength(101); // number has no length property

const studentName = "Akash";
const students = ["Akash", "Rahul", "Priya"];

console.log("String:", studentName);
console.log("Array:", students);

// 2. GENERIC CONSTRAINT

console.log("\n2. GENERIC CONSTRAINT");

function printLengthOfValue<T extends { length: number }>( value: T): void {
    console.log("Length:", value.length);
}

printLengthOfValue("Akash"); //For a string: number of characters
printLengthOfValue(["Akash", "Rahul", "Priya"]); //For an array: number of elements
printLengthOfValue([12,13,14,15,16,27]); //For an array of numbers: number of elements
printLengthOfValue(["Akash", "Michele", 10, 10, true]); //For an array with mixed types: number of elements
printLengthOfValue([]); //For an empty array: number of elements
//printLengthOfValue(101); // number has no length property
//printLengthOfValue(true); // boolean has no length property

// 3. STRING

console.log("\n3. STRING");

const name = "Akash";

printLengthOfValue(name);

// 4. ARRAY

console.log("\n4. ARRAY");

const studentsList = [
    "Akash",
    "Rahul",
    "Priya"
];

console.log("Students List Length:");
printLengthOfValue(studentsList);

//  PRACTICAL GENERIC EXAMPLE

console.log("\n PRACTICAL GENERIC EXAMPLE");

interface Student {
    id: number;
    name: string;
}

function getProperty<T, K extends keyof T>( object: T, key: K ): T[K] {
    return object[key];
}

const student: Student = {
    id: 101,
    name: "Akash"
};

const studentIdValue = getProperty(student, "id");
const studentNameValue = getProperty(student, "name");
//const studentAgeValue = getProperty(student, "age");
// Error: "age" does not exist on Student

console.log("Student ID:", studentIdValue);
console.log("Student Name:", studentNameValue);
