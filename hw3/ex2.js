// Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function reverseString(word){
    let reversedword = "" 
    for(let i = word.length; i>=0; i--){
        reversedword += word[i];
    }
    return reversedword;
}
function isPalindrome(word){
    palindrome = false;
    reverse = reverseString(word)
    if(word === reverse){
        palindrome = true
    }
    return palindrome
}
let word = "Alo"
console.log(isPalindrome(word))