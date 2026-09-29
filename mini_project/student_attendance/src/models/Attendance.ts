import { Student } from "./Student";

export type AttendanceStatus =
    "Present" |
    "Absent" |
    "Late";

export interface AttendanceRecord {
    student: Student;
    status: AttendanceStatus;
    date: string;
}