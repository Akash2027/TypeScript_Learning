import { Teacher } from "../models/Teacher";

export class TeacherService {
    private teachers: Teacher[] = [];

    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    getTeachers(): Teacher[] {
        return this.teachers;
    }

    findTeacherById(id: number): Teacher | undefined {
        return this.teachers.find(
            teacher => teacher.id === id
        );
    }
}