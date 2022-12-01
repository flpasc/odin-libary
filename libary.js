let newBook = document.getElementById("new-book");
let submitBook = document.getElementById("submit-btn");
let closeButton = document.getElementById("close-btn");
let table = document.getElementById("table");

let libary = [];
let libIndex = 1;

function openForm() {
	document.getElementById("add-popup").style.display = "block";
}

function validityCheck() {
	let bookAuthor = document.getElementById("author").value;
	let bookTitle = document.getElementById("title").value;
	let bookPages = document.getElementById("pages").value;

	console.log(bookAuthor);
	console.log(bookTitle);
	console.log(bookPages);

	if (bookAuthor.length === 0 || bookTitle.length === 0 || bookPages.length === 0) {
		return false;
	} else {
		return true;
	}
}

function clearForm() {
	let bookAuthor = document.getElementById("author");
	let bookTitle = document.getElementById("title");
	let bookPages = document.getElementById("pages");

	bookAuthor.value = "";
	bookTitle.value = "";
	bookPages.value = "";
}

function closeForm() {
	if (validityCheck() === false) {
	}
	document.getElementById("add-popup").style.display = "none";
}

newBook.addEventListener("click", openForm);
submitBook.addEventListener("click", () => {
	if (validityCheck() === false) {
		console.log("form uncomplete");
		return;
	} else {
		console.log("book submited");
		addToLibary();
		clearForm();
	}
});
closeButton.addEventListener("click", closeForm);

function addToLibary() {
	author = document.getElementById("author").value;
	title = document.getElementById("title").value;
	pages = document.getElementById("pages").value;
	read = document.getElementById("read").checked;
	let data = new Book(author, title, pages, read);

	libary.push(data);
	buildLibary();
	closeForm();
	console.table(libary);
	console.log("added to libary");
}

class Book {
	constructor(author, title, pages, read) {
		this.index = 0;
		this.author = author;
		this.title = title;
		this.pages = pages;
		this.read = read;
	}
}

function buildLibary() {
	clearTable();
	let headers = ["No.", "Author", "Title", "Pages", "Read", ""];
	headers.forEach((headerInfo) => {
		let header = document.createElement("th");
		let textNode = document.createTextNode(headerInfo);
		header.appendChild(textNode);
		table.appendChild(header);
	});

	libary.forEach((book) => {
		row = document.createElement("tr");

		let indexCell = document.createElement("td");

		let indexNumber = document.createTextNode(libary.indexOf(book) + 1);
		indexCell.appendChild(indexNumber);
		row.appendChild(indexCell);

		let cell = document.createElement("td");
		let checkboxCell = document.createElement("input");
		checkboxCell.type = "checkbox";
		checkboxCell.className = "read-checkbox";
		cell.appendChild(checkboxCell);

		let deleteCell = document.createElement("td");
		let deleteButton = document.createElement("i");
		deleteButton.classList.add("delete-btn");
		deleteButton.classList.add("fa-solid");
		deleteButton.classList.add("fa-trash-can");
		deleteButton.classList.add("fa-lg");

		deleteCell.appendChild(deleteButton);
		deleteButton.addEventListener("click", () => {
			deleteBook(book);
		});

		Object.values(book).forEach((info) => {
			if (info === book.index) {
				return;
			}

			if (info != true && info != false) {
				let cell = document.createElement("td");
				let textNode = document.createTextNode(info);
				cell.appendChild(textNode);
				row.appendChild(cell);
			}
			if (info === true) {
				checkboxCell.checked = true;
			}
		});
		row.appendChild(cell);
		row.appendChild(deleteCell);
		table.appendChild(row);
	});
}

function clearTable() {
	table.innerHTML = "";
}

function deleteBook(book) {
	libary.splice(book.index - 1, 1);
	buildLibary();
	console.log(book.index);
}

function getIndex(row) {
	let index = row.index;
	return index;
}

book1 = new Book("Malfoy, Lucious", "Dark Magic for dummies", "567", true);
book2 = new Book("Granger, Hermoine", "My live as a know-it-all", "834", false);
book3 = new Book("Harry, Potter", "Look at me, I´m Harry Potter", "251", false);
book4 = new Book("Keeper, Hagrid", "Taiming a giant", "52", true);
book5 = new Book("Black, Sirius", "Azkaban from the inside", "672", true);
book6 = new Book("Weesley, Ronald", "How did i wrote this", "1326", false);

libary.push(book1, book2, book3, book4, book5, book6);
buildLibary();
