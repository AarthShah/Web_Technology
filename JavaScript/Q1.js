// Constant
/*  */
const AccID=10;
{
   // AccID=20;
   // this will give error as the const value onces declared can not be changed 
}


// Var
/* */
var A=20;
{ 
    A=45
    console.log("Value of Var inside Scope")
    console.log(A)
}
    console.log("Value of Var outside  Scope")
    console.log(A)

// let
/* */
let B=30
{
    let B=50
    console.log("Value of let inside  Scope ")
    console.log(B)
}

console.log("Value of let Outside the Scope")
console.log(B)

// Variables in JavaScript

// string
let AccName="Aarth"
console.log(AccName)
console.log("type =",typeof(AccName))

//number
let AccId=101
console.log(AccId)
console.log("type =",typeof(AccId))

//Boolen
let Maried_status=false
console.log(Maried_status)
console.log("type =",typeof(Maried_status))

// Big Number
let AccNo=904769876453789
console.log(AccNo)
console.log("type =",typeof(AccNo))

// undefined
let Balance;
console.log(Balance)
console.log("type =",typeof(Balance))

// Null
let Interst=null
console.log(Interst)
console.log("type =",typeof(Interst))

//symbol
let Email_id=Symbol("001")
console.log(Email_id)
console.log("type =",typeof(Email_id))



// Activity 1

let Student_Name="RAM"
let Student_RollNo=78
let Student_Class="7A"
let Marks_Maths=67
let Marks_English=79
let Marks_Hindi=45

console.log("Student Info ...")
console.log("Student Name :",Student_Name)
console.log("Student Class :",Student_Class)
console.log("Maths Marks",Marks_Maths)
console.log("Marks of English",Marks_English)
console.log("Marks of Hindi :",Marks_Hindi)

// Activity 2 

if (Marks_Maths>=50 & Marks_English>=50 & Marks_Hindi>=50){
    console.log("Student is Passed ")
}
else{
    console.log("Student Failed")
}

// Activity 3

let No1=5

if (No1%2==0){
    console.log(" The No is Even ")
}
else{
    console.log("The No. is Odd")
}

// Activity 4

for(i =0;i<10;i++){
    console.log("Number : "+i)

}

// Activity 5

let a=10;
b=a;
a = 20;

console.log("Value of b :"+b)
console.log("Value of a :",a)

