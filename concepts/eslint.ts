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

console.log(`${student.name} is eligible: ${eligible}`)

// ESLint can catch common problems such as:
const unusedValue = "not used";       // no-unused-vars
let course = "TypeScript";            // prefer-const
if (eligible == true) {                // eqeqeq
    console.log("Eligible");
}



// // ESLint can catch common problems such as:
// const unusedValue = "not used";       // no-unused-vars
// const course = "TypeScript";            // prefer-const
// if (eligible == true) {                // eqeqeq
//     console.log("Eligible");
// }


// sed -i '' \
//   -e '/const unusedValue/d' \
//   -e '/const course/d' \
//   -e 's/eligible == true/eligible === true/' \
//   review/eslint.ts


// Meaning:

// sed: text editing tool.
// -i '': edit the file in place on macOS.
// \: continue the command on the next line.
// -e: apply an editing instruction.
// '/const unusedValue/d': find that line and delete it.
// '/const course/d': find that line and delete it.
// 's/eligible == true/eligible === true/': replace == with ===.
// eslint.ts: the file being edited.