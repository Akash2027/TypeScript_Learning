export {};
//Record is useful for storing key-value pairs with a consistent value type.
// 1. BASIC RECORD

console.log("1. BASIC RECORD");

type RoleDescriptions = Record<string, string>;

const roles: RoleDescriptions = {
    ADMIN: "System administrator",
    TEACHER: "Manages students",
    STUDENT: "Attends classes"
};
console.log("Roles:", roles);

// 2. RECORD WITH SPECIFIC KEYS

console.log("\n2. RECORD WITH SPECIFIC KEYS");

type UserRole = "ADMIN" | "TEACHER" | "STUDENT";

type RolePermissions = Record<UserRole, string>;

const permissions: RolePermissions = {
    ADMIN: "Full access",
    TEACHER: "Student management",
    STUDENT: "View courses"
};

console.log("Permissions:", permissions);

// 3. ACCESSING VALUES

console.log("\n3. ACCESSING VALUES");

console.log("Admin:", permissions.ADMIN);
console.log("Teacher:", permissions.TEACHER);
console.log("Student:", permissions.STUDENT);

// 4. RECORD WITH NUMBERS

console.log("\n4. RECORD WITH NUMBERS");

type StudentMarks = Record<string, number>;

const marks: StudentMarks = {
    Math: 90,
    Physics: 85,
    Chemistry: 88
};

console.log("Marks:", marks);

// 5. RECORD WITH OBJECT VALUES

console.log("\n5. RECORD WITH OBJECT VALUES");

interface Student {
    id: number;
    name: string;
}

type StudentDirectory = Record<string, Student>;

const students: StudentDirectory = {
    student101: {
        id: 101,
        name: "Akash"
    },
    student102: {
        id: 102,
        name: "Rahul"
    }
};

console.log("Student directory:", students);

// 6. RECORD WITH SPECIFIC KEYS AND OBJECT VALUES

console.log("\n6. RECORD WITH SPECIFIC KEYS");

type Department = "Engineering" | "Science" | "Arts";

type DepartmentHeads = Record<Department, Student>;

const heads: DepartmentHeads = {
    Engineering: {
        id: 201,
        name: "Arun"
    },
    Science: {
        id: 202,
        name: "Priya"
    },
    Arts: {
        id: 203,
        name: "Kiran"
    }
};

console.log("Department heads:", heads);

// 7. INVALID KEY

console.log("\n7. INVALID KEY");

// This causes an error because "Commerce"
// is not part of Department:
//
// const invalidHeads: DepartmentHeads = {
//     Engineering: {
//         id: 201,
//         name: "Arun"
//     },
//     Science: {
//         id: 202,
//         name: "Priya"
//     },
//     Arts: {
//         id: 203,
//         name: "Kiran"
//     },
//     Commerce: {
//         id: 204,
//         name: "Vijay"
//     }
// };

// 8. MISSING KEY

console.log("\n8. MISSING KEY");

// This causes an error because all Department
// keys are required:
//
// const incompleteHeads: DepartmentHeads = {
//     Engineering: {
//         id: 201,
//         name: "Arun"
//     },
//     Science: {
//         id: 202,
//         name: "Priya"
//     }
// };
