const checkUserInfos = (req, res, next) => {
  const { firstname, email, password, phone } = req.body;

  if (firstname && email && password && phone) {
    return next();
  }
  res.status(401).json({ 
    message: 'Campos ausentes!' }); 
};

module.exports = checkUserInfos;