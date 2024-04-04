
import { describe, it, expect } from 'vitest';

import { LibraryCollection } from '../src/LibraryCollection';


describe('LibraryCollection', () => {
  
  it('should allow adding a book to the collection', () => {
    const collection = new LibraryCollection();
    collection.addBook('The Hobbit', 'J.R.R. Tolkien');
    expect(collection.countBooks()).toBe(1);
  });
  
  it('should allow removing a book from the collection', () => {
    const collection = new LibraryCollection();
    collection.addBook('1984', 'George Orwell');
    collection.removeBook('1984');
    expect(collection.countBooks()).toBe(0);
  });

  it('should return null when a book does not exist', () => {
    const collection = new LibraryCollection();
    const bookInfo = collection.getBookInfo('Some Book');
    expect(bookInfo).toBeNull();
  });

  it('should return book information when a book exists', () => {
    const collection = new LibraryCollection();
    collection.addBook('The Hobbit', 'J.R.R. Tolkien');
    const bookInfo = collection.getBookInfo('The Hobbit');
    expect(bookInfo).toEqual({ title: 'The Hobbit', author: 'J.R.R. Tolkien' });
  });

  it('should return the correct number of books', () => {
    const collection = new LibraryCollection();
    collection.addBook('The Hobbit', 'J.R.R. Tolkien');
    collection.addBook('1984', 'George Orwell');
    expect(collection.countBooks()).toBe(2);
  });

  it('should return an empty array when there are no books', () => {
    const collection = new LibraryCollection();
    expect(collection.getAllBooks()).toEqual([]);
  });

  it('should return an array of all books', () => {
    const collection = new LibraryCollection();
    collection.addBook('The Hobbit', 'J.R.R. Tolkien');
    collection.addBook('1984', 'George Orwell');
    expect(collection.getAllBooks()).toEqual([
      { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
      { title: '1984', author: 'George Orwell' }
    ]);
  });
});