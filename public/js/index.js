var socket = io();
socket.on('connect', function() {
 console.log('connected to server');
 // socket.emit('createEmail',{
 //   to : 'khizer@gmail.com',
 //   text : 'How are you'
 // });

//  socket.emit('createMessage', {
//    from : 'depain',
//    text : 'Fine'
//  });
 });

socket.on('disconnect', function() {
console.log('Disconnected from Server');
});

// socket.on('newEmail', function(email) {
//   console.log('New Email', email);
// });

socket.on('newMessage', function(message) {
  console.log(message);
});
