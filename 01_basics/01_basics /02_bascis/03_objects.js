//  singleton   
//Object.create    ye constructor h aur isme singleton exist karta h


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Procupine",
    "fullname": "PrernaRathore",
    [mySym]: "mykey1", // syntax of symbol 
    age: 18,
    location: "Lonavala",
    email : "porcupine@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}   // object


// these are the two methods to access the objects
// console.log(JsUser.email);
// console.log(JsUser["email"]); // with we can access the string
// console.log(JsUser["fullname"]);
// console.log(JsUser[mySym]);

JsUser.email = "merida@actech.com"  // equal sign ki madat se aap object ko change kar sakte ho aur overwrite kar sakte ho
// Object.freeze(JsUser)   // it helps to lock the objects no changes can done 
JsUser.email = "campus@sinhgad.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Porcupine");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Porcupine, ${this.name}`);  //same object ko refernce karna h tho this ka use karke use andar ki sari properties miljayegi
}

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo);