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


