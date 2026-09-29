export {};

function fetchStudent(success: boolean): Promise<string> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (success) {
				resolve("Akash");
			} else {
				reject(new Error("Failed to fetch student"));
			}
		}, 3000);
	});
}

async function displayStudent(success: boolean): Promise<void> {
	try {
		console.log("Fetching student...");

		const studentName = await fetchStudent(success);

		console.log("Student name:", studentName);
		console.log("Student data received");
	} catch (error) {
		console.log("Something went wrong");

		if (error instanceof Error) {
			console.log("Error:", error.message);
		}
	} finally {
		console.log("Request completed");
	}
}

console.log("PROGRAM START");

displayStudent(true);
//displayStudent(false); 
//They start two async requests at the same time.

console.log("Program continues...");

console.log("PROGRAM END");

// .then().catch() is Promise-style syntax.
// try...catch is used with async/await.


// try...catch inside the async function
// or
// .then().catch() outside the async function