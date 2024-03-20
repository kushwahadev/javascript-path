// singleton

// Object.create



// object leterals

const mySym = Symbol("key")

const JsUser = {
    name: 'dev',
    "fullName": 'dev kushwaha',
    [mySym]: 'key11111',
    age: 23,
    location: 'gurugram',
    isLoggedIn: false,
    lastLoginDays: ['monday','wednesday'],
    email: 'eamailhai@yahoo.com',
}

// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);

JsUser.email = 'example@google.com'
// Object.freeze(jsUser)
JsUser.email = 'another@gmail.com'
// console.log(jsUser);


JsUser.greetingTwo = function () {
    console.log(`heloo objects , ${this.name}`)
}

JsUser.greeting = function () {
    console.log('heloo objects')
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());