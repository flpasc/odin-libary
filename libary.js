let newBook = document.getElementById("new-book");
let submitBook = document.getElementById("submit");
let table = document.getElementById("table");
let libary = [];

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
		this.author = author;
		this.title = title;
		this.pages = pages;
		this.read = read;
	}

	deleteBook() {
		console.log("delete Book");
	}
}

function buildLibary() {
	clearTable();
	let headers = ["Author", "Title", "Pages", "Read", ""];
	headers.forEach((headerInfo) => {
		let header = document.createElement("th");
		let textNode = document.createTextNode(headerInfo);
		header.appendChild(textNode);
		table.appendChild(header);
	});

	libary.forEach((book) => {
		row = document.createElement("tr");

		Object.values(book).forEach((info) => {
			let cell = document.createElement("td");
			let textNode = document.createTextNode(info);
			cell.appendChild(textNode);
			row.appendChild(cell);
		});
		table.appendChild(row);
	});
}

function clearTable() {
	table.innerHTML = "";
}

book1 = new Book("Hausifant", "Bernd", "567", true);
book2 = new Book("Cati", "Gerhardt", "327", false);
book3 = new Book("The Thing", "Klaus", "731", false);
book4 = new Book("Open Book", "Nora", "123", true);
book5 = new Book("Animals", "Otto", "379", true);
book6 = new Book("How to", "Michi", "1326", false);

libary.push(book1, book2, book3, book4, book5, book6);
buildLibary();
