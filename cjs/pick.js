const get = require('./get');
const set = require('./set');

function pick (object, paths) {
  if (!Array.isArray(paths) || paths.some(path => path.length === 0)) {
    throw new TypeError('Invalid arguments');
  }
  return paths.reduce((obj, path) => set(obj, path, get(object, path)), {});
}

module.exports = pick;
