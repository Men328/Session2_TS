"use strict";
function isPalindrome(s) {
    const cleanedString = s
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');
    const length = cleanedString.length;
    for (let i = 0; i < length / 2; i++) {
        if (cleanedString[i] !== cleanedString[length - 1 - i]) {
            return false;
        }
    }
    return true;
}
const example1 = "racecar";
console.log(isPalindrome(example1));
const example2 = "raceacar";
console.log(isPalindrome(example2));
