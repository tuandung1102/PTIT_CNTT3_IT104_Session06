var Book = /** @class */ (function () {
    function Book(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.lendedBooks = [];
    }
    return Member;
}());
var LendedBook = /** @class */ (function () {
    function LendedBook(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    return LendedBook;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("\u0110\u00E3 th\u00EAm s\u00E1ch: ".concat(book.title));
    };
    Library.prototype.showBooks = function () {
        console.log("\nDanh sách sách trong thư viện:");
        console.log("----------------------------------------");
        this.books.forEach(function (book) {
            console.log("ID: ".concat(book.id));
            console.log("Ti\u00EAu \u0111\u1EC1: ".concat(book.title));
            console.log("T\u00E1c gi\u1EA3: ".concat(book.author));
            console.log("S\u1ED1 l\u01B0\u1EE3ng: ".concat(book.stock));
            console.log("T\u00ECnh tr\u1EA1ng: ".concat(book.status));
            console.log("----------------------------------------");
        });
    };
    return Library;
}());
var library = new Library();
var book1 = new Book(1, "Lão Hạc", "Nam Cao", 5, "Đang có sẵn");
var book2 = new Book(2, "Số Đỏ", "Vũ Trọng Phụng", 3, "Đang có sẵn");
var book3 = new Book(3, "Truyện Kiều", "Nguyễn Du", 2, "Đang có sẵn");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();
