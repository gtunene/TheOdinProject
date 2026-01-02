function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        this.var = ( title +", "+ author +", "+ pages +", "+ read);
        return this.var;
    }
}

book = new Book('Title Book', 'Author Name', 'Total pages', 'read status');
console.log(book.info());

