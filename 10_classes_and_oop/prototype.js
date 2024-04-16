let myName = "hitesh";

// console.log(myName.length);

let myheros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is ${this.spderman}`);
  },
};

Object.prototype.dev = function () {
  console.log(`dev is present in all objects`);
};

// heroPower.dev();

// inheritance

// old syntax
const User = {
  name: "dev",
  email: "dev@example",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssingment: "JS assingment",
  fullTime: true,
  __proto__: teachingSupport,
};
teacher.__proto__ = User;

// modern Syntax

Object.setPrototypeOf(teachingSupport, teacher);

let anotherUserName = "chaiorcode         ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`true length is: ${this.trim().length}`);
};

anotherUserName.trueLength();

"iceTea".trueLength();
