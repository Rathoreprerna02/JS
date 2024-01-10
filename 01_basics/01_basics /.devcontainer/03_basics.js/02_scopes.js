
let a = 300
if (true){              //
    let a = 20          //  BLOCK SCOPE 
    const b = 50        //  
    //console.log("Inner:", a);
}

//console.log(a);
// //console.log(b);
// console.log(c);


function one(){
    const username ="merida"

    function two(){
        const website ="youtube"
        console.log(username);
    }
   // console.log(website);

    two()

}
 //one()

 if (true){
    const username ="krishn"
    if(username === "krishn"){
        const website ="youtube"
        //console.log(username + website);
    }
    //console.log(website);
 }

 //console.log(username);


 // +++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++

 console.log(addOne(5));
  function addOne(num) {
    return num + 1
 }



 const addTwo = function(num) {
    return num + 2
 }

 
