export {};

// Logging records what an application is doing and helps diagnose problems.

console.log("Application started");
console.info("Loading attendance data");
console.warn("No optional teacher information was provided");

try {
    const totalClasses = 0;

    if (totalClasses === 0) {
        throw new Error("No classes are available");
    }
} catch (error: unknown) {
    console.error("Attendance calculation failed:", error);
}

console.log("Application finished");
