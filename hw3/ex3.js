// Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 
function split(word) {
  return [...word];
}

function combine(word) {
  let arr = split(word);
  let combinations = [];

  for (let i = 0; i < arr.length; i++) {
    let current = '';
    for (let j = i; j < arr.length; j++) {
      current += arr[j];
      combinations.push(current);
    }
  }
  return combinations.join(', ');
}

word = "dog"
console.log(combine(word))