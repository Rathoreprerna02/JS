//const tinderUser = new Object()

const tinderUser = {}
 tinderUser.id ="123abcd"
 tinderUser.name ="malu"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "rose@flower.com",
    fullname: {
        userfullname: {
            firstname: "siya",
            lastname: "verna"
        }
    }
}

// console.log(regularUser.fullname);

//combining the objects

const obj1 = { 1: "q", 2: "e"}
const obj2 = { 3: "g", 4: "o"}
const obj4 = { 5: "u", 6: "l"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)     // for combination
const obj3 ={ ...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "123@number.com"
    },
    {
        id: 1,
        email: "123@number.com"
    },
    {
        id: 1,
        email: "123@number.com"
    },
    {
        id: 1,
        email: "123@number.com"
    },
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.values(tinderUser));


// OBJECT DE-STRUCTURE
const course = {
    coursename: "javascript",
    price: "1999",
    courseIntstructor: "hitesh"
}

// course.courseIntstructor

const{courseIntstructor} = course

// console.log(courseIntstructor);

// JSON APIs

// {
//   " name" : "porcupine",
//     "coursename": "js in hindi"
//    " price": "free"
// }

[
    {},
    {},
    {},
]