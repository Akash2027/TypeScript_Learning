export {};

// 5. UNKNOWN
console.log("Unknown");

const unknownValue: unknown = 100;

console.log("Unknown Value:", unknownValue);

// Unlike any, unknown cannot be used directly without checking its type first.

if (typeof unknownValue === "number") {
    console.log("Number after type checking:", unknownValue + 10);
}

console.log("\n");
