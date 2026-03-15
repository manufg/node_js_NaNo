// app.js - Demonstrating Module Encapsulation

import { add, getAddCallCount } from './add.js';
import { subtract, getSubtractCallCount } from './subtract.js';

console.log('=== Module Encapsulation Demo ===\n');

// ========================================
// 1. Using Exported Functions (PUBLIC API)
// ========================================
console.log('--- Calling exported functions ---');
console.log('Result: 5 + 3 =', add(5, 3));
console.log('Result: 10 + 20 =', add(10, 20));
console.log('Result: 100 - 40 =', subtract(100, 40));

// ========================================
// 2. Accessing Private Data via Public Getters
// ========================================
console.log('\n--- Accessing private state safely via getters ---');
console.log('add() was called', getAddCallCount(), 'times');
console.log('subtract() was called', getSubtractCallCount(), 'time');

// ========================================
// 3. TRYING to Access Private Data (FAILS!)
// ========================================
console.log('\n--- Attempting to access private data ---');

// These would cause errors if uncommented:
// console.log(callCount);      // ReferenceError: callCount is not defined
// console.log(SECRET_KEY);     // ReferenceError: SECRET_KEY is not defined
// logOperation(1, 2, 3);       // ReferenceError: logOperation is not defined

console.log('❌ callCount - NOT accessible (private variable)');
console.log('❌ SECRET_KEY - NOT accessible (private constant)');
console.log('❌ logOperation() - NOT accessible (private function)');

// ========================================
// 4. What IS Accessible?
// ========================================
console.log('\n--- What can we import from add.js? ---');
import * as addModule from './add.js';
console.log('Exported items:', Object.keys(addModule));
// Only shows: ['add', 'getAddCallCount'] - the private stuff is HIDDEN!

console.log('\n=== KEY TAKEAWAY ===');
console.log('Modules protect data by only exposing what you explicitly export.');
console.log('Private variables, constants, and helper functions stay encapsulated.');
