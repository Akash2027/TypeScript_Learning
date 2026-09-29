export {};

// 8. EXPLICIT TYPE ANNOTATION VS TYPE INFERENCE
console.log("Explicit Type Annotation vs Type Inference");

// Explicit type annotation
const explicitName: string = "Akash";

// Type inference
const inferredName = "Akash";

console.log("Explicit Name:", explicitName);
console.log("Inferred Name:", inferredName);
console.log("Type of Explicit Name:", typeof explicitName);
console.log("Type of Inferred Name:", typeof inferredName);
console.log("\n");

// Both are treated as strings by TypeScript.
