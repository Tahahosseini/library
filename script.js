const booksGrid = document.querySelector(".booksGrid")
const newBookButton = document.querySelector(".newBookButton")
const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function updateCards() {
    booksGrid.textContent = ""

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div")
        bookCard.className = "card"
        booksGrid.appendChild(bookCard)

        const bookTitle = document.createElement("h2")
        bookTitle.textContent = book.title
        bookCard.appendChild(bookTitle)

        const statusButton = document.createElement("button")
        statusButton.setAttribute("role", "button")
        statusButton.textContent = (book.isRead) ? "Read" : "Not Read"
        statusButton.className = (book.isRead) ? "readButton" : "notReadButton"
        statusButton.id = (book.isRead) ? "readButton" : "notReadButton"
        bookCard.appendChild(statusButton)
        statusButton.addEventListener("click", () => toggleStatusButton(index))

        const removeButton = document.createElement("button")
        removeButton.className = "removeButton"
        removeButton.setAttribute("role", "button")
        removeButton.textContent = "Remove Book"
        bookCard.appendChild(removeButton)
        removeButton.addEventListener("click", () => removeFromLibrary(index))
    })
}

function addBookToLibrary() {
    const title = prompt("title?")
    const author = prompt("author?")
    const pages = prompt("How many pages?")
    const status = prompt("Have you read it? y/n")
    const statusBoolean = (status === "y") ? true : false
    if (!title || !author || !pages || !status) return
    const newBook = new Book(title, author, pages, statusBoolean)
    myLibrary.push(newBook)
    updateCards()
}

function removeFromLibrary(index) {
    myLibrary.splice(index, 1);
    updateCards()
}

function toggleStatusButton(index) {
    myLibrary[index].isRead = !myLibrary[index].isRead;
    updateCards()
}

newBookButton.addEventListener("click", addBookToLibrary)