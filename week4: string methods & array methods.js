// Make a function that will return any given string into all caps followed by the same string all lowercase

var name = "hello"
console.log(name.toUpperCase() + name.toLowerCase())

console.log("===========================================")

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

var value = "Hello"
var theMiddle = Math.floor(value.length/2);
console.log(theMiddle)

var value = "Hello World"
var theMiddle = Math.floor(value.length/2);
console.log(theMiddle)

console.log("===========================================")

// Make a function that uses slice() and the other functions you've written to return the first half of the string.

var name = "Hello"
var returnFirstHalf = name.slice (0,2);
console.log(returnFirstHalf)

var name = "Hello World"
var returnFirstHalf = name.slice (0,6);
console.log(returnFirstHalf)

console.log("===========================================")

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. 
//(If the string length is odd, capitalize the shorter of the first half.)

var name = "hello"
var first2 = name.slice (0,2)
var last3 = name.slice (2,5)
var upperAndLower = (first2.toUpperCase(0,2) + last3.toLowerCase(2,5))
console.log(upperAndLower)

var name = "hello world"
var firstName = name.slice(0,6)
var lastName = name.slice(6,11)

    if(name.length === 11){
        console.log(firstName.toUpperCase(0,6) + lastName.toLowerCase(6,11))
    }else{
        console.log(lastName.toLowerCase(6,11) + lastname.toUpperCase(6,11))
    }

console.log("===========================================")

// Make a function that takes any string and capitalizes any character that follows a space.

var cap = (str) => {
    var arr = str.split(' ');
    arr.forEach(function(item, index) {
      arr[index] = item.replace(item[0], item[0].toUpperCase());
    });
  
    return arr.join(' ');
  };
  
  console.log(cap("hey friends! practice practice practice!"));

console.log("===========================================")

var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Remove the last item from the vegetable array.
function arrayExcercises(){
    vegetables.pop();
    console.log("Vegetables Array: " + vegetables);
// Remove the first item from the fruit array.
    fruits.shift();
    console.log("Fruits Array: " + fruits);
// Find the index of "orange."
    console.log(fruits.indexOf("orange"));
// Add that number to the end of the fruit array.
    fruits.push("1");
    console.log("Fruits Array: " + fruits);
// Use the length property to find the length of the vegetable array.
    vegetables.length;
    console.log(vegetables.length);
// Add that number to the end of the vegetable array.
    vegetables.push("3")
    console.log("Vegetables Array: " + vegetables);
// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruits.concat(vegetables) 
    console.log("food Array: " + food);
// Remove 2 elements from your new array starting at index 4 with one method.
var food = food.slice(4,6)
    console.log("removedFromArray: " + food);
// Reverse your array.
var food = ["apple", "orange", "watermelon", "1", "pepper", "3"]
food.reverse();
console.log("Food Array: " + food);
// Turn the array into a string and return it.
var food = ["apple", "orange", "watermelon", "1", "pepper", "3"];
var x = food.toString();

}
console.log(arrayExcercises());
console.log("===========================================")


