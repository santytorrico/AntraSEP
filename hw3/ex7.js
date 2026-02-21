// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
function numberOfVowels(sent){
    let arr = sent.toLowerCase().split("");
    const vowels = arr.filter(vowel =>
        "aeiou".includes(vowel)
    )
    return vowels.length;
}
sent = "The quick brown fox"
console.log(numberOfVowels(sent))