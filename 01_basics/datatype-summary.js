// Primitime. 


// 7 types : String, Number, Boolean, BigInt, null, undefined, Symbol

const score = 100

const id = Symbol('123')
const anotherID = Symbol('123')

// console.log(id)
// console.log(id === anotherID)



// Refrence (Non primitive)



// Refrence (Non primitive)

// Array , Object , Functions 


const heros =["iron Man", "captian America", 'thor'];

let myObj =    {
    name: 'dev',
    age: 23
}

const myFun = function(){
console.log('helloooooooo')
}
console.log(myFun)




//     +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive).     heap (Non Primitive)


let youtubename = 'this is name'
// stack not update the orignal value make a copy and always update copy values
let anothername = youtubename
anothername =  ' this is another name'



// what ever goes in heap always update the orignal value
let userone = {
    email : 'userone@gmail.com',
    upi : 'user@ybl'
}


let usetwo = userone


usetwo.email = 'dev@google.com'

