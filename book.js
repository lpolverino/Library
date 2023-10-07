const myLibrary = []

function Book(title, author, pages, read ){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let readed = read? 'has bean read': 'not read yet'
        return this.title + ' by ' + this.author + ', ' + this.pages +' pages' +' ' + readed
    }
}

function addBookToLibrary() {
    const title = document.getElementById("title").value; 
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;

    const newBook = new Book(title, author, pages, read);
    
    myLibrary.push(newBook);
}

function showBooks(){
    document.querySelectorAll('.book').forEach(e => e.remove());
    const table = document.getElementsByClassName("table")[0];
    myLibrary.forEach((book) =>{
        
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("book")
        
        const bookTitle = document.createElement("h2");
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement("h3");
        bookAuthor.textContent = book.author;

        const bookPages = document.createElement("p");
        bookPages.textContent = "pages: " + book.pages;

        const bookRead = document.createElement("p");
        bookRead.textContent = book.read?"read":"no read"

        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookRead);
        table.appendChild(card);
    })
}

const  mockBook = new Book("Tokyo Ghoul","Sui Ishida", 216, true)

myLibrary.push(mockBook)

const  mock2Book = new Book("Berzerk","Kento Miura", 1046, true)

myLibrary.push(mock2Book)


showBooks()

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".card button");
const closeButton = document.querySelector("dialog button");
const confirmButton = dialog.querySelector("#confirmBtn");

showButton.addEventListener("click", () =>{
    dialog.showModal();
});

closeButton.addEventListener("click", ()=>{
    dialog.close();
});

dialog.addEventListener("close", (e) =>{
    showBooks();
})


confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    addBookToLibrary();
    dialog.close();
  });