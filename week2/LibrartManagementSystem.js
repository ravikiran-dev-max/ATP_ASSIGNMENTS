// Book class definition
class Book {
  constructor(title, author, pages) {
    // Initialize properties
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = true; // default: book is available
  }

  // Method to borrow a book
  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false; // mark as borrowed
      console.log(`${this.title} has been borrowed.`);
    } else {
      console.log(`${this.title} is not available.`);
    }
  }

  // Method to return a book
  returnBook() {
    if (!this.isAvailable) {
      this.isAvailable = true; // mark as available again
      console.log(`${this.title} has been returned.`);
    } else {
      console.log(`${this.title} was already available.`);
    }
  }

  // Method to get book info
  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

  // Method to check if book is long (>300 pages)
  isLongBook() {
    return this.pages > 300;
  }
}

// Create sample books
let book1 = new Book("Harry Potter", "J.K. Rowling", 350);
let book2 = new Book("BOOK2", "Author2", 328);
let book3 = new Book("BOOK3", "Author3", 310);
let book4 = new Book("BOOK4", "Author4", 277);
let book5 = new Book("BOOK5", "Author5", 281);

// Library collection (array of books)
let library = [book1, book2, book3, book4, book5];

console.log("___________________________________________________________");
console.log("Books In Library:");
console.log(library);

// Borrow some books
book1.borrow();
book3.borrow();

console.log("__________________________________________________________");
console.log("Availability after borrowing:");
// Loop through library and show availability
library.forEach(book => {
  console.log(book.getInfo(), book.isAvailable ? "Available" : "Not Available");
});

// Return a book
book3.returnBook();

console.log("_______________________________________________________________________");
console.log("Availability after returning:");
// Loop through library and show availability again
library.forEach(book => {
  console.log(book.getInfo(), book.isAvailable ? "Available" : "Not Available");
});

// Count long books (>300 pages)
let longBooksCount = library.filter(book => book.isLongBook()).length;
console.log("________________________________________________________________________");
console.log(`Number of long books: ${longBooksCount}`);

// List available books
console.log("__________________________________________________________________");//Line for To make it feel separate racks
console.log("Available Books:");
library.filter(book => book.isAvailable).forEach(book => {
  console.log(book.getInfo());
});
console.log("_______________________________________________________________________");
