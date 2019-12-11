// get element by id

// console.log(document.getElementById('task-title'));
//
// // Get things from the element
//
// console.log(document.getElementById('task-title').id);
//
// const taskTitle = document.getElementById('task-title');
//
// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px;';
// // taskTitle.style.display = 'none';
//
// // Change the content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color: red">Task List</span>';

// Query selector

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
