import Enumeration from '../src/index';

describe('Enumeration class', function () {
  it('takes an Array and returns object with on key per element in the array', function () {
    const e = new Enumeration(["Ok", "Cancel", "Stop"]);
    expect(e).toBeDefined();
    console.log(Object.keys(e));
    expect(Object.keys(e)).toContain('STOP');
  })
  it('takes an Object and returns object with on key per element in the array', function () {
    const e = new Enumeration({
      OK: 1,
      Cancel: 500,
      Stop: 501
    });
    expect(e).toBeDefined();
    console.log(Object.keys(e));
    expect(Object.keys(e)).toContain('STOP');
  })
})
