const myDetails={
    name: "Raunak",
    age:20,
    city:"Gorakhpur",
    blood_grp:"o+",
    email:"rtiwari@gmail.com",
    isLogged:false,
}
console.log(myDetails)
console.log(myDetails.name)
console.log(myDetails["age"])
myDetails.isLogged=true
console.log(myDetails)
//Object.freeze(myDetails)

myDetails.greeting=function(){
    console.log(`Hello, ${this.name}`);
}
myDetails.greeting()
