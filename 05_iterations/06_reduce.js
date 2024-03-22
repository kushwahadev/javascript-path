const myNums = [1, 2, 3, 4, 5];

// const myTotal = myNums.reduce((acc, currval) => {
//   console.log(`acc : ${acc}  currval : ${currval}`);
//   return acc + currval;
// }, 3);
// console.log(myTotal);

const shoppingCart = [
  {
    item: "shoes",
    price: 90,
  },
  {
    item: "tshirt",
    price: 80,
  },
  {
    item: "pant",
    price: 150,
  },
];

const cartTotal = shoppingCart.reduce(
  (acc, itemPrice) => acc + itemPrice.price,
  0
);
console.log(cartTotal);
