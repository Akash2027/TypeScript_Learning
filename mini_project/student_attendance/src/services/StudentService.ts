import { Student } from "../models/Student";

export class StudentService {
    private students: Student[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    getStudents(): Student[] {
        return this.students;
    }

    findStudentById(id: number): Student | undefined {
        return this.students.find(
            student => student.id === id
        );
    }
}