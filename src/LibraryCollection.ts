export class LibraryCollection {
  private collection: Map<string, { title: string; author: string }> = new Map();

  public addBook(title: string, author: string): void {
    this.collection.set(title, { title, author });
  }

  public removeBook(title: string): void {
    this.collection.delete(title);
  }

  public getBookInfo(title: string): { title: string; author: string } | null {
    return this.collection.get(title) || null;
  }

  public getAllBooks(): Array<{ title: string; author: string }> {
    return Array.from(this.collection.values());
  }

  public countBooks(): number {
    return this.collection.size;
  }
}