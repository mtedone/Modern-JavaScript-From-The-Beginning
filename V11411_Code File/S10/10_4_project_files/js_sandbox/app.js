// Destructuring Assignment

let a, b;
[a, b] = [100, 200];

console.log(a);
console.log(b);

// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);

({a, b} = { a: 100, b: 200, c: 300, d: 400, e: 500});
console.log(a, b);

({a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400, e: 500});

// Array Destructuring

// const people = ['John', 'Beth', 'Mike'];
//
// const [person1, person2, person3] = people;
//
// console.log(person1, person2, person3);

// Parse array returned from function
// function getPeople() {
//   return ['John', 'Beth', 'Mike'];
// }
//
// let person1, person2, person3;
// [person1, person2, person3] = getPeople();
// console.log(person1, person2, person3);

// Object Destructuring

const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male'
}

// Old ES5 Destructuring
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6 Destructuring
const {name, age, city} = person;
console.log(name, age, city);


