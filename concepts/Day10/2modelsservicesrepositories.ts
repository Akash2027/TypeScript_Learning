import { Student } from "./models/Student.js";
import { StudentRepository } from "./repositories/StudentRepository.js";
import { StudentService } from "./services/StudentService.js";

const student: Student = {
	id: 802,
	name: "Priya",
	department: "Information Technology"
};

const studentRepository = new StudentRepository();
const studentService = new StudentService(studentRepository);

studentService.addStudent(student);

console.log("Found student:", studentService.findStudentById(802));
