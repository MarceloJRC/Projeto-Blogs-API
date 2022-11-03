const express = require('express');
const { validateUser } = require('../middlewares/error.userValidations');
const { validateToken, getToken } = require('../middlewares/error.tokenValidations');
const { registerUser, getUsers, getUserById } = require('../controllers/user.controller');

const router = express.Router();

router.post('/', validateUser,
 validateToken, registerUser);

router.use(getToken);

router.get('/', getUsers);

router.get('/:id', getUserById);

module.exports = router;