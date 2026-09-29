export {};

function fetchStudent(): Promise<string> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Akash");
		}, 2000);
	});
}

async function displayStudent(): Promise<void> {
	console.log("Fetching student...");

	const studentName = await fetchStudent();

	console.log("Student name:", studentName);
	console.log("Student data received");
}

console.log("PROGRAM START");

displayStudent();

console.log("Program continues...");

console.log("PROGRAM END");