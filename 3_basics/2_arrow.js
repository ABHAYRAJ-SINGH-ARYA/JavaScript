
const user = {
    username: "Abhay",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "Rahul"
// user.welcomeMessage()
 

const chai = () => {
    username: "Abhayraj Singh Arya"
    two : {
    console.log(this.username);
    }
    
}

chai(chai.two)



// const addTwo = (num1, num2)  => {
//     return num1 + num2;
// }

// console.log(addTwo(2, 6));


// implicit return 
const addTwo = (num1, num2) =>  
    (num1 + num2)



console.log(addTwo(2, 6));


const obj = () => {
    return {name: "Abhay"}
}

console.log(obj);
