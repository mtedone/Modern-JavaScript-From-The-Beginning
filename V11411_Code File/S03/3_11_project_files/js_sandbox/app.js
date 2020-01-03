const delItem = document.querySelector('.collection');

delItem.addEventListener('click', deleteItem);

function deleteItem(e) {
  e.target.parentElement.parentElement.remove();
}