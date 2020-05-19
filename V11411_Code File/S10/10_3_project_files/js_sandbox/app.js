// Create a Symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym2);

// No two symbols can be the same
console.log(Symbol('123') === Symbol('123')); //Gives false

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3'; // This is not a symbol but just a property - enumerable
myObj.key4 = 'Prop4'; // This is not a symbol but just a property = enumerable

// console.log(myObj[KEY1]);

// Symbols are not enumerable in for..in but properties are
// for(let i in myObj) {
//     console.log(`${i}: ${myObj[i]}`);
// }

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'Prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'Prop'}));
