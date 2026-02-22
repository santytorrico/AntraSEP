// Write a JavaScript function that accepts two arguments,
// a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 

function occurrences(sent, char){
    let seen = 0;
    for(let i of sent){
        if(i === char){
            seen++;
        }
    }
    return seen;
}

sent = "microsoft.com"
char = "o"
console.log(occurrences(sent, char))