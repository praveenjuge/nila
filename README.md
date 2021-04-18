# Nila

UI Elements for React with TailwindCSS

[![NPM](https://img.shields.io/npm/v/nila.svg)](https://www.npmjs.com/package/nila) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install nila --save
```

For proper purge and jit support for tailwind, add this in your `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  purge: [
    // ...
    './node_modules/nila/src/*.tsx',
  ],
};
```

## Usage

```jsx
import { Button } from 'nila';

function App() {
  return (
    <Button>Button</Button>;
  )
}
```

## License

MIT © [Praveen Juge](https://github.com/praveenjuge)
