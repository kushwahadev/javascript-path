const discriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(discriptor);

// console.log(Math.PI);

const chai = {
  name: "ginger tea",
  price: 250,
  isAvailable: false,
  oderChai: function () {
    console.log("chai nhi bni");
  },
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  // writable: false,
  enumerable: false,
});
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
