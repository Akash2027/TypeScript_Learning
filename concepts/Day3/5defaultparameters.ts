export {};

// 5. DEFAULT PARAMETERS
console.log("Default Parameters");

function calculateAttendance(
    presentDays: number,
    totalDays: number = 30
): number {
    return (presentDays / totalDays) * 100;
}

const attendancePercentage1 = calculateAttendance(27);
const attendancePercentage2 = calculateAttendance(18, 20);

console.log("Attendance Percentage 1:", attendancePercentage1);
console.log("Attendance Percentage 2:", attendancePercentage2);

// If totalDays is not provided, TypeScript uses the default value of 30.

console.log("\n");
