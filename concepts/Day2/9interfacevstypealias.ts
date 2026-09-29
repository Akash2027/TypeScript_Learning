export {};

// 13. INTERFACE VS TYPE ALIAS
console.log("Interface vs Type Alias");

// Both can describe the structure of objects.

// Type Alias

type ClassroomModel = {
    id: number;
    name: string;
    capacity: number;
};

const classroomModel: ClassroomModel = {
    id: 301,
    name: "Room A",
    capacity: 40
};

console.log("Classroom using Type Alias:", classroomModel);

// Interface

interface AttendanceModel {
    studentId: number;
    date: string;
    status: "present" | "absent" | "late";
}

const attendanceModel: AttendanceModel = {
    studentId: 102,
    date: "2026-09-07",
    status: "present"
};

console.log("Attendance using Interface:", attendanceModel);

console.log("\n");
