export {};

// 2. CONSTRUCTORS
//The constructor is a special method that runs automatically when an object is created.
console.log("Constructors");

class Course {
    courseName: string;
    duration: number;

    constructor(courseName: string, duration: number) {
        this.courseName = courseName;
        this.duration = duration;
    }

    displayCourse(): void {
        console.log("Course:", this.courseName);
        console.log("Duration:", this.duration, "days");
    }
}

const typescriptCourse = new Course("TypeScript", 5);

typescriptCourse.displayCourse();

console.log("\n");
