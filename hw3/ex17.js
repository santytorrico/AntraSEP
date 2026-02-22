// Write a JavaScript function to get the number of occurrences of each letter in specified string. 

function occurrences(sent){
    let seen = {};
    for(let char of sent){
        if(seen[char]){
            seen[char]++
        }else{
            seen[char] = 1;
        }
    }
    return seen;
}
sent="anitalavalatina"
console.log(occurrences(sent));