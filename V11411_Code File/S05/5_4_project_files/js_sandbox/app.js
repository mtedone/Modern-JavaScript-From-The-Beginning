// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create a customer
const customer1 = new Customer('Marco', 'Tedone', '123344', 'Standard');
console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}. Welcome to our company.`;
}

console.log(customer1.greeting());