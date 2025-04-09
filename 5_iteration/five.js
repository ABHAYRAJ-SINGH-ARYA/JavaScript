// For Each Loop

// const coding = ["py", "Cpp", "js", "java", "C", "ruby"]

// coding.forEach( function (val, index){
//     console.log(val+" " + index);
    
// })


// coding.forEach((val) => {
//     console.log(val);
    
// })


// Objects in array

const arr = [
    {
        language: "C++",
        fileName: "cpp"
    },
    {
        language: "java",
        fileName: "java"
    },
    {
        language: "python",
        fileName: "py"
    }
]

arr.forEach((item) => {
    console.log(item.fileName);
    
})