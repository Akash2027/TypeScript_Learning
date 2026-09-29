export {};

// 3. PUBLIC
console.log("Public Access Modifier");

class PublicStudent {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const publicStudent = new PublicStudent("Priya", 22);

console.log("Student Name:", publicStudent.name);
console.log("Student Age:", publicStudent.age);

// public properties can be accessed from outside the class.

console.log("\n");

// 4. PRIVATE
console.log("Private Access Modifier");

class PrivateStudent {
    public name: string;
    private marks: number;

    constructor(name: string, marks: number) {
        this.name = name;
        this.marks = marks;
    }

    public getMarks(): number {
        return this.marks;
    }

    public updateMarks(newMarks: number): void {
        if (newMarks >= 0 && newMarks <= 100) {
            this.marks = newMarks;
        }
    }
}

const privateStudent = new PrivateStudent("Arun", 85);

console.log("Student Name:", privateStudent.name);
console.log("Student Marks:", privateStudent.getMarks());

privateStudent.updateMarks(90);

console.log("Updated Marks:", privateStudent.getMarks());

// private properties cannot be accessed directly.
// privateStudent.marks = 100;

console.log("\n");

// 5. PROTECTED
console.log("Protected Access Modifier");

class PersonBase {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    displayName(): void {
        console.log("Name:", this.name);
    }
}

class TeacherBase extends PersonBase {
    subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    displayTeacher(): void {
        console.log("Teacher Name:", this.name);
        console.log("Subject:", this.subject);
    }
}

const protectedTeacher = new TeacherBase(
    "John",
    "TypeScript"
);

protectedTeacher.displayTeacher();

// protected properties can be accessed inside the class and its child classes.
// They cannot be accessed directly from outside.

// protectedTeacher.name;

console.log("\n");

// 6. READONLY
console.log("Readonly Modifier");

class ReadonlyStudent {
    readonly id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const readonlyStudentData = new ReadonlyStudent(101,"Vikram");

console.log("Student ID:", readonlyStudentData.id);
console.log("Student Name:", readonlyStudentData.name);

// readonly properties cannot be changed after initialization.

// readonlyStudentData.id = 200;

console.log("\n");

// 7. COMBINING ACCESS MODIFIERS
console.log("Combining Access Modifiers");

class Employee {
    readonly id: number;
    public name: string;
    private salary: number;
    protected department: string;

    constructor(
        id: number,
        name: string,
        salary: number,
        department: string
    ) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public getSalary(): number {
        return this.salary;
    }
}

const employeeData = new Employee(
    1001,
    "Akash",
    50000,
    "Engineering"
);

console.log("Employee ID:", employeeData.id);
console.log("Employee Name:", employeeData.name);
console.log("Employee Salary:", employeeData.getSalary());

console.log("\n");
