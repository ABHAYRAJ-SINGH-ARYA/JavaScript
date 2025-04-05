// for of loop

// const arr = [1, 2, 3, 4, 5, 6]

// for (const  val of  arr) {
//     console.log(val);
    
// }

// const greetings = "greeting word"
// for (const  word of greetings) {
//     console.log(`Each char is ${word}`);
    
// }


// MAPS

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// for (const  [key, value] of  map) {
//     console.log(key, ': ->', value);
    
// }

for (const key in  map) {
     console.log(key);
     
}