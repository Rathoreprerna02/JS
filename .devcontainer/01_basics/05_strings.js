const name ="porcupine"  //string decalred
const repoCount = 37

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const cartoonName = new String('shin-chain-sc') //second method of string declaration and you use objects in it

// console.log(cartoonName[5]); // key value pair access
// console.log(cartoonName.__proto__);


// console.log(cartoonName.length);
// console.log(cartoonName.toUpperCase());
console.log(cartoonName.charAt(7));
console.log(cartoonName.indexOf('n'));

const newString = cartoonName.substring(0, 4) // it breaks the string into slice
console.log(newString);

const anotherString = cartoonName.slice(-8, 4) // in slice we can give negative value so it can start from reverse
console.log(anotherString);

const newStringOne = "  porcupine   "  
console.log(newStringOne);
console.log(newStringOne.trim()); // trim will remove the spaces in starting and ending

const url = "https://procupine.com/porcu%20college"

console.log(url.replace('%20', '-'));

console.log(url.includes('pine')); // to find some keywords we can use it

console.log(cartoonName.split('-')); // string will convert into array