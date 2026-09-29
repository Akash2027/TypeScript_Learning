export {};

// 17. ENCAPSULATION
console.log("Encapsulation");

class StudentAccount {
    public name: string;
    private attendancePercentage: number;

    constructor(
        name: string,
        attendancePercentage: number
    ) {
        this.name = name;
        this.attendancePercentage = attendancePercentage;
    }

    getAttendance(): number {
        return this.attendancePercentage;
    }

    updateAttendance(newPercentage: number): void {
        if (
            newPercentage >= 0 &&
            newPercentage <= 100
        ) {
            this.attendancePercentage = newPercentage;
        }
    }
}

const studentAccountData = new StudentAccount(
    "Priya",
    85
);

console.log(
    "Student Name:",
    studentAccountData.name
);

console.log(
    "Attendance:",
    studentAccountData.getAttendance() + "%"
);

studentAccountData.updateAttendance(90);

console.log(
    "Updated Attendance:",
    studentAccountData.getAttendance() + "%"
);

// attendancePercentage is private, so it cannot be modified directly.

console.log("\n");
