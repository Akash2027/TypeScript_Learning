export {};

function fetchStudent(): Promise<string> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Student data");
		}, 2000);
	});
}

function fetchTeacher(): Promise<string> {
    // return new Promise((resolve) => { 
    //     setTimeout(() => { 
    //         resolve("Teacher data"); 
    //     }, 1000); });

	return new Promise((resolve, reject) => {
		setTimeout(() => {
            resolve("Teacher data");
		}, 1000);

        setTimeout(() => {
            reject(new Error("Failed to fetch teacher data"));
        }, 1000);

		
	});
}

function fetchCourse(): Promise<string> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Course data");
		}, 1500);
	});
}

async function fetchAllData(): Promise<void> {
	console.log("Fetching all data...");

	const startTime = Date.now();

	const v1 = await fetchStudent();
	const v2 = await fetchTeacher();
	const v3 = await fetchCourse();

	try {
		const [student, teacher, course] = await Promise.all([
			fetchStudent(),
			fetchTeacher(),
			fetchCourse()
		]);

		const endTime = Date.now();

		console.log("Student:", student);
		console.log("Teacher:", teacher);
		console.log("Course:", course);

		console.log("Time taken:", endTime - startTime, "ms");
	} catch (error) {
		console.log("Something went wrong");

		if (error instanceof Error) {
			console.log("Error:", error.message);
		}
	}
}

fetchAllData();




// We use Promise.all() when multiple independent asynchronous operations can run concurrently and we need all their results.
// const [student, teacher, course] = await Promise.all([
// 	fetchStudent(),
// 	fetchTeacher(),
// 	fetchCourse()
// ]);

// Instead of :
// Student → 2 sec
// Teacher → 1 sec
// Course  → 1.5 sec
// Total ≈ 4.5 sec

// They can run concurrently 
// Student ────── 2 sec
// Teacher ─ 1 sec
// Course ─── 1.5 sec
// Total ≈ 2 sec approx.
// It is not exactly “all at the same CPU moment.”