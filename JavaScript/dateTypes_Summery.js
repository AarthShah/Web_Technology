// Non premitive date types in JavaScript

// DateType  Object

// symbol is mainly used in react to identify the elements uniquely

let anOtherId=Symbol("123")
console.log("Value of anOtherId =",anOtherId)
console.log("Type of anOtherId =",typeof(anOtherId))

const id=123

console.log(anOtherId===id)
console.log(anOtherId==id)

// javascript is a Dynamic lanague
// array

const NewArr=["Aarth","John","Doe","Smith"]
const Num=[1,2,3,4,5,6,7,8,9]

// objects 
const myObj={
    Name:"JS",
    age:24

} 

console.log(myObj.Name)
console.log(myObj.age)

// function

function get_name(){
   console.log("Aarth")
   console.log(NewArr)
}

get_name()

let str1="Aarth"
console.log("Value of str1 =",str1)
console.log("Type of str1 =",typeof(str1))

// string intercolastion 

console.log(`hello my Name is ${str1}`)

let fName="Aarth"
console.log(`__:${fName}`) 

// Object String 
// we use this to get String Methods 
const Game_count=new String("Aarth")

console.log(Game_count.length)
console.log(Game_count.toUpperCase())
console.log(Game_count.toLowerCase())

console.log(Game_count.slice(0,3))
console.log(Game_count.charAt(2))
console.log(Game_count.indexOf("a"))