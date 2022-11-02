require('dotenv/config');
const joi = require('joi');

 const joiSchemaEmail = joi.string()
            .email()
            .regex(/[a-zA-Z0-9._]+@[a-zA-Z]{1,9}/) 
            .required();
 const joiSchemaPassword = joi.string()
               .min(6)
               .required();
 const joiSchemaDisplayName = joi.string()
                  .min(8)
                  .required();

const validateUser = async (req, res, next) => {
    const { error: displayNameValidation } = joiSchemaDisplayName.validate(req.body.displayName);
    if (displayNameValidation) {
        return res.status(400).json(
          { message: '"displayName" length must be at least 8 characters long' },
        );
    }
    
    const { error: emailValidation } = joiSchemaEmail.validate(req.body.email);
    if (emailValidation) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    
    const { error: passwordValidation } = joiSchemaPassword.validate(req.body.password);
    if (passwordValidation) {
        return res.status(400).json(
        { message: '"password" length must be at least 6 characters long' },
      );
    } 
      next();
};

module.exports = {
  validateUser,
};