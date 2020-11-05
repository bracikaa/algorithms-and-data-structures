// Write a function called findLongestSubstring,
// which accepts a string and returns the length of the longest substring with all distinct characters.

// O(n)
function findLongestSubstring(string) {
  debugger;
  let length = 0;
  let seen = {};
  let i = 0;

  for (let j = 0; j < string.length; j++) {
    let char = string[j];
    if (seen[char]) {
      i = Math.max(i, seen[char]);
    }
    length = Math.max(length, j - i + 1);
    seen[char] = j + 1;
  }

  return length;
}

// findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
