let MyArr=[1,2,3,4,5]

console.log(`${typeof(MyArr)}`)

const Arr=[0,1,2]
console.log(`${Arr[1]}`)

// Array Methons
// it is Used to Push Values in Array
MyArr.push(6)
console.log(MyArr)

// remove last Value from Array
MyArr.pop()
console.log(MyArr)

// it shifts all elements and at first postion add the element
MyArr.unshift(0)
console.log(MyArr)

// it removes the first element from Array
MyArr.shift()
console.log(MyArr)

// it returns the if the element is present in Array or not
MyArr.includes(3)
MyArr.includes(9)
console.log(`Is element 3 there :${MyArr.includes(3)}`)
console.log(` Is element 9 there ${MyArr.includes(9)}`)

// this gives the index of element in Array and if there is No element it returns -1
i=MyArr.indexOf(3)
console.log(i)
j=MyArr.indexOf(9)
console.log(j)

//  TODO silice and split

