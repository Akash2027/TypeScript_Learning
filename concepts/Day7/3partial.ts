export {};

interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
}

const student: Student = {
    id: 101,
    name: "Akash",
    age: 22,
    course: "Software Engineering"
};
student.age = 23;

console.log("Student after age update:", student.age);
console.log("Student after age update:", student);

// 1. PARTIAL WITH AN OBJECT

console.log("1. PARTIAL WITH AN OBJECT");

const studentUpdate: Partial<Student> = {
    age: 23
};
const updatedStudentWithPartial = {
    ...student,
    ...studentUpdate
};

// It creates a new object:

// Copy all properties from student
// Copy properties from studentUpdate
// If both have the same property, the later one overrides the earlier one: age 22 -> age 23

console.log("Original student:", student);
console.log("Student update:", studentUpdate);
console.log("Updated student with partial:", updatedStudentWithPartial);

// 2. UPDATING MULTIPLE PROPERTIES

console.log("\n2. UPDATING MULTIPLE PROPERTIES");

const anotherUpdate: Partial<Student> = {
    name: "Akash K",
    course: "Computer Science"
};

console.log("Another update:", anotherUpdate);

const updatedStudent1 = {
    ...student,
    ...anotherUpdate
};

console.log("Updated student:", updatedStudent1);

// 3. EMPTY UPDATE

console.log("\n3. EMPTY UPDATE");

const emptyUpdate: Partial<Student> = {};

console.log("Empty update:", emptyUpdate);

const updatedStudentWithEmptyUpdate = {
    ...student,
    ...emptyUpdate
};
console.log("Updated student with empty update:", updatedStudentWithEmptyUpdate);

// 4. USING PARTIAL IN A FUNCTION

console.log("\n4. USING PARTIAL IN A FUNCTION");

function updateStudent( student: Student, updates: Partial<Student> ): Student {
    return {
        ...student,
        ...updates
    };
}

const updatedStudent = updateStudent(student, {age: 23});

console.log("Updated student:", updatedStudent);
