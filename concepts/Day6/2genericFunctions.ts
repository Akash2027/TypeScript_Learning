export {};

// 1. BASIC GENERIC FUNCTION

console.log("1. BASIC GENERIC FUNCTION");

function identity<T>(value: T): T {
    return value;
}

const numberValue = identity(100);
const stringValue = identity("Akash");
const booleanValue = identity(true);

console.log("Number:", numberValue);
console.log("String:", stringValue);
console.log("Boolean:", booleanValue);

// 2. TYPE INFERENCE

console.log("\n2. TYPE INFERENCE");

const inferredNumber = identity(500);
const inferredString = identity("Hello");

console.log("Number:", inferredNumber);
inferredNumber.toFixed(2); // valid
//inferredNumber.toUpperCase(); // Error
console.log("String:", inferredString);
inferredString.toUpperCase(); // valid
//inferredString.toFixed(2); // Error


// 3. EXPLICIT TYPE
//needed when clarity is required for the type of the value being passed

console.log("\n3. EXPLICIT TYPE");

const explicitNumber = identity<number>(100);
const explicitString = identity<string>("Akash");

console.log("Number:", explicitNumber);
console.log("String:", explicitString);

// 4. GENERIC FUNCTION WITH ARRAY

console.log("\n4. GENERIC FUNCTION WITH ARRAY");

function getFirst<T>(items: T[]): T {
    return items[0];
}

const firstNumber = getFirst([10, 20, 30]);
const firstName = getFirst(["Akash", "Rahul", "Priya"]);
const firstBoolean = getFirst([true, false, true]);
const mixedArray = getFirst([10, "Akash", true]);
const emptyarray = getFirst([]);

console.log("First Number:", firstNumber);
console.log("First Name:", firstName);
console.log("First Boolean:", firstBoolean);
console.log("First Mixed Value:", mixedArray);
console.log("First Empty Array Value:", emptyarray);

// 5. PRACTICAL STUDENT EXAMPLE

console.log("\n5. STUDENT EXAMPLE");

interface Student {
    id: number;
    name: string;
}

const students: Student[] = [
    {
        id: 101,
        name: "Akash"
    },
    {
        id: 102,
        name: "Rahul"
    }
];

const firstStudent = getFirst(students);

console.log("First Student:", firstStudent);
console.log("Student Name:", firstStudent.name);
console.log("Student ID:", firstStudent.id);

// 6. MULTIPLE TYPE PARAMETERS

console.log("\n6. MULTIPLE TYPE PARAMETERS");

function createPair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const studentPair = createPair(101, "Akash");
const namePair = createPair("Akash", 101);

console.log("Pair:", studentPair);
console.log("ID:", studentPair[0]);
console.log("Name:", studentPair[1]);

console.log("Name Pair:", namePair);
console.log("First:", namePair[0]);
console.log("Second:", namePair[1]);