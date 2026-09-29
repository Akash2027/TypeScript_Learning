// Prettier formats code consistently by applying the project's style rules.
export {};
const attendanceRecord = {
  studentName: "Akash",
  presentDays: 18,
  totalDays: 20,
};

function calculateAttendancePercentage(record: {
  presentDays: number;
  totalDays: number;
}): number {
  return (record.presentDays / record.totalDays) * 100;
}

const percentage = calculateAttendancePercentage(attendanceRecord);

console.log(`${attendanceRecord.studentName}'s attendance is ${percentage}%`);
