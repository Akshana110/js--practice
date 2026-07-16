// IF - ELSE - ELSEIF


const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// *******************************************************************
// console.log("Execute");
// <, >, <=, >=, ==, !=, ===(checks equal and also data type), !== :>>(comparison operators)

// *******************************************************************

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`); -- remember back ticks
// }

// console.log(`User power: ${power}`);


// *******************************************************************

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); == CALLED IMPLICIT SCOPE but immature way of coding



// *******************************************************************
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");
// }
// *******************************************************************
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { // means both should be true
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // OR - means any one should be true
    console.log("User logged in");
}