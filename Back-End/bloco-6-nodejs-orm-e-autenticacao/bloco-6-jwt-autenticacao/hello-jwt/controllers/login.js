const Joi = require('joi');

const validateBody = (body) =>
  /* Utilizamos o Joi para validar o schema do body */
  /* Estamos usando o método messages() para customizar as mensagens de erro das validações */
  Joi.object({
    username: Joi.string().min(5).alphanum().required().messages({
      'string.min': '"username" length must be 5 characters long',
      'string.required': '"username" is required',
    }),
    password: Joi.string().min(5).required().messages({
      'string.min': '"password" length must be 5 characters long',
      'string.required': '"password" is required',
    }),
  }).validate(body);

module.exports = (req, res, next) => {
  const { username, password } = req.body;

  if(!validateBody(username, password)) return res.status(404).json({ message: ' Invalid username or password '});


};