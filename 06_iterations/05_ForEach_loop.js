
//FOR EACH LOOP

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){ //- CALLBACK FUNCTION: no name needed
    console.log(val);
} )

coding.forEach( (item) => { // using arrow fucntion
    console.log(item);
} )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr)=> { // ForEach - it contains more parameters other than items
    console.log(item, index, arr);
} )
// *******************************************************************

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )