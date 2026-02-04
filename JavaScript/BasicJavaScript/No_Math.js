let Balance=new Number(5000);
console.log(Balance)
console.log(typeof(Balance))//object

// methods with Objects
console.log(Balance.toString().length)
console.log(Balance.toFixed(2))// it is used to get decimal value (used to get precssion values)

console.log(Balance.toLocaleString()) // 5,000 this adds comma which makes it easy to read (use Indain format )

Balance=500000;

console.log(Balance.toLocaleString('en-US'))// this will print in US format 500,000
console.log(Balance.toLocaleString('de-DE'))// this will print in German format 500.000
console.log(Balance.toLocaleString('hi-IN'))// this will print in Indian format 5,00,000


// Math Object

console.log(Math)// Math is a object

console.log(Math.abs(-4))// Used to make -ve No. to +ve

console.log(Math.round(4.6))//output 5

console.log(Math.ceil(4.6))// chosse Top value output 5

console.log(Math.floor(4.6))// chosse lower value output 4

console.log(Math.min(1,2,3,4,5,6))

console.log(Math.max(10,20,30,90))

// How to work with Math.random with eg