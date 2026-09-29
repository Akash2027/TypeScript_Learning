export {};

// 7. UNION TYPES
console.log("Union Types");

// A union allows a variable to have more than one possible type.

let studentIdentifier: number | string;  // union is for one specific type

studentIdentifier = 101;
console.log("Numeric ID:", studentIdentifier);

studentIdentifier = "STU101";
console.log("String ID:", studentIdentifier);

// Both number and string are allowed.

console.log("\n");

// 8. UNION TYPES WITH FUNCTIONAL DATA
console.log("Union Types with Application Data");

let attendanceValue: number | string;

attendanceValue = 95;
console.log("Attendance:", attendanceValue);

attendanceValue = "Not Available";
console.log("Attendance:", attendanceValue);

console.log("\n");
