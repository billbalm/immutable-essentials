import { pick } from './pick.mjs';

describe('pick', function() {
  it('picks object as expected when paths are array', function() {
    const object = {
      a: { a: { a: 'AAA' }, b: { a: 'ABA', b: 'ABB' } },
      b: { a: { a: 'BAA' } },
    };
    const actual = pick(object, [['a'], ['b', 'a']]);
    expect(actual).not.toBe(object);
    expect(actual.a).toBe(object.a);
    expect(actual.b).not.toBe(object.b);
    expect(actual.b.a).toBe(object.b.a);
  });
  it('picks object as expected when paths are string', function() {
    const object = {
      a: { a: { a: 'AAA' }, b: { a: 'ABA', b: 'ABB' } },
      b: { a: { a: 'BAA' } },
    };
    const actual = pick(object, ['a', 'b.a']);
    expect(actual).not.toBe(object);
    expect(actual.a).toBe(object.a);
    expect(actual.b).not.toBe(object.b);
    expect(actual.b.a).toBe(object.b.a);
  });
  it('picks object as expected when some paths are array while others are string', function() {
    const object = {
      a: { a: { a: 'AAA' }, b: { a: 'ABA', b: 'ABB' } },
      b: { a: { a: 'BAA' } },
    };
    const actual = pick(object, ['a', ['b', 'a']]);
    expect(actual).not.toBe(object);
    expect(actual.a).toBe(object.a);
    expect(actual.b).not.toBe(object.b);
    expect(actual.b.a).toBe(object.b.a);
  });
  it('gets empty object when paths array is empty', function() {
    const object = {
      a: { a: { a: 'AAA' } },
      b: { a: { a: 'BAA' } },
    };
    const actual = pick(object, []);
    expect(Object.keys(actual)).toHaveLength(0);
  });
  it('throws expected error when paths array is not given', function() {
    expect(() => pick({})).toThrow(new TypeError('Invalid arguments'));
  });
  it('throws expected error when paths array contains empty array', function() {
    expect(() => pick({}, ['a', [], 'b'])).toThrow(new TypeError('Invalid arguments'));
  });
  it('throws expected error when paths array contains empty string', function() {
    expect(() => pick({}, ['a', '', 'b'])).toThrow(new TypeError('Invalid arguments'));
  });
});
