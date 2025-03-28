console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("robot"));   // false
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("a"));       // true (single character is always a palindrome)

function isPalindrome(str) {
  // Reverse the string and compare it with the original
  return str === str.split("").reverse().join("");
}

// Test cases
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("robot"));   // false
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("a"));       // true

// Export for testing if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = isPalindrome;
}
