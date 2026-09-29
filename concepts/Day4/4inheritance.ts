export {};

// 8. INHERITANCE
console.log("Inheritance");

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayPerson(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

class Student extends Person {
    studentId: number;

    constructor( name: string, age: number, studentId: number) {
        super(name, age);
        this.studentId = studentId;
    }

    displayStudentDetails(): void {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.name);
        console.log("Student Age:", this.age);
    }
}

const inheritedStudent = new Student( "Rahul", 21, 501 );
inheritedStudent.displayStudentDetails();

console.log("\n");

// 9. INHERITANCE WITH TEACHER
console.log("Inheritance with Teacher");

class Teacher extends Person {
    subject: string;
    constructor(name: string,age: number,subject: string) {
        super(name, age);
        this.subject = subject;
    }
    displayTeacherDetails(): void {
        console.log("Teacher Name:", this.name);
        console.log("Teacher Age:", this.age);
        console.log("Subject:", this.subject);
    }
}

const inheritedTeacher = new Teacher("John",35,"TypeScript");
inheritedTeacher.displayTeacherDetails();

console.log("\n");
