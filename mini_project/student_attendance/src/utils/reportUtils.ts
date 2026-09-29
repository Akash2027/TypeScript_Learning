import { Student } from "../models/Student";
import { AttendanceService } from "../services/AttendanceService";

export function generateAttendanceReport(
    students: Student[],
    attendanceService: AttendanceService
): void {
    console.log("\n========================================");
    console.log("          ATTENDANCE REPORT");
    console.log("========================================");

    students.forEach(student => {
        const present = attendanceService.getPresentCount(
            student.id
        );

        const absent = attendanceService.getAbsentCount(
            student.id
        );

        const late = attendanceService.getLateCount(
            student.id
        );

        const total =
            present +
            absent +
            late;

        const percentage =
            attendanceService.calculatePercentage(
                student.id
            );

        console.log("\nStudent ID   :", student.id);
        console.log("Student Name :", student.name);
        console.log("Department   :", student.department);
        console.log("Present      :", present);
        console.log("Absent       :", absent);
        console.log("Late         :", late);
        console.log(
            "Attendance   :",
            percentage.toFixed(2) + "%"
        );
        console.log("Total Classes:", total);

        console.log("----------------------------------------");
    });

    console.log("========================================\n");
}