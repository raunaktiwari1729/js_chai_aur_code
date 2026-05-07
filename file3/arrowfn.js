const user = {
    username: "raunak",
    roll: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage()

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


const addTwo = (num1, num2) => ( num1 + num2 )

console.log(addTwo(8,9))