export {};

// 14. OPTIONAL PROPERTIES
console.log("Optional Properties");

interface StudentWithOptionalData {
    id: number;
    name: string;
    age?: number;
}

const studentWithAge: StudentWithOptionalData = {
    id: 103,
    name: "Arun",
    age: 20
};

const studentWithoutAge: StudentWithOptionalData = {
    id: 104,
    name: "Kiran"
};

console.log("Student with Age:", studentWithAge);
console.log("Student without Age:", studentWithoutAge);

console.log("\n");
