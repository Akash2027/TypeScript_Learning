export {};

// 4. ANY
console.log("Any");

let anyValue: any = "Hello";

console.log("Initial Value:", anyValue);

anyValue = 100;
console.log("Number Value:", anyValue);

anyValue = true;
console.log("Boolean Value:", anyValue);

// any disables TypeScript's type checking for that variable.

anyValue = {
    name: "Rahul",
    age: 21
};

console.log("Object Value:", anyValue);

console.log("\n");
