export {};

// 10. TYPE ALIAS
console.log("Type Alias");

// A type alias gives a meaningful name to a type.

type AttendanceStatus = "present" | "absent" | "late";

const currentStatus: AttendanceStatus = "present";

console.log("Current Status:", currentStatus);

// Instead of repeatedly writing:
// "present" | "absent" | "late"
// We can use:
// AttendanceStatus

console.log("\n");

// 11. TYPE ALIAS FOR OBJECT
console.log("Type Alias for Object");

type StudentModel = {
    id: number;
    name: string;
    age: number;
};

const studentModel: StudentModel = {
    id: 102,
    name: "Priya",
    age: 21
};

console.log("Student ID:", studentModel.id);
console.log("Student Name:", studentModel.name);
console.log("Student Age:", studentModel.age);

console.log("\n");
