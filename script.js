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

function addBookToLibrary() {}
