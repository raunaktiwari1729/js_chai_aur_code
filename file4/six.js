const coding=["js","ruby","java","python"]


// const ct=coding.forEach((val) =>{
//      console.log(val)
//      return val
// }); //dont return 

// console.log(ct)

const mynum=[1,2,3,4,5,6,7,8,9];

const nums=(mynum.filter((num)=>{return num>4}))

console.log(nums)

const newNums = []

mynum.forEach( (num) => {
    if (num > 3) {
        newNums.push(num)
    }
} )

console.log(newNums);

