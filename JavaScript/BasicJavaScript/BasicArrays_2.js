const SuperHeros=["Ironman","Spiderman","Thor","Hulku"]
console.log(SuperHeros)

const superVillains=["Thanos","Loki","Green Goblin","Ultron"]
console.log(superVillains)

// Merging 2 Arrays
SuperHeros.push("Captain America")

console.log(SuperHeros)
// Array calling
console.log(SuperHeros[3])//3 value of the Array
console.log(SuperHeros[3][3])// the value of 3 postion and 3 index of that value =(k)

// concat : this is used to combine 2 Arrays in this one arr id SuperHeros and other is SuperVillains
const NewArr=SuperHeros.concat(superVillains)
console.log(NewArr)

// mutipule Arrays in A single Array
const AnotherArr=[[[1,2,3,[4,5,6],7,8]]]
console.log(AnotherArr)

// this is used to Convert mutipule Arrays in A single Array this to a single array
/*
orignal Arr=[1,2,3,[4,5,6],7,8]
 or [[[1,2,3,[4,5,6],7,8]]]
output: 
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
 */

const AnotherArr1=AnotherArr.flat(Infinity)
// Flat tells how nested arrays should be flattened
// Infinity is used to flaten all the levels of Array
// default is 1
// flat does Not change the original Array it gives a new Array
console.log(AnotherArr1)

// flat method with single level or value 1 
// it only flaten the first level of Array

const AnotherArr2=[1,2,3,[4,5,6,[7,8,9]],10]
const flatArr=AnotherArr2.flat(1)
console.log(flatArr) // output [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ], 10 ]
// console.log(AnotherArr2)


// data Scripting using this Method
// it check if the given value is Array or Not 
console.log(Array.isArray("Aarth")) // False
console.log(Array.isArray(SuperHeros))//True

// Coverts an iteratable object like string , setMap into an Array
console.log(Array.from("Aarth")) // Output [ 'A', 'a', 'r', 't', 'h' ]

console.log(Array.from({Name:"Aarth"}))

Object.keys({Name:"Aarth"})

console.log(Object.keys({Name:"Aarth",Age:12})) // Output [ 'Name', 'Age' ]

console.log(Object.values({Name:"Aarth"})) // Output [ 'Aarth' ]

// Create New Array from given Value No mater No. of Array 
// Array.of it is used to convert Values
//Array.from it is used for iltrable values 
let Score1=100
let Score2=200
let Score3=300

console.log(Array.of(Score1,Score2,Score3))