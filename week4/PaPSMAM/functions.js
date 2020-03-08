
var name ="casey"
console.log(name.toLowerCase() + name.toUpperCase())

function myFunction() {
    console.log(Math.floor(2.5))
    // return 2 + findmyindex.Math 
}
myFunction()
function findmyindex(str) {
    var fullLength = str.length
    var halfLength= fullLength / 2
    return Math.floor(halfLength)
}
console.log(findmyindex("hello world"))

function returnFirstHalf(str){
    console.log(str.slice(0, str.length / 2))
    
}
returnFirstHalf("Hello")


function capilizeAndLowercase(str){
    console.log(str.slice(0, str.length / 2))
    var firsthalf = str.slice(0, str.length / 2)
    var secondhalf = str.slice( str.length / 2,str.length)
    console.log(firsthalf.toUpperCase() + secondhalf.toLowerCase())
}
capilizeAndLowercase("Hello")

var fruit = ["banana","apple", "orange","watermelon"];
var vegetables = ["carrot", "tomato", "pepper","lettuce"]
vegetables.pop()
console.log(vegetables)
fruit.shift()
console.log(fruit)
var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)
fruit.push(orangeIndex)
console.log(fruit)
let lengthOfVegies = vegetables.length;
console.log(lengthOfVegies)
vegetables.push(lengthOfVegies)
console.log(vegetables)
var newFood = fruit.concat(vegetables)
console.log(newFood)
var newName = newFood.splice(4,2)
console.log(newFood)
newFood.reverse()
console.log(newFood)
var newDog = newFood.toString()
console.log(newDog)






    