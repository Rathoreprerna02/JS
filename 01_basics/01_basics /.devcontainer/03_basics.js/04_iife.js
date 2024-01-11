// Immediately Innvoked Function Expression (IIFE)

(function  chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// ( function aurcode (){
//     console.log(`DB CONNECTED TWO`);
// }) ()

( (name) => {
    //unnnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
}) ('hitesh')
   
