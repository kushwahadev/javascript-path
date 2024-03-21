const userEmail = "h@gmail.com";

if (userEmail) {
  //   console.log("got it");
} else {
  console.log(`not get it`);
}

// truthy and falsy values

// falsy values
// false, 0 ,-0 , BigInt 0n , "" , null ,undefined , NaN

// truthy values
// "0" , 'false' ,' ', [], {} , function(){}

const emptyobj = {};

if (Object.keys(emptyobj).length === 0) {
  //   console.log(`object is empty`);
}

//Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = null ?? 10;

console.log(val1);

// Ternary Operator

//condition ? true : flase

const iceTeaPrice = 100;
iceTeaPrice > 80
  ? console.log(`your bill is ${iceTeaPrice}$`)
  : console.log(`you got the discount`);
