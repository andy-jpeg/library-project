const myLibrary = [
  {
    name: "argon oil",
    author: "bo",
    pages: "293",
    haveRead: false,
  }
];

const bookForm = document.querySelector(".book-form");
const formButton = document.querySelector(".submit-button");
const libraryDiv = document.querySelector(".library")
const card = document.querySelector(".card")

const bookName = document.getElementById("book-name");
const bookAuthor = document.getElementById("book-author");
const bookPages = document.getElementById("pages");
const haveRead = document.getElementById("haveRead");

function Book() {
  this.name = bookName.value
  this.author = bookAuthor.value
  this.pages = bookPages.value
  this.haveRead = haveRead.checked

  const bookInfo = card.cloneNode(true)
  const properties = bookInfo.children

  bookInfo.id = ""

  properties[0].textContent = properties[0].textContent.concat(' ', bookName.value)
  properties[1].textContent = properties[1].textContent.concat(' ', bookAuthor.value)
  properties[2].textContent = properties[2].textContent.concat(' ', bookPages.value)
  properties[3].textContent = properties[3].textContent.concat(' ', haveRead.checked)

  libraryDiv.appendChild(bookInfo)
  bookInfo.style.visibility = "visible"

  const remove = bookInfo.querySelector(".delete")
  remove.addEventListener("click", deleteBook)

  myLibrary.push(this)
  console.log(this)
};

formButton.addEventListener("click", addBookToLibrary);

function addBookToLibrary(event) {
  const book = new Book();
  event.preventDefault();
};

function deleteBook(event) {
  event.target.parentElement.remove()
  event.preventDefault();
}

function reiterateList() {
  for (const book in myLibrary) {
    console.log(myLibrary[book])
  }
};