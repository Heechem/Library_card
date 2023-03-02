//constants

const author = document.getElementById('author');
const title = document.getElementById('title');
const pages = document.getElementById('pages');
const readen = document.getElementById('readen');
const addBtn = document.querySelector('.add');
const formField = document.querySelector('form');
const container = document.querySelector('.card_container');
const header = document.getElementById('header');

// vaiables
let indexStart = 1;
const text = 'Register the books';
let speed = 200;

const savedbook = JSON.parse(localStorage.getItem('saved'));
console.log(savedbook);
// if (savedbook) {
//   savedbook.forEach((saved) => bookDisplay(saved));
// }

let readBook;
let notes = [];

let addedBook;
let myLibrary = [];

// consturctor function

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

// create the book from the consturctor
function addBookToLibrary() {
  return (addedBook = new Book(author.value, title.value, pages.value));
}

// get the value entered
function bookDisplay(book) {
  book.map((x) => {
    const author = x.author;
    const title = x.title;
    const pages = x.pages;

    createCard(author, title, pages);
  });
  checkRead();

  //append the card to the DOM

  function createCard(title, author, pages, readen) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
  <button class="delete"><i class="fas fa-trash" ></i></button>
  <h3>${title}</h3>
  <p>This book was written by ${author} and contains ${pages} pages</p>
  <span>${readBook}</span>
  `;
    container.appendChild(card);

    // delete function from the DOM
    const deleteBtn = card.querySelector('.delete');

    deleteBtn.addEventListener('click', (e) => {
      // console.log(card);
      console.log(notes.length);

      card.remove(e.target);
    });
  }
}
//button listener

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (author.value == '' || title.value == '' || pages.value == '') {
    alert('Please enter a value , dont let any blank');
    return;
  }

  addBookToLibrary();
  checkRead();
  myLibrary.push(addedBook);
  console.log(addedBook);
  console.log(myLibrary);
  bookDisplay(myLibrary);

  formField.reset();

  myLibrary.shift();
  notes.push(addedBook);
  updateLS();
});

// local storage function

function updateLS() {
  const savedbook = [];
  notes.map(() => {
    savedbook.push(addedBook);
  });
  console.log(savedbook);
  localStorage.setItem('saved', JSON.stringify(notes));
  // myLibrary.shift();
}

// animation of the title

textWrting();

function textWrting() {
  header.innerHTML = text.slice(0, indexStart);
  indexStart++;
  if (indexStart > header.length) {
    indexStart = 1;
  }
  setTimeout(textWrting, speed);
}
