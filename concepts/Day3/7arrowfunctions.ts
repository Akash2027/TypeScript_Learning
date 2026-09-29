export {};

// 8. ARROW FUNCTIONS
console.log("Arrow Functions");

const addNumbers = (firstNumber: number, secondNumber: number): number => {
    return firstNumber + secondNumber;
};

const additionResult = addNumbers(10, 20);

console.log("Addition Result:", additionResult);

console.log("\n");

// 9. ARROW FUNCTION WITH SHORT SYNTAX
console.log("Arrow Function Short Syntax");

const multiplyNumbers = (firstNumber: number, secondNumber: number): number =>
    firstNumber * secondNumber;

console.log("Multiplication Result:", multiplyNumbers(5, 4));

console.log("\n");
