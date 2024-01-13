const userEmail ="p@prerna.ai"

if (userEmail) {
    console.log("Got user Email"); 
} else {
    console.log("don't have user email");
}


// falsy values
//false, 0, -0, Bigint 0n, "", null, undefined, NaN


//truthy values
// "0", 'false', " ", [], {}, function(){}


// Nullish Coalescing operator (??): null undefined
// null aur undefined value ki safety check karta h



let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15 
val1 = null ?? 10 ?? 20


console.log(val1);


// Terniary Operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaprice >= 80 ? console.log("less than 80") : console.log("more than 80");