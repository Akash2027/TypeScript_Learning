import { Person } from "./Person";

export class Teacher extends Person {
    constructor(
        id: number,
        name: string,
        public subject: string
    ) {
        super(id, name);
    }

    getRole(): string {
        return "Teacher";
    }
}