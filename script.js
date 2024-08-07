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

    function createBookCard() {
        let bookCard;
        myLibrary.forEach((book) => {
            if (bookCard) {
                section.removeChild(bookCard)
            }
            bookCard = document.createElement("div")
            const bookTitle = document.createElement("h2")
            const removeButton = document.createElement("button")
            bookCard.classList.toggle("card")
            removeButton.classList.toggle("removeButton")
            removeButton.setAttribute("role", "button")
            removeButton.textContent = "Remove Book"
            bookTitle.textContent = book.title
            section.appendChild(bookCard)
            bookCard.appendChild(bookTitle)
            if (statusBoolean) {
                const readButton = document.createElement("button")
                readButton.setAttribute("id", "readButton")
                readButton.setAttribute("class", "readButton")
                readButton.setAttribute("role", "button")
                readButton.textContent = "Read"
                bookCard.appendChild(readButton)
            }
            else {
                const notReadButton = document.createElement("button")
                notReadButton.setAttribute("id", "notReadButton")
                notReadButton.setAttribute("class", "notReadButton")
                notReadButton.setAttribute("role", "button")
                notReadButton.textContent = "Not Read"
                bookCard.appendChild(notReadButton)
            }
            bookCard.appendChild(removeButton)
        })
    }
    createBookCard()
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

    if (e.target.classList.contains("readButton")) {
        e.target.textContent = "Not Read"
        e.target.setAttribute("id", "notReadButton")
        e.target.setAttribute("class", "notReadButton")

        const bookTitle = e.target.previousElementSibling
        myLibrary.forEach((book) => {
            if (book.title === bookTitle.textContent) {
                book.isRead = false
            }
        })
    }
    else if (e.target.classList.contains("notReadButton")) {
        e.target.textContent = "Read"
        e.target.setAttribute("id", "readButton")
        e.target.setAttribute("class", "readButton")

        const bookTitle = e.target.previousElementSibling
        myLibrary.forEach((book) => {
            if (book.title === bookTitle.textContent) {
                book.isRead = true
            }
        })
    }
})

// when read status is clicked
// the status in the object is changed