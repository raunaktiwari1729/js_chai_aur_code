class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }
    encryptPassword(){
        return `${this.password}raunak`
    }
    CapitalizeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const user1=new User("Raunak","raunak@gmail.com","1245")

console.log(user1.encryptPassword())
console.log(user1.CapitalizeUserName())



// behind the scene

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new user("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());