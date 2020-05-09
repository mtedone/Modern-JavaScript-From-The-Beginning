// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);

}

// Calculate age
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// Gets married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '1972-05-20');
const mary = new Person('Mary', 'Poppins', '1980-05-20');

console.log(mary);

console.log(john.calculateAge());
console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName());