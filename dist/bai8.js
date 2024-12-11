"use strict";
function isValid(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (const char of s) {
        if (char in mapping) {
            const topElement = stack.pop();
            if (topElement !== mapping[char]) {
                return false;
            }
        }
        else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
