export {};

// 5. ARRAYS
// Array of strings
console.log("Arrays");
const students: string[] = [
    "Akash",
    "Rahul",
    "Priya"
];

console.log("Students:", students);

// Array of numbers
const marks: number[] = [
    85,
    92,
    78,
    95
];

console.log("Marks:", marks);

// Another syntax for arrays
const subjects: Array<string> = [
    "TypeScript",
    "Java",
    "Swift"
];

console.log("Subjects:", subjects);

// TypeScript prevents adding the wrong type.
// Uncomment to demonstrate.
// students.push(100);
// marks.push("ninety");

console.log("\n");
