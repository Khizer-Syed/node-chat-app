//console.log(__dirname + '/../public');

const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');


const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname,'..','public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');
  socket.emit('newMessage', {
    from : 'admin',
    text : 'Welcome to the chat app'
  });

  socket.broadcast.emit('userJoined', {
    from : 'admin',
    text : 'New User Joined',
    createdAt : new Date().getTime()
  });

  socket.on('createMessage', (message) => {
    console.log(message);
    io.emit('newMessage', {
      from : message.from,
      text : message.text,
      createdAt : new Date().getTime()
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
  // });
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
