const user = {
    username: "selena",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to wesbite`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "taylor"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "ilaichi"
//     console.log(this.username);
// }
  

// ******* ARROW FUNCTION ******
const chai = () =>{      // arrow function
    let username = "victory"
    console.log(this);
}

// chai()

// const addTwo = (num1 , num2) => {
//       return num1 + num2               curly braces ka use hua h tho retun key word likhna padega
// }


// implict return  

// const addTwo = (num1, num2) =>  num1 + num 2    

//const addTwo = (num1, num2 ) =>  (num1 + num 2)     // paranthesis main wrap kiya tho return keyword nhi likhna padega

const addTwo = (num1, num2) => {username: "merida"}

console.log(addTwo(3, 4));