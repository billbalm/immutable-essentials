[![npm][npm]][npm-url]
[![node][node]][node-url]
[![license][license]][license-url]

# immutable-essentials

Essential helper functions for managing immutable state. This is especially
useful to write reducers for [Redux] or [useReducer] React Hook.

What's available:
- `clone`: creates a shallow clone of an object
- `del`: deletes a property from a object at a given path
- `get`: gets a property value from a object at a given path
- `pick`: creates a new object with selected properties from an object
- `set`: sets a property value at a given path

## Example

A simple reducer that is compatible with [Redux] and [useReducer] React Hook.

```js
import { del, set } from 'immutable-essentials';

export function values(state = {}, action) {
  switch (action && action.type) {
  case 'DEL VALUE': {
    const { payload: { path } } = action;
    return del(state, path);
  }
  case 'SET VALUE': {
    const { payload: { merge, path, value } } = action;
    return set(state, path, value, merge);
  }
  default:
    return state;
  }
}

export default values;
```

## Maintainer

| [![billbalm-avatar]][billbalm] |
|:------------------------------:|
| [Bill Balmant]                 |

<!-- References -->
[Redux]: https://redux.js.org
[useReducer]: https://reactjs.org/docs/hooks-reference.html#usereducer
[npm]: https://img.shields.io/npm/v/immutable-essentials.svg
[npm-url]: https://npmjs.com/package/immutable-essentials
[node]: https://img.shields.io/node/v/immutable-essentials.svg
[node-url]: https://nodejs.org
[license]: https://img.shields.io/npm/l/immutable-essentials.svg
[license-url]: https://github.com/billbalm/immutable-essentials/raw/master/LICENSE.md
[billbalm]: https://github.com/billbalm
[Bill Balmant]: https://github.com/billbalm
[billbalm-avatar]: https://avatars3.githubusercontent.com/u/60496754?s=200&v=4
