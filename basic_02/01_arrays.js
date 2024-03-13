// array

const myArray = [0,1,2,3,4,5]

const myHeros = ["iron man", 'captian america', ' thor']

const myArr2 = new Array(1,2,3,4)

// console.log(myArr2)
// console.log(myArray)

// array methods

myArray.push(6)
// console.log(myArray)

myArray.unshift(7)
// console.log(myArray)

myArray.shift()
// console.log(myArray)


// console.log(myArray.includes(6));

// console.log(myArray.indexOf(5))
// console.log(myArray.indexOf(19))

// const newArr = myArray.join()

// console.log(typeof newArr)   change array type by joining 

// slice , , splice

console.log('A -> ',  myArray)

const myn1 = myArray.slice(1,3)
console.log(myn1)

console.log('B -> ',  myArray)
const myn2 = myArray.splice(1,3);
console.log(myArray);
console.log(myn2);










