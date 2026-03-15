// app.js - Using CommonJS modules

// Import the entire module
const math = require('./math');

console.log('=== CommonJS Modules Demo ===\n');

// Use the imported functions
console.log('Using math.add and math.subtract:');
console.log('5 + 3 =', math.add(5, 3));
console.log('10 - 4 =', math.subtract(10, 4));

// You can also destructure the import
const { add, subtract } = require('./math');

console.log('\nUsing destructured imports:');
console.log('20 + 15 =', add(20, 15));
console.log('100 - 42 =', subtract(100, 42));
