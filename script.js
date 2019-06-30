function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function() {
    let info = `${this.title}, ${this.author}, ${this.pages} pages`
    return info;
  }
}
