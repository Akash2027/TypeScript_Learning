export {};

// 6. NEVER
console.log("Never");

// A function with a never return type never successfully returns a value.
function throwError(message: string): never {
    throw new Error(message);
}

// Do not call this function during the normal demo,because it will stop the program.

// throwError("Something went wrong");

console.log("A never function does not return a value.");
console.log("\n");
