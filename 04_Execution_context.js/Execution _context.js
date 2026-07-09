
// # JavaScript Execution Context & Call Stack

// ## Execution Context (EC)

// An **Execution Context** is the environment where JavaScript executes code.

// It contains:
// - Variables
// - Functions
// - Scope
// - `this` keyword
// - Arguments (for functions)

// Every JavaScript code runs inside an execution context.

// ---

// ## Types of Execution Context

// ### 1. Global Execution Context (GEC)
// - Created automatically when the program starts.
// - Created only once.
// - Contains global variables and functions.
// - In browsers, `this` refers to `window`.

// Example:
// ```javascript
// let name = "John";

// function greet() {
//     console.log("Hello");
// }

// greet();
// ```

// ---

// ### 2. Function Execution Context (FEC)
// - Created whenever a function is called.
// - Each function call gets its own execution context.
// - Destroyed after the function finishes.

// Example:
// ```javascript
// function add(a, b) {
//     return a + b;
// }

// add(2, 3);
// ```

// ---

// ### 3. Eval Execution Context
// - Created when using `eval()`.
// - Rarely used.

// ---

// # Phases of Execution Context

// Every execution context is created in **2 phases**.

// ## 1. Memory Creation Phase (Hoisting Phase)

// JavaScript allocates memory before executing code.

// Rules:
// - `var` → `undefined`
// - `let` & `const` → Hoisted but remain in the **Temporal Dead Zone (TDZ)** until initialized.
// - Function declarations → Stored completely.

// Example:
// ```javascript
// console.log(a);

// var a = 10;
// ```

// Memory:
// ```
// a → undefined
// ```

// Output:
// ```
// undefined
// ```

// ---

// ## 2. Execution Phase

// JavaScript executes code line by line.

// Example:
// ```javascript
// var a = 10;
// ```

// Memory updates:
// ```
// a → 10
// ```

// ---

// # Hoisting Summary

// ```javascript
// var a = 10;
// ```

// Memory:
// ```
// a → undefined
// ```

// Execution:
// ```
// a → 10
// ```

// ---

// ```javascript
// function greet() {
//     console.log("Hi");
// }
// ```

// Memory:
// ```
// greet → complete function
// ```

// ---