let a = 10;
const b = 20;
// var c =30

{
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "dev";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  two();
}
// one();

if (true) {
  const username = "dev";
  if (username === "dev") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website) Error
}
// console.log(username) err

// ++++++++++++++ intresting +++++++++++++
const addTwo = function (num) {
  return num + 2;
};
