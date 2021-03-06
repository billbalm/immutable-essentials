import { get } from './get.mjs';

describe('get', function() {
  it('gets value as expected when path is array', function() {
    const object = {
      a: { a: { a: 'AAA' }, b: { a: 'ABA', b: 'ABB' } },
      b: { a: { a: 'BAA' } },
    };
    expect(get(object, ['a', 'b'])).toBe(object.a.b);
    expect(get(object, ['a', 'b', 'a'])).toBe('ABA');
  });
  it('gets value as expected when path is string', function() {
    const object = {
      a: { a: { a: 'AAA' }, b: { a: 'ABA', b: 'ABB' } },
      b: { a: { a: 'BAA' } },
    };
    expect(get(object, 'a.b')).toBe(object.a.b);
    expect(get(object, 'a.b.a')).toBe('ABA');
  });
  it('gets undefined when path does not exist', function() {
    const object = {
      a: { a: { a: 'AAA' } },
      b: { a: { a: 'BAA' } },
    };
    expect(get(object, ['a', 'c'])).toBeUndefined();
  });
  it('gets default value when path does not exist', function() {
    const object = {
      a: { a: { a: 'AAA' } },
      b: { a: { a: 'BAA' } },
      c: {},
    };
    expect(get(object, ['a', 'c'], 'AC')).toBe('AC');
    expect(get(object, ['c', 'a', 'a'], 'CAA')).toBe('CAA');
  });
  it('gets default value when prop at path is set to undefined', function() {
    const object = {
      a: { a: { a: 'AAA', b: undefined } },
      b: { a: { a: 'BAA' } },
    };
    expect(get(object, ['a', 'a', 'b'], 'AAB')).toBe('AAB');
  });
  it('gets object itself when path is empty array', function() {
    const object = {
      a: { a: { a: 'AAA' } },
      b: { a: { a: 'BAA' } },
    };
    expect(get(object, [])).toBe(object);
  });
  it('gets object itself when path is empty string', function() {
    const object = {
      a: { a: { a: 'AAA' } },
      b: { a: { a: 'BAA' } },
    };
    expect(get(object, '')).toBe(object);
  });
  it('throws expected error when path is not given', function() {
    expect(() => get({})).toThrow(new TypeError('Invalid arguments'));
  });
  it('throws expected error when path is not array or string', function() {
    expect(() => get({}, {})).toThrow(new TypeError('Invalid arguments'));
  });
});
