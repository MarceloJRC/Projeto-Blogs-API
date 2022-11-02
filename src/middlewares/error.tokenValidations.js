const jwt = require('jsonwebtoken');
const { login } = require('../services/login.service');

const validateToken = async (req, res, next) => {
    const user = await login(req.body);
    if (user) {
      res.status(409).json({ message: 'User already registered' });
    }
    const jwtConfig = { 
        expiresIn: '7d',
        algorithm: 'HS256',
    };

    const { email, displayName, image = null } = req.body;
    const token = jwt.sign({ 
        data: { 
          displayNameID: displayName.id,
          emailID: email.id,
          image } },
          process.env.JWT_SECRET, jwtConfig);
      req.token = token;
      next();
};

module.exports = {
  validateToken,
};