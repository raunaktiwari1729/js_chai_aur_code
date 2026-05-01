const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

allHeros=marvel_heros.concat(dc_heros)
console.log(...allHeros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_Arr=another_array.flat(Infinity)

console.log(real_Arr)

console.log(Array.from({name:"raunak tiwari"}))//looped value keys

let s1=100
let s2=188
let s3=100

console.log(Array.of(s1,s2,s3))