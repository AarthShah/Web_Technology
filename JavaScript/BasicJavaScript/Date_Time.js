let myDate=new Date();

console.log(myDate.toString())// output :- Wed Feb 04 2026 12:41:45 GMT+0530 (India Standard Time)

console.log(myDate.toISOString())//output :- 2026-02-04T07:11:45.611Z

console.log(myDate.toLocaleDateString())//output :- 4/2/2026

console.log(myDate.toDateString())// output :- Wed Feb 04 2026

console.log(typeof(myDate))// object

console.log(myDate.getDate())    // output:     4

console.log(myDate.getFullYear()) // 2026

console.log(myDate.getMonth())// 1


console.log(myDate.getDay())// 3


console.log(myDate.getHours())// 12


console.log(myDate.getTime())// 1770189605400

console.log(myDate.getUTCDate())// 4


let myTimeDate=Date.now();
console.log(Date.now());//1770189920042

console.log(Date.now()/1000);//1770189920.042


