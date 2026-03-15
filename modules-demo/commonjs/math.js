// math.js - A CommonJS module

// Method 1: Define functions and export them
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Export functions using module.exports
module.exports = {
    add: add,
    subtract: subtract
};

// Alternative shorthand (ES6):
// module.exports = { add, subtract };
