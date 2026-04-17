function total(...args) {
    return args.reduce((sum, num) => sum + num, 0);
}

console.log(total(1, 2, 3)); 


//Ex 2
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
  
console.log(mergeObjects({ a: 1 }, { b: 2 })); 
// { a: 1, b: 2 }


//Ex 3
const colours = ["red", "blue"];
const moreColours = ["green", ...colours];

console.log(moreColours); 
// ["green", "red", "blue"]



//Ex 4
function logAll(...args) {
    args.forEach(item => console.log(item));
}
//or
// function logAll(...args) {
//     for (let index = 0; index < args.length; index++) {
//         console.log(args[index]);
//     }
// }

logAll("a", 1, true, [4, 5]);


//Ex 5 
const user = { name: "Alice", age: 30 };
const updatedUser = { ...user, age: 31 };

console.log(updatedUser); // { name: "Alice", age: 31 }
console.log(user); // { name: "Alice", age: 30 } – original untouched
