// for loop

// for (let index = 0; index < 10; index++) {
//   const element = index;
//   console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
// //   console.log(`Outer loop value : ${i}`);
//   for (let index = 0; index <= 10; index++) {
//     // console.log(`Inner loop value : ${i} and inner loop value : ${i}`);

//     // console.log(`${i} * ${index} = ${i * index}`);
//   }
// }

let myArray = ["flash", "antman", "batman", "superman"];

// for (let index = 0; index <= myArray.length; index++) {
//   const element = myArray[index];

//   console.log(element);
// }

// break and continue

for (let index = 1; index < 20; index++) {
  if (index == 5) {
    console.log(`detect 5`);
    continue;
    break;
  }
  console.log(`value of i is ${index}`);
}
