const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {

}

const HP = new Book("Harry Potter", "JK Rowling", "210", true)
const hobbit = new Book("The Hobbit", "Tolkein", "423", false)
const influence = new Book("Influence", "Robert B. Cialdini", "314", true)