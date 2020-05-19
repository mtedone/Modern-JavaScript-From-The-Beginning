// Maps = key/value pairs - can use any type as key or value
const map1 = new Map();

// Set some keys
const key1 = 'Some String',
      key2 = {},
      key3 = function () {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// ITERATING MAPS

// Loop using for...of to get keys and values
// for(let [key, value] of map1) {
//     console.log(`${key} = ${value}`);
// }

// Iterates keys only
// for(let key of map1.keys()) {
//     console.log(key);
// }

// Iterates values only
// for(let value of map1.values()) {
//     console.log(value);
// }

// Loop with forEach
// map1.forEach( (key, value) => {
//     console.log(key, value);
// });

// Convert to arrays

// Create an array of key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an array of values
const valuesArr = Array.from(map1.values());
console.log(valuesArr);

// Create an array of keys
const keysArr = Array.from(map1.keys());
console.log(keysArr);