import get from './get.mjs';
import set from './set.mjs';

export function pick (object, paths) {
  if (!Array.isArray(paths) || paths.some(path => path.length === 0)) {
    throw new TypeError('Invalid arguments');
  }
  return paths.reduce((obj, path) => set(obj, path, get(object, path)), {});
}

export default pick;
