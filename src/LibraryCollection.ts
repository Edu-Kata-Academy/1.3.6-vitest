   type BookInfo = { id: string, title: string, author: string };

   export class LibraryCollection {
     private collection: Map<string, BookInfo> = new Map();
     private generateId() {
       return '_' + Math.random().toString(36).slice(2, 9);
     }

     public addBook(title: string, author: string): string | Error {
       if (Array.from(this.collection.values()).some(book => book.title === title)) {
         throw new Error('Book already exists');
       }
       const id = this.generateId();
       this.collection.set(id, { id, title, author });
       return id;
     }

     public removeBook(id: string): void {
       this.collection.delete(id);
     }

     public getBookInfo(id: string): BookInfo | null {
       return this.collection.get(id) || null;
     }

     public getAllBooks(): BookInfo[] {
       return Array.from(this.collection.values());
     }

     public getBooksCount(): number {
       return this.collection.size;
     }
   }