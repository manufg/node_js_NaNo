// app.js - Using ES Modules

console.log('=== ES Modules Demo ===\n');

// Method 1: Import from individual files
import { add } from './add.js';
import { subtract } from './subtract.js';

console.log('Direct imports from individual files:');
console.log('5 + 3 =', add(5, 3));
console.log('10 - 4 =', subtract(10, 4));

// Method 2: Import from barrel file (index.js)
// This is cleaner - one import for multiple functions!
import { add as addFromBarrel, subtract as subtractFromBarrel } from './index.js';

console.log('\nImports from barrel file (index.js):');
console.log('20 + 15 =', addFromBarrel(20, 15));
console.log('100 - 42 =', subtractFromBarrel(100, 42));

// Method 3: Import all as namespace
import * as math from './index.js';

console.log('\nNamespace import (import * as math):');
console.log('8 + 2 =', math.add(8, 2));
console.log('50 - 25 =', math.subtract(50, 25));
