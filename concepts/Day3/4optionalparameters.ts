export {};

// 4. OPTIONAL PARAMETERS
console.log("Optional Parameters");

function displayTeacher(teacherName: string, subject?: string): void {
    console.log("Teacher Name:", teacherName);

    if (subject !== undefined) {
        console.log("Subject:", subject);
    } else {
        console.log("Subject: Not Assigned");
    }
}
displayTeacher("John", "TypeScript");
displayTeacher("David");

console.log("\n");
