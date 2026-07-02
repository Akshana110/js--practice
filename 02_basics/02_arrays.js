const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); - adds arrays in arrays like second array as a single element
// console.log(marvel_heros[3][1]);- not a good practice

// const allHeros = marvel_heros.concat(dc_heros)  - it returns a new array and have to provide a variable for that
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // - spread operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]// array in array in array

const real_another_array = another_array.flat(Infinity) // returns new array with single one array not inside array and have to provide depth (can use infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // converting it into array
console.log(Array.from({name: "hitesh"})) // interesting - if it cannot make arrays then it will output empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));