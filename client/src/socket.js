import io from 'socket.io-client';

export const socket = io.connect(
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:4000'
    : 'https://chat-js-io.herokuapp.com'
);
