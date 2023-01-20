const { BookService } = require('../services');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();

  res.status(200).json(books);
}

module.exports = {
  getAll,
}