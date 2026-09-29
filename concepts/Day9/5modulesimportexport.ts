import { formatStudentName } from "./5studentutils.js";

const studentName = formatStudentName("Akash", "K");

console.log("Student Name:", studentName);

// 5studentutils.ts exports formatStudentName.
// This file imports and uses that exported function.
