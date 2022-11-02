const express = require('express');
const { login } = require('../controllers/login.controller');
const { validateLogin } = require('../middlewares/error.loginValidations');

const router = express.Router();

router.post('/', validateLogin, login);

module.exports = router;