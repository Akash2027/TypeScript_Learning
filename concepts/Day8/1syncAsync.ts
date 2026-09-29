export {};
// Synchronous: wait and finish each task in order
// Asynchronous: start a waiting task and continue running other code without blocking


console.log("PROGRAM START");

// 1. SYNCHRONOUS CODE

console.log("Synchronous 1");

console.log("Synchronous 2");

console.log("Synchronous 3");


// 2. ASYNCHRONOUS CODE

console.log("Before setTimeout");

setTimeout(() => {
	console.log("Inside setTimeout");
}, 2000);

console.log("After setTimeout");


// 3. MORE SYNCHRONOUS CODE

console.log("Program continues");

console.log("PROGRAM END");
