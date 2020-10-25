// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string,
// without their order changing.

// isSubsequence("hello", "hello world"); // true
// isSubsequence("sing", "sting"); // true
// isSubsequence("abc", "acb"); // false (order matters)

// time O(m + n)
function isSubsequence(string1, string2) {
  if (!string1) return false;

  let i = 0;
  for (let j = 0; j < string2.length; j++) {
    if (i == string1.length - 1) {
      return true;
    }

    if (string1[i] === string2[j]) {
      i++;
    }
  }

  return false;
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "acb"); // false (order matters)
