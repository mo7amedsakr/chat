const User = require('../models/userModel');
const Room = require('../models/roomModel');
const Message = require('../models/messageModel');

module.exports = (io) => {
  io.on('connection', (socket) => {
    let curruntRoom;
    socket.on('loggedIn', async (user) => {
      await User.findOneAndUpdate(
        { username: user.username },
        { $set: { socketId: socket.id, online: true, lastSeen: null } }
      );
      const onlineUsers = await User.find({});

      io.emit('userloggedin', onlineUsers);
    });

    socket.on('room', async (data) => {
      let room = await Room.findOne({
        name: {
          $in: [
            `${data.curUser}-${data.chatWith}`,
            `${data.chatWith}-${data.curUser}`
          ]
        }
      }).populate({ path: 'messages' });

      if (room) {
        socket.emit('getAllMsgs', room.messages);
      }

      if (!room) {
        const curUserId = await User.findOne({
          username: data.curUser
        }).select('_id');
        const chatWithId = await User.findOne({
          username: data.chatWith
        }).select('_id');
        if (curUserId && chatWithId) {
          room = await Room.create({
            name: `${data.curUser}-${data.chatWith}`,
            users: [curUserId, chatWithId]
          });
        }
      }
      // if (curruntRoom) {
      socket.leave(curruntRoom);
      // }
      socket.join(room.name);
      curruntRoom = room.name;
    });
    socket.on('sendmsg', async (msg) => {
      const room = await Room.findOne({
        name: {
          $in: [`${msg.from}-${msg.to}`, `${msg.to}-${msg.from}`]
        }
      });

      if (room) {
        const createdMsg = await Message.create({
          room: room.name,
          user: msg.from,
          message: msg.message
        });
        io.in(room.name).emit('sendmsg', createdMsg);
      }
    });

    socket.on('typing', (data) => {
      socket.broadcast.emit('typing', data);
    });

    socket.on('disconnect', async () => {
      await User.findOneAndUpdate(
        { socketId: socket.id },
        { $set: { online: false, socketId: '', lastSeen: Date.now() } }
      );
      const onlineUsers = await User.find({});
      io.emit('userloggedout', onlineUsers);
    });
  });
};
