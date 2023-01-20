const { BookService } = require('../services');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();

  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await BookService.getById(id);

  if(type) return res.status(404).json({ message });

  res.status(200).json(message);
};

module.exports = {
  getAll,
  getById,
};