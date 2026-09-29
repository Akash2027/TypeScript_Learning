export {};

// 12. INTERFACE
console.log("Interface");

// An interface describes the structure of an object.

interface TeacherModel {
    id: number;
    name: string;
    subject: string;
}

const teacherModel: TeacherModel = {
    id: 201,
    name: "John",
    subject: "TypeScript"
};

console.log("Teacher ID:", teacherModel.id);
console.log("Teacher Name:", teacherModel.name);
console.log("Subject:", teacherModel.subject);

console.log("\n");
