import lib, { clone, del, get, pick, set } from './index.mjs';

describe('index', function() {
  it('exports clone as expected', function() {
    expect(clone).toBeDefined();
    expect(lib.clone).toBe(clone);
  });
  it('exports del as expected', function() {
    expect(del).toBeDefined();
    expect(lib.del).toBe(del);
  });
  it('exports get as expected', function() {
    expect(get).toBeDefined();
    expect(lib.get).toBe(get);
  });
  it('exports pick as expected', function() {
    expect(pick).toBeDefined();
    expect(lib.pick).toBe(pick);
  });
  it('exports set as expected', function() {
    expect(set).toBeDefined();
    expect(lib.set).toBe(set);
  });
});
