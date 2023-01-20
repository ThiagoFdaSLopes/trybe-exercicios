const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (idBook) => {
  const book = await Book.findByPk(idBook);
  if(!book) return { type: 'BOOK_NOT_FOUND', message: "Book not found" };

  return { type: '', message: book };
}


module.exports = {
  getAll,
  getById,
};