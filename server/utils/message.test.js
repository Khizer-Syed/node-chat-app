const expect = require('expect');
var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');
describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var result = generateMessage('admin','Welcome');
    expect(result.from).toBe('admin');
    expect(result.text).toBe('Welcome');
    expect(result.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate location message', () => {
    var lat =12.23456;
    var long=-71.235647;
    var message = generateLocationMessage('khizer',lat, long);
    expect(message.from).toBe('khizer');
    expect(message.url).toBe(`https://www.google.com/maps?q=${lat},${long}`);
    expect(message.createdAt).toBeA('number');
  });
});
