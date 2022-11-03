require('dotenv/config');
const joi = require('joi');

const joiSchemaCategory = joi.string().required();

const validateCategory = async (req, res, next) => {
  const { error: nameValidation } = joiSchemaCategory.validate(req.body.name);
  if (nameValidation) {
    return res.status(400).json({ message: '"name" is required' });
  } 
    next();
};

module.exports = {
  validateCategory,
};