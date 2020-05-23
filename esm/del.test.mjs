import { del } from './del.mjs';

describe('del', function() {
  it('deletes value as expected when path is array', function() {
    const object = {
      a: [{ a: 'AAA' }, { a: 'ABA', b: 'ABB' }],
      b: { a: { a: 'BAA' } },
    };
    const actual = del(object, ['a', 1, 'a']);
    expect(actual).not.toBe(object);
    expect(actual.a).not.toBe(object.a);
    expect(actual.a).toBeInstanceOf(Array);
    expect(actual.a[0]).toBe(object.a[0]);
    expect(actual.a[0].a).toBe(object.a[0].a);
    expect(actual.a[1]).not.toBe(object.a[1]);
    expect(actual.a[1].a).not.toEqual(object.a[1].a);
    expect(actual.a[1].a).toBeUndefined();
    expect(actual.b).toBe(object.b);
    expect(actual.b.a).toBe(object.b.a);
    expect(actual.b.a.a).toBe(object.b.a.a);
  });
  it('deletes value as expected when path is string', function() {
    const object = {
      a: [{ a: 'AAA' }, { a: 'ABA', b: 'ABB' }],
      b: { a: { a: 'BAA' } },
    };
    const actual = del(object, 'a.1.a');
    expect(actual).not.toBe(object);
    expect(actual.a).not.toBe(object.a);
    expect(actual.a).toBeInstanceOf(Array);
    expect(actual.a[0]).toBe(object.a[0]);
    expect(actual.a[0].a).toBe(object.a[0].a);
    expect(actual.a[1]).not.toBe(object.a[1]);
    expect(actual.a[1].a).not.toEqual(object.a[1].a);
    expect(actual.a[1].a).toBeUndefined();
    expect(actual.b).toBe(object.b);
    expect(actual.b.a).toBe(object.b.a);
    expect(actual.b.a.a).toBe(object.b.a.a);
  });
  it('does not change object when path does not exist', function() {
    const object = {
      a: { a: { a: 'AAA' } },
      b: { a: { a: 'BAA' } },
    };
    expect(del(object, ['b', 'b', 'a'])).toBe(object);
    expect(del(object, ['b', 'a', 'b'])).toBe(object);
  });
  it('throws expected error when path is not given', function() {
    expect(() => del({})).toThrow(new TypeError('Invalid arguments'));
  });
  it('throws expected error when path is not array nor string', function() {
    expect(() => del({}, {})).toThrow(new TypeError('Invalid arguments'));
  });
  it('throws expected error when path is empty array', function() {
    expect(() => del({}, [])).toThrow(new TypeError('Invalid arguments'));
  });
  it('throws expected error when path is empty string', function() {
    expect(() => del({}, '')).toThrow(new TypeError('Invalid arguments'));
  });
});
