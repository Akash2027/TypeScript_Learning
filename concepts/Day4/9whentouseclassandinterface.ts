export {};

// 18. WHEN TO USE CLASSES
console.log("When to Use Classes");

console.log("Use classes when:");
console.log("- Objects have state and behavior");
console.log("- Encapsulation is useful");
console.log("- Inheritance is required");
console.log("- Multiple objects share the same behavior");

console.log("\n");

// 19. WHEN TO USE PLAIN OBJECTS AND FUNCTIONS
console.log("When to Use Plain Objects and Functions");

console.log("Use plain objects when:");
console.log("- You mainly need to store data");
console.log("- The data does not need complex behavior");

console.log("Use functions when:");
console.log("- You need simple reusable operations");
console.log("- There is no need to maintain object state");

console.log("\n");

// 20. PLAIN OBJECT EXAMPLE
console.log("Plain Object Example");

const simpleStudent = {
    id: 1201,
    name: "Arun",
    department: "Computer Science"
};

console.log("Student:", simpleStudent);
console.log("\n");

// 21. FUNCTION EXAMPLE
console.log("Function Example");

function calculateAttendancePercentageDay4(
    presentDays: number,
    totalDays: number
): number {
    return (presentDays / totalDays) * 100;
}

const day4Attendance =
    calculateAttendancePercentageDay4(27, 30);

console.log(
    "Attendance Percentage:",
    day4Attendance.toFixed(2) + "%"
);

console.log("\n");
