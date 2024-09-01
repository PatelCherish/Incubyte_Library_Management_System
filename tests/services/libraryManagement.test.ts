import {addBook} from '../../src/services/addBook'
import { borrowBooks } from '../../src/services/borrowBook';
import { returnBooks } from '../../src/services/returnBook';
import { viewAvailableBooks } from '../../src/services/viewAvailableBooks';
import { books } from '../../src/services/bookData';

describe('Library Management System - Comprehensive Test Cases', () => {
    beforeEach(() => {
        books.length = 0;
    });

    test('should add a new book to the library', () => {
        addBook({ isbn: '123-456-789', title: 'Test Book', author: 'Author', publicationYear: 2020, quantity: 5 });
        expect(books.length).toBe(1);
        expect(books[0].isbn).toBe('123-456-789');
    });

    test('should not allow adding a book with duplicate ISBN', () => {
        addBook({ isbn: '123-456-789', title: 'Test Book', author: 'Author', publicationYear: 2020, quantity: 5 });
        expect(() => addBook({ isbn: '123-456-789', title: 'Duplicate Book', author: 'Another Author', publicationYear: 2021, quantity: 3 }))
            .toThrow('Book with this ISBN already exists.');
    });

    test('should add multiple books and validate the library contents', () => {
        addBook({ isbn: '111-111-111', title: 'First Book', author: 'Author 1', publicationYear: 2020, quantity: 3 });
        addBook({ isbn: '222-222-222', title: 'Second Book', author: 'Author 2', publicationYear: 2021, quantity: 2 });
        addBook({ isbn: '333-333-333', title: 'Third Book', author: 'Author 3', publicationYear: 2022, quantity: 1 });

        expect(books.length).toBe(3);
        expect(books.find(book => book.isbn === '111-111-111')!.quantity).toBe(3);
        expect(books.find(book => book.isbn === '222-222-222')!.quantity).toBe(2);
        expect(books.find(book => book.isbn === '333-333-333')!.quantity).toBe(1);
    });

    test('should borrow a book and reduce its quantity', () => {
        addBook({ isbn: '123-456-789', title: 'Test Book', author: 'Author', publicationYear: 2020, quantity: 5 });
        borrowBooks(['123-456-789']);
        expect(books[0].quantity).toBe(4);
    });

    test('should not borrow a book if not available', () => {
        addBook({ isbn: '123-456-789', title: 'Test Book', author: 'Author', publicationYear: 2020, quantity: 0 });
        expect(() => borrowBooks(['123-456-789'])).toThrow('Book with ISBN 123-456-789 is not available.');
    });

    test('should return a borrowed book and increase its quantity', () => {
        addBook({ isbn: '123-456-789', title: 'Test Book', author: 'Author', publicationYear: 2020, quantity: 5 });
        borrowBooks(['123-456-789']);
        returnBooks(['123-456-789']);
        expect(books[0].quantity).toBe(5);
    });

    test('should not return a book that is not borrowed or doesn’t exist', () => {
        expect(() => returnBooks(['123-456-789'])).toThrow('Book with ISBN 123-456-789 not found.');
    });

    test('should view all available books', () => {
        addBook({ isbn: '123-456-789', title: 'Test Book', author: 'Author', publicationYear: 2020, quantity: 5 });
        const availableBooks = viewAvailableBooks();
        expect(availableBooks.length).toBe(1);
        expect(availableBooks[0].isbn).toBe('123-456-789');
    });

    test('should borrow multiple books at once', () => {
        addBook({ isbn: '111-111-111', title: 'First Book', author: 'Author 1', publicationYear: 2020, quantity: 3 });
        addBook({ isbn: '222-222-222', title: 'Second Book', author: 'Author 2', publicationYear: 2021, quantity: 2 });
        
        borrowBooks(['111-111-111', '222-222-222']);
        
        expect(books.find(book => book.isbn === '111-111-111')!.quantity).toBe(2);
        expect(books.find(book => book.isbn === '222-222-222')!.quantity).toBe(1);
    });

    test('should handle borrowing all available copies of a book', () => {
        addBook({ isbn: '111-111-111', title: 'First Book', author: 'Author 1', publicationYear: 2020, quantity: 3 });

        borrowBooks(['111-111-111', '111-111-111', '111-111-111']);

        expect(books.find(book => book.isbn === '111-111-111')!.quantity).toBe(0);
        expect(() => borrowBooks(['111-111-111'])).toThrow('Book with ISBN 111-111-111 is not available.');
    });

    test('should not allow borrowing more books than available', () => {
        addBook({ isbn: '111-111-111', title: 'First Book', author: 'Author 1', publicationYear: 2020, quantity: 1 });
        
        borrowBooks(['111-111-111']);

        expect(() => borrowBooks(['111-111-111'])).toThrow('Book with ISBN 111-111-111 is not available.');
    });

    test('should handle cases where the same title has different ISBNs', () => {
        addBook({ isbn: '111-111-111', title: 'Common Title', author: 'Author 1', publicationYear: 2020, quantity: 2 });
        addBook({ isbn: '222-222-222', title: 'Common Title', author: 'Author 2', publicationYear: 2021, quantity: 2 });

        expect(books.length).toBe(2);
        expect(books.find(book => book.isbn === '111-111-111')!.title).toBe('Common Title');
        expect(books.find(book => book.isbn === '222-222-222')!.title).toBe('Common Title');
    });

    test('should return multiple books and update quantities accordingly', () => {
        addBook({ isbn: '111-111-111', title: 'First Book', author: 'Author 1', publicationYear: 2020, quantity: 3 });
        addBook({ isbn: '222-222-222', title: 'Second Book', author: 'Author 2', publicationYear: 2021, quantity: 2 });
        
        borrowBooks(['111-111-111', '222-222-222']);
        returnBooks(['111-111-111', '222-222-222']);

        expect(books.find(book => book.isbn === '111-111-111')!.quantity).toBe(3);
        expect(books.find(book => book.isbn === '222-222-222')!.quantity).toBe(2);
    });
});
