const { User } = require('../models');

const login = async ({ email, password }) => {
  const getUser = await User.findOne({ where: { email, password } });

  return getUser;
};

module.exports = { 
  login,
};