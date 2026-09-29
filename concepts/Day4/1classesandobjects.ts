export {};

// 1. CLASSES AND OBJECTS
//The class is the blueprint.
// The object is the actual thing created from that blueprint.

console.log("Classes and Objects");

class BasicStudent {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    displayStudent(): void {
        console.log("Student Name:", this.name);
        console.log("Student Age:", this.age);
    }
}

const basicStudent = new BasicStudent("Rahul", 21);
basicStudent.displayStudent();
console.log("\n");
