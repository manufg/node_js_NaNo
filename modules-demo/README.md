# Node.js Modules Demo

This folder contains examples of both CommonJS and ES Modules.

## Running the Examples

### CommonJS (Traditional Node.js)
```bash
cd commonjs
node app.js
```

### ES Modules (Modern JavaScript)
```bash
cd esmodules
node app.mjs
```

## Quick Reference

### CommonJS
```javascript
// Exporting
module.exports = { myFunction };
exports.myFunction = myFunction;

// Importing
const { myFunction } = require('./module');
const module = require('./module');
```

### ES Modules
```javascript
// Exporting
export const myFunction = () => {};
export default myFunction;

// Importing
import { myFunction } from './module.mjs';
import myDefault from './module.mjs';
import * as all from './module.mjs';
```

## Key Points

1. **CommonJS** uses `.js` extension and `require()`/`module.exports`
2. **ES Modules** use `.mjs` extension (or `.js` with `"type": "module"` in package.json)
3. ES Modules support **top-level await**
4. ES Modules are **statically analyzed** (imports hoisted to top)
5. CommonJS loads **synchronously**, ESM loads **asynchronously**
