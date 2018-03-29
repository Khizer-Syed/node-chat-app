const expect = require('expect');

const {isRealString} = require('./validation');

describe('Is real string validation', () => {
  it('should reject non string values', () => {
    var str = 134534566;
    var res = isRealString(str);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var str = '       ';
    var res = isRealString(str);
    expect(res).toBe(false);
  });

  it('should allow strings with spaces', () => {
    var str = 'Mongo DB is amazing';
    var res = isRealString(str);
    expect(res).toBe(true);
  });

});
