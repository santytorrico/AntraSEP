// Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function reverseString(word){
    let reversedword = "" 
    for(let i = word.length - 1; i>=0; i--){
        reversedword += word[i];
    }
    return reversedword;
}
function isPalindrome(word){
    let palindrome = false;
    reverse = reverseString(word)
    if(word === reverse){
        palindrome = true
    }
    return palindrome
}
let word = "madam"
console.log(reverseString(word));
console.log(isPalindrome(word));