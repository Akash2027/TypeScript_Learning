export {};

// 1. TYPED PARAMETERS
console.log("Typed Parameters");

function displayStudent(studentName: string, studentAge: number): void {
    console.log("Student Name:", studentName);
    console.log("Student Age:", studentAge);
}

displayStudent("Rahul", 21);
displayStudent("Priya", 22);

console.log("\n");
