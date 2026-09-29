export {};

// 10. METHOD OVERRIDING
console.log("Method Overriding");

class PersonDetails {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    displayRole(): void {
        console.log("Role: Person");
    }
}

class StudentDetails extends PersonDetails {

    displayRole(): void {
        console.log("Role: Student");
    }
}

class TeacherDetails extends PersonDetails {

    displayRole(): void {
        console.log("Role: Teacher");
    }
}

const studentRole = new StudentDetails("Rahul");
const teacherRole = new TeacherDetails("John");

studentRole.displayRole();
teacherRole.displayRole();

console.log("\n");
