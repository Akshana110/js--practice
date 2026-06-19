let score = 33
// two ways of knowing typeof variable
console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score) // this gaurantees that score converted into number
console.log(typeof valueInNumber);



/* if a string which is not strictly a number is covnerted in js it will get converted like its type will be converted
but actually there will be no value
for example - 
*/
let stringnum = "33ab" // its a string + number , not strictly a number
let value = Number(stringnum)
console.log( typeof stringnum); // yhis will show its type as number now after conversion from string
console.log( stringnum); // when we will print it it will show NaN:Not a number basically no data

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);