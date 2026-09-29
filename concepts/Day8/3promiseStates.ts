export {};
// A Promise has three states:

// Pending: The operation is still in progress.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

console.log("PROGRAM START");

// 1. PENDING → FULFILLED

const successfulPromise = new Promise<string>((resolve) => {
	console.log("Successful Promise: Pending");

	setTimeout(() => {
		resolve("Data received successfully");
	}, 2000);
});

successfulPromise.then((message) => {
	console.log("Successful Promise:", message);
});

// 2. PENDING → REJECTED

const failedPromise = new Promise<string>((resolve, reject) => {
	console.log("Failed Promise: Pending");

    //   setTimeout(() => {
    //     resolve("This will not affect the final state");
    // }, 3000);

	setTimeout(() => {
		reject(new Error("Failed to fetch data"));
	}, 2000);
  
});

failedPromise
	.then((message) => {
		console.log("Successful Promise:", message);
	})
	.then(() => {
		console.log("Failed Promise: Then after rejection");
	})
	.catch((error: Error) => {
		console.log("Failed Promise: Rejected");
		console.log("Error:", error.message);
	});

console.log("PROGRAM END");