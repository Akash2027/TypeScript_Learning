export {};

// 1. WITHOUT AS CONST

console.log("1. WITHOUT AS CONST");

const status1 = "PRESENT";
console.log("Status:", status1);

// 2. WITH AS CONST

console.log("\n2. WITH AS CONST");

const status2 = "PRESENT" as const;
console.log("Status:", status2);

// typescript widening bcoz let make change status from present to absent
// but the const cannot reassign to a different value

//readonly test = "PRESENT"; // "PRESENT" and cannot be reassigned

let status11 = "PRESENT";        // string
const status22 = "PRESENT" as const; // "PRESENT"
console.log("status11:", status11);
console.log("status22:", status22);

status11 = "ABSENT"; // allowed
// status22 = "ABSENT"; // Error: Cannot assign to 'status22' because it is a constant
console.log("After reassignment:");
console.log("status11:", status11);
console.log("status22:", status22);

// 3. OBJECT WITHOUT AS CONST

console.log("\n3. OBJECT WITHOUT AS CONST");

const AttendanceStatus1 = {
    Present: "PRESENT",
    Absent: "ABSENT",
    Late: "LATE"
};
AttendanceStatus1.Present = "ABSENT"; // accessing the property to demonstrate it exists at runtime

console.log("Present:", AttendanceStatus1.Present);

// 4. OBJECT WITH AS CONST

console.log("\n4. OBJECT WITH AS CONST");

const AttendanceStatus2 = {
    Present: "PRESENT",
    Absent: "ABSENT",
    Late: "LATE"
} as const;

//AttendanceStatus2.Present = "ABSENT"; 
// Error: Cannot assign to 'Present' because it is a read-only property

console.log("Present:", AttendanceStatus2.Present);

// 5. READONLY BEHAVIOR

console.log("\n5. READONLY BEHAVIOR");

const Roles = {
    Admin: "ADMIN",
    Teacher: "TEACHER",
    Student: "STUDENT"
} as const;

console.log("Roles:", Roles);

// This would give an error:
// Roles.Admin = "SUPER_ADMIN";

// 6. ARRAY WITH AS CONST

console.log("\n6. ARRAY WITH AS CONST");

const roles = [
    "ADMIN",
    "TEACHER",
    "STUDENT"
] as const;

console.log("Roles:", roles);
console.log("First Role:", roles[0]);