const newBook = document.createElement("p")
newBook.innerText = "this is new book"



// find the parent to add this element
const booksCollection = document.getElementById("books-section")
booksCollection.appendChild(newBook)
newBook.style.backgroundColor = "red"
newBook.style.padding = '10px'
newBook.style.borderRadius = '15px'