const services = require('../services/post.service');

const getPosts = async (_req, res) => {
  try {
      const result = await services.getPosts();
      return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  };

  module.exports = {
    getPosts,
  };