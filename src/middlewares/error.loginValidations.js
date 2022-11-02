require('dotenv/config');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const services = require('../services/login.service');

const joiSchema = joi.object({
  email: joi.string()
            .email()
            .required(),
  password: joi.string()
               .min(6)
               .required(),
});

const validateLogin = async (req, res, next) => {
  const { error } = joiSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  const user = await services.login(req.body);
  if (user === null || user.password !== req.body.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const { email } = req.body;
  const token = jwt.sign({ data: { emailID: email.id } }, process.env.JWT_SECRET, jwtConfig);
  req.token = token;

  next();
  };

module.exports = {
  validateLogin,
};