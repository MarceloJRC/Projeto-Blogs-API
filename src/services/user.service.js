const { User } = require('../models');

const createUser = async ({ displayName, email, password, image = null }) => {
  const result = await User.create({ displayName, email, password, image });
  
  return result;
};

const getUsers = async () => {
  const users = await User.findAll({ 
    attributes: [
    'id',
    'displayName',
    'email',
    'image',
  ],
 });

  return users;
};

const getUserById = async (id) => {
  // // const user = await User.findByPk(id); (assistir video Mariotto: ORM 1:1)(verificar pq não está funcionando)
  const userById = User.findOne({
    where: { id },
    attributes: [
    'id',
    'displayName',
    'email',
    'image',
    ],
  });

  return userById;
};

module.exports = { 
  createUser,
  getUsers,
  getUserById,
};