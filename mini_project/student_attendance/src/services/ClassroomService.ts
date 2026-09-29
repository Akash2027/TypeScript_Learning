import { Classroom } from "../models/Classroom";
import { Student } from "../models/Student";

export class ClassroomService {
    private classrooms: Classroom[] = [];

    createClassroom(classroom: Classroom): void {
        this.classrooms.push(classroom);
    }

    getClassrooms(): Classroom[] {
        return this.classrooms;
    }

    findClassroomById(id: number): Classroom | undefined {
        return this.classrooms.find(
            classroom => classroom.id === id
        );
    }

    addStudentToClassroom(
        classroomId: number,
        student: Student
    ): void {
        const classroom = this.findClassroomById(classroomId);

        if (classroom) {
            classroom.addStudent(student);
        }
    }
}