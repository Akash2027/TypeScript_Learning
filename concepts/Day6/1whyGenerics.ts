export {};

// 1. WITHOUT GENERICS

console.log("1. WITHOUT GENERICS");

function getNumber(value: number): number {
    return value;
}

function getString(value: string): string {
    return value;
}

console.log("Number:", getNumber(100));
console.log("String:", getString("Akash"));

// 2. USING ANY

console.log("\n2. USING ANY");

function getValueAny(value: any): any {
    return value;
}

const anyValue = getValueAny("Akash");

console.log("Value:", anyValue);

console.log(anyValue.toUpperCase()); // Works
//console.log(anyValue.toFixed(2));    // Compiles, but fails at runtime

// 3. USING GENERICS

console.log("\n3. USING GENERICS");

function getValue<T>(value: T): T {
    return value;
}

const numberValue = getValue(100);
const stringValue = getValue("Akash");
const booleanValue = getValue(true);

console.log("Number:", numberValue);
console.log("String:", stringValue);
console.log("Boolean:", booleanValue);

// 4. TYPE SAFETY

console.log("\n4. TYPE SAFETY");

const studentName = getValue("Akash");

console.log("Student Name:", studentName);

// TypeScript knows studentName is a string.
// Therefore string methods are available.

console.log("Uppercase:", studentName.toUpperCase());