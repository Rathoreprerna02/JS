// Primitive

// 7 types : String, Number, Boolean, null(empty), undefined, Symbol(kisi bhi value ko unique banane ke liye symbol ka use hota h), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;   // iski jo value hogi vo undefined hogi

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 34567829878999778n



// Reference (Non Primitive)

// Array, Objects, Functions 

const doremoan = [ "nobita", "shizuka", "michain"];  // Array
//objects curly braces ke andar hote h
//isme hum key value pairs main likhte h
let myObj = {
   name : "porcupine",
   age : 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof Symbol);

