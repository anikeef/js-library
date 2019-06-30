const bookInput = document.forms.book.elements;
let library = [];

///////// Functions /////////
/////////////////////////////

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary() {
  book = new Book(bookInput.title.value, bookInput.author.value);
  renderBook(book);
  library.push(book);
}

function renderBook(book) {
  titleText = document.createTextNode(book.title);
  titleElement = document.createElement("h2");
  titleElement.appendChild(titleText);

  authorText = document.createTextNode(book.author);
  authorElement = document.createElement("div.author");
  authorElement.appendChild(authorText);

  box = document.createElement("div");
  box.classList.add("book");
  box.appendChild(titleElement);
  box.appendChild(authorElement);

  booksContainer = document.querySelector(".books");
  booksContainer.appendChild(box);
}
