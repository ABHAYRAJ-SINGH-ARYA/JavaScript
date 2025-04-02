const name = "abhay"
const repoCount = 2
console.log(name + repoCount + "value");
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)


let lastName = new String('abhayraj-singh-arya')
console.log(lastName);
console.log(lastName.length);
console.log(lastName.toUpperCase());
console.log(lastName.charAt(2));
console.log(lastName.indexOf('a'));

const newString = lastName.substring(0,5);
console.log(newString);

const anotherString = lastName.slice(-10, 8);
console.log(anotherString);


const stringOne = " hello "
console.log(stringOne);
console.log(stringOne.length);

console.log(stringOne.trim());
console.log(stringOne.trim().length);

const url = "https://abhay.com/abhay%20arya"

console.log(url.replace("%20", "@"));
console.log(url.includes('abhay'));
console.log(url.includes('-'));
console.log(lastName.split('-'));














