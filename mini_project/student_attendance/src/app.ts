import { Student } from "./models/Student";
import { Teacher } from "./models/Teacher";
import { Admin } from "./models/Admin";
import { Classroom } from "./models/Classroom";

import { StudentService } from "./services/StudentService";
import { TeacherService } from "./services/TeacherService";
import { ClassroomService } from "./services/ClassroomService";
import { AttendanceService } from "./services/AttendanceService";

import { generateAttendanceReport } from "./utils/reportUtils";

console.log("========================================");
console.log(" STUDENT ATTENDANCE MANAGEMENT SYSTEM");
console.log("========================================");


// 1. CREATE SERVICES

console.log("\n1. Creating Services");

const studentService = new StudentService();
const teacherService = new TeacherService();
const classroomService = new ClassroomService();
const attendanceService = new AttendanceService();

console.log("Services created successfully.");


// 2. ADD STUDENTS

console.log("\n2. Adding Students");

const rahul = new Student(
    601,
    "Rahul",
    "Computer Science"
);

const priya = new Student(
    602,
    "Priya",
    "Information Technology"
);

const arun = new Student(
    603,
    "Arun",
    "Computer Science"
);

studentService.addStudent(rahul);
studentService.addStudent(priya);
studentService.addStudent(arun);

console.log("Students added successfully.");


// 3. DISPLAY STUDENTS

console.log("\nStudents:");

studentService.getStudents().forEach(student => {
    console.log(
        student.id,
        "-",
        student.name,
        "-",
        student.department
    );
});


// 4. ADD TEACHERS

console.log("\n3. Adding Teachers");

const john = new Teacher(
    201,
    "John",
    "Mathematics"
);

const sarah = new Teacher(
    202,
    "Sarah",
    "Physics"
);

teacherService.addTeacher(john);
teacherService.addTeacher(sarah);

console.log("Teachers added successfully.");


// 5. DISPLAY TEACHERS

console.log("\nTeachers:");

teacherService.getTeachers().forEach(teacher => {
    console.log(
        teacher.id,
        "-",
        teacher.name,
        "-",
        teacher.subject
    );
});


// 6. CREATE CLASSROOMS

console.log("\n4. Creating Classrooms");

const mathematicsClass = new Classroom(
    101,
    "Room 101",
    "Mathematics",
    john
);

const physicsClass = new Classroom(
    102,
    "Room 102",
    "Physics",
    sarah
);

classroomService.createClassroom(
    mathematicsClass
);

classroomService.createClassroom(
    physicsClass
);

console.log("Classrooms created successfully.");


// 7. ADD STUDENTS TO CLASSROOMS

console.log("\n5. Assigning Students");

classroomService.addStudentToClassroom(
    101,
    rahul
);

classroomService.addStudentToClassroom(
    101,
    priya
);

classroomService.addStudentToClassroom(
    102,
    arun
);

console.log("Students assigned successfully.");


// 8. DISPLAY CLASSROOMS

console.log("\nClassrooms:");

classroomService.getClassrooms().forEach(
    classroom => {
        console.log(
            classroom.id,
            "-",
            classroom.name,
            "-",
            classroom.subject,
            "- Teacher:",
            classroom.teacher.name
        );

        console.log("Students:");

        classroom.getStudents().forEach(
            student => {
                console.log(
                    "  ",
                    student.id,
                    "-",
                    student.name
                );
            }
        );
    }
);


// 9. MARK ATTENDANCE

console.log("\n6. Marking Attendance");

const date1 = "2026-09-01";
const date2 = "2026-09-02";
const date3 = "2026-09-03";
const date4 = "2026-09-04";
const date5 = "2026-09-05";


// Rahul

attendanceService.markAttendance(
    rahul,
    "Present",
    date1
);

attendanceService.markAttendance(
    rahul,
    "Present",
    date2
);

attendanceService.markAttendance(
    rahul,
    "Absent",
    date3
);

attendanceService.markAttendance(
    rahul,
    "Present",
    date4
);

attendanceService.markAttendance(
    rahul,
    "Late",
    date5
);


// Priya

attendanceService.markAttendance(
    priya,
    "Present",
    date1
);

attendanceService.markAttendance(
    priya,
    "Present",
    date2
);

attendanceService.markAttendance(
    priya,
    "Present",
    date3
);

attendanceService.markAttendance(
    priya,
    "Absent",
    date4
);

attendanceService.markAttendance(
    priya,
    "Present",
    date5
);


// Arun

attendanceService.markAttendance(
    arun,
    "Absent",
    date1
);

attendanceService.markAttendance(
    arun,
    "Present",
    date2
);

attendanceService.markAttendance(
    arun,
    "Present",
    date3
);

attendanceService.markAttendance(
    arun,
    "Present",
    date4
);

attendanceService.markAttendance(
    arun,
    "Present",
    date5
);

console.log("Attendance marked successfully.");


// 10. DISPLAY ATTENDANCE RECORDS

console.log("\n7. Attendance Records");

attendanceService.getRecords().forEach(
    record => {
        console.log(
            record.date,
            "-",
            record.student.name,
            "-",
            record.status
        );
    }
);


// 11. GENERATE REPORT

console.log("\n8. Generating Report");

generateAttendanceReport(
    studentService.getStudents(),
    attendanceService
);


// 12. ADMIN

console.log("9. Admin Information");

const admin = new Admin(
    1,
    "System Admin"
);

console.log(
    "Admin:",
    admin.name
);

console.log(
    "Role:",
    admin.getRole()
);


console.log("\n========================================");
console.log(" Application Completed Successfully");
console.log("========================================");