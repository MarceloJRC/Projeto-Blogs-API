const services = require('../services/user.service');

const registerUser = async (req, res) => {
    await services.createUser(req.body);
    const { token } = req;
    res.status(201).json({ token });
};

module.exports = {
  registerUser,
};