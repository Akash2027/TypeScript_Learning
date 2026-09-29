export {};

// 1. SPREAD WITH ARRAYS
console.log("1. SPREAD WITH ARRAYS");

const students = ["Akash", "Rahul", "Priya"];
console.log("Original:", students);

const newStudents = [...students, "Arun"];
console.log("New:", newStudents);

// 2. WHAT HAPPENS WITHOUT SPREAD?
console.log("\n2. WITHOUT SPREAD");

const firstList = ["Akash", "Rahul"];
const secondList = ["Priya", "Arun"];
const combinedWithoutSpread = [firstList, secondList];
console.log("Nested array:", combinedWithoutSpread);

// 3. COMBINING ARRAYS WITH SPREAD
console.log("\n3. COMBINING ARRAYS");

const combinedStudents = [...firstList, ...secondList];
console.log("Combined using spread:", combinedStudents);

// 4. CONCAT VS SPREAD
console.log("\n4. CONCAT VS SPREAD");
const morningStudents: string[] = [
    "Rahul",
    "Priya"
];

const eveningStudents: string[] = [
    "Arun",
    "Kiran"
];

// Combining using spread
const allStudentsUsingSpread: string[] = [
    ...morningStudents,
    ...eveningStudents
];

// Combining using concat
const allStudentsUsingConcat: string[] =
    morningStudents.concat(eveningStudents);

console.log("Morning Students:", morningStudents);
console.log("Evening Students:", eveningStudents);
console.log("Using spread:", allStudentsUsingSpread);
console.log("Using concat:", allStudentsUsingConcat);

// Spread allows us to insert values between arrays
const studentsWithGuest: string[] = [
    ...morningStudents,
    "Guest Student",
    "Another Guest",
    ...eveningStudents
];

console.log("Spread with inserted value:", studentsWithGuest);

// concat can also do this
const studentsWithGuestUsingConcat: string[] =
    morningStudents.concat("Guest Student", "Another Guest", eveningStudents);

console.log("Concat with inserted value:", studentsWithGuestUsingConcat);

// 5. SPREAD WITH OBJECTS

console.log("\n5. SPREAD WITH OBJECTS");

const student = {
    name: "Akash",
    age: 22
};

const updatedStudent = {
    age: 23

    //note:

};

console.log("Original:", student);
console.log("Updated:", updatedStudent);

// 6. ADDING A PROPERTY

console.log("\n6. ADDING A PROPERTY");

const studentWithCourse = {
    ...student,
    course: "Software Engineering"
};

console.log(studentWithCourse);

// 7. FUNCTION ARGUMENTS

console.log("\n7. FUNCTION ARGUMENTS");

const marks: [number, number, number] = [85, 90, 78];

function calculateTotal(a: number, b: number, c: number): number {
    return a + b + c;
}

const total = calculateTotal(...marks);

console.log("Total:", total);

// 8. REST VS SPREAD

console.log("\n8. REST VS SPREAD");

const numbers = [10, 20, 30];
const copiedNumbers = [...numbers];
//Spread (...) expands/unpacks an array or object:
console.log("Spread:", copiedNumbers);

function printNumbers(...values: number[]): void {
    // Rest (...) collects multiple values into an array:
    console.log("Rest:", values);
}
printNumbers(10, 20, 30);