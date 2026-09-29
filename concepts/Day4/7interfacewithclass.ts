export {};

// 12. INTERFACE WITH CLASS
console.log("Interface with Class");

interface Printable {
    printDetails(): void;
}

class Classroom implements Printable {
    readonly id: number;
    name: string;
    capacity: number;
    constructor(
        id: number,
        name: string,
        capacity: number
    ) {
        this.id = id;
        this.name = name;
        this.capacity = capacity;
    }
    printDetails(): void {
        console.log("Classroom ID:", this.id);
        console.log("Classroom Name:", this.name);
        console.log("Capacity:", this.capacity);
    }
}

const classroomData = new Classroom(
    701,
    "Room 101",
    40
);

classroomData.printDetails();

// classroomData.id = 500;
// readonly prevents changing the ID.

console.log("\n");
