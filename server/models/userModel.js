const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const isEmail = require('../utils/isEmail');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'A user must have a username'],
  },

  email: {
    type: String,
    required: [true, 'A user must have an e-mail'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please provide a valid email'],
  },

  photo: {
    type: String,
    default: 'default.jpg',
  },

  password: {
    type: String,
    required: [true, 'A user must have a password'],
    minlength: 8,
    select: false,
  },

  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same',
    },
  },

  online: {
    type: Boolean,
    default: true,
  },
  socketId: String,
  lastSeen: {
    type: Date,
  },
});

userSchema.index({ username: 1 });
userSchema.index({ socketId: 1 });
userSchema.index({ online: 1 });

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
  }
  if (this.isModified('username')) {
    this.username = this.username.replace(/\s+/g, '');
  }
  next();
});

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
