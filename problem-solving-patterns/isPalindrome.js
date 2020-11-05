// Write a recursive function called isPalindrome which returns true if
// the string passed to it is a palindrome (reads the same forward and backward).
//Otherwise it returns false.

const isPalindrome = (string) => {
  if (string.length === 1) {
    return true;
  }
  if (string.length === 2) {
    return string[0] === string[1];
  }

  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1, string.length - 1));
  }

  return false;
};

isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false
