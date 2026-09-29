export {};

// 1. UNION TYPE

console.log("1. UNION TYPE");

type UserRole = "ADMIN" | "TEACHER" | "STUDENT";

const userRole: UserRole = "ADMIN";

console.log("User Role:", userRole);

// Union types provide compile-time type safety.
// They do not create runtime objects.
//userRole = "INVALID" 
// it tells only the UserRole can be one of those 3 values exactly else error

// 2. ENUM

console.log("\n2. ENUM");

enum AccountRole {
    Admin = "ADMIN",
    Teacher = "TEACHER",
    Student = "STUDENT"
}

const accountRole: AccountRole = AccountRole.Admin;

console.log("Account Role:", accountRole);

// Enums provide named members and a runtime object.

// 3. NAMED MEMBERS

console.log("\n3. ENUM NAMED MEMBERS");

console.log("Admin:", AccountRole.Admin);
console.log("Teacher:", AccountRole.Teacher);
console.log("Student:", AccountRole.Student);

// Union types do not provide named members like:
// UserRole.Admin
console.log("\n");
//REVERSE MAPPING 
// this demonstrates reverse mapping in numeric enums that union types do not support
console.log("REVERSE MAPPING");
enum Status {
    Pending,
    Approved,
    Rejected
}

console.log(Status.Pending);
console.log(Status[0]);
console.log(Status.Approved);
console.log(Status[1]);
console.log(Status.Rejected);
console.log(Status[2]);

// 4. RUNTIME OBJECT DIFFERENCE

console.log("\n4. RUNTIME OBJECT DIFFERENCE");

console.log("Enum Object:", AccountRole);

// AccountRole exists at runtime.

// UserRole exists only during compilation.
// The following would cause an error:
  //console.log(UserRole === 'ADMIN');

// 5. USING UNION AND ENUM IN FUNCTIONS

console.log("\n5. USING UNION AND ENUM IN FUNCTIONS");

function checkUnionRole(role: UserRole): void {
    if (role === "ADMIN") {
        console.log("Union: Admin access");
    } else {
        console.log("Union: Limited access");
    }
}

function checkEnumRole(role: AccountRole): void {
    if (role === AccountRole.Admin) {
        console.log("Enum: Admin access");
    } else {
        console.log("Enum: Limited access");
    }
}

checkUnionRole("ADMIN");
checkEnumRole(AccountRole.Admin);

// 6. PRACTICAL USE OF RUNTIME OBJECT

console.log("\n6. PRACTICAL USE OF RUNTIME OBJECT");

function displayAvailableRoles(): void {

    console.log("Account Role keys:");

    Object.keys(AccountRole).forEach((role) => {
        console.log("->", role);
    });
    console.log("Available Roles values:");

    Object.values(AccountRole).forEach((role) => {
        console.log("->", role);
    });

    console.log("Account Role Entries:");

    Object.entries(AccountRole).forEach(([key, role]) => {
        console.log(key, "->", role);
    });
}

displayAvailableRoles();

// Because AccountRole exists at runtime,
// we can retrieve and iterate over its values.

// A union type alone cannot be used with
// Object.values() because it disappears
// after compilation.

// 7. OBJECT + AS CONST ALTERNATIVE

console.log("\n7. OBJECT + AS CONST ALTERNATIVE");

const UserRoles = {
    Admin: "ADMIN",
    Teacher: "TEACHER",
    Student: "STUDENT"
} as const;

type UserRoleValue = typeof UserRoles[keyof typeof UserRoles]; // type safe

const selectedRole: UserRoleValue = UserRoles.Admin; //named members

console.log("Selected Role:", selectedRole);
console.log("Roles Object:", UserRoles); //runtime object

// This approach provides:
// 1. A runtime object.
// 2. Named constants.
// 3. A union type derived from the object.
//
// It is an alternative to using enums.


// but still this approach doesnot provide automatic numbering like enums do or reverse mapping.