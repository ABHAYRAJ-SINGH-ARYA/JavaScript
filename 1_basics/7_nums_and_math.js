const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

console.log(balance.toString().length);

const otherNumber = 234.3848
console.log(otherNumber.toPrecision(4));
const hundreds = 100000
console.log((hundreds.toLocaleString()));

console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.2));
console.log(Math.ceil(2.3));
console.log(Math.floor(2.9));
console.log(Math.sqrt(64));

console.log((Math.random()*10) + 1);


console.log((Math.floor(Math.random()*10))  +1);

const max = 20
const min = 10

console.log(Math.floor(Math.random()*(max - min +1 )) + min);








