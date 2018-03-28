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
  var li = jQuery('<li></li>');
  li.text(`${message.from} : ${message.text}`);
  jQuery('#messages').append(li);
});

socket.on('userJoined', function(message) {
  console.log(message);
});

// socket.emit('createMessage', {
//   from : 'Frank',
//   text : 'Wanna party?'
// }, function(data) {
//   console.log(data);
// });

jQuery('#message-form').on('submit', function(e) {
  e.preventDefault();
  socket.emit('createMessage', {
    from : 'User',
    text : jQuery('[name=message]').val()
  }, function() {

  });
});
