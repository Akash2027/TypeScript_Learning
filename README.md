# TypeScript Learning

**Intern:** Akash K

This repository documents a 10-day learning path from TypeScript fundamentals to Node.js and project organization. It contains small, focused examples in `concepts/` and an in-memory student attendance application in `mini_project/`.

## Learning Goals

- Write TypeScript with explicit, inferred, and reusable types.
- Model application data and behavior with interfaces, type aliases, functions, and classes.
- Use generics and utility types to build reusable abstractions.
- Work with Promises, `async`/`await`, Node.js, npm, and modules.
- Organize a small application into maintainable parts and apply basic code-quality tools.

## Roadmap

| Week | Days | Focus |
| --- | --- | --- |
| Week 1 | 1-5 | TypeScript foundations, types, functions, object-oriented programming, and modern syntax |
| Week 2 | 6-10 | Generics, advanced types, asynchronous programming, Node.js, and code quality |

### Week 1: TypeScript Foundations

#### Day 1: TypeScript Fundamentals

Introduces TypeScript as a statically typed superset of JavaScript and explains how TypeScript is compiled to JavaScript. Examples cover variables, static typing, annotations, inference, primitive types, arrays, array operations, object shapes, and `tsconfig.json`.

#### Day 2: Types, Interfaces, and Type Aliases

Covers tuples; `any`, `unknown`, and `never`; unions and literal types; type aliases for values and objects; interfaces; interface-versus-type choices; optional and readonly properties; and modelling application data.

#### Day 3: Functions and Type Safety

Practices typed parameters and return values, `void`, optional and default parameters, rest parameters, arrow functions, function types, and union types in function inputs. Examples also cover `undefined` results, validation, and attendance calculations.

#### Day 4: Classes and Object-Oriented TypeScript

Explores classes and objects, constructors, `public`, `private`, `protected`, and `readonly`; encapsulation; inheritance and `super`; method inheritance and overriding; abstract classes and methods; and implementing interfaces. The examples discuss when classes are useful versus plain objects and functions.

#### Day 5: Modern TypeScript Syntax

Covers optional chaining, nullish coalescing, array and object destructuring, the spread operator, enums, and `as const`.

### Week 2: Advanced TypeScript and Node.js

#### Day 6: Generics

Introduces why generics are useful, generic functions and interfaces, generic constraints, `keyof` with generics, a generic repository pattern, and a discriminated generic `Result<T>` type.

#### Day 7: Utility and Advanced Types

Practices `keyof`, `typeof`, `Partial<T>`, `Required<T>`, `Pick<T, Keys>`, `Omit<T, Keys>`, and `Record<KeyType, ValueType>`, including update and summary models.

#### Day 8: Asynchronous TypeScript

Explains synchronous and asynchronous execution, Promises and their states, `.then()`, `.catch()`, `.finally()`, `async`/`await`, error handling with `try`/`catch`, and `Promise.all()`. Mock API and student dashboard examples combine asynchronous operations.

#### Day 9: Node.js Fundamentals

Introduces the Node.js runtime and architecture, npm and `package.json`, dependencies versus development dependencies, npm scripts, and ES module imports and exports.

#### Day 10: Project Structure and Code Quality

Covers separation of concerns, models/services/repositories, error handling, logging, ESLint, and Prettier. The examples introduce ways to make application code easier to maintain and diagnose.

## Repository Structure

```text
concepts/
  Day1/   TypeScript fundamentals
  Day2/   Types, interfaces, and aliases
  Day3/   Functions and type safety
  Day4/   Classes and object-oriented TypeScript
  Day5/   Modern TypeScript syntax
  Day6/   Generics
  Day7/   Utility and advanced types
  Day8/   Asynchronous TypeScript
  Day9/   Node.js fundamentals
  Day10/  Project structure and code quality
mini_project/
  student_attendance/
    src/
      models/
      services/
      utils/
package.json
package-lock.json
tsconfig.json
eslint.config.js
```

The numbered TypeScript files in each `concepts/DayN/` directory are standalone lesson examples. The attendance application keeps its models, services, and utilities under `mini_project/student_attendance/src/` and uses in-memory data.

## Prerequisites

- Node.js 20.19 or newer
- npm (included with Node.js)
- Git, to clone the repository

## Setup

Clone the repository and install the exact dependency versions recorded in the lockfile:

```bash
git clone https://github.com/Akash2027/TypeScript_Learning.git
cd TypeScript_Learning
npm ci
```

## Commands

Run the TypeScript check without generating JavaScript:

```bash
npm run check
```

Compile the included TypeScript files into `dist/`:

```bash
npm run build
```

Lint the maintained lesson and mini-project source:

```bash
npm run lint -- concepts mini_project
```

Apply ESLint's available automatic fixes to those folders:

```bash
npm run lint:fix -- concepts mini_project
```

Run an individual lesson with `tsx`:

```bash
npm run dev -- concepts/Day1/1variables.ts
```

Run the student attendance application:

```bash
npm run dev -- mini_project/student_attendance/src/app.ts
```

Replace the lesson path with any `.ts` file under `concepts/` to run a different example.

## Configuration

- `package.json` defines npm scripts and development dependencies, including TypeScript, `tsx`, ESLint, and Prettier.
- `package-lock.json` records the resolved dependency versions used by `npm ci`.
- `tsconfig.json` enables strict type checking and includes TypeScript files under `concepts/` and `mini_project/`.
- `eslint.config.js` configures ESLint and the project's TypeScript and stylistic rules.
- `.gitignore` excludes installed dependencies, compiled output, and macOS Finder metadata.

## Suggested Learning Workflow

1. Read a day's examples in order.
2. Run an example with the `dev` command and observe its output.
3. Change an input or implementation, then run `npm run check` to see how the type checker responds.
4. Use the attendance application to connect the smaller concepts to a multi-file program.

The examples are intended for learning and experimentation; the attendance application stores data in memory and does not use a database or external API.