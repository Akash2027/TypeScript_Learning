import { Student } from "../models/Student.js";

export class StudentRepository {
    private students: Student[] = [];

    save(student: Student): void {
        this.students.push(student);
    }

    findById(id: number): Student | undefined {
        return this.students.find(student => student.id === id);
    }
}
