
import { books } from './bookData';

export function returnBooks(isbnList: string[]): void {
    isbnList.forEach(isbn => {
        const book = books.find(book => book.isbn === isbn);

        if (!book) {
            throw new Error(`Book with ISBN ${isbn} not found.`);
        }
        book.quantity += 1;
    });
}
