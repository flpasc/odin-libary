let newBook = document.getElementById("new-book");
let addBook = document.getElementById("submit");

function openForm() {
	document.getElementById("add-book").style.display = "block";
}

function closeForm() {
	document.getElementById("add-book").style.display = "none";
}

newBook.addEventListener("click", openForm);
addBook.addEventListener("submit", closeForm);
