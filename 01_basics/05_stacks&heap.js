// Stack (primitive), Heap (non-primitive)

let myname = "Akshana"
let anothername = myname

anothername = "prasad" // here after changing the values the original values don't change: STACKS

console.log(myname);
console.log(anothername);

let useOne = {
    email: "userone@gmail.com"


}
let userTwo = useOne
userTwo.email = "prasad@gmail.com" // here after changing the values the original values changes : HEAP