const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    if (!Object.hasOwn(myObject, key)) continue;
    
    const element = myObject[key];
    console.log(element)
    
}

const arr=["js","ruby","cpp"]

for (const key in arr) {
    
    console.log(arr[key]);
    
}