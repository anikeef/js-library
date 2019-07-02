const bookInput = document.forms.book.elements;
let library = [new Book("book1", "author1"), new Book("book2", "author2")];

renderBooks(library);

///////// Functions /////////
/////////////////////////////

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary() {
  book = new Book(bookInput.title.value, bookInput.author.value);
  renderBook(book, library.length);
  library.push(book);
}

function deleteBook(event) {
  id = event.target.value;
  bookElement = document.getElementById(id);
  bookElement.remove();
  delete library[id];
}

function renderBook(book, index) {
  titleText = document.createTextNode(book.title);
  titleElement = document.createElement("h2");
  titleElement.appendChild(titleText);

  authorText = document.createTextNode(book.author);
  authorElement = document.createElement("div");
  authorElement.appendChild(authorText);

  deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.value = index;
  deleteButton.innerHTML = "delete";
  deleteButton.addEventListener("click", deleteBook);

  box = document.createElement("div");
  box.classList.add("book");
  box.id = index;
  box.appendChild(titleElement);
  box.appendChild(authorElement);
  box.appendChild(deleteButton);

  booksContainer = document.querySelector(".books");
  booksContainer.appendChild(box);
}

function renderBooks(library) {
  for (let i = 0; i < library.length; ++i) {
    if (library[i]) renderBook(library[i], i);
  }
}
