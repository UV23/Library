function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {

}

Display.prototype.add = function(book){
    tableBody = document.getElementById('tableBody');
    let uistring = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uistring;
}

Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('Submitted');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;
    let type;

    let Fiction = document.getElementById('Fiction');
    let Comic = document.getElementById('Comic');
    let Other = document.getElementById('Other');

    if (Fiction.checked) {
        type = Fiction.value;
    }
    else if (Comic.checked) {
        type = Comic.value;
    }
    else if (Other.checked) {
        type = Other.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    display.add(book);
    display.clear();
    e.preventDefault();
}