// {} used with function are called scope
//var c = 300 == It should be used it creates confusion
let a = 300 // everything written outside scope is called global scope
if (true) {    // everything written under scope is called block scope
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);
 

// DOM - document object model : how to maniupulate html webpage using javascript

//****************************************************************************************************************** */



function one(){
    const username = "hitesh" // concept of function under fucntion and which will get executed

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()

//****************************************************************************************************************** */

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    console.log(website); // error since no scope
}

console.log(username); // error since no scope


// ++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(addone(5))

function addone(num){  // here function is just declared
    return num + 1
}



addTwo(5) - //this will cause error since here function is declared under a variable
const addTwo = function(num){  // sometimes called EXPRESSION can hold any values
    return num + 2
}