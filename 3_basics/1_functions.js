
function name (){
    console.log("Abhayraj Singh Arya")
}

name()

function add(num1, num2){
    return num1 + num2;
    
}

const ans = add(4, 5);
console.log(ans);

function user_login(name = "sam"){
    if(!name){
        console.log("please enter a user name");
        return;        
    }
    return `${name} is logged`
}

console.log(user_login("Rahul"));



function cart_price(...num){
    return num;
}

console.log(cart_price(10, 20, 30, 40));

const user = {
    user_name: "Abhayraj Singh Arya",
    price: 1323
}

function handleObject(anyuser){
    console.log(`Username is ${anyuser.user_name} and price is ${anyuser.price}`);
    
}

//handleObject(user);
handleObject({user_name: "Abhayraj Singh Arya", price: 123})

function getValue(arr){
    return arr[2]
}

const arr = [1, 2, 3, 4, 6];

console.log(getValue(arr ));



