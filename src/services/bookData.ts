// src/services/bookData.ts
export interface Book {
    isbn: string;
    title: string;
    author: string;
    publicationYear: number;
    quantity: number;
}

export const books: Book[] = [];
