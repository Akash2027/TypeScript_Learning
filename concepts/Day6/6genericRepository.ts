export {};

// 1. STUDENT MODEL

console.log("1. STUDENT MODEL");

interface Student {
    id: number;
    name: string;
    age: number;
}

const student1: Student = {
    id: 101,
    name: "Akash",
    age: 22
};

const student2: Student = {
    id: 102,
    name: "Rahul",
    age: 21
};

console.log(student1);
console.log(student2);

// 2. GENERIC REPOSITORY

console.log("\n2. GENERIC REPOSITORY");

class Repository<T> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    getAll(): T[] {
        return this.items;
    }
    getFirst(): T | undefined {
        return this.items[0];
    }
}

// 3. STUDENT REPOSITORY

console.log("\n3. STUDENT REPOSITORY");

const studentRepository = new Repository<Student>();

studentRepository.add(student1);
studentRepository.add(student2);

console.log("All Students:", studentRepository.getAll());
console.log("First Student:", studentRepository.getFirst());

// 4. GENERIC REPOSITORY WITH STRING

console.log("\n4. STRING REPOSITORY");

const nameRepository = new Repository<string>();

nameRepository.add("Akash");
nameRepository.add("Rahul");
nameRepository.add("Priya");

console.log("Names:", nameRepository.getAll());

// 5. GENERIC REPOSITORY WITH NUMBER

console.log("\n5. NUMBER REPOSITORY");

const numberRepository = new Repository<number>();

numberRepository.add(10);
numberRepository.add(20);
numberRepository.add(30);

console.log("Numbers:", numberRepository.getAll());

// 6. TYPE SAFETY

console.log("\n6. TYPE SAFETY");

const anotherStudentRepository = new Repository<Student>();

anotherStudentRepository.add({
    id: 103,
    name: "Priya",
    age: 22
});

// This would cause a TypeScript error:
// anotherStudentRepository.add("Akash");

console.log("Students:", anotherStudentRepository.getAll());

// 7. GENERIC REPOSITORY WITH ANOTHER MODEL

console.log("\n7. ANOTHER MODEL");

interface Course {
    id: number;
    name: string;
}

const courseRepository = new Repository<Course>();

courseRepository.add({
    id: 501,
    name: "Software Engineering"
});

courseRepository.add({
    id: 502,
    name: "Computer Science"
});

console.log("Courses:", courseRepository.getAll());