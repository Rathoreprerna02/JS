const score = 500

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); 
 // number converted into string and it gives additional properties to it

// console.log(balance.toFixed(2)); 
// to shows the precision value

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hunderds = 100000
// console.log(hunderds.toLocaleString('en-IN'));   // it coverts US value into Indian number system


// ++++++++++++++++ Maths +++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));  // top value
// console.log(Math.floor(4.9)); // lowest value
// console.log(Math.min(4, 3, 7, 9)); 

console.log(Math.random());  // it will return the value in between 0 to 1

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);