//var users = [];
// var addUser = (id,name,room) => {
//   users.push({});
// };


class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id) {
  var user = this.getUser(id);
   var newUsers = this.users.filter((user) => user.id !== id);
   if(newUsers.length < this.users.length) {
     this.users = newUsers;
   }
   return user;
  }

  getUser (id) {
   var userFound = this.users.filter((user) => user.id === id);
   if (userFound.length > 0) {
     return userFound[0];
   }
  }

  getUserList (room) {
   var users = this.users.filter((user) => user.room === room);
   var namesArray = users.map((user) => user.name);
   return namesArray;
  }
}

module.exports = {Users};
