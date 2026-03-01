// Book class represents a book in the library
class Book{
    title;        // Title of the book
    author;       // Author of the book
    pages;        // Number of pages
    isAvailable;  // Availability status

    // Constructor to create a new book object
    constructor(title, author, pages, isAvailable=true){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
    }

    // Marks the book as borrowed
    borrow(){
        this.isAvailable=false
    }

    // Marks the book as returned
    returnBook(){
        this.isAvailable=true
    }

    // Returns book details as a string
    getInfo(){
        return `The ${this.title} by ${this.author} (${this.pages} pages)`
    }

    // Returns true if the book has more than 300 pages
    isLongBook(){
        return this.pages>300
    }
}

// Array to store all books
const books=[
    new Book("Harry Potter","J.K. Rowling",400),
    new Book("Vinland Saga","Astrid Lindgren",350),
    new Book("The Hobbit","J.R.R. Tolkien",310),
    new Book("Attack on Titan","Hajime Isayama",280),
    new Book("Your Name","Makoto Shinkai",250)
]

// i. Display info of all books
console.log("All Books in the Library:")
books.forEach(book => console.log(book.getInfo()))

// ii. Borrow 2 books and show availability
books[1].borrow()  // Borrow "1984"
books[2].borrow()  // Borrow "The Hobbit"
console.log("\nAfter Borrowing 2 Books:")
console.log(`${books[1].getInfo()} - Available: ${books[1].isAvailable}`)
console.log(`${books[2].getInfo()} - Available: ${books[2].isAvailable}`)

// iii. Return 1 book and show updated status
books[2].returnBook()  // Return "The Hobbit"
console.log("\nAfter Returning 1 Book:")
console.log(`${books[2].getInfo()} - Available: ${books[2].isAvailable}`)

// iv. Count how many books are long books (>300 pages)
let countLongBooks = books.filter(book => book.isLongBook()).length
console.log(`\nThere are ${countLongBooks} long books`)

// v. List all available books
console.log("\nAvailable Books:")
books.filter(book => book.isAvailable).forEach(book => console.log(book.getInfo()))