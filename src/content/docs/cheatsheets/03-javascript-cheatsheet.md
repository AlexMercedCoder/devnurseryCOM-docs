---
title: Javascript Cheatsheet
description: A Quick Reference for Javascript
---

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

# Array Method

| Array Method            | Purpose                                      | Example                                       |
|-------------------------|----------------------------------------------|-----------------------------------------------|
| `length`                | Returns the number of elements in an array   | `const numbers = [1, 2, 3];`<br>`const len = numbers.length;` |
| `push(element)`         | Adds one or more elements to the end of an array and returns the new length | `const fruits = ['apple', 'banana'];`<br>`fruits.push('orange', 'kiwi');` |
| `pop()`                 | Removes and returns the last element of an array | `const fruits = ['apple', 'banana', 'orange'];`<br>`const lastFruit = fruits.pop();` |
| `unshift(element)`      | Adds one or more elements to the beginning of an array and returns the new length | `const numbers = [2, 3];`<br>`numbers.unshift(0, 1);` |
| `shift()`               | Removes and returns the first element of an array | `const fruits = ['apple', 'banana', 'orange'];`<br>`const firstFruit = fruits.shift();` |
| `concat(...arrays)`     | Combines two or more arrays and returns a new array | `const arr1 = [1, 2];`<br>`const arr2 = [3, 4];`<br>`const combined = arr1.concat(arr2);` |
| `join(separator)`       | Joins all elements of an array into a string with the specified separator | `const fruits = ['apple', 'banana', 'orange'];`<br>`const fruitString = fruits.join(', ');` |
| `slice(start, end)`     | Returns a shallow copy of a portion of an array | `const numbers = [1, 2, 3, 4, 5];`<br>`const subArray = numbers.slice(1, 4);` |
| `splice(start, deleteCount, ...items)` | Adds or removes elements from an array at a specified position | `const numbers = [1, 2, 3, 4, 5];`<br>`numbers.splice(2, 2, 6, 7);` |
| `indexOf(element)`      | Returns the first index at which a specified element is found in an array | `const fruits = ['apple', 'banana', 'orange'];`<br>`const index = fruits.indexOf('banana');` |
| `lastIndexOf(element)`  | Returns the last index at which a specified element is found in an array | `const fruits = ['apple', 'banana', 'orange', 'banana'];`<br>`const lastIndex = fruits.lastIndexOf('banana');` |
| `includes(element)`     | Checks if an array includes a specified element | `const numbers = [1, 2, 3, 4, 5];`<br>`const includesThree = numbers.includes(3);` |
| `find(callback)`        | Returns the first element in an array that satisfies the provided testing function | `const numbers = [1, 2, 3, 4, 5];`<br>`const found = numbers.find(num => num > 2);` |
| `findIndex(callback)`   | Returns the index of the first element in an array that satisfies the provided testing function | `const numbers = [1, 2, 3, 4, 5];`<br>`const foundIndex = numbers.findIndex(num => num > 2);` |
| `filter(callback)`      | Returns a new array with all elements that satisfy the provided testing function | `const numbers = [1, 2, 3, 4, 5];`<br>`const evenNumbers = numbers.filter(num => num % 2 === 0);` |
| `map(callback)`         | Creates a new array with the results of calling a provided function on every element in the array | `const numbers = [1, 2, 3, 4, 5];`<br>`const doubledNumbers = numbers.map(num => num * 2);` |
| `forEach(callback)`     | Executes a provided function once for each array element | `const fruits = ['apple', 'banana', 'orange'];`<br>`fruits.forEach(fruit => console.log(fruit));` |
| `reduce(callback, initialValue)` | Reduces an array to a single value by applying a provided function | `const numbers = [1, 2, 3, 4, 5];`<br>`const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);` |
| `reduceRight(callback, initialValue)` | Reduces an array from right to left | `const numbers = [1, 2, 3, 4, 5];`<br>`const product = numbers.reduceRight((accumulator, currentValue) => accumulator * currentValue, 1);` |
| `every(callback)`       | Checks if all elements in an array satisfy a provided testing function | `const numbers = [1, 2, 3, 4, 5];`<br>`const allEven = numbers.every(num => num % 2 === 0);` |
| `some(callback)`        | Checks if at least one element in an array satisfies a provided testing function | `const numbers = [1, 2, 3, 4, 5];`<br>`const hasEven = numbers.some(num => num % 2 === 0);` |
| `sort(compareFunction)` | Sorts the elements of an array in place based on the provided sorting criteria | `const fruits = ['banana', 'apple', 'orange'];`<br>`fruits.sort();` |
| `reverse()`             | Reverses the order of elements in an array  | `const numbers = [1, 2, 3, 4, 5];`<br>`numbers.reverse();` |
| `fill(value, start, end)` | Changes all elements in an array to a specified value within a given range | `const numbers = [1, 2, 3, 4, 5];`<br>`numbers.fill(0, 1, 4);` |
| `copyWithin(target, start, end)` | Copies a portion of an array to another location in the same array | `const numbers = [1, 2, 3, 4, 5];`<br>`numbers.copyWithin(0, 3, 5);` |
| `flat(depth)`           | Creates a new array with all sub-array elements concatenated up to the specified depth | `const nestedArray = [1, [2, 3], [4, [5]]];`<br>`const flatArray = nestedArray.flat(2);` |
| `flatMap(callback)`     | Maps each element using a mapping function and flattens the result into a new array | `const numbers = [1, 2, 3, 4, 5];`<br>`const doubledAndSquared = numbers.flatMap(num => [num * 2, num ** 2]);` |
| `from(iterable, mapFn, thisArg)` | Creates a new array from an iterable object | `const iterable = '12345';`<br>`const newArray = Array.from(iterable, Number);` |
| `of(...elements)`       | Creates a new array with the specified elements | `const numbers = Array.of(1, 2, 3, 4, 5);` |
