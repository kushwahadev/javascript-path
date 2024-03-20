const user = {
  username: "dev",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} ,welcome to website  `);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// Arrow function

const chai = () => {
  let username = "dev";
  user.username = "sam";
  console.log(user.username);
};
// chai();

// explicit
// const addTwo =(num1,num2) =>{
//     return num1 +num2
// }

// inplicit
const addTwo = (num1, num2) => num1 + num2;
