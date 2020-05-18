// // Create an iterator example
// function nameIterator(names) {
//   let nextIndex = 0;
//
//   return {
//     next: function () {
//       return nextIndex < names.length ?
//           { value : names[nextIndex++], done: false} :
//           { done: true}
//     }
//   }
// }
//
// // Create an array of names
// const namesArray = ['Jack', 'Jill', 'John'];
//
// // Initialise the iterator and pass the array
// const names = nameIterator(namesArray);
//
// console.log(names.next())

// Generator Example
// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }
//
// const name = sayNames();
// console.log(name.next());

// ID Creator
function* createIds() {
  let index = 0;
  while(true) {
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);