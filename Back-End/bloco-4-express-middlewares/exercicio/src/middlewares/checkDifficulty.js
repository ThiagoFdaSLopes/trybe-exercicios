const checkDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;

  if (!['Fácil', 'Médio', 'Difícil'].includes(difficulty)) {
    return res.status(400).json({ 
    message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' }); 
  }
  next();
};
export default checkDifficulty;