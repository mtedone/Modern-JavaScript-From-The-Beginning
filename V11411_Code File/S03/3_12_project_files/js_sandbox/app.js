// // Set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');
//
// // Set session storate
// sessionStorage.setItem('name', 'Beth');

// Remove from storage
// localStorage.removeItem('name');

// get value from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// Clear local storage
// localStorage.clear();
// console.log(name, age);

document.querySelector('form').addEventListener('submit',
    function(e) {

      const task = document.getElementById('task').value;

      let tasks;

      if (localStorage.getItem('tasks' ) === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
      }

      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log(task)
      e.preventDefault();
    });

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
  console.log(task)
});