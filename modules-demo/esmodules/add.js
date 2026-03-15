// add.js - ES Module for addition

// ===== PRIVATE DATA (not exported, cannot be accessed outside) =====
let callCount = 0;                    // Private variable - tracks how many times add() is called
const SECRET_KEY = 'my-secret-123';   // Private constant - completely hidden

function logOperation(a, b, result) { // Private helper function - internal use only
    console.log(`  [internal log] ${a} + ${b} = ${result}`);
}

// ===== PUBLIC API (exported, accessible from outside) =====
export function add(a, b) {
    callCount++;                      // Modifies private state
    const result = a + b;
    logOperation(a, b, result);       // Uses private function
    return result;
}

export function getAddCallCount() {   // Exposes private data safely (read-only)
    return callCount;
}

// Example of what stays HIDDEN:
// - callCount (direct access)
// - SECRET_KEY
// - logOperation()
