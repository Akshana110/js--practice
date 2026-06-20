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



// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); power operation
// console.log(2/3);
// console.log(2%3); remainder or modulus

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2 // there is no subtract only add
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); - taken as string since first is string
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3); - always use brackets

// console.log(+true); - bad practice
// console.log(+"");- bad practice

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; // - prefix and postfix incremental
console.log(gameCounter);


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion