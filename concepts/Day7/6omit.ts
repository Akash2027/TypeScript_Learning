export {};

interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
    password: string;
}


// 1. ORIGINAL STUDENT

console.log("1. ORIGINAL STUDENT");

const student: Student = {
    id: 101,
    name: "Akash",
    age: 22,
    course: "Software Engineering",
    password: "secret123"
};

console.log("Student:", student);


// 2. BASIC OMIT

console.log("\n2. BASIC OMIT");

type PublicStudent = Omit<Student, "password">;

const publicStudent: PublicStudent = {
    id: 101,
    name: "Akash",
    age: 22,
    course: "Software Engineering"
};

console.log("Public student:", publicStudent);


// 3. OMIT MULTIPLE PROPERTIES

console.log("\n3. OMIT MULTIPLE PROPERTIES");

type StudentBasicInfo = Omit<Student, "age" | "password">;

const basicInfo: StudentBasicInfo = {
    id: 101,
    name: "Akash",
    course: "Software Engineering"
};

console.log("Basic information:", basicInfo);


// 4. OMIT ONE PROPERTY

console.log("\n4. OMIT ONE PROPERTY");

type StudentWithoutAge = Omit<Student, "age">;

const studentWithoutAge: StudentWithoutAge = {
    id: 101,
    name: "Akash",
    course: "Software Engineering",
    password: "secret123"
};

console.log("Student without age:", studentWithoutAge);


// 5. USING OMIT IN A FUNCTION

console.log("\n5. USING OMIT IN A FUNCTION");

function displayPublicStudent(student: Omit<Student, "password">): void {
    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Course:", student.course);
}

displayPublicStudent(publicStudent);


// 6. INVALID PROPERTY

console.log("\n6. INVALID PROPERTY");

// This causes an error because "email" is not part of Student:
// type InvalidStudent = Omit<Student, "email">;


// 7. OMIT VS PICK

console.log("\n7. OMIT VS PICK");

type StudentSummary = Pick<Student, "id" | "name">;

type StudentWithoutPassword = Omit<Student, "password">;

const summary: StudentSummary = {
    id: 101,
    name: "Akash"
};

const withoutPassword: StudentWithoutPassword = {
    id: 101,
    name: "Akash",
    age: 22,
    course: "Software Engineering"
};

console.log("Using Pick:", summary);
console.log("Using Omit:", withoutPassword);