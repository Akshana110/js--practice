// A situation where we want to check multiple statements at a time in that case we use switch statement

// SYNTAX
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// To duplicate texts we select the code and shift+Alt+down arrow
const month = "march"

switch (month) {
    case "jan": // this case is sace sentitive
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;                   // if we don't use break statement it executes whole code except default that is breaking the    control flow
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default: // works line else statement
        console.log("default case match");
        break;
}