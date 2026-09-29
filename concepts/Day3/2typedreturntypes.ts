export {};

// 2. TYPED RETURN TYPES
console.log("Typed Return Types");

function calculateTotalMarks(mark1: number, mark2: number): number {
    return mark1 + mark2;
}

const day3TotalMarks: number = calculateTotalMarks(85, 90);
console.log("Total Marks:", day3TotalMarks);

// The function accepts numbers and returns a number.
console.log("\n");
