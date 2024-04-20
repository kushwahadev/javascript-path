const name = "dev";
const repo = 50;

console.log(` my name is. ${name.toUpperCase()} and my repo count is ${repo}`);

const gamename = new String("dev-gamming");

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.indexOf("m"));

const newString = gamename.substring(0, 4);

const anotherString = gamename.slice(-8, 4);

const newStringOne = " dev      ";

console.log(newStringOne.trim());
