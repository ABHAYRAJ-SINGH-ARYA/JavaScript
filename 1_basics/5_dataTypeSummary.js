/*
Primitive 

7 types (call by value)
    String, Number, Boolean, null, undefined, Symbol, BigInt

Java Script is Dynamically Type

*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 38492490283902n
console.log(bigNumber);



/*

Reference Type(Non Primitive)

    Array, Object, Functions
*/

const heroes = ["shaktiman", "doga", "nagraj"]
let myObj = {
    name : "Abhay",
    age : 22,

}

const myFunction = function(){
    console.log(myFunction);
    
}

console.log(myFunction);

myFunction();


let num = 123
let string = "Abhay"
let isLogin = false
let temperature = null
let state = undefined;
let bignum = 3213424324923804n

console.table([typeof(num), typeof(string), typeof(isLogin), typeof(temperature), typeof(state), typeof(bignum), typeof(myFunction)])


//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non - Primitive)
// In Stack copy is given, In Heap reference is given


// Stack example value only change in the copy
let section  = "A"
let new_section = section
new_section = "B"
console.log(section);
console.log(new_section);


// Heap example value change in the original variable

let student1 = {
    email : "user1@google.com"
}

let student2 =  student1
 


student2.email = "user2@google.com"
console.log(student1.email);
console.log(student2.email);






