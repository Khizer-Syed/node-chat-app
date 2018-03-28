//console.log(__dirname + '/../public');

const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const {generateMessage} = require('./utils/message');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname,'..','public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');
  socket.emit('newMessage', generateMessage('admin','Welcome to the chat app'));

  socket.broadcast.emit('userJoined', generateMessage('admin','New User Joined'));

  socket.on('createMessage', (message, callback) => {
    console.log(message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server');
  });



  // socket.emit('newEmail', {
  //   from : 'mike@example.com',
  //   text : 'whats up',
  //   createdAt : 1335522
  // });
  // socket.emit('newMessage', {
  //   from: 'khizer44',
  //   text : 'wassup',
  //   createdAt : new Date().getTime()
  // });



  //   socket.broadcast.emit('newMessage', {
  //     from : message.from,
  //     text : message.text
  //   });

  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // });
  socket.on('disconnect', () => {
    console.log('Disconnected from the client');
  });

});
server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
