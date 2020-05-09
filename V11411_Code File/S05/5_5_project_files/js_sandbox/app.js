const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Poppins';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const marco = Object.create(personPrototypes, {
  firstName: {value: 'Marco'},
  lastName: {value: 'Tedone'},
  age: {value: 47}
});

console.log(marco);

