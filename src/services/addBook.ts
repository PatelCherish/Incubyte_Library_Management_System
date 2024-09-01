import { books, Book } from './bookData';

export function addBook(newBook: Book): void {
    const existingBook = books.find(book => book.isbn === newBook.isbn);

    if (existingBook) {
        throw new Error('Book with this ISBN already exists.');
    }

    books.push(newBook);
}
