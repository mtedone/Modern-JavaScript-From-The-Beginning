const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A String');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); // Won't be added

// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// console.log(set1);
//
// // Get count
// console.log(set1.size);
//
// // Check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({name: 'John'})); // Will return false
//
// // Delete from the set
// set1.delete(100);
// console.log(set1);

// Iterate through sets

// For..of
// for(let item of set1) {
//     console.log(item);
// }

// For each
// set1.forEach(item => {
//     console.log(item);
// });

// Converts sets into arrays
const setArray = Array.from(set1);
console.log(setArray);



