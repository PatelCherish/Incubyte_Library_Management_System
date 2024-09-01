// src/services/borrowBook.ts
import { books } from './bookData';

export function borrowBooks(isbnList: string[]): void {
    isbnList.forEach(isbn => {
        const book = books.find(book => book.isbn === isbn);

        if (!book) {
            throw new Error(`Book with ISBN ${isbn} not found.`);
        }

        if (book.quantity === 0) {
            throw new Error(`Book with ISBN ${isbn} is not available.`);
        }

        book.quantity -= 1;
    });
}
