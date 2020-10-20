// Given two strings, write a function called validAnagram to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
//validAnagram('', ''); // true
//validAnagram('aaz', 'zza'); // false
//validAnagram('anagram', 'nagaram'); // true

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let freqCount = {};
  for (let val of string1) {
    freqCount[val] = (freqCount[val] || 0) + 1;
  }

  for (let key in freqCount) {
    if (!string2[key]) {
      return false;
    }
    freqCount[key]--;
  }

  return true;
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
