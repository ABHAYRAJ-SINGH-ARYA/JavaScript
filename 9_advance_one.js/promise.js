// const promiseOne = new Promise(function(resolve, reject){
    // Do async task

    // DataBase calls, cryptogrphy, network

//     setTimeout( function() {
//         console.log(`Async task is complete`)
//         resolve()
//     }, 1000)
 
// })

// promiseOne.then(function(){
//     console.log(`Promise consumed`);
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log(`Async2 is completed`)
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log(`Promise 2 resolved`);
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({name: "Abhay", email: "abhay@gmail.com"})
//     }, 1000)

   
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({name: "Abhay", email: "abhay@gmail.com"}) 
//         }else{
//             reject('ERROR something went wrong')
//         }
//     }, 1000)
// })

// promiseFour.then( (user) => {
//     console.log(user);
//     return user.name
// }) .then( (username) => {
//     console.log(username)
// }).catch( function(error) {
//     console.log(error)
// }).finally( () => {
//     console.log('Promise is either resolve or reject')
// })


// const promiseFive = new Promise( function(resolve, reject){
//     setTimeout( function(){
//         let error = true;
//         if(!error){
//             resolve({name: "javaScript", password: "12312"})
//         }else{
//             reject("Error: JS went wrong")
//         }
//     }, 1000)
// })
 
// async  function promiseFiveConsumed (){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }


 
// promiseFiveConsumed();



// async function getAllUsers() {
//     try {
//            // const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         //console.log(response)
//         const data =  await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users').then( (response) => {
    return response.json()
}).then( (data) => {
    console.log(data)
}).catch( (error) => {
    console.log(error)
})