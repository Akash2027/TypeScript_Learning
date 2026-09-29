export {};

// 10. FUNCTION TYPES
console.log("Function Types");

// A function type describes: parameters + return type.

let calculateSum: (firstNumber: number, secondNumber: number) => number;

calculateSum = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};

console.log("Sum:", calculateSum(15, 25));

console.log("\n");

// 11. FUNCTION TYPE WITH MULTIPLE FUNCTIONS
console.log("Function Type with Multiple Functions");

let calculation: (firstNumber: number, secondNumber: number) => number;

function subtractNumbers(
    firstNumber: number,
    secondNumber: number
): number {
    return firstNumber - secondNumber;
}

calculation = subtractNumbers;

console.log("Subtraction:", calculation(30, 10));

calculation = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};

console.log("Multiplication:", calculation(30, 10));

console.log("\n");
