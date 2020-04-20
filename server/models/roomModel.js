const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    unique: true
  },
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],

  messages: [{ type: mongoose.Schema.ObjectId, ref: 'Message' }],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

roomSchema.index({ name: 1 });

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
