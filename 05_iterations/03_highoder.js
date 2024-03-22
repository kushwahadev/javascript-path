// for of

["", "", ""];
[{}, {}, {}];

const arr = [1, 2, 3, 4, 5];
for (const itt of arr) {
  //   console.log(itt);
}

const greetings = "hello world";

for (const greet of greetings) {
  //   console.log(`each char is ${greet}`);
}

// Maps
// -->->->-> not itteratble
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

const myobj = {
  game1: "nfs",
  game2: "call of duty",
  game3: "gta",
  game4: "pubg",
};

for (const key in myobj) {
  console.log(`${key} name ${myobj[key]}`);
}

// for each

const coding = ["js", "ruby", "cpp", "java", "python"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
// //   console.log(item);
// });

// parameter foreach take
// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const mycode = [
  {
    langName: "javascript",
    fileName: "js",
  },
  {
    langName: "javascript",
    fileName: "js",
  },
  {
    langName: "javascript",
    fileName: "js",
  },
  {
    langName: "javascript",
    fileName: "js",
  },
];

mycode.forEach((item) => {
  console.log(item.langName);
});
