const services = require('../services/category.service');

const addCategory = async (req, res) => {
    const newCategory = await services.createCategory(req.body);
    res.status(201).json(newCategory);
};

const getCategories = async (_req, res) => {
    const categories = await services.getCategories();
    res.status(200).json(categories);
};

module.exports = {
  addCategory,
  getCategories,
};