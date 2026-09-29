export {};

interface Student {
    id: number;
    name: string;
}

interface SuccessResult<T> {
    success: true;
    data: T;
}

interface ErrorResult {
    success: false;
    error: string;
}

type Result<T> = SuccessResult<T> | ErrorResult;

// interface Result<T> {
//     success: boolean;
//     data?: T;
//     error?: string;
//  }

// An enum only gives named status values:
// enum Status {
//     Success,
//     Error
// }
// It cannot enforce:

// Success must include data
// Error must include error
// A union describes complete valid result objects:


const studentResult: Result<Student> = {
    success: true,
    data: {
        id: 101,
        name: "Akash"
    }
};

const failedResult: Result<Student> = {
    success: false,
    error: "Student not found"
};

function createSuccessResult<T>(data: T): Result<T> {
    return {
        success: true,
        data: data
    };
}

const numberResult = createSuccessResult(100);
const stringResult = createSuccessResult("Success");
const booleanResult = createSuccessResult(true);
const nullResult = createSuccessResult(null);
const undefinedResult = createSuccessResult(undefined);

console.log("Student Result:", studentResult);
console.log("Failed Result:", failedResult);
console.log("Number Result:", numberResult);
console.log("String Result:", stringResult);
console.log("Boolean Result:", booleanResult);
console.log("Null Result:", nullResult);
console.log("Undefined Result:", undefinedResult);  