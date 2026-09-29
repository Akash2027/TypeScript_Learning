export {};

// 1. NORMAL INTERFACE

console.log("1. NORMAL INTERFACE");

interface Student {
    id: number;
    name: string;
}

const student: Student = {
    id: 101,
    name: "Akash"
};

console.log("Student:", student);

// 2. GENERIC INTERFACE

console.log("\n2. GENERIC INTERFACE");

interface Box<T> {
    value: T;
}

const numberBox: Box<number> = {
    value: 100
};

const stringBox: Box<string> = {
    value: "Akash"
};

console.log("Number Box:", numberBox);
console.log("String Box:", stringBox);

//Diff btw them:
// Student describes one specific structure.
// Box<T> describes a reusable structure that can hold different types.

// 3. GENERIC INTERFACE WITH STUDENT

console.log("\n3. GENERIC INTERFACE WITH STUDENT");

interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
}

const studentResponse: ApiResponse<Student> = {
    data: {
        id: 101,
        name: "Akash"
    },
    success: true,
    message: "Student fetched successfully"
};

console.log("Student Response:", studentResponse);
console.log("Student Name:", studentResponse.data.name);

// 4. SAME INTERFACE WITH DIFFERENT DATA

console.log("\n4. SAME INTERFACE WITH DIFFERENT DATA");

const studentsResponse: ApiResponse<Student[]> = {
    data: [
        {
            id: 101,
            name: "Akash"
        },
        {
            id: 102,
            name: "Rahul"
        }
    ],
    success: true,
    message: "Students fetched successfully"
};

console.log("Students:", studentsResponse.data);

// 5. API RESPONSE WITH STRING

console.log("\n5. API RESPONSE WITH STRING");

const messageResponse: ApiResponse<string> = {
    data: "Login successful",
    success: true,
    message: "Request completed"
};

console.log("Data:", messageResponse.data);

// 6. API RESPONSE WITH NUMBER

console.log("\n6. API RESPONSE WITH NUMBER");

const countResponse: ApiResponse<number> = {
    data: 25,
    success: true,
    message: "Count fetched successfully"
};

console.log("Count:", countResponse.data);

// 7. GENERIC FUNCTION WITH GENERIC INTERFACE

console.log("\n7. GENERIC FUNCTION WITH GENERIC INTERFACE");

function createResponse<T>( data: T, message: string ): ApiResponse<T> {
    return {
        data,
        success: true,
        message
    };
}

const response = createResponse<Student>(
    {
        id: 103,
        name: "Priya"
    },
    "Student created successfully"
);

console.log("Response:", response);
console.log("Student Name:", response.data.name);