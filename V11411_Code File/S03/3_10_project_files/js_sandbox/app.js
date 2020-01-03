const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Key events on input
// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);
// taskInput.addEventListener('input', runEvent);
// taskInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);


function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  //
  console.log(e.target.value);
  //
  // heading.innerText = `${e.target.value}`;

  //Get input value
  // console.log(taskInput.value);
  // e.preventDefault();
}