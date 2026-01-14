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
    document.writeln("Value of Var inside Scope")
    document.writeln(A)
}
    document.writeln("Value of Var outside  Scope")
    document.writeln(A)

// let
/* */
let B=30
{
    let B=50
    document.writeln("Value of let inside  Scope ")
    document.writeln(B)
}

document.writeln("Value of let Outside the Scope")
document.writeln(B)

// Variables in JavaScript

// string
let AccName="Aarth"
document.writeln(AccName)
document.writeln("type =",typeof(AccName))

//number
let AccId=101
document.writeln(AccId)
document.writeln("type =",typeof(AccId))

//Boolen
let Maried_status=false
document.writeln(Maried_status)
document.writeln("type =",typeof(Maried_status))

// Big Number
let AccNo=904769876453789
document.writeln(AccNo)
document.writeln("type =",typeof(AccNo))

// undefined
let Balance;
document.writeln(Balance)
document.writeln("type =",typeof(Balance))

// Null
let Interst=null
document.writeln(Interst)
document.writeln("type =",typeof(Interst))

//symbol
// sysmbol does not works on html docment 
// let Email_id=Symbol("001")
// document.writeln(Email_id)
// document.writeln("type =",typeof(Email_id))



// Activity 1

let Student_Name="RAM"
let Student_RollNo=78
let Student_Class="7A"
let Marks_Maths=67
let Marks_English=79
let Marks_Hindi=45

document.writeln("Student Info ...")
document.writeln("Student Name :",Student_Name)
document.writeln("Student Class :",Student_Class)
document.writeln("Maths Marks",Marks_Maths)
document.writeln("Marks of English",Marks_English)
document.writeln("Marks of Hindi :",Marks_Hindi)

// Activity 2 

if (Marks_Maths>=50 & Marks_English>=50 & Marks_Hindi>=50){
    document.writeln("Student is Passed ")
}
else{
    document.writeln("Student Failed")
}

// Activity 3

let No1=5

if (No1%2==0){
    document.writeln(" The No is Even ")
}
else{
    document.writeln("The No. is Odd")
}

// Activity 4

for(i =0;i<10;i++){
    document.writeln("Number : "+i)

}

// Activity 5

let a=10;
b=a;
a = 20;

document.writeln("Value of b :"+b)
document.writeln("Value of a :",a)
