const checkUserInfos = (req, res, next) => {
  const { firstname, email, password, phone } = req.body;

  if (!firstname && !email && !password && !phone) {
    return res.status(401).json({ 
    message: 'Campos ausentes!' }); 
  }
  next();
};

module.exports = checkUserInfos;