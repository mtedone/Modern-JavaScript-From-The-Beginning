let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes of ul
val = list.children;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype
val = list.childNodes[0].nodeType;

val = list.firstElementChild;
val = list.lastElementChild;

val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextElementSibling;



console.log(val);