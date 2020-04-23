import io from 'socket.io-client';

export const socket = io.connect(
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:4000'
    : 'https://pacific-everglades-97653.herokuapp.com'
);

export const loggedIn = (user) => socket.emit('loggedIn', user);
