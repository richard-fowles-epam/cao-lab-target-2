# cao-lab-target-2

A tiny Node.js module with no external dependencies. It exports `formatNames(names)`, which turns an array of names into a single string.

## Behaviour

- A non-empty array is joined with `, `. For example, `formatNames(['Ada', 'Grace'])` returns `'Ada, Grace'`.
- An empty array returns `'No names provided'`.

## Usage

```js
const { formatNames } = require('./index.js');

formatNames(['Ada', 'Grace', 'Linus']); // 'Ada, Grace, Linus'
formatNames([]);                        // 'No names provided'
```

## Testing

Requires Node.js 18 or later.

```sh
npm test
```