const services = require('../services/post.service');

const getPosts = async (_req, res) => {
      const result = await services.getPosts();
      res.status(200).json(result);
  };

  module.exports = {
    getPosts,
  };