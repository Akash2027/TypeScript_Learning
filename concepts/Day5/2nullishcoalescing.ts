export {};

interface Student {
	name: string | null;
	attendancePercentage: number;
}

const student: Student = {
	name: "Akash",
	attendancePercentage: 0
};

const attendance = student.attendancePercentage;

const names = student.name;

console.log("Attendance:", attendance);
console.log("Using ||:", attendance || 50);
console.log("Using ??:", attendance ?? 50);

const name2 = null;
console.log("Name2:", name2 ?? "Unknown");
console.log("Name2 using ||:", name2 || "Unknown");

const attendance1: number = 0;
const isPresent1: boolean = false;
const name1: string = "";

console.log("\nUsing || with default values:");

console.log(attendance1 || 50); // 50
console.log(isPresent1 || true); // true
console.log(name1 || "Unknown"); // "Unknown"

console.log("\nUsing ?? with default values:");

console.log(attendance1 ?? 50); // 0
console.log(isPresent1 ?? true); // false
console.log(name1 ?? "Unknown"); // ""

// Boolean example
function getAttendanceStatus(): boolean | undefined {
	return false;
}

const isPresent = getAttendanceStatus();

console.log("\nIs Present:", isPresent);
console.log("Using ||:", isPresent || true);
console.log("Using ??:", isPresent ?? true);

// notes:
// Falsy values include:
// false
// 0
// ""
// null
// undefined
// NaN

// // Nullish values include:
// null
// undefined