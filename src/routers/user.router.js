const express = require('express');
const { validateUser } = require('../middlewares/error.userValidations');
const { validateToken } = require('../middlewares/error.tokenValidations');
const { registerUser } = require('../controllers/user.controller');

const router = express.Router();

router.post('/', validateUser,
 validateToken, registerUser);

module.exports = router;