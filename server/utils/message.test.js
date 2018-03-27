const expect = require('expect');
var {generateMessage} = require('./message');
describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var result = generateMessage('admin','Welcome');
    expect(result.from).toBe('admin');
    expect(result.text).toBe('Welcome');
    expect(result.createdAt).toBeA('number');
  });
});
