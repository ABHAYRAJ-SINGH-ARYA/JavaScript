// Arrays 2

const marvel_heroes = ["thor", "IronMan", "spiderMan"]
const dc_heroes = ["superMan", "flash", "batMan"]

console.log(marvel_heroes);
console.log(dc_heroes);

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// concation

// const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);

// spreding all heroes

const all_heroes = [...dc_heroes, ...marvel_heroes];
console.log(all_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[8,9]]];
const real_array = another_array.flat(Infinity);
console.log(real_array);


// Intersting

console.log(Array.isArray("Abhay"));
console.log(Array.from("Abhay"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));












