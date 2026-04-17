// Activity 1 - Create a list of your favourite websites (3 of them),
// then add another two once you’ve created the list.
// Then remove the last website.

let favouriteWebsites = ["Amazon", "Googlesearch", "Netflix"]

console.log(favouriteWebsites)

favouriteWebsites.push("outlook")
favouriteWebsites.push("Canva")

console.log(favouriteWebsites)

favouriteWebsites.pop()

console.log(favouriteWebsites)


// Activity 2 - Research some of the following methods:
// push(), map(), shift(), unshift(), slice(), splice()
// Create a program to demonstrate the uses of each method.

// PUSH: adds elements to the end of an array
let fruits = ["Mango", "Strawberry"]
fruits.push("Grape")
console.log("push:", fruits)

// MAP: creates a new array by applying a function to each element
let numbers = [1, 2, 3]
let squares = numbers.map(num => num * num)
console.log("map:", squares)
console.log("original numbers:", numbers)

// SHIFT: removes the first element from an array
let pets = ["dog", "cat", "rabbit"]
let firstPet = pets.shift()
console.log("shift removed:", firstPet)
console.log("shift remaining:", pets)

// UNSHIFT: adds elements to the start of an array
pets.unshift("hamster")
console.log("unshift:", pets)

// SLICE: returns part of an array without changing the original
let colors = ["red", "green", "blue", "yellow"]
let primaryColors = colors.slice(0, 3)
console.log("slice result:", primaryColors)
console.log("original colors:", colors)

// SPLICE: changes an array by adding/removing/replacing elements
let tools = ["hammer", "wrench", "screwdriver"]

// Remove 1 item at index 1
tools.splice(1, 1)
console.log("splice remove:", tools)

// Add items at index 1
tools.splice(1, 0, "pliers", "tape")
console.log("splice add:", tools)

// Replace an item
tools.splice(2, 1, "saw")
console.log("splice replace:", tools)
