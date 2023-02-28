const author = document.getElementById('author');
const title = document.getElementById('title');
const pages = document.getElementById('pages');
const readen = document.getElementById('readen');
const addBtn = document.querySelector('.add');
const formField = document.querySelector('form');
let addedBook;
let myLibrary = [];

//consturctor function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = 'not read yet';
  this.info = function () {
    return `${this.title} by ${author}, ${pages}, ${read}`;
  };
}

const theHobbit = new Book(
  'the hobbit',
  'JRR tolkien',
  '298 pages',
  'not read yet '
);

console.log(theHobbit.info());

function addBookToLibrary() {
  return (addedBook = new Book(author.value, title.value, pages.value));
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  myLibrary.push(addedBook);
  console.log(addedBook);
  console.log(myLibrary);
  formField.reset();
});
