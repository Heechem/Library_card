const author = document.getElementById('author');
const title = document.getElementById('title');
const pages = document.getElementById('pages');
const readen = document.getElementById('readen');
const addBtn = document.querySelector('.add');
const formField = document.querySelector('form');
const container = document.querySelector('.card_container');

let readBook;

let addedBook;
let myLibrary = [];

//consturctor function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = 'not read yet';
}

// get the read it or not information

function checkRead() {
  if (readen.checked) {
    readBook = 'I have read it';
  } else {
    readBook = " I haven't read it ";
  }
}

const theHobbit = new Book(
  'the hobbit',
  'JRR tolkien',
  '298 pages',
  'not read yet '
);
// create tthe book from the consturctor
function addBookToLibrary() {
  return (addedBook = new Book(author.value, title.value, pages.value));
}

// display the book
function bookDisplay(book) {
  book.map((x) => {
    const author = x.author;
    const title = x.title;
    const pages = x.pages;
    console.log(author, title, pages);
    createCard(author, title, pages);
  });
}

//append the card to the DOM

function createCard(title, author, pages, readen) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <button><i class="fas fa-trash"></i></button>
  <h3>${title}</h3>
  <p>This book was written by ${author} and contains ${pages} pages</p>
  <span>${readBook}</span>
  `;
  container.appendChild(card);
}

//button listener

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (author.value == 0 || title.value == 0 || pages.value == 0) return;
  addBookToLibrary();
  checkRead();
  myLibrary.push(addedBook);
  console.log(addedBook);
  console.log(myLibrary);
  bookDisplay(myLibrary);
  formField.reset();
  myLibrary.shift();
});
