// Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longestSubstring(str) {
  let longest = '';
  let current = '';
  for (let char of str) {
    if (current.includes(char)) {
      current = current.slice(current.indexOf(char) + 1);
    }
    current += char;
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest;
}

console.log(longestSubstring('abcabcbb')); 