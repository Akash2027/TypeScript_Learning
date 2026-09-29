export {};

interface Student {
    name: string;
    attendancePercentage: number;
}

function isEligibleForCertificate(student: Student): boolean {
    return student.attendancePercentage >= 75;
}

const student: Student = {
    name: "Akash",
    attendancePercentage: 82
};

const eligible = isEligibleForCertificate(student);

console.log(`${student.name} is eligible: ${eligible}`);

// ESLint can catch common problems such as:
// const unusedValue = "not used"; // no-unused-vars
// let course = "TypeScript";      // prefer-const
// if (eligible == true) {          // eqeqeq
//     console.log("Eligible");
// }

// Corrected code:
const course = "TypeScript";

if (eligible === true) {
    console.log(`${course} student is eligible`);
}
