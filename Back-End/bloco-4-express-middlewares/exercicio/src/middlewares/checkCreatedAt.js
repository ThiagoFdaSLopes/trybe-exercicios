const checkCreatedAt = (req, res, next) => {
  const { createdAt } = req.body.description;

  if (createdAt instanceof Date && !Number.isNaN(createdAt)) {
    return res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
  }
  next();
};

export default checkCreatedAt;