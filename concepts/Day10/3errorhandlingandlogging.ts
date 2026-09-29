import { Student } from "../../mini_project/student_attendance/src/models/Student";
import { StudentService } from "../../mini_project/student_attendance/src/services/StudentService";

// The current StudentService returns undefined when a student is not found.
// This example handles that result and logs the error.

function getStudentOrThrow(
    studentService: StudentService,
    studentId: number
): Student {
    const student = studentService.findStudentById(studentId);

    if (!student) {
        throw new Error(`Student ${studentId} was not found`);
    }

    return student;
}

const studentService = new StudentService();
studentService.addStudent(new Student(803, "Arun", "Computer Science"));

try {
    const student = getStudentOrThrow(studentService, 803);
    console.log("Student:", student);
} catch (error: unknown) {
    console.error("Unable to load student:", error);
}
