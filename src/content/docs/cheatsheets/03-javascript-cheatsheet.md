---
title: Javascript Cheatsheet
description: A Quick Reference for Javascript
---

# Keywords

| JavaScript Keyword   | Purpose                               | Example                                       |
|-----------------------|---------------------------------------|-----------------------------------------------|
| `break`               | Exits a loop or a switch statement     | ```js
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
```                                                |
| `case`                | A label for a case clause in a switch statement | ```js
switch (day) {
  case 'Monday':
    console.log('It\'s Monday.');
    break;
  case 'Tuesday':
    console.log('It\'s Tuesday.');
    break;
  default:
    console.log('It\'s some other day.');
}
```                     |
| `catch`               | Catches errors thrown in try blocks   | ```js
try {
  // code that may throw an error
} catch (error) {
  console.error('An error occurred:', error);
}
```                                                |
| `class`               | Defines a class for object-oriented programming | ```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
```             |
| `const`               | Declares a constant variable with a fixed value | ```js
const pi = 3.14159;
```                                                |
| `continue`            | Skips the current iteration in a loop   | ```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
```                                                |
| `debugger`            | Breaks the execution of code for debugging | ```js
function divide(a, b) {
  debugger;
  return a / b;
}
```                                                |
| `default`             | A default case in a switch statement   | ```js
switch (day) {
  case 'Monday':
    console.log('It\'s Monday.');
    break;
  case 'Tuesday':
    console.log('It\'s Tuesday.');
    break;
  default:
    console.log('It\'s some other day.');
}
```                     |
| `delete`              | Deletes an object property or element of an array | ```js
const obj = { name: 'John', age: 30 };
delete obj.age;
```                                                |
| `do`                  | Starts a do...while loop               | ```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```                                                |
| `else`                | Specifies an alternative in an if statement | ```js
if (condition) {
  // code to run if condition is true
} else {
  // code to run if condition is false
}
```                     |
| `export`              | Exports modules, functions, or variables for use in other files | ```js
export function greet(name) {
  console.log(`Hello, ${name}!`);
}
```                     |
| `extends`             | Specifies a class that another class inherits from | ```js
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}
```                     |
| `finally`             | Specifies a block of code to be executed after try and catch blocks | ```js
try {
  // code that may throw an error
} catch (error) {
  console.error('An error occurred:', error);
} finally {
  console.log('Execution complete.');
}
```                                                |
| `for`                 | Creates a loop that consists of three optional expressions | ```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```                                                |
| `function`            | Declares a function                    | ```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```                     |
| `if`                  | Conditionally executes code            | ```js
if (condition) {
  // code to run if condition is true
}
```                     |
| `import`              | Imports modules, functions, or variables from other files | ```js
import { greet } from './greetings.js';
```                     |
| `in`                  | Checks if an object has a specified property | ```js
const person = { name: 'Alice', age: 30 };
if ('name' in person) {
  console.log('Name property exists.');
}
```                                                |
| `instanceof`          | Checks if an object is an instance of a specific class | ```js
const obj = new Person();
if (obj instanceof Person) {
  console.log('obj is an instance of Person.');
}
```                                                |
| `let`                 | Declares a block-scoped variable       | ```js
let x = 10;
```                                                |
| `new`                 | Creates an instance of an object or a user-defined object type | ```js
const date = new Date();
```                                                |
| `return`              | Specifies the return value of a function | ```js
function add(a, b) {
  return a + b;
}
```                                                |
| `super`               | Calls the parent class's constructor or method | ```js
class Child extends Parent {
  constructor() {
    super();
    // additional child-specific code
  }
}
```                     |
| `switch`              | Evaluates an expression and executes a block of code based on its value | ```js
switch (day) {
  case 'Monday':
    console.log('It\'s Monday.');
    break;
  case 'Tuesday':
    console.log('It\'s Tuesday.');
    break;
  default:
    console.log('It\'s some other day.');
}
```                     |
| `this`                | Refers to the current object          | ```js
const person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};
```                     |
| `throw`               | Throws an exception                   | ```js
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}
```                                                |
| `try`                 | Defines a block of code to be tested for errors | ```js
try {
  // code that may throw an error
} catch (error) {
  console.error('An error occurred:', error);
}
```                                                |
| `typeof`              | Returns a string indicating the type of a variable or expression | ```js
typeof x; // "number"
```                     |
| `var`                 | Declares a variable with function-level or global scope | ```js
var y = 20;
```                                                |
| `void`                | Evaluates an expression and returns `undefined` | ```js
function doSomething() {
  void 0;
}
```                                                |
| `while`               | Creates a loop that executes a block of code while a condition is true | ```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```                                                |
| `with`                | Extends the scope chain for a statement | ```js
const person = { name: 'Alice' };
with (person) {
  console.log(name); // "Alice"
}
```                                                |
| `yield`               | Pauses and resumes the execution of a generator function | ```js
function* generator() {
  yield 1;
  yield 2;
}
```                     |
| `async`               | Declares an asynchronous function     | ```js
async function fetchData() {
  const response = await fetch('https://example.com');
  const data = await response.json();
  return data;
}
```                                                |
| `await`               | Pauses execution until a promise is resolved | ```js
async function fetchData() {
  const response = await fetch('https://example.com');
  const data = await response.json();
  return data;
}
```                                                |
| `let`                 | Declares a block-scoped variable       | ```js
let x = 10;
```                                                |
| `await`               | Pauses execution until a promise is resolved | ```js
async function fetchData() {
  const response = await fetch('https://example.com');
  const data = await response.json();
  return data;
}
```                                                |
| `finally`             | Specifies a block of code to be executed after try and catch blocks | ```js
try {
  // code that may throw an error
} catch (error) {
  console.error('An error occurred:', error);
} finally {
  console.log('Execution complete.');
}
```                                                |
| `of`                  | Used in for...of loops to iterate over iterable objects | ```js
const numbers = [1, 2, 3, 4];
for (const num of numbers) {
  console.log(num);
}
```                                                |
| `in`                  | Checks if an object has a specified property | ```js
const person = { name: 'Alice', age: 30 };
if ('name' in person) {
  console.log('Name property exists.');
}
```                                                |
| `delete`              | Deletes an object property or element of an array | ```js
const obj = { name: 'John', age: 30 };
delete obj.age;
```                                                |
| `export`              | Exports modules, functions, or variables for use in other files | ```js
export function greet(name) {
  console.log(`Hello, ${name}!`);
}
```                                                |
| `import`              | Imports modules, functions, or variables from other files | ```js
import { greet } from './greetings.js';
```                     |
| `continue`            | Skips the current iteration in a loop   | ```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
```                                                |
| `arguments`           | Represents the arguments passed to a function | ```js
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
```                     |
| `yield`               | Pauses and resumes the execution of a generator function | ```js
function* generator() {
  yield 1;
  yield 2;
}
```                                                |
| `super`               | Calls the parent class's constructor or method | ```js
class Child extends Parent {
  constructor() {
    super();
    // additional child-specific code
  }
}
```                                                |
| `case`                | A label for a case clause in a switch statement | ```js
switch (day) {
  case 'Monday':
    console.log('It\'s Monday.');
    break;
  case 'Tuesday':
    console.log('It\'s Tuesday.');
    break;
  default:
    console.log('It\'s some other day.');
}
```                     |
| `default`             | A default case in a switch statement   | ```js
switch (day) {
  case 'Monday':
    console.log('It\'s Monday.');
    break;
  case 'Tuesday':
    console.log('It\'s Tuesday.');
    break;
  default:
    console.log('It\'s some other day.');
}
```                     |
| `export`              | Exports modules, functions, or variables for use in other files | ```js
export function greet(name) {
  console.log(`Hello, ${name}!`);
}
```                                                |
| `import`              | Imports modules, functions, or variables from other files | ```js
import { greet } from './greetings.js';
```                     |
| `await`               | Pauses execution until a promise is resolved | ```js
async function fetchData() {
  const response = await fetch('https://example.com');
  const data = await response.json();
  return data;
}
```                                                |
| `static`              | Defines a static method or property for a class | ```js
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}
```                     |
| `typeof`              | Returns a string indicating the type of a variable or expression | ```js
typeof x; // "number"
```                     |
| `instanceof`          | Checks if an object is an instance of a specific class | ```js
const obj = new Person();
if (obj instanceof Person) {
  console.log('obj is an instance of Person.');
}
```                                                |
| `finally`             | Specifies a block of code to be executed after try and catch blocks | ```js
try {
  // code that may throw an error
} catch (error) {
  console.error('An error occurred:', error);
} finally {
  console.log('Execution complete.');
}
```                                                |
| `void`                | Evaluates an expression and returns `undefined` | ```js
function doSomething() {
  void 0;
}
```                                                |
| `debugger`            | Breaks the execution of code for debugging | ```js
function divide(a, b) {
  debugger;
  return a / b;
}
```                                                |

# Built-In Object Types

| Object Type         | Purpose                               | Example                                       |
|---------------------|---------------------------------------|-----------------------------------------------|
| `Object`            | The base object type                  | `const person = { name: 'John', age: 30 };`   |
| `Array`             | Represents an ordered collection of elements | `const colors = ['red', 'green', 'blue'];` |
| `String`            | Represents a sequence of characters   | `const message = 'Hello, World!';`            |
| `Number`            | Represents numeric values             | `const pi = 3.14159;`                        |
| `Boolean`           | Represents true or false values       | `const isTrue = true;`                       |
| `Function`          | Represents a callable function       | ```js
function add(a, b) {
  return a + b;
}
```                                               |
| `Date`              | Represents dates and times            | `const today = new Date();`                  |
| `RegExp`            | Represents regular expressions        | `const pattern = /abc/;`                     |
| `Error`             | Represents runtime errors             | ```js
try {
  // code that may throw an error
} catch (error) {
  console.error('An error occurred:', error);
}
```                                               |
| `Math`              | Provides mathematical functions      | `const result = Math.sqrt(16);`              |
| `JSON`              | Provides methods for working with JSON data | ```js
const data = JSON.parse('{"name": "Alice", "age": 25}');
```                                               |
| `Promise`           | Represents a value that may not be available yet but will be resolved or rejected in the future | ```js
const fetchData = new Promise((resolve, reject) => {
  // async operations
  if (success) {
    resolve(data);
  } else {
    reject(error);
  }
});
```                                               |
| `Map`               | Represents a collection of key-value pairs | ```js
const employeeInfo = new Map();
employeeInfo.set('John', 35);
employeeInfo.set('Alice', 28);
```                                               |
| `Set`               | Represents a collection of unique values | ```js
const uniqueNumbers = new Set([1, 2, 3, 3, 4]);
```                                               |
| `Symbol`            | Represents unique and immutable values | `const uniqueKey = Symbol('description');`    |
| `BigInt`            | Represents large integers            | `const bigIntValue = 1234567890123456789012345678901234567890n;` |
| `WeakMap`           | Represents a weak reference to key-value pairs | ```js
const weakMap = new WeakMap();
weakMap.set(object, 'value');
```                                               |
| `WeakSet`           | Represents a weak reference to objects | ```js
const weakSet = new WeakSet();
weakSet.add(object);
```                                               |
| `Proxy`             | Allows custom behavior for fundamental operations on objects | ```js
const handler = {
  get(target, prop) {
    return target[prop] + 10;
  }
};
const proxyObj = new Proxy(originalObj, handler); |
| `WeakRef`           | Represents a weak reference to an object | ```js
const object = { data: 'some data' };
const weakRef = new WeakRef(object);
```                                               |
| `FinalizationRegistry` | Allows cleanup when objects are no longer reachable | ```js
const registry = new FinalizationRegistry((heldValue) => {
  console.log(`Cleanup: ${heldValue}`);
});
```                                               |
| `ArrayBuffer`       | Represents a fixed-length binary data buffer | ```js
const buffer = new ArrayBuffer(16);
```                                               |
| `SharedArrayBuffer` | Represents a shared, low-level, fixed-length binary data buffer | ```js
const sharedBuffer = new SharedArrayBuffer(16);
```                                               |
| `TypedArray`        | Represents a view of raw binary data in a buffer | ```js
const intArray = new Int32Array(buffer);
```                                               |
| `DataView`          | Allows reading and writing of data in a buffer | ```js
const dataView = new DataView(buffer);
```                                               |
| `Intl`              | Provides internationalization and localization support | ```js
const numberFormatter = new Intl.NumberFormat('en-US');
```                                               |
| `Intl.DateTimeFormat` | Formats dates and times for specific locales | ```js
const dateFormatter = new Intl.DateTimeFormat('en-US');
```                                               |
| `Intl.Collator`     | Provides string comparison based on a specific locale | ```js
const collator = new Intl.Collator('fr-FR');
```                                               |
| `Intl.ListFormat`   | Formats lists based on a specific locale | ```js
const listFormatter = new Intl.ListFormat('es-ES', { style: 'long', type: 'disjunction' });
```                                               |
| `Intl.RelativeTimeFormat` | Formats relative time based on a specific locale | ```js
const relativeTimeFormatter = new Intl.RelativeTimeFormat('en-US', { numeric: 'auto' });
```  |

