const section = document.querySelector("section")
const button = document.querySelector(".btn")
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

    let bookCard;
    let bookTitle;
    let removeButton
    myLibrary.forEach((book) => {
        if (bookCard) {
            section.removeChild(bookCard)
        }
        bookCard = document.createElement("div")
        bookTitle = document.createElement("h2")
        removeButton = document.createElement("button")
        bookCard.classList.toggle("card")
        removeButton.classList.toggle("removeBtn")
        removeButton.textContent = "Remove Book"
        bookTitle.textContent = book.title
        section.appendChild(bookCard)
        bookCard.appendChild(bookTitle)
        bookCard.appendChild(removeButton)
    })
}

button.addEventListener("click", () => {
    addBookToLibrary()
})
