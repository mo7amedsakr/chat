import io from 'socket.io-client';
export const socket = io.connect('https://desolate-shelf-39948.herokuapp.com/');
// export const socket = io.connect('http://127.0.0.1:4000');

export const loggedIn = (user) => socket.emit('loggedIn', user);
