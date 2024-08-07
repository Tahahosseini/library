const section = document.querySelector("section")
const newBookButton = document.querySelector(".newBookButton")
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

    function displayBook() {
        let bookCard;
        myLibrary.forEach((book) => {
            if (bookCard) {
                section.removeChild(bookCard)
            }
            bookCard = document.createElement("div")
            const bookTitle = document.createElement("h2")
            const notReadButton = document.createElement("button")
            const removeButton = document.createElement("button")
            bookCard.classList.toggle("card")
            notReadButton.setAttribute("id", "notReadButton")
            notReadButton.setAttribute("role", "button")
            notReadButton.textContent = "Not Read"
            removeButton.classList.toggle("removeButton")
            removeButton.setAttribute("role", "button")
            removeButton.textContent = "Remove Book"
            bookTitle.textContent = book.title
            section.appendChild(bookCard)
            bookCard.appendChild(bookTitle)
            bookCard.appendChild(notReadButton)
            bookCard.appendChild(removeButton)
        })
    }
    displayBook()
}

newBookButton.addEventListener("click", () => {
    addBookToLibrary()
})

section.addEventListener("click", (e) => {
    if (e.target.classList.contains("removeButton")) {
        const bookTitle = e.target.previousElementSibling.previousElementSibling
        myLibrary.forEach((book, index) => {
            if (book.title === bookTitle.textContent) {
                myLibrary.splice(index, 1);
            }
        })
        e.target.parentNode.remove()
    }
})
