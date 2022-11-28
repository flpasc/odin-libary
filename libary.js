let myLibary = [];

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;

		this.info = function () {
			return `${title} by ${author}, ${pages} pages, ${read}`;
		};
	}
}

let book1 = new Book("Fantasy", "Wizard Oz", "1287", "not read");
let book2 = new Book("History", "Old Man", "8325257", "read");
let book3 = new Book("Thriller", "Scare Man", "233", "read");
let book4 = new Book("Sci-fi", "R2D2", "127", "not read");

function showLibary() {
	myLibary.forEach((book) => console.table(book));
}

function addToLibary(newBook) {
	myLibary.push(newBook);
}

addToLibary(book1);
addToLibary(book2);
addToLibary(book3);
addToLibary(book4);

showLibary();
