import { describe, it, expect, beforeEach } from 'vitest';
import { LibraryCollection } from '../src/LibraryCollection';

describe('LibraryCollection', () => {
  let library: LibraryCollection;

  beforeEach(() => {
    library = new LibraryCollection();
  });

  it('should add a book and return its id', () => {
    const bookId = library.addBook('The Hobbit', 'J.R.R. Tolkien');
    expect(bookId).toBeDefined();
    expect(typeof bookId).toBe('string');
  });

  it('should throw an error when a book with the same title already exists', () => {
    library.addBook('The Hobbit', 'J.R.R. Tolkien');
    expect(() => {
      library.addBook('The Hobbit', 'J.R.R. Tolkien');
    }).toThrow('Book already exists');
  });

  it('should remove a book by id', () => {
    const bookId = library.addBook('1984', 'George Orwell');

    if (bookId instanceof Error) {
      throw bookId;
    }
  
    library.removeBook(bookId);
    expect(library.getBookInfo(bookId)).toBeNull();
  });

  it('should return null when getting information for a non-existent book', () => {
    expect(library.getBookInfo('non-existent-id')).toBeNull();
  });

  it('should return book information by id', () => {
    const bookId = library.addBook('The Lord of the Rings', 'J.R.R. Tolkien');
    
    if (bookId instanceof Error) {
      throw bookId;
    }
    
    const bookInfo = library.getBookInfo(bookId);
    expect(bookInfo).toEqual({
      id: bookId,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien'
    });
  });

  it('should return all books in the collection', () => {
    const bookId1 = library.addBook('The Hobbit', 'J.R.R. Tolkien');
    const bookId2 = library.addBook('1984', 'George Orwell');
    const books = library.getAllBooks();
    expect(books.length).toBe(2);
    expect(books.some(book => book.id === bookId1)).toBe(true);
    expect(books.some(book => book.id === bookId2)).toBe(true);
  });

  it('should return the correct count of books in collection', () => {
    library.addBook('The Hobbit', 'J.R.R. Tolkien');
    library.addBook('1984', 'George Orwell');
    expect(library.getBooksCount()).toBe(2);
  });
});