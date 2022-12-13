const checkCreatedAt = (req, res, next) => {
  const { description } = req.body;

  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!isFormatDate.test(description.createdAt)) {
    return res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
  }
  next();
};

module.exports = checkCreatedAt;