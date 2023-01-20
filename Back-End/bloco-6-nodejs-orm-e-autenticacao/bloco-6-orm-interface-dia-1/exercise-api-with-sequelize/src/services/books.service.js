const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (idBook) => {
  const book = await Book.findByPk(idBook);
  if(!book) return { type: 'BOOK_NOT_FOUND', message: "Book not found" };

  return { type: '', message: book };
};

const createBook = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity });

  return newBook;
}


module.exports = {
  getAll,
  getById,
  createBook,
};