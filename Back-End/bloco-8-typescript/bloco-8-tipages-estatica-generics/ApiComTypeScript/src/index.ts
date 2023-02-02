import sequelize from 'sequelize';
import Author from './database/models/Author';
import Book from './database/models/Book';

(async () => {
  const data = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks'],
    ],
    group: 'authors.name',
    raw: true,
  });

  console.log(data);
  process.exit(0);
})();