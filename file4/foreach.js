const coding=["js","ruby","java","python"]

// coding.forEach((val) =>{
//      console.log(val)
// });

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )