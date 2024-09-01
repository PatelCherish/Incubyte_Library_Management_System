
import { books } from './bookData';

export function viewAvailableBooks() {
    return books.filter(book => book.quantity > 0);
}
