export {};
//note:
// this pick is very useful eg when we hit the backend for a request, 
// the api may give the big response that is not entirely required for us, 
// so to pick only the required fields from those api response we use this utility type.
interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
    email: string;
}

// 1. ORIGINAL STUDENT

console.log("1. ORIGINAL STUDENT");

const student: Student = {
    id: 101,
    name: "Akash",
    age: 22,
    course: "Software Engineering",
    email: "akash@example.com"
};

console.log("Student:", student);

// 2. BASIC PICK

console.log("\n2. BASIC PICK");

type StudentSummary = Pick<Student, "id" | "name" | "course">;

const summary: StudentSummary = {
    id: 101,
    name: "Akash",
    course: "Software Engineering"
};

console.log("Student summary:", summary);

// 3. PICK ONE PROPERTY

console.log("\n3. PICK ONE PROPERTY");

type StudentName = Pick<Student, "name">;

const studentName: StudentName = {
    name: "Akash"
};

console.log("Student name:", studentName);

// 4. PICK MULTIPLE PROPERTIES

console.log("\n4. PICK MULTIPLE PROPERTIES");

type StudentContact = Pick<Student, "name" | "email">;

const contact: StudentContact = {
    name: "Akash",
    email: "akash@example.com"
};

console.log("Student contact:", contact);


// 5. PICK FOR A FUNCTION

console.log("\n5. PICK FOR A FUNCTION");

function displayStudentSummary(
    student: Pick<Student, "id" | "name" | "course">
): void {
    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Course:", student.course);
}

displayStudentSummary(student);


// 6. INVALID PROPERTY

console.log("\n6. INVALID PROPERTY");

// This causes an error because "phone" is not a property of Student:
// type InvalidStudent = Pick<Student, "phone">;


// 7. PICK VS ORIGINAL TYPE

console.log("\n7. PICK VS ORIGINAL TYPE");

const fullStudent: Student = {
    id: 102,
    name: "Rahul",
    age: 21,
    course: "Computer Science",
    email: "rahul@example.com"
};

const studentSummary: Pick<Student, "id" | "name"> = {
    id: fullStudent.id,
    name: fullStudent.name
};

console.log("Full student:", fullStudent);
console.log("Selected data:", studentSummary);