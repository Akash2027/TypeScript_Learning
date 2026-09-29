export {};

// 11. ABSTRACT CLASS
console.log("Abstract Class");

abstract class AbstractPerson {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    displayName(): void {
        console.log("Name:", this.name);
    }
    abstract displayRole(): void;
}

class AbstractStudent extends AbstractPerson {
    displayRole(): void {
        console.log("Role: Student");
    }
}

class AbstractTeacher extends AbstractPerson {
    displayRole(): void {
        console.log("Role: Teacher");
    }
}

const abstractStudent = new AbstractStudent("Priya");
const abstractTeacher = new AbstractTeacher("David");

abstractStudent.displayName();
abstractStudent.displayRole();

abstractTeacher.displayName();
abstractTeacher.displayRole();

// Abstract classes cannot be directly instantiated.
// let abstractPerson = new AbstractPerson("Akash");

console.log("\n");
