const cartoons_characters =["shinchain", "nobita", "doreamon"] 
const marvel_heros =["thor", "ironman", "spiderman"]

//cartoons_characters.push(marvel_heros)
// console.log(cartoons_characters);

// const allcharacters = cartoons_characters.concat(marvel_heros)   // merging of arrays
// console.log(allcharacters);

const all_new_characters = [...cartoons_characters, ...marvel_heros] // merging of arrays

console.log(all_new_characters);

const another_array =[1, 2, 3, [4, 5, 6] , 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //jitne bhi subarrays hoge unko ye ek hi array main merge kar ke de dega 
console.log(real_another_array);


// used in scrapping
console.log(Array.isArray("porcupine"));
console.log(Array.from("porcupine"));   // it will convert string into the array
console.log(Array.from({name :"porcupine"})); // interview question

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // return new array from set of elements


