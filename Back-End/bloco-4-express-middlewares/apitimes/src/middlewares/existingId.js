// Middleware
const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (teams.some((t) => t.id === id)) {
    next();
  } else {
    res.status(404).send({ message: 'ID Não encontrado' });
  }
};

export default existingId;