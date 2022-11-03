const express = require('express');
const { getPosts } = require('../controllers/post.controller');
const { getToken } = require('../middlewares/error.tokenValidations');

const router = express.Router();
router.use(getToken);

router.get('/', getPosts);

module.exports = router;