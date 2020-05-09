// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');
  // Create a TR element
  const row = document.createElement('tr');
  // Insers cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a> </td>
  `;
  list.appendChild(row);
}

// Clear fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event listeners
document.getElementById('book-form').addEventListener('submit',
    function (e) {
      // Get form values
      const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

      const book = new Book(title, author, isbn);

      // Instantiates the UI object
      const ui = new UI();

      // Add book to list
      ui.addBookToList(book);

      // Clears fields
      ui.clearFields();

      e.preventDefault();
    });