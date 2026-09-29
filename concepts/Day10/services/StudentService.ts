import { Student } from "../models/Student.js";
import { StudentRepository } from "../repositories/StudentRepository.js";

export class StudentService {
    constructor(private readonly studentRepository: StudentRepository) {}

    addStudent(student: Student): void {
        this.studentRepository.save(student);
    }

    findStudentById(id: number): Student | undefined {
        return this.studentRepository.findById(id);
    }
}
