const User = require('../models/userModel');
const Room = require('../models/roomModel');
const Message = require('../models/messageModel');

module.exports = (io) => {
  const usersChanged = async () => {
    const users = await User.find();
    io.emit('usersChanged', users);
  };

  io.on('connection', (socket) => {
    let currentRoomName;
    socket.on('loggedIn', async (user) => {
      await User.findByIdAndUpdate(user._id, {
        $set: { socketId: socket.id, online: true, lastSeen: null }
      });
      await usersChanged();
    });

    socket.on('joinRoom', async ({ curUser, chatWith }) => {
      if (currentRoomName) {
        socket.leave(currentRoomName);
      }
      let room = await Room.findOne({
        name: { $in: [`${curUser}-${chatWith}`, `${chatWith}-${curUser}`] }
      }).populate({ path: 'messages' });

      if (!room) {
        const curUserId = await User.findOne({ username: curUser }).select(
          '_id'
        );
        const chatWithId = await User.findOne({ username: chatWith }).select(
          '_id'
        );

        if (curUserId && chatWithId) {
          room = await Room.create({
            name: `${curUser}-${chatWith}`,
            users: [curUserId, chatWithId],
            messages: []
          });
        }
      }

      socket.emit('allMsgs', room.messages);
      socket.join(room.name);
      currentRoomName = room.name;
    });

    socket.on('sendMsg', async ({ message, from, to }) => {
      const room = await Room.findOne({
        name: {
          $in: [`${from}-${to}`, `${to}-${from}`]
        }
      });
      if (room) {
        const createdMsg = await Message.create({
          room: room.name,
          user: from,
          message: message
        });
        io.in(room.name).emit('sendMsg', createdMsg);
      }
    });

    socket.on('disconnect', async () => {
      await User.findOneAndUpdate(
        { socketId: socket.id },
        { $set: { online: false, socketId: '', lastSeen: Date.now() } }
      );
      await usersChanged();
    });
  });
};
