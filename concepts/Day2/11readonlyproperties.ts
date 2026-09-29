export {};

// 15. READONLY PROPERTIES
console.log("Readonly Properties");

interface StudentWithReadonlyId {
    readonly id: number;
    name: string;
}

const readonlyStudent: StudentWithReadonlyId = {
    id: 105,
    name: "Vikram"
};

console.log("Student ID:", readonlyStudent.id);
console.log("Student Name:", readonlyStudent.name);

// readonly properties cannot be changed after initialization.

// Uncomment to demonstrate a type error.

// readonlyStudent.id = 200;

console.log("\n");
