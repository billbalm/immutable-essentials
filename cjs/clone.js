function clone(object) {
  return Array.isArray(object) ? [...object] : { ...object };
}

module.exports = clone;
