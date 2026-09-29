import {
    AttendanceRecord,
    AttendanceStatus
} from "../models/Attendance";

import { Student } from "../models/Student";

import { calculateAttendancePercentage 
} from "../utils/attendanceUtils";

export class AttendanceService {
    private records: AttendanceRecord[] = [];

    markAttendance(
        student: Student,
        status: AttendanceStatus,
        date: string
    ): void {
        this.records.push({
            student,
            status,
            date
        });
    }

    getRecords(): AttendanceRecord[] {
        return this.records;
    }

    getStudentRecords(
        studentId: number
    ): AttendanceRecord[] {
        return this.records.filter(
            record => record.student.id === studentId
        );
    }

    getPresentCount(studentId: number): number {
        return this.getStudentRecords(studentId)
            .filter(record => record.status === "Present")
            .length;
    }

    getAbsentCount(studentId: number): number {
        return this.getStudentRecords(studentId)
            .filter(record => record.status === "Absent")
            .length;
    }

    getLateCount(studentId: number): number {
        return this.getStudentRecords(studentId)
            .filter(record => record.status === "Late")
            .length;
    }

    calculatePercentage(studentId: number): number {
        const records = this.getStudentRecords(studentId);

        if (records.length === 0) {
            return 0;
        }

        const presentCount = this.getPresentCount(studentId);

        return calculateAttendancePercentage(presentCount, records.length);
    }
}