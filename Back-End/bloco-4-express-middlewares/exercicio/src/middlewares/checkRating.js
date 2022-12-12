const checkRating = (req, res, next) => {
  const { rating } = req.body.description;
  if ([1, 2, 3, 4, 5].some((n) => n === Number(rating))) {
    next();
  } else {
    return res.status(400).json({ 
    message: 'O campo rating deve ser um número inteiro entre 1 e 5' }); 
  }
};

export default checkRating;