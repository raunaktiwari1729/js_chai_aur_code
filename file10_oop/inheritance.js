class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Raunak = new Teacher("Raunak", "Raunak@teacher.com", "123")

Raunak.logMe()
const Raunak2 = new User("Raunak2")

Raunak.addCourse()

console.log(Raunak instanceof User);