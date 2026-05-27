"use strict"       // treat all js code as new version

// alert(3+3)             // we are using node js not browser

/*
// Number
let length = 16;
let weight = 7.5;

// BigInt
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345);

// Strings
let color = "Yellow";
let lastName = "Johnson";

// Boolean
let x = true;
let y = false;

// Undefined
let x;
let y;

// Null
let x = null;
let y = null;        //standaloan vale     empty value

// Symbol
const x = Symbol();
const y = Symbol();

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array Object
const cars = ["Saab", "Volvo", "BMW"];

// Date Object
const date = new Date("2022-03-25");*/


console.log(typeof "laala");
console.log(typeof undefined);      // iska  undefined hi aayega
console.log(typeof null);        // null is object d tye 
/*Why it happened:

In early JavaScript, values were stored with type tags in binary.
 The tag for objects was 000. Due to a bug, null was represented as all zeros (000000...), 
 so JavaScript mistakenly identified it as an object.

So internally:

null -> 000000
object tag -> 000
=> typeof null → "object" 

"typeof null returns object because of a historical bug in JavaScript that was never fixed
 for backward compatibility."
*/