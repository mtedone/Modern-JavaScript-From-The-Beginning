class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {

  addBookToList(book) {
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

  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get a parent
    const container = document.querySelector('.container');
    const form = document.getElementById('book-form');
    container.insertBefore(div, form);

    // Timeout after 3 secs
    setTimeout(function () {
      document.querySelector('.alert').remove()
    }, 2000);
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
}

// Event listeners for add
document.getElementById('book-form').addEventListener('submit',
    function (e) {
      // Get form values
      const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

      const book = new Book(title, author, isbn);

      // Instantiates the UI object
      const ui = new UI();

      if (title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
      } else {
        // Add book to list
        ui.addBookToList(book);

        // Show success
        ui.showAlert('Book Added!', 'success');

        // Clears fields
        ui.clearFields();
      }

      e.preventDefault();
    });

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {

  const ui = new UI();

  ui.deleteBook(e.target);

  ui.showAlert('Book deleted!', 'success');

  e.preventDefault();
});