//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}



console.log(a);


one()
// two() //error because of scope

function one(){
    const username = "raunak"

    function two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website);

     two()

}



if (true) {
    const username = "raunak"
    if (username === "raunak") {
        const website = " github"
        console.log(username + website);
    }
    // console.log(website); //error because of scope
}

// console.log(username);





console.log(addone(5))

function addone(num){
    return num + 1
}


//error because of scope beacause of hoisting

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))