function sayMyName() {
  console.log("something");
  console.log("something");
  console.log("something");
}

// sayMyName();

// function AddTwoNumbers(number1,number2){
//     console.log(number1+number2);

// }

function AddTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}

const result = AddTwoNumbers(3, 5);
// console.log("result : ", result);

function loginUserMsg(username) {
  if (username === undefined) {
    console.log("please enter username");
    return;
  }

  return `${username} just logged in`;
}

// const user = loginUserMsg("dev");
// console.log(user);

//++++++++++++++++++++++++++( ...num -> rest and spread operator )++++++++++++++++++++++++++++++++++++++++++
function calculateCartPrice(...num) {
  return num;
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
  username: "hitesh",
  price: 199,
};

function handleObject(anyobj) {
  console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}

// console.log(user);

console.log(
  handleObject({
    username: "dev",
    price: 199,
  })
);

const myArray = [200, 400, 500, 100];
