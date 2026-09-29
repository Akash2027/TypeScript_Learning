export {};

// 3. TYPE INFERENCE
// TypeScript can automatically infer the type from the assigned value.
console.log("Type inference");
const university = "VIT";
const semester = 7;
const internshipActive = true;

console.log("University:", university);
console.log("Semester:", semester);
console.log("Internship Active:", internshipActive);

// TypeScript knows:
// university -> string
// semester -> number
// internshipActive -> boolean

// Uncomment to demonstrate inferred type checking.
// university = 100;
// semester = "seven";
// internshipActive = "yes";
console.log("\n");

// 9. TYPE INFERENCE WITH ARRAYS
console.log("Type Inference with Arrays");

const cities = [
    "Bengaluru",
    "Chennai",
    "Hyderabad",
    "Vellore"
];

console.log("Cities:", cities);
console.log("Number of Cities:", cities.length);
console.log("Type of Array:", typeof cities);

// TypeScript infers this as string[].

// Uncomment to demonstrate.
// cities.push(100);
console.log("\n");

// 10. TYPE INFERENCE WITH CALCULATIONS
console.log("Type Inference with Calculations");
const internalMarks = 80;
const externalMarks = 90;

const totalMarks = internalMarks + externalMarks;

console.log("Total Marks:", totalMarks);

// TypeScript infers:
// internalMarks -> number
// externalMarks -> number
// totalMarks -> number

console.log("\n");
