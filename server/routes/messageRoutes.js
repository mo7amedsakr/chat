const express = require('express');

const { protect } = require('../controllers/authController');

const router = express.Router();

router.use(protect);
router.post('');
module.exports = router;
