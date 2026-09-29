export {};

interface Student {
	id: number;
	name: string;
	age: number;
}

const students: Student[] = [
	{
		id: 101,
		name: "Akash",
		age: 22
	},
	{
		id: 102,
		name: "Rahul",
		age: 21
	},
	{
		id: 103,
		name: "Priya",
		age: 23
	}
];

function fetchStudent(studentId: number): Promise<Student> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const student = students.find((student) => student.id === studentId);

			if (student) {
				resolve(student);
			} else {
				reject(new Error("Student not found"));
			}
		}, 1500);
	});
}

async function getStudent(studentId: number): Promise<void> {
	try {
		console.log("Fetching student...");

		const student = await fetchStudent(studentId);

		console.log("Student received");
		console.log("ID:", student.id);
		console.log("Name:", student.name);
		console.log("Age:", student.age);
	} catch (error) {
		console.log("Failed to fetch student");

		if (error instanceof Error) {
			console.log("Error:", error.message);
		}
	} finally {
		console.log("Request completed");
	}
}

console.log("PROGRAM START");

getStudent(102);

console.log("Program continues...");

console.log("PROGRAM END");