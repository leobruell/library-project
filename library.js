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
    let openForm = document.querySelector('.open-form')
    theForm.classList.add('the-form')

    theForm.innerHTML = 
    `
    <div class="the-form">
    <h3>Add Book:</h3>
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
                <input type="radio" id="read-yes" name="read-it" value="yes" checked="checked">
            </div>
            <div class="radio-button">
                <label for="radio-no">No</label>
                <input type="radio" id="read-no" name="read-it" value="no">
            </div>
        </div>
    </div>
    <div class="submit-div">
        <button class="submit-form" type="button">Submit</button>
    </div>
    </div>
    `
    let formDiv = document.querySelector('.form-div')
    formDiv.appendChild(theForm)

    openForm.remove()
    openForm.removeEventListener('click', addForm)

    let submitButton = document.querySelector('.submit-form')
    submitButton.addEventListener('click', addBook)

}

function addBook(event){
    let titleInput = document.querySelector('.title input')
    let titleValue = titleInput.value

    let authorInput = document.querySelector('.author input')
    let authorValue = authorInput.value

    let pagesInput = document.querySelector('.page-count input')
    let pagesValue = pagesInput.value

    let radioValue = document.querySelector('input[name="read-it"]:checked').value

    let newBook
    if (radioValue == 'yes'){
        newBook = new Book(titleValue, authorValue, pagesValue, true)
    }
    else {
        newBook = new Book(titleValue, authorValue, pagesValue, false)
    }
    myLibary.push(newBook)

    let bookCards = document.querySelectorAll('.book-div')
    bookCards.forEach(card => card.remove())

    let theForm = document.querySelector('.the-form')
    theForm.remove()

    let openForm = document.createElement('button')
    openForm.classList.add('open-form')
    openForm.setAttribute('type','button')
    openForm.textContent = 'Add Book'

    document.querySelector('.form-div').appendChild(openForm)
    openForm.addEventListener('click', addForm)

    showBooks()
}

let openForm = document.querySelector('.open-form')
openForm.addEventListener('click', addForm)


