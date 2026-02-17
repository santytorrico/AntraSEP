// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function capitalize(sent){
    capitalized = sent[0].toUpperCase();
    for(let i=1; i<sent.length; i++){
        capitalized += sent[i];
        if(sent[i]==" "){
            capitalized += sent[i+1].toUpperCase();
            i++;
        }
    }
    return capitalized;
}
let sent = "the quick brown fox";
console.log(capitalize(sent));