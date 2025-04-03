let myDate = new Date();
console.log(myDate)
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.getHours());
console.log(myDate.getMonth());


let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toLocaleString());


let myCreatedDate1 = new Date("01-23-2023");
console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));









;
