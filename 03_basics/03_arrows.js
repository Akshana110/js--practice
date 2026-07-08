const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // refering to current context = this is used
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); == implementing this in bowser will give us window whereas here it will give empty IMP

// Earlier javascript  was used in browser and engine to implement it was only present in browser not the browser is present separately also like nodejs and all so that's why it gives different outputs in browser and here



function chai(){
   let username = "hitesh"
    console.log(this.username);
 }

chai()


const chai = function () {
    let username = "hitesh"
    console.log(this.username);
}


//****************************************** Arrow Function ************************************ */

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


chai()

const addTwo = (num1, num2) => { // paranthesis and return keyword use
    return num1 + num2
}

const addTwo = (num1, num2) =>  num1 + num2 // implicit return = no paranthesis and no return keyword

const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // for object we need to add brackets


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()