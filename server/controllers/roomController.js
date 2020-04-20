const Room = require('../models/roomModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getRoom = catchAsync(async (req, res, next) => {
  const { withUser } = req.params;
  const room = await Room.findOne({
    name: {
      $in: [
        `${req.user.username}-${withUser}`,
        `${withUser}-${req.user.username}`
      ]
    }
  }).populate({ path: 'messages' });

  if (!room) {
    return next(new AppError('No chat with that user', 404));
  }

  res.status(200).json({ status: 'success', data: room });
});
