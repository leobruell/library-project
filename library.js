let myLibary = [new Book('My Life', 'Leo Bruell', '1000', true), new Book('My Second Life', 'Leo Bruell', '10', false)]

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    if (this.read == true){
        return `${this.title} by ${this.author}, ${this.pages} pages, read`
    }
    else if (this.read == false){
        return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`
    }
    else {
        return `${this.title} by ${this.author}, ${this.pages} pages, read status unknown`
    }
}

function showBooks(){
    let bookList = document.querySelector('.book-list')
    for (book in myLibary){
        let bookDiv = document.createElement('div')
        bookDiv.classList.add('book-div')
        let bookIcon = document.createElement('p')
        bookIcon.innerHTML = 'Title: ' + myLibary[book].title + '<br />' + 'Author: ' + myLibary[book].author + '<br />' + 'Pages: ' + myLibary[book].pages
        bookDiv.appendChild(bookIcon)
        bookList.appendChild(bookDiv)
    }
}
showBooks()
console.log(myLibary)

function addForm(event){
    let theForm = document.createElement('div')
    theForm.classList.add('the-form')

    theForm.innerHTML = 
    `
    <div class="the-form">
    <div class="title">
        <label for="title">Title:</label>
        <input type="text" name="title" id="title" required>
    </div>
    <div class="author">
        <label for="author">Author:</label>
        <input type="text" name="author" id="author" required>
    </div>
    <div class="page-count">
        <label for="pages">Number of Pages:</label>
        <input type="number" name="page-count" id="pages" required>
    </div>
    <div class="read">
        <label for="read">Have you read it?</label>
        <div>
            <div class="radio-button">
                <label for="radio-yes">Yes</label>
                <input type="radio" id="read-yes" name="read-it" value="yes">
            </div>
            <div class="radio-button">
                <label for="radio-no">No</label>
                <input type="radio" id="read-no" name="read-it" value="no">
            </div>
        </div>
    </div>
    <div class="submit-div">
        <button class="submit-form" type="button">Add Book</button>
    </div>
    </div>
    `
    let formDiv = document.querySelector('.form-div')
    formDiv.appendChild(theForm)

    openForm.remove()
    openForm.removeEventListener('click', addForm)
}

let openForm = document.querySelector('.open-form')
openForm.addEventListener('click', addForm)
