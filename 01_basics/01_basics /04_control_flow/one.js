// if
const isUserLoggedIn = true  // = : assignmenrt operator
const temperature = 41

// if (temperature === 40){
//    console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("execute");

// < , > <=, >=, 
// ==: check whether is right or not , 
//!=, === : it will check the type

//****scope related********

// const score = 200 
// if (score> 100){
//     const power = "fly"
//     console.log(`User Power; ${power}`);
// }
// console.log(`User Power; ${power}`);

// const balance = 1000

// if(balance > 500) console.log("test");   // Impicit Scope
// console.log("test 2");

// ******Nesting*******

// if (balance < 500){
//     console.log("less than 500");

// } else if (balance < 750){
//     console.log("less than 750");

// }else if (balance < 900) {
//     console.log("less than 900");

// }else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ){        // multiple condition check 
 console.log("User logged in");
}


