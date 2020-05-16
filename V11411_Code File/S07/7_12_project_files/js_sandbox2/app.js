// const sayHello = () => {
//     console.log('Hello');
// }

// const sayHello = () => 'Hello';

// const sayHello = () => ({msg: 'Hello'});

// Skingle param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parethesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

const users = ['Nethan', 'John', 'William'];
// const nameLenghts = users.map(function (name) {
//     return name.length;
// });

// Shorter
// const nameLenghts = users.map((name) => {
//     return name.length;
// });

// Shortest
const nameLenghts = users.map(name => name.length);
console.log(nameLenghts);

