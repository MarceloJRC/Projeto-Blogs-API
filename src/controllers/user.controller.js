const services = require('../services/user.service');

const registerUser = async (req, res) => {
  try {
    await services.createUser(req.body);
    const { token } = req;
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUsers = async (_req, res) => {
  try {
    const users = await services.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await services.getUserById(id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

      return res.status(200).json(user);
  } catch (e) {
      return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  registerUser,
  getUsers,
  getUserById,
};