//MORE ON OBJECTS + LOOPS

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
// FOR IN - LOOPS
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


// *******************************************************************


const programming = ["js", "rb", "py", "java", "cpp"]
// FOR IN LOOP FOR ARRAYS - it printed array keys which are numbers starting from 0
for (const key in programming) {
    //console.log(programming[key]);
}
// *******************************************************************


//FOR IN LOOP FOR MAPS
// maps are not itteratable hence they cannot be written in for loops

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}