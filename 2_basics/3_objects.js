// objects


// Symbol  declaration
const sym = Symbol("key")
console.log( sym);


let obj = {
    name : "Abhay",
    [sym] : "key1",
    "full_name" : "Abhayraj Singh Arya",
    email : "abhayraj@gmail.com",
    isLoggede : false,
    location : "Greater Noida"
}



console.log(obj.name);
console.log(typeof obj.sym);

console.log(obj.email);
console.log(obj.isLoggede);
console.log(obj.location);
console.log(obj.full_name);

console.log(obj);

obj.greeting = function(){
    console.log("Hello User");
    
}

obj.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    
}

console.log(obj.greeting);

console.log(obj.greeting());

console.log(obj.greetingTwo());














