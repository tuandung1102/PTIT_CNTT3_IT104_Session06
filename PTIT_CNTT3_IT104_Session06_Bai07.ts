type BookStatus = 'Đang có sẵn' | 'Đã mượn';
type MemberStatus = 'Đang hoạt động' | 'Bị khóa';

class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public stock: number,
        public status: BookStatus
    ) {}
}

class Member {
    public lendedBooks: LendedBook[];

    constructor(
        public id: number,
        public name: string,
        public contact: string,
        public status: MemberStatus
    ) {
        this.lendedBooks = [];
    }
}

class LendedBook {
    constructor(
        public memberId: number,
        public bookId: number,
        public dueDate: Date
    ) {}
}

class Library {
    private books: Book[];
    private members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    public addBook(book: Book): void {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title}`);
    }

    public showBooks(): void {
        console.log("\nDanh sách sách trong thư viện:");
        console.log("----------------------------------------");
        this.books.forEach(book => {
            console.log(`ID: ${book.id}`);
            console.log(`Tiêu đề: ${book.title}`);
            console.log(`Tác giả: ${book.author}`);
            console.log(`Số lượng: ${book.stock}`);
            console.log(`Tình trạng: ${book.status}`);
            console.log("----------------------------------------");
        });
    }
}

const library: Library = new Library();

const book1: Book = new Book(1, "Lão Hạc", "Nam Cao", 5, "Đang có sẵn");
const book2: Book = new Book(2, "Số Đỏ", "Vũ Trọng Phụng", 3, "Đang có sẵn");
const book3: Book = new Book(3, "Truyện Kiều", "Nguyễn Du", 2, "Đang có sẵn");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.showBooks();