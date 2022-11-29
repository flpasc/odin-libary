let newBook = document.getElementById("new-book");
let submitBook = document.getElementById("submit");
let table = document.getElementById("table");
let libary = [];
let libIndex = 1;

function openForm() {
	document.getElementById("add-popup").style.display = "block";
}

function closeForm() {
	document.getElementById("add-popup").style.display = "none";
}

newBook.addEventListener("click", openForm);
submitBook.addEventListener("click", () => {
	console.log("submit");
	addToLibary();
});

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
	console.log("add to libary");
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

book1 = new Book("Bernd, Böhme", "Hausifant", "567", true);
book2 = new Book("Gerhardt, Gurt", "Cati", "327", false);
book3 = new Book("Klaus, Klausen", "The Thing", "731", false);
book4 = new Book("Nora, Norington", "Open Book", "123", true);
book5 = new Book("Otto, Ottington", "Animals", "379", true);
book6 = new Book("Michi, Michaelis", "How to", "1326", false);

libary.push(book1, book2, book3, book4, book5, book6);
buildLibary();
