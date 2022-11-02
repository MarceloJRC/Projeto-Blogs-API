const { User } = require('../models');

const createUser = async ({ displayName, email, password, image = null }) => {
  const result = await User.create({ displayName, email, password, image });
  
  return result;
};

module.exports = { 
  createUser,
};