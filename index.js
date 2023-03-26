const form = document.querySelector("#form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#ISBN");
const tbody = document.querySelector("#table-body");
const alertDiv = document.querySelector('#alert');

const addBook = (e) => {
  e.preventDefault();
  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    isbn.value.trim() === ""
  ) {
    alertMessage('Fill in all the fields','danger')
  } else {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${title.value}</td>
        <td>${author.value}</td>
        <td>${isbn.value}</td>
        <td id='delete'><i class="fa fa-trash" id='icon' aria-hidden="true"></i></td>
    `;
    tbody.appendChild(tr);
    form.reset();
    alertMessage('Book added successfully','success')
  }

  //   const td = tr.querySelector("#delete");

  // function deleteBook(){
  //     let conf = confirm('Are you sure you want to delete book?')
  //     if (conf){
  //         tr.remove()
  //     }

  // }
  //   td.addEventListener("click", () => {
  //     deleteBook(tr);
  //   });
};

function deleteBook(target) {
  let conf = confirm("Are you sure you want to delete book?");
  if (conf) {
    target.parentNode.parentNode.remove();
  }
}

tbody.addEventListener("click", (e) => {
  let clickedTarget = e.target;
  if (clickedTarget.id === "icon") {
    deleteBook(clickedTarget);
  }
});
form.addEventListener("submit", addBook);

function alertMessage(message, alert){
    alertDiv.innerHTML = `
    <div class="alert alert-${alert=='success'? 'success' : 'danger'} alert-dismissible fade show" role="alert">
      <strong>${message} !</strong> 
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
    setTimeout(()=>alertDiv.innerHTML='',5000)
}


// alert-success 
// alert-danger 