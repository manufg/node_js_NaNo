// subtract.js - ES Module for subtraction

// ===== PRIVATE DATA =====
let callCount = 0;  // Each module has its OWN private callCount!

// ===== PUBLIC API =====
export function subtract(a, b) {
    callCount++;
    return a - b;
}

export function getSubtractCallCount() {
    return callCount;
}
