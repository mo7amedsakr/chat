const mongoose = require('mongoose');
const Room = require('./roomModel');

const messageSchema = new mongoose.Schema({
  room: {
    type: String,
    ref: 'Room'
  },
  user: {
    type: String,
    ref: 'User'
  },
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

messageSchema.index({ room: 1 });

messageSchema.post('save', async function() {
  await Room.findOneAndUpdate(
    { name: this.room },
    { $push: { messages: this._id } }
  );
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
