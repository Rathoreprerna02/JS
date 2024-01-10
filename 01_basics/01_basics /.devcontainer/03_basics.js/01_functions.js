
function sayMYName() {
    console.log("P");
    console.log("O");
    console.log("R");
    console.log("C");
    console.log("U");
    console.log("P");
    console.log("I");
    console.log("N");
    console.log("E");
}

// sayMYName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(num1, num2){

    // let result = num1 +  num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(5, 7)

// console.log("Result:", result);

function loginUserMessage(username){
    if(username === undefined){
    console.log("Please enter a username");
    return
    }
    return `${username} just logged in`  // it will not print the only it only retun it
}

//console.log(loginUserMessage("merida"));   // it will print the value 
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1 
}

// console.log(calculateCartPrice(200, 300, 500));

const user ={
    username: "merida",
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "porcu",
    price: 1998
})

const myNewArray =[100, 500, 559, 700]
 
function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));

