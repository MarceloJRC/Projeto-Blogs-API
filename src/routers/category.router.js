const express = require('express');
const { addCategory, getCategories } = require('../controllers/category.controller');
const { validateCategory } = require('../middlewares/error.categoryValidation');
const { getToken } = require('../middlewares/error.tokenValidations');

const router = (express.Router());

router.use(getToken);

router.post('/', validateCategory, addCategory);

router.get('/', getCategories);

module.exports = router;