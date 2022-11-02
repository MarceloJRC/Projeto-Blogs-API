const services = require('../services/user.service');

const registerUser = async (req, res) => {
    await services.createUser(req.body);
    const { token } = req;
    res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
    const users = await services.getUsers();
    res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const userById = await services.getUserById(id);
    if (!userById) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(userById);
};

module.exports = {
  registerUser,
  getUsers,
  getUserById,
};