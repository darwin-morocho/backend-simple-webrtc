const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();

const server = http.Server(app);

const io = socketio(server);

let users = [];

//socket io logic
io.on('connection', socket => {
  socket.io('join', username => {
    let user = users.find(item => item === username);
    if (user) {
      io.to(socket.id).emit('on-join', false);
    } else {
      socket.join(username); // assign the username to the current socket
      socket.handshake.query.username = username;
      io.to(socket.id).emit('on-join', true);
    }
  });

  socket;

  socket.io('call', ({ username, offer }) => {
    let user = users.find(item => item === username);
    if (user) {
      io.to(username).emit('on-call', { username, offer });
    }
  });

  socket.io('answer', ({ username, answer }) => {
    let user = users.find(item => item === username);
    if (user) {
      io.to(username).emit('on-answer', { username, answer });
    }
  });

  socket.io('candidate', ({ username, candidate }) => {
    let user = users.find(item => item === username);
    if (user) {
      io.to(username).emit('on-candidate', { username, candidate });
    }
  });

  socket.on('disconnect', () => {
    const { username } = socket.handshake.query;
    if (username) {
      const index = users.findIndex(item => item === username);
      if (index !== -1) {
        users = users.splice(index, 1); // remove the user from connected users
      }
    }
  });
});

server.listen(5000, () => {
  console.log('running');
});
