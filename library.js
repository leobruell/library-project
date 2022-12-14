class Book {
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    info(){
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
}

let myLibrary = [
    new Book('The Catcher in the Rye', ' J. D. Salinger', '234', true),
    new Book('For Whom the Bell Tolls', 'Ernest Hemingway', '300', true)
]

function showBooks(){
    let bookList = document.querySelector('.book-list')
    for (book in myLibrary){
        let bookDiv = document.createElement('div')
        bookDiv.classList.add('book-div')
        bookDiv.setAttribute('data-list-number',`${book}`)
        bookDiv.innerHTML = 
        `
        <div class="main-card-content">
        <p>
        <span class='book-title'>${myLibrary[book].title} </span><br /> 
        By ${myLibrary[book].author} <br />
        ${myLibrary[book].pages} pages <br />
        </p>
        <div class="reading-part">
            <div>
            <label for="read-box"> Read:</label><br>
            </div>
            <div>
            <input class="read-checkbox" type="checkbox" id="read-box" name="read" value="read">
            </div>
        </div>
        </div>
        <div class="card-buttons">
        <button class="remove-card" type="button">Remove Book</button>
        </div>
        `
        bookList.appendChild(bookDiv)
        let readCheckbox = bookDiv.querySelector('.read-checkbox')
        if (myLibrary[book].read == true){
            readCheckbox.setAttribute('checked','')
        }
        readCheckbox.addEventListener('change', changeReadStatus)
        
    }
    


    let removeCard = document.querySelectorAll('.remove-card')
    removeCard.forEach(button => {
        button.addEventListener('click', removeBook)
    })
}
// showBooks()

function addForm(event){
    let theForm = document.createElement('div')
    let openForm = document.querySelector('.open-form')
    theForm.classList.add('the-form')

    theForm.innerHTML = 
    `
    <h3>Add Book</h3>
    <div class="title">
        <label for="title">Title:</label>
        <input type="text" name="title" id="title" required>
    </div>
    <div class="author">
        <label for="author">Author:</label>
        <input type="text" name="author" id="author" required>
    </div>
    <div class="page-count">
        <label for="pages">Pages:</label>
        <input type="number" name="page-count" id="pages" required>
    </div>
    <div class="read">
        <label for="read">Have you read it?</label>
        
        <div class="radio-button">
            <label for="radio-yes">Yes</label>
            <input type="radio" id="read-yes" name="read-it" value="yes" checked="checked">
        </div>
        <div class="radio-button">
            <label for="radio-no">No</label>
            <input type="radio" id="read-no" name="read-it" value="no">
        </div>
        
    </div>
    <div class="submit-div">
        <button class="submit-form" type="button">Submit</button>
    </div>
    `
    let formDiv = document.querySelector('.form-div')
    formDiv.appendChild(theForm)

    openForm.remove()
    openForm.removeEventListener('click', addForm)

    let submitDiv = document.querySelector('.submit-form')
    submitDiv.addEventListener('click', addBook)
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
    myLibrary.push(newBook)

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

function removeBook(event){
    let removeButton = event.target
    let divToRemove = removeButton.parentElement.parentElement
    let indexVal = divToRemove.getAttribute('data-list-number')
    myLibrary = myLibrary.filter(item => myLibrary.indexOf(item) != indexVal)
    divToRemove.remove()

    let bookCards = document.querySelectorAll('.book-div')
    bookCards.forEach(card => card.remove())
    showBooks()
}

function changeReadStatus(event){
    let theCheckbox = event.target
    let bookCard = theCheckbox.parentElement.parentElement.parentElement
    let indexVal = bookCard.getAttribute('data-list-number')
    if (theCheckbox.checked){
        myLibrary[indexVal].read = true
    } 
    else{
        myLibrary[indexVal].read = false
    }
    console.log(myLibrary[indexVal])

}

let openForm = document.querySelector('.open-form')
openForm.addEventListener('click', addForm)


showBooks()

