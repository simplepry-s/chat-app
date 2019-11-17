import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import 'babel-polyfill';
import socketio from 'socket.io';
import { addUser, removeUser, getUser } from './socket/users';
import { authentication } from './middleware';
import router from './router';
import config from './config';

const app = express();
const base = '/api';
app.server = http.createServer(app);
const io = socketio(app.server);

app.use(bodyParser.json());
app.use(base, authentication, router());

io.on('connection', socket => {
  console.log('We have a new connection');

  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);

    socket.emit('message', {
      user: 'admin',
      text: `${user.name} welcome to the room ${user.room}`
    });

    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'admin', text: `${user.name} has join` });
    socket.join(user.room);

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', {
        user: 'admin',
        text: `${user.name} has left.`
      });
    }
  });
});
app.server.listen(config.port, () =>
  console.log(`START AT: ${app.server.address().port}`)
);

// kill process after ctrl + c
process.on('SIGINT', () => process.exit());
