const section = document.querySelector("section")
const myLibrary = [];


function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    let title = prompt("title?")
    let author = prompt("author?")
    let pages = prompt("How many pages?")
    let status = prompt("Have you read it? y/n")
    let statusBoolean = (status === "y") ? true : false
    if (title === "" || author === "" || pages === "" || status === "") return
    if (!title || !author || !pages || !status) return
    let newBook = new Book(title, author, pages, statusBoolean)
    myLibrary.push(newBook)

    myLibrary.forEach((book) => {
        const bookCard = document.createElement("div")
        const bookTitle = document.createElement("h2")
        bookCard.classList.toggle("card")
        bookTitle.textContent = book.title
        section.appendChild(bookCard)
        bookCard.appendChild(bookTitle)
    })
}

// addBookToLibrary()
