const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers // this is called chaining
                .map((num) => num * 10 )
                .map( (num) => num + 1) // value in num will be from map above
                .filter( (num) => num >= 40) // filters is like true and false

console.log(newNums);