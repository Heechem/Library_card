//constants

const author = document.getElementById('author');
const title = document.getElementById('title');
const pages = document.getElementById('pages');
const readen = document.getElementById('readen');
const addBtn = document.querySelector('.add');
const formField = document.querySelector('form');
const container = document.querySelector('.card_container');
const header = document.getElementById('header');

const cardSpining = [
  { transform: 'rotate(0) scale(0.5) ' },
  { transform: 'rotate(360deg) scale(1) ' },
];

const cardSpinTiming = {
  duration: 900,
  iteration: 1,
};

// vaiables
let indexStart = 1;
let text = `Register the books`;
let speed = 200;
let readBook;
let notes = [];
let addedBook;
let myLibrary = [];

// get the read it or not information
function checkRead() {
  if (readen.checked) {
    readBook = `I have read it`;
  } else {
    readBook = `I haven't read it`;
  }
  return readBook;
}
checkRead();

const savedbook = JSON.parse(localStorage.getItem('saved'));
console.log(savedbook);
// if (notes) {
//   bookDisplay(savedbook);
// }

// consturctor function

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// get the read it or not information

// create the book from the consturctor
function addBookToLibrary() {
  return (addedBook = new Book(
    author.value,
    title.value,
    pages.value,
    readBook
  ));
}

// get the value entered
function bookDisplay(book) {
  book.map((x) => {
    const author = x.author;
    const title = x.title;
    const pages = x.pages;
    const read = readBook;
    createCard(author, title, pages, read);
  });
  // checkRead();

  //append the card to the DOM

  function createCard(title, author, pages, read) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.animate(cardSpining, cardSpinTiming);
    card.innerHTML = `
    
  <button class="delete"><i class="fas fa-trash" ></i></button>
     <button class="edit"> 
     <i class="fa-brands fa-readme"></i>
        </button>
  <h3>${title}</h3>
  <p>This book was written by ${author} and contains ${pages} pages</p>
  <span>${read}</span>
  `;
    container.appendChild(card);

    // delete function from the DOM
    const deleteBtn = card.querySelector('.delete');
    const span = card.querySelector('span');
    const editBtn = card.querySelector('.edit');
    console.log(editBtn);
    console.log(span);

    editBtn.addEventListener('click', () => {
      card.classList.toggle('unread');
      switch (span.innerText) {
        case `I haven't read it`:
          span.innerText = `I have read it`;
          span.classList.add('read');

          break;
        case `I have read it`:
          span.innerText = `I haven't read it`;
          span.classList.remove('read');

          break;
      }
    });

    deleteBtn.addEventListener('click', (e) => {
      card.remove();

      // console.log(card);
      console.log(notes);
      console.log(e.target);
    });
    updateLS();
  }
}
// button listener

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (author.value === '' || title.value === '' || pages.value === '') {
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
  console.log(notes);
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
    console.log(savedbook);
  }
  setTimeout(textWrting, speed);
}
