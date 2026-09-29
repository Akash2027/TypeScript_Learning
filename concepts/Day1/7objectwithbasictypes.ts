export {};

// 7. OBJECT WITH BASIC TYPES
// TypeScript can describe the expected structure of an object.
console.log("Object with Basic Types");
const student: {
    name: string;
    age: number;
    isPresent: boolean;
} = {
    name: "Akash",
    age: 22,
    isPresent: true
};

console.log("Student Object:", student);
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Student Attendance:", student.isPresent);

// Uncomment to demonstrate type checking.
// student.age = "twenty-two";
console.log("\n");
