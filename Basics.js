//1. Variables 

let name = "Barry"; // can be reassigned 
const age = 25; // cannot be reassigned 
var city = "Tampa" // Older declaration (use let/const instead)

//2. DataTypes

let number = 5; // Number
let text = "Hello, World!" //String
let isAvailable = true; //Boolean 
let list = [1,2,3 ]; //Array
let person = { name:"Barry", age:25} //Object
let nothing = null;n //Null
let unknown; //Undefined

//3. Conditionals 

let age1 = 20; 
if (age1 >= 18) {
    console.log("You are an adult.");  
} else {
    console.log("You are a minor.")

}

//4. Loops:

//For Loops:
for (let i = 0; i < 5; i++) {
    console.log("Iteration:",);
}

//While Loops:
let count = 0;
while(count < 3) {
    console.log("Count is: count");
    count++;
}

//For-of-Loops:
let numbers = [10, 20, 30];
for (let number of numbers) {
    console.log(number)
}

//5. Functions: 

//Regular Function declartion:
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Barry")) // Output: Hello, Barry!

//Arrow Function:
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("Barry")); // Output: Hello, Barry!

//6. Arrays:
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); //Output: apple

fruits.push("grape"); //Adds an element
console.log(fruits);     // Output: ['apple', 'banana', 'orange', 'grape'] 

//7. Objects:
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
  };
  
  console.log(car.brand);  // Output: Toyota
  car.year = 2021;         // Update property

  