# String Methods

| String Method         | Purpose                                       | Example                                       |
|-----------------------|-----------------------------------------------|-----------------------------------------------|
| `length`              | Returns the length of a string                | `const str = 'Hello';`<br>`const len = str.length;` |
| `charAt(index)`       | Returns the character at the specified index | `const str = 'Hello';`<br>`const char = str.charAt(1);` |
| `charCodeAt(index)`   | Returns the Unicode value of the character at the specified index | `const str = 'Hello';`<br>`const code = str.charCodeAt(0);` |
| `concat(...strings)`  | Combines two or more strings and returns a new string | `const str1 = 'Hello';`<br>`const str2 = 'World';`<br>`const result = str1.concat(', ', str2);` |
| `indexOf(substring)`  | Returns the index of the first occurrence of a substring in the string | `const str = 'Hello, World';`<br>`const index = str.indexOf('World');` |
| `lastIndexOf(substring)` | Returns the index of the last occurrence of a substring in the string | `const str = 'Hello, World, World';`<br>`const lastIndex = str.lastIndexOf('World');` |
| `includes(substring)` | Checks if a string contains a specified substring | `const str = 'Hello, World';`<br>`const includesWorld = str.includes('World');` |
| `startsWith(substring)` | Checks if a string starts with a specified substring | `const str = 'Hello, World';`<br>`const startsWithHello = str.startsWith('Hello');` |
| `endsWith(substring)` | Checks if a string ends with a specified substring | `const str = 'Hello, World';`<br>`const endsWithWorld = str.endsWith('World');` |
| `toLowerCase()`       | Converts a string to lowercase                | `const str = 'Hello';`<br>`const lowerStr = str.toLowerCase();` |
| `toUpperCase()`       | Converts a string to uppercase                | `const str = 'Hello';`<br>`const upperStr = str.toUpperCase();` |
| `trim()`              | Removes whitespace from the beginning and end of a string | `const str = '  Hello, World  ';`<br>`const trimmedStr = str.trim();` |
| `trimStart()` or `trimLeft()` | Removes whitespace from the beginning of a string | `const str = '  Hello, World  ';`<br>`const trimmedStr = str.trimStart();` |
| `trimEnd()` or `trimRight()` | Removes whitespace from the end of a string | `const str = '  Hello, World  ';`<br>`const trimmedStr = str.trimEnd();` |
| `slice(start, end)`   | Extracts a portion of a string               | `const str = 'Hello, World';`<br>`const subStr = str.slice(7, 12);` |
| `substring(start, end)` | Extracts a portion of a string (similar to `slice`) | `const str = 'Hello, World';`<br>`const subStr = str.substring(7, 12);` |
| `substr(start, length)` | Extracts a specified number of characters from a string | `const str = 'Hello, World';`<br>`const subStr = str.substr(7, 5);` |
| `split(separator)`    | Splits a string into an array of substrings   | `const str = 'apple,banana,orange';`<br>`const fruits = str.split(',');` |
| `replace(old, new)`   | Replaces occurrences of a substring with another string | `const str = 'Hello, World';`<br>`const newStr = str.replace('World', 'Universe');` |
| `match(regexp)`       | Searches for a specified pattern in the string and returns an array of matches | `const str = 'Hello, World';`<br>`const matches = str.match(/o/g);` |
| `search(regexp)`      | Searches for a specified pattern in the string and returns the index of the first match | `const str = 'Hello, World';`<br>`const index = str.search(/o/);` |
| `matchAll(regexp)`    | Returns an iterator of all matches of a specified pattern in the string | `const str = 'Hello, World';`<br>`const matches = [...str.matchAll(/o/g)];` |
| `startsWith()`        | Checks if a string starts with a specified substring at a given index | `const str = 'Hello, World';`<br>`const startsWithHello = str.startsWith('Hello', 0);` |
| `endsWith()`          | Checks if a string ends with a specified substring at a given index | `const str = 'Hello, World';`<br>`const endsWithWorld = str.endsWith('World', 11);` |
| `repeat(count)`       | Returns a new string with a specified number of copies of the original string | `const str = 'Hello';`<br>`const repeatedStr = str.repeat(3);` |
| `padStart(length, padString)` | Pads the beginning of a string with a specified character(s) until it reaches a certain length | `const str = '42';`<br>`const paddedStr = str.padStart(5, '0');` |
| `padEnd(length, padString)` | Pads the end of a string with a specified character(s) until it reaches a certain length | `const str = '42';`<br>`const paddedStr = str.padEnd(5, '0');` |

These string methods in JavaScript provide a wide range of functionality for working with and manipulating strings.

