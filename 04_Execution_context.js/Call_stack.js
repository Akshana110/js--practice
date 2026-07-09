// # Call Stack

// The **Call Stack** is a stack data structure that stores execution contexts.

// It follows **LIFO (Last In, First Out)**.

// Operations:
// - Push → Function called
// - Pop → Function completed

// ---

// ## Example

// ```javascript
// function one() {
//     two();
// }

// function two() {
//     three();
// }

// function three() {
//     console.log("Hello");
// }

// one();
// ```

// Call Stack:

// ```
// Top

// three()
// two()
// one()
// Global
// ```

// After `three()` finishes:

// ```
// two()
// one()
// Global
// ```

// Then:

// ```
// one()
// Global
// ```

// Finally:

// ```
// Global
// ```

// Program ends → Stack becomes empty.

// ---

// # Execution Context + Call Stack

// ```javascript
// function greet(name) {
//     console.log(name);
// }

// function start() {
//     greet("John");
// }

// start();
// ```

// Execution Flow:

// ```
// Global

// ↓

// start()

// ↓

// greet()

// ↓

// Return to start()

// ↓

// Return to Global

// ↓

// End
// ```

// ---

// # Function Execution Context Structure

// ```javascript
// function add(a, b) {
//     let sum = a + b;
//     return sum;
// }
// ```

// Contains:

// ```
// Arguments
// a = 5
// b = 10

// Variables
// sum

// this

// Outer Scope Reference
// ```

// Destroyed after function execution.

// ---

// # Execution Context vs Call Stack

// | Execution Context | Call Stack |
// |-------------------|------------|
// | Environment where code executes | Stack storing execution contexts |
// | Created for global code and every function call | Manages execution order |
// | Holds variables, scope, `this`, arguments | Pushes and pops contexts |

// ---

// # Important Points

// - JavaScript is **single-threaded**.
// - Only **one execution context** runs at a time.
// - Program starts with the **Global Execution Context**.
// - Every function call creates a **new Function Execution Context**.
// - Function completion removes its execution context from the call stack.
// - The top of the call stack is always the currently executing code.

// ---

// # Quick Revision

// ```
// Program Starts
//       ↓
// Global Execution Context Created
//       ↓
// Memory Creation Phase
//       ↓
// Execution Phase
//       ↓
// Function Called
//       ↓
// Function Execution Context Created
//       ↓
// Pushed to Call Stack
//       ↓
// Function Executes
//       ↓
// Function Returns
//       ↓
// Execution Context Removed
//       ↓
// Back to Previous Context
//       ↓
// Program Ends
// ```