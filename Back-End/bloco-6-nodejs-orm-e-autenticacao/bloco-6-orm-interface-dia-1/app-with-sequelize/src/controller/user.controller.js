const { UserService } = require('../service');

const getAll = async (_req, res) => {
  const users = await UserService.getAll();

  res.status(200).json({ users });
};

module.exports = {
  getAll,
}