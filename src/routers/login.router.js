const express = require('express');
const controllers = require('../controllers/login.controller');
const { validateLogin } = require('../middlewares/error.loginValidations');

const router = express.Router();

router.post('/', validateLogin, controllers.login);

module.exports = router;