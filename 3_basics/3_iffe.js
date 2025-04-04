

// Named iffe
(function dbConnected (){
    console.log(`db is connected`);
    
})();


// Unamed iffe

( (company){
    console.log(`${company} db is connected`);
    
})("Google")