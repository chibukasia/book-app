const form = document.querySelector("#form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#ISBN");
const tbody = document.querySelector("#table-body");
const alertDiv = document.querySelector('#alert'); 

const book = {
    title: '',
    author: '',
    isbn: '',
}

function fetchBooks(){
    const url = 'http://localhost:3000/books';

    fetch(url)
    .then((response)=>response.json())
    .then(data=>renderBooks(data))
    .catch((error)=>console.log('Error ' + error))
    
}

function renderBooks(books){
    books.forEach((book)=>{
        const tr = document.createElement('tr')
        tr.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>X</td>
            `
        tbody.appendChild(tr)
    })
}

function addBook(book){
    const url = 'http://localhost:3000/books';

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
    .then((response)=>response.json())
    .then((data)=>console.log(data))
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    book.title=title.value 
    book.author=author.value
    book.isbn=isbn.value
   
    addBook(book)
    
})


function deleteBook(id){
    const url = `http://localhost:3000/books/${id}`
    fetch(url, {
        method: "DELETE"
    })
    .then((response)=>response.json())
    .then(()=>console.log('book deleted'))
}

tbody.addEventListener('click', (e)=>{
    
})
fetchBooks()