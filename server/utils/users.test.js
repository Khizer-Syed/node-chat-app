const expect = require('expect');

const {Users} = require('./users');


describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id : '1',
      name : 'Khizer',
      room : 'Node Course'
    }, {
      id : '2',
      name : 'Depain',
      room : 'React Course'
    }, {
      id : '3',
      name : 'Mazhar',
      room : 'Node Course'
    }];
  });
  it('should add new User', () => {
    var users = new Users();
    var user = {
      id : '123',
      name : 'Khizer',
      room : 'The office room'
    };
    var resUsers = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for Node Course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Khizer', 'Mazhar']);
  });

  it('should return names for React Course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Depain']);
  });

  it('should remove a user', () => {
var userId = '1';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users).toNotInclude({
      id : '1',
      name : 'Khizer',
      room : 'Node Course'
    })
  });

  it('should not remove a user', () => {
    var user = users.removeUser(4);
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var user = users.getUser('1');
    expect(user).toExist();
    expect(user).toInclude({
      id : '1',
      name : 'Khizer',
      room : 'Node Course'
    });
  });

  it('should not find a user', () => {
    var user = users.getUser(4);
    expect(user).toNotExist();
  });
});
