// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function longest(sent){
    let words = sent.split(" ");
    return words.reduce((long,curr) =>
        curr.length > long.length ? curr : long
    );

}

let sent = "Web Development Tutorial"
console.log(longest(sent))
