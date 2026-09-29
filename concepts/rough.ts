export{}
function joinStrings(values: {
    s1: string;
    s2: string;
    s3: string;
}): string {
    return values.s1 + " " + values.s2 + " " + values.s3;
}

const result = joinStrings({
    s2: "Second",
    s1: "First",
    s3: "Third"
});

console.log(result); // First Second Third

const res = joinStrings({
    s3: "Third",
    s2: "Second",
    s1: "First",
    
});
console.log(res);

export {};

function joinStrings1(values: {
    s1: string;
    s2: string;
    s3: string;
}): string {
    return values.s1.concat(" ", values.s2, " ", values.s3);
}

const result1 = joinStrings({
    s2: "Second",
    s1: "First",
    s3: "Third"
});

console.log(result1);

export {};

function joinStrings2(values: {
    s1: string;
    s2: string;
    s3: string;
}): string {
    return [values.s1, values.s2, values.s3].join(" ");
}

const result2 = joinStrings({
    s2: "Second",
    s1: "First",
    s3: "Third"
});

console.log(result2);


interface Student {
    id: number;
    name: string;
    age?: number;
    course?: string;
}

// Partial: incomplete data is allowed
const studentUpdate: Partial<Student> = {
    age: 23
};

// Required: every property must be provided
const completeStudent: Required<Student> = {
    id: 101,
    name: "Akash",
    age: 22,
    course: "TypeScript"
};

console.log("Partial update:", studentUpdate);
console.log("Complete student:", completeStudent);

// This causes an error because properties are missing:
// const invalidStudent: Required<Student> = {
//     id: 102,
//     name: "Rahul"
// };