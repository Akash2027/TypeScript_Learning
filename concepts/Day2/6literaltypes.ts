export {};

// 9. LITERAL TYPES
console.log("Literal Types");

// A literal type allows only specific values.

let attendanceStatus: "present" | "absent" | "late"; // literal is for one specific value

attendanceStatus = "present";
console.log("Attendance Status:", attendanceStatus);

attendanceStatus = "late";
console.log("Updated Attendance Status:", attendanceStatus);

// Only these three values are allowed.

// Uncomment to demonstrate a type error.

// attendanceStatus = "unknown";

console.log("\n");
