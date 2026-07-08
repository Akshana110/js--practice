// Immediately Invoked Function Expressions (IIFE)


(function chai(){// wrapping in brackets is the only process
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // to end IIFE we need to put semicolan otherwise it will not stop itself

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// WHATS TO SAY IN INTERVIEW 
// somethimes global scope causes pollution and to remove that pollution caused by global scope variable we use IIFE - just adding brackets