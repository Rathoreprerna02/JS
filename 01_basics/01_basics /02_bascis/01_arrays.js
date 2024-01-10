// Arrays
//JavaScript arrays are resizable 
//contain a mix of different data types
//JavaScript array-copy operations create shallow copies

const myArr = [0, 1, 2, 3, 4, 5]
const myCartoons =["shinchain", "doremaon"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

// Arrays methods

myArr.push(6)  //values ko add karta h
myArr.push(9) 
myArr.pop()    //last value ko remove karte h

// myArr.unshift(9) // it add values in starting but it wil change all the index no of in arrays
// myArr.shift() // remove the value

// console.log(myArr.includes(9)); // it gives answer to the question
// console.log(myArr.indexOf(3));
// console.log(myArr);

// const newArr = myArr.join()  // adds all the elements of the arrays into string

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log(" A", myArr);

const myn1 = myArr.slice(1, 3)  // it doesnt manipulate the original array

console.log(myn1);
console.log(" B", myArr);


const myn2 = myArr.splice(1, 3) // it manipulate the original array
console.log("C", myArr);
console.log(myn2);



