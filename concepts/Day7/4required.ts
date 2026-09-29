export {};

interface Student {
    id: number;
    name: string;
    age?: number;
    course?: string;
}

// 1. OPTIONAL PROPERTIES

console.log("1. OPTIONAL PROPERTIES");

const student1: Student = {
    id: 101,
    name: "Akash"
};

console.log("Student 1:", student1);

// 2. REQUIRED<T>

console.log("\n2. REQUIRED<T>");

type CompleteStudent = Required<Student>;

const student2: CompleteStudent = {
    id: 102,
    name: "Rahul",
    age: 21,
    course: "Computer Science"
};

console.log("Complete student:", student2);

// 3. MISSING PROPERTY

console.log("\n3. MISSING PROPERTY");

// This causes an error because all properties are required:
// const student3: CompleteStudent = {
//     id: 103,
//     name: "Priya"
// };

// 4. PARTIAL VS REQUIRED
// Partial = some fields are enough
// Required = all fields are required

console.log("\n4. PARTIAL VS REQUIRED");

type StudentUpdate = Partial<Student>;
type StudentData = Required<Student>;

const update: StudentUpdate = {
    age: 23
};

const completeData: StudentData = {
    id: 104,
    name: "Arun",
    age: 22,
    course: "Software Engineering"
};

console.log("Partial update:", update);
console.log("Required data:", completeData);
const updatedCompleteData: StudentData = {
    ...completeData,
    id: 105
};

console.log("Updated required data:", updatedCompleteData);

// 5. FUNCTION USING REQUIRED

console.log("\n5. FUNCTION USING REQUIRED");

function saveStudent(student: Required<Student>): void {
    console.log("Saving student:", student);
}

saveStudent({
    id: 105,
    name: "Kiran",
    age: 20,
    course: "Information Technology"
});

// 6. INVALID INCOMPLETE DATA

console.log("\n6. INVALID INCOMPLETE DATA");

// This causes an error:
// saveStudent({
//     id: 106,
//     name: "Vijay"
// });

// notes :
// basically this is used when we want to ensure that all properties of an object 
// are provided and none are missing before the database operations or validating the data.