import { Student } from "../../mini_project/student_attendance/src/models/Student";
import { StudentService } from "../../mini_project/student_attendance/src/services/StudentService";
import { isValidId, isValidName } from "../../mini_project/student_attendance/src/utils/validationUtils";

// Separation of concerns gives each part of the application one responsibility.
// The model represents data, the service manages application behavior, and
// utility functions provide reusable validation logic.

const student = new Student(801, "Akash", "Computer Science");
const studentService = new StudentService();

if (isValidId(student.id) && isValidName(student.name)) {
    studentService.addStudent(student);
}

console.log("Students:", studentService.getStudents());
