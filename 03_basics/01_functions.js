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

const user = loginUserMsg("dev");
console.log(user);
