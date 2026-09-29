import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class Classroom {
    private students: Student[] = [];

    constructor(
        public id: number,
        public name: string,
        public subject: string,
        public teacher: Teacher
    ) {}

    addStudent(student: Student): void {
        this.students.push(student);
    }

    getStudents(): Student[] {
        return this.students;
    }
}