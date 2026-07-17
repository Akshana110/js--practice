//FOR OF - LOOP 
//array specific loop

// ["", "", ""] - strings in array
// [{}, {}, {}] - objects in array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // num - variable name
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// *******************************************************************


// MAPS its an object
// values will be unique and will be in the order

const map = new Map()
map.set('IN', "India")  // key-value pair
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
// for loop on map
for (const [key, value] of map) { // - [] it will destructure the key and value
    // console.log(key, ':-', value); -- if we print key it will print key+value
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }