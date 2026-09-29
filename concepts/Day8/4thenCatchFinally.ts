export {};

function fetchStudent(success: boolean): Promise<string> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (success) {
				resolve("Student data fetched successfully");
			} else {
				reject(new Error("Failed to fetch student data"));
			}
		}, 1000);
	});
}

// SUCCESS CASE

console.log("Starting successful request");
const variable = false;

fetchStudent(variable)
	.then((message) => {
		console.log("THEN:", message);
	})
	.catch((error: Error) => {
		console.log("CATCH:", error.message);
	})
	.finally(() => {
		console.log("FINALLY: Request completed");
	});

console.log("Program continues...");
