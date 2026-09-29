export {};

interface Student {
	id: number;
	name: string;
	age: number;
}

interface Attendance {
	studentId: number;
	percentage: number;
}

interface Course {
	id: number;
	name: string;
}

function fetchStudent(): Promise<Student> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				id: 101,
				name: "Akash",
				age: 22
			});
		}, 1000);
	});
}

function fetchAttendance(): Promise<Attendance> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				studentId: 101,
				percentage: 92
			});
		}, 1500);
	});
}

function fetchCourse(): Promise<Course> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				id: 1,
				name: "Software Engineering"
			});
		}, 1000);
	});
}

async function loadStudentDashboard(): Promise<void> {
	try {
		console.log("Loading student dashboard...");

		const [student, attendance, course] = await Promise.all([
			fetchStudent(),
			fetchAttendance(),
			fetchCourse()
		]);

		console.log("\nSTUDENT DASHBOARD");

		console.log("Student ID:", student.id);
		console.log("Name:", student.name);
		console.log("Age:", student.age);

		console.log("Attendance:", attendance.percentage + "%");

		console.log("Course:", course.name);
	} catch (error) {
		console.log("Failed to load dashboard");

		if (error instanceof Error) {
			console.log("Error:", error.message);
		}
	} finally {
		console.log("\nDashboard request completed");
	}
}

console.log("PROGRAM START");

loadStudentDashboard();

console.log("Program continues...");

console.log("PROGRAM END");