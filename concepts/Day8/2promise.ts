export {};

console.log("PROGRAM START");

function getStudentName(): Promise<string> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Akash");
		}, 2000);
	});
}

console.log("Before calling getStudentName");

const studentNamePromise = getStudentName();

console.log("Promise created");

studentNamePromise.then((studentName) => {
	console.log("Student name:", studentName);
});

console.log("Program continues");

console.log("PROGRAM END");