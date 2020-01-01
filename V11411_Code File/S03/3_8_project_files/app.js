// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';

newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// Classes and attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

//Classes
let val = link.className;
val = link.classList;
val = link.classList[0];

//Attributes
val = link.getAttribute('href');
val = link.hasAttribute('href');


console.log(val);