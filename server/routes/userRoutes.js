const express = require('express');
const { getUser, getMe, getUsers } = require('../controllers/userController');
const {
  protect,
  signup,
  login,
  logout
} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

router.use(protect);
router.get('/', getUsers);
router.get('/me', getMe, getUser);

module.exports = router;
