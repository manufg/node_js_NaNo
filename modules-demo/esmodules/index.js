// index.js - BARREL FILE
// Re-exports everything from individual modules
// This allows: import { add, subtract } from './index.js'

export { add, getAddCallCount } from './add.js';
export { subtract, getSubtractCallCount } from './subtract.js';

// Alternative: export everything at once
// export * from './add.js';
// export * from './subtract.js';
