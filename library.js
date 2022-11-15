let myLibary = [new Book('My Life', 'Leo Bruell', '1,000', true), new Book('My Second Life', 'Leo Bruell', '1,0', false)]

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

bookOne = new Book('My Life', 'Leo Bruell', '1,000', true)
console.log(bookOne.info())

function showBooks(){
    let bookList = document.querySelector('.book-list')
    for (book in myLibary){
        let bookDiv = document.createElement('div')
        bookDiv.classList.add('book-div')
        let bookIcon = document.createElement('p')
        bookIcon.textContent = myLibary[book].title
        bookDiv.appendChild(bookIcon)
        bookList.appendChild(bookDiv)
    }
}
showBooks()
console.log(myLibary)