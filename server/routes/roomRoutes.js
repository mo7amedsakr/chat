const express = require('express');

const { protect } = require('../controllers/authController');
const { getRoom } = require('../controllers/roomController');

const router = express.Router();

router.use(protect);
router.get('/:withUser', getRoom);

module.exports = router;
