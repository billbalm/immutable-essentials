export const clone = object => Array.isArray(object) ? [...object] : { ...object };

export default clone;
