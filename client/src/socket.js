import io from 'socket.io-client';

export const socket = io.connect(
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:4000'
    : 'https://p-to-p-chat.herokuapp.com'
);

export const loggedIn = (user) => socket.emit('loggedIn', user);
