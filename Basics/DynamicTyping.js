//There are two types of languages
//Statically typed and Dynamically typed

//Static
// the type of the variable can't be changed in the future, string name = 'Shahmeer'

// Dynamic
// Type of variable can change at runtime, so javascript is dynamic language

let myName = "Shahmeer";
console.log(typeof myName); //it is sting here
myName = 2;
console.log(typeof myName); // now its a number
myName = 2.2;
console.log(typeof myName); //its still a number because there is no other type than number in JS, like double or float etc

myName = null; //its now an object
console.log(typeof myName); //
