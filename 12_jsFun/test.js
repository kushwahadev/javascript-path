const myArr = [] % DebugPrint(myArr);

// continous, Holey

//SMI (small integer)

// packed element

// double (float , string , function)

const arrTwo = [1, 2, 3, 4, 5];
// Packed SMI element

arrTwo.push(6.0);
// PACKED_DOUBLE_ELEMENT

arrTwo.push("7");

// PACKED_ELEMENTS

arrTwo[10] = 11;
// HOLEY_ELEMENTS

console.log(arrTwo);

// bound check
// hasOwnProperty(arrTwo,9)
// hasOwnProperty(arrTwo.prototype,10)
// hasOwnProperty(Object.prototype)
// holes are very expesive in js

const arrThree = [1, 2, 3, 4, 5];

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3);

// just 3 holes. H_SMI_ELEMENTS
