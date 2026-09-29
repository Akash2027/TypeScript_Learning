export {};

interface Student {
	name: string;
	address?: {
		city: string;
	};
}

const student: Student = {
	name: "Akash"
};

// 1. Without optional chaining
// console.log(student.address.city);

// 2. Traditional approach
if (student.address) {
	console.log("Traditional:", student.address.city);
} else {
	console.log("Traditional: City not available");
}

// 3. Optional chaining
console.log("Optional chaining:", student.address?.city);