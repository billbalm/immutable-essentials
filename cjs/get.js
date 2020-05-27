function get(object, path, defaultValue) {
  if (typeof path === 'string') {
    path = path ? path.split('.') : [];
  }
  if (!Array.isArray(path)) {
    throw new TypeError('Invalid arguments');
  }
  let obj = object;
  for (let i = 0; i < path.length; i++) {
    if ([null, undefined].includes(obj)) {
      return defaultValue;
    }
    obj = obj[path[i]];
  }
  return obj === undefined ? defaultValue : obj;
}

module.exports = get;
