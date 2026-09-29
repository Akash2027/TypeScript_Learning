import { Person } from "./Person";

export class Student extends Person {
    constructor(
        id: number,
        name: string,
        public department: string
    ) {
        super(id, name);
    }

    getRole(): string {
        return "Student";
    }
}