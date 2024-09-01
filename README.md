# Library Management System

## Project Overview
The Library Management System is a simple yet robust application designed to manage the basic operations of a library. This project showcases the ability to add books, borrow them, return them, and view the list of available books in the library. The application emphasizes clean coding practices, the use of the Test-Driven Development (TDD) approach, and adherence to SOLID principles, making it a perfect example of building maintainable and scalable software.

## Test-Driven Development (TDD) Approach

### What is TDD?
Test-Driven Development (TDD) is a software development process where developers first write test cases for a feature before implementing the functionality. The cycle follows three main steps:

1. **Red**: Write a test that fails.
2. **Green**: Write the minimal code to pass the test.
3. **Refactor**: Optimize and clean up the code while ensuring that all tests still pass.

### Setting Up the TDD Approach
To set up the TDD approach in this project, follow these steps:

1. **Initialize the Project**: Set up a new TypeScript project and configure testing tools like Jest.
2. **Write Initial Tests**: Start by writing test cases for each functionality you plan to implement (e.g., adding a book).
3. **Implement Functionality**: Develop the code to pass the tests you've written.
4. **Refactor and Repeat**: Continuously refactor the codebase, ensuring all tests pass.

## Project Description

### Project Title
**Library Management System - A TDD-Based TypeScript Application**

### Project Description
This project is designed to create a functional library management system that handles the core operations of any typical library. Built using TypeScript and driven by the TDD approach, it ensures that the system is not only functional but also maintainable and scalable. The project covers the following functionalities:

### Key Functionalities

- **Add Books**:
  - Adds new books to the library collection.
  - Each book has a unique identifier (ISBN), title, author, publication year, and quantity.

- **Borrow Books**:
  - Allows users to borrow books from the library.
  - Validates book availability before allowing the operation.
  - Handles errors if the requested book is not available.

- **Return Books**:
  - Allows users to return borrowed books.
  - Updates the library’s inventory accordingly.

- **View Available Books**:
  - Provides a list of all books currently available in the library.

### Implemented Features
- `addBook()`: Adds a new book to the library if the ISBN is unique.
- `borrowBooks()`: Allows borrowing of one or multiple books at a time, updating the inventory.
- `returnBooks()`: Handles the return of borrowed books, ensuring the library stock is updated.
- `viewAvailableBooks()`: Lists all available books in the library.

## How to Set Up and Run the Project

### Prerequisites
- Node.js
- npm (Node Package Manager)
- TypeScript
- Jest (for testing)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd library-management-system
2. **Install Dependencies**
   ```bash
   npm install
3. **Run Tests**
   ```bash
   npm test
4. **Compile TypeScript**
   ```bash
   npm run build
**Start the Application**
The application is primarily designed for demonstration through tests, as it doesn't include a user interface.
