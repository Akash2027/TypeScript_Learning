export {};

// 6. REST PARAMETERS
console.log("Rest Parameters");

function calculateMarksTotal(...marks: number[]): number {
    let total = 0;

    for (const mark of marks) {
        total += mark;
    }

    return total;
}

const marksTotal1 = calculateMarksTotal(80, 85, 90);
const marksTotal2 = calculateMarksTotal(70, 75, 80, 85, 90);

console.log("Marks Total 1:", marksTotal1);
console.log("Marks Total 2:", marksTotal2);

// Rest parameters allow a function to accept any number of arguments.

console.log("\n");

// 7. REST PARAMETERS WITH A FIXED PARAMETER
console.log("Rest Parameters with Fixed Parameter");

function calculateStudentAverage( studentName: string, ...marks: number[] ): number {
    let total = 0;
    for (const mark of marks) {
        total += mark;
    }
    const average = total / marks.length;
    console.log("Student:", studentName);
    return average;
}

const studentAverage = calculateStudentAverage(
    "Rahul",
    80,
    85,
    90
);
console.log("Average:", studentAverage);
console.log("\n");
