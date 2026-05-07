function c1(){
    console.log("This is fn")
}
c1()

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3, 5)


function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage(""));

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const myNewArray = [200, 400, 100, 600]
console.log(calculateCartPrice(...myNewArray)) //these three dots are called spread operator used to spread the array into individual elements

function returnSecondValue(getArray){
    return getArray[1]
}