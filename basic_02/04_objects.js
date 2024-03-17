// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "yahoooo";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "someoneemail@gmail.com",
  fullName: {
    userFullName: {
      firstName: "fisrt name",
      lastName: "last name",
    },
  },
};

// console.log(regularUser);

const obj1 = { 1: "1a", 2: "2b" };
const obj2 = { 3: "3a", 4: "4b" };

const obj3 = { obj1, obj2 };

// const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

// console.log(obj3);
// console.log(obj4);

const users = [
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 1,
    email: "some@gmail.com",
  },
];

users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
