export {};

// 3. TUPLES
console.log("Tuples");

// A tuple stores a fixed number of values where each position has a specific type.

const studentRecord: [number, string, number] = [
    101,
    "Rahul",
    85
];

console.log("Student ID:", studentRecord[0]);
console.log("Student Name:", studentRecord[1]);
console.log("Student Mark:", studentRecord[2]);

// The order and types are important.

// Uncomment to demonstrate a type error.

/**
let invalidRecord: [number, string, number] = [
     "101",
    "Rahul",
    85
];
**/

console.log("\n");
