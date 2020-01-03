// document.querySelector('.clear-tasks').addEventListener('click',
//     function(e) {
//   console.log('Hello World');
//
//   e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click',
    onClick);

function onClick(e) {
    //

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.className;


  console.log(val);
}