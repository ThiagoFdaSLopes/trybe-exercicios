import Books from './database/models/BookModel';

interface Book {
  id: number;
  title: string;
  price: number;
  author: string;
  isbn: string;
}

(async () => {
  const books = await Books.findAll({raw: true});
  console.table(books);
  process.exit(0);
})();