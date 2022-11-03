const services = require('../services/category.service');

const addCategory = async (req, res) => {
  try {
    const newCategory = await services.createCategory(req.body);
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getCategories = async (_req, res) => {
  try {
    const categories = await services.getCategories();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addCategory,
  getCategories,
};