// get elements by class name

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
//
// console.log(items[0]);
// items[0].style.color = 'red';
//
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// get elements by tag name
// let lis = document.getElementsByTagName('li');
// console.log(lis);
//
// console.log(lis[0]);
// lis[0].style.color = 'red';
//
// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li, index) {
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });
// console.log(lis)

// Query selector all

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function (li, index) {
    li.textContent = `${index}: Hello`;

});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

items.forEach(function (li, index) {
    li.style.background = '#ccc';

});

for(let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';
}

console.log(items